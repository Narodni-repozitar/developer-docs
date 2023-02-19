# oarepo-vocabularies

This library provides support for:

* defining extra metadata on invenio vocabularies (for example, in case the standard key->string mapping in props is not enough)
* adding hierarchy to your vocabulary items

## Installation

To install the library, add `oarepo-vocabularies` to your dependencies (pipfile, requirements.txt, setup.cfg)

## Usage

This library replaces Invenio service and resource config with a custom-fields enhanced one. To use it, please add the following
lines to your `invenio.cfg`:

```python
# invenio.cfg


from oarepo_vocabularies.services.config import VocabulariesConfig
from oarepo_vocabularies.resources.config import VocabulariesResourceConfig

VOCABULARIES_SERVICE_CONFIG = VocabulariesConfig
VOCABULARIES_RESOURCE_CONFIG = VocabulariesResourceConfig
```

Because the enhanced vocabularies use custom fields, before storing vocabulary items you will have to 
add those fields to your opensearch server. To do so, invoke on the command line:

```bash
invenio oarepo cf init
```

If you forget to do so, you will get errors on indexing some of the vocabulary items.

Apart from these, just use the current_service/current_resource from `invenio_vocabularies.proxies` with enhanced content. If you ever need to bypass the serivice and use the database(record) level, please use `oarepo_vocabularies.records.api.Vocabulary`.

## Adding extra metadata

To be able to add extra metadata, specify their custom fields in `invenio.cfg`

```python
# invenio.cfg

from invenio_records_resources.services.custom_fields.text import KeywordCF
from tests.customfields import NonPreferredLabelsCF


OAREPO_VOCABULARIES_CUSTOM_CF = [
    KeywordCF("blah"),
    NonPreferredLabelsCF("nonpreferredLabels"),
]
```

where `tests/customfields.py` is an example of a custom complex field:

```python
from invenio_records_resources.services.custom_fields import BaseCF
import marshmallow as ma
from invenio_vocabularies.services.schema import i18n_strings

class NonPreferredLabelsCF(BaseCF):
    @property
    def mapping(self):
        """Return the mapping."""
        return {"type": "object", "dynamic": True}

    @property
    def field(self):
        """Marshmallow field for custom fields."""
        return ma.fields.List(i18n_strings)
```

Have a look at [invenio sources](https://github.com/inveniosoftware/invenio-records-resources/tree/master/invenio_records_resources/services/custom_fields) for a list of pre-defined custom field types.

## Using hierarchies in vocabulary items

Each vocabulary item might point to its parent item (within the same vocabulary type).

### Adding vocabulary items

To add vocabulary items programmatically, please specify `hierarchy.parent` field pointing to item's parent:

```json5
# parent item
{
    "id": "eng",
    "title": {"en": "English", "da": "Engelsk"},
    "type": "languages",
}
```

```json5
# child item
{
    "id": "eng.US",
    "title": {"en": "English (US)", "da": "Engelsk (US)"},
    "type": "languages",
    "hierarchy": {"parent": "eng"},
}
```

This way you can construct hierarchies with unlimited depth.

### Getting vocabulary items

When you get a vocabulary item, you'll have a couple more properties:

```json5
{
    "links": {
        "self": "https://127.0.0.1:5000/api/vocabularies/languages/eng.US",
        "parent": "https://127.0.0.1:5000/api/vocabularies/languages/eng",
        "children": "https://127.0.0.1:5000/api/vocabularies/languages?h-parent=eng.US","descendants": "https://127.0.0.1:5000/api/vocabularies/languages?h-ancestor=eng.US"
    },
    "id": "eng.US",
    "title": {"en": "English (US)", "da": "Engelsk (US)"},
    "type": "languages",
    "hierarchy": {
        "level": 2,
        "parent": "eng",
        "title": [
            {"da": "Engelsk (US)", "en": "English (US)"},
            {"da": "Engelsk", "en": "English"},
        ],
        "ancestors": ["eng"]
    }
}
```

The `links` section is enhanced to help you with navigation to parent, children and descendants. The `hierarchy` section has been automatically enhanced with data from the ancestors:

* `level` is the actual level inside the taxonomy tree. Tree roots have level=1
* `parent` is the parent you have specified
* `ancestors` contains a list of identifiers of all the ancestors. Parent is the first item in the list, root is the last item
* `title` contains titles of all the ancestors (this is useful in the UI so that you do not have to perform extra requests)

The "hierarchy" section is defined via custom fields, see [the code](https://github.com/oarepo/oarepo-vocabularies/blob/main/oarepo_vocabularies/services/custom_fields/hierarchy.py).

In your use case you might want to add more information from the ancestors (such as icons, some properties, ...). To do so, define your own custom field and put it to your `invenio.cfg` - but make sure to copy [all the standard system fields](https://github.com/oarepo/oarepo-vocabularies/blob/main/oarepo_vocabularies/config.py).