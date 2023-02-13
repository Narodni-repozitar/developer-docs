# Custom fields

This plugin adds support for generating custom fields on a model.

## Installation

```bash
pip install oarepo-model-builder oarepo-model-builder-cf
```

## Usage

There are two possible ways of having custom fields on a model: custom fields localized into an element (in RDM called "custom_fields") or to have them flat on record's top level. Other scenarios, such as custom fields inside the metadata element, are not (yet) supported.

### Custom fields localized to an element

#### Model

Add the following snippet to your model file:

```yaml
model:
    use: invenio
    custom-fields:
    - element: custom_fields
      config: TEST_CF
```

 * `element` - name of the element where the custom fields will be localized
 * `config` - name of the config variable

#### Repository config

```python
# invenio.cfg

from invenio_records_resources.services.custom_fields.text import KeywordCF

TEST_CF = [
    KeywordCF('blah')
]
```

#### First run

Before populating data to index, it is necessary to call

```bash
invenio oarepo cf init
```

to have the mapping for custom fields initialized.

#### Sample document

```json
{
    "metadata": {
        "title": "My Title"
    },
    "custom_fields": {                  // "element" from model
        "blah": "Custom field value"    // as defined in "TEST_CF" variable
    }
}
```

### Flat custom fields

To have the custom fields inlined on record's top-level, just omit the `element` field. Note that only one such declaration is allowed.

#### Model

```yaml
model:
    use: invenio
    custom-fields:
    - config: INLINE_CF
```

#### Repository config

```python
# invenio.cfg

from invenio_records_resources.services.custom_fields.text import KeywordCF

INLINE_CF = [
    KeywordCF('blah')
]
```

#### First run

Again, before populating data to index, it is necessary to call

```bash
invenio oarepo cf init
```

#### Sample document

```json
{
    "metadata": {
        "title": "My Title"
    },
    "blah": "Custom field value"    // as defined in "INLINE_CF" variable
}
```

## How does it work?

On the record level, a [json schema](https://github.com/oarepo/oarepo-model-builder-cf/blob/main/tests/cf/cf/records/jsonschemas/cf-1.0.0.json) with extension point (having `additionalProperties` set to `true`) is generated.

In [mapping](https://github.com/oarepo/oarepo-model-builder-cf/blob/main/tests/cf/cf/records/mappings/os-v2/cf/cf-1.0.0.json), a placeholder is generated with `dynamic: true`. Calling `invenio oarepo cf init` will populate 
the placeholder with the actual definition of configuration custom fields.

On [record API](https://github.com/oarepo/oarepo-model-builder-cf/blob/main/tests/cf/cf/records/api.py), `DataComponent` is added to components to make sure that custom fields values are copied to database
record. Also, `CustomFields`/`InlinedCustomFields` system field is added to mark that the record is using custom fields. Finally, custom field dumpers are registered to serialize the field content to opensearch.

On the service level, a config-dependent [marshmallow schema](https://github.com/oarepo/oarepo-model-builder-cf/blob/main/tests/cf/cf/services/records/schema.py) is used that loads fields dynamically upon validation.