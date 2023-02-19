# Vocabularies

This plugin provides support for adding vocabulary references to your model. It can link to a standard invenio vocabularies as well as to oarepo addon to support extended metadata on vocabulary items and hierarchies of vocabulary items (taxonomies). 

Please read [details on oarepo vocabularies extension library](../libraries/vocabularies.md) at first.

## Installation

Install the plugin together with model builder:

```bash
pip install oarepo-model-builder oarepo-model-builder-vocabularies
```

## Usage

To use a vocabulary inside your model, add to your metadata file:

```yaml
language:
    type: vocabulary
    vocabulary-type: languages
title: fulltext
```

This will create an invenio relation [(see documentation on relations)](./relations.md) that extracts "id" and "title" from the vocabulary item.

So, if you later on create (HTTP POST) a record:

```json
{
  "title": "test",
  "language": {
    "id": "en"
  }
}
```

When you read it you'll get (HTTP GET):

```json5
{
  "title": "test",
  "language": {
    "id": "en",
    "title": {"en": "English", "cs": "Angličtina"},
    "@v": "somthing identifying version of this item"
  }
}
```

You can specify which top-level keys you want to include via the "keys" attribute. See [invenio sources](https://github.com/inveniosoftware/invenio-vocabularies/blob/master/invenio_vocabularies/records/jsonschemas/vocabularies/vocabulary-v1.0.0.json) for the list of top-level keys.

```yaml
language:
    type: vocabulary
    vocabulary-type: languages
    keys: ['id', 'title', 'tags']
title: fulltext
```

### Invenio vocabularies - "props" property

If you want to reference something from the "props" property,
you can not do it directly as it does not have a schema which
model builder currently understands. You can however include it if you supply your own schema. Suppose you would like to include "externalCode" field on props. Just specify:

```yaml
language:
    type: vocabulary
    vocabulary-type: languages
    keys: 
    - key: props.externalCode
      model: 
        type: keyword
title: fulltext
```

This way model builder knows the type of the externalCode and will embed it into your model (and validate it).

### Invenio vocabularies with extended metadata

If you use extended metadata on vocabulary items, they are represented as custom fields. Again, the model builder does not
know their types as they are not represented in the vocabulary schema.

So as in the previous case, you might use them if you provide their
model type:

```yaml
institution:
    type: vocabulary
    vocabulary-type: institutions
    keys: 
    - key: otherNames
      model: 
        type: array
            items: 
                type: keyword
```

In this example we are referencing `otherNames` that is defined
on the `institutions` vocabulary. We specify that the type is an array including items of type keyword.

### Hierarchical Vocabularies (Taxonomies)

If your vocabulary uses hierarchies, you can embed the `hierarchy`
element into your record. This is useful mostly for UI as it can show the whole context without querying for information from ancestors.

To use it in your model, just change `vocabulary` to `taxonomy`:

```yaml
institution:
    type: taxonomy
    vocabulary-type: institutions
```
