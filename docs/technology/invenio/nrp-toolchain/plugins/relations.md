# Relations

This plugin adds support for generating relations either between multiple models (for example, from a dataset to an article), or intra-model relation (model defines a list of chemical compounds and a measurement defined later in the model references one of the compounds).

## Installation

```bash
pip install oarepo-model-builder oarepo-model-builder-relations
```

## Usage

### Relations to another model

#### Model

Add the following snippet to your model file:

```yaml
# article model
model:
    properties:
        metadata:
            properties:
                title: fulltext
```

```yaml
# dataset model
model:
    properties:
        metadata:
            title: fulltext
            author: keyword
            article:
                type: relation
                model: article
```

#### Compilation

Now compile the article model with:

```bash
oarepo-compile-model article.yaml --output-dir articles
```

and then compile the dataset model with:

```bash
oarepo-compile-model dataset.yaml --output-dir datasets --include article=articles/article/models/model.json
```

#### Sample doc

Suppose that you have the following article already stored in repository:

```json
{
    "id": "abcde-ghijk",
    "metadata": {
        "title": "Test Article",
        "author": "John Smith"
    }
}
```

If you store the following dataset:

```json
{
    "metadata": {
        "title": "Test Dataset",
        "article": {
            "id": "abcde-ghijk"
        }
    }
}
```

and get it from the repository, you'll get:

```json
{
    "metadata": {
        "title": "Test Dataset",
        "article": {
            "id": "abcde-ghijk",
            "metadata": {
                "title": "Test Article"
            }
        }
    }
}
```

Note that the "title" property has been copied from the article.

### Specifying fields to copy

You can specify which fields should be copied with `keys` attribute:

```yaml
article:
    type: relation
    model: article
    keys: [id, metadata.title, metadata.author]
```

You should always include the `id` field.

### Omitting the internal `metadata` wrapper

Use `flatten: true` inside your model to remove the internal `metadata` wrapper:

```yaml
article:
    type: relation
    model: article
    flatten: true
```

will give you:

```json
{
    "metadata": {
        "title": "Test Dataset",
        "article": {
            "id": "abcde-ghijk",
            "title": "Test Article" # <-- no metadata here
        }
    }
}
```

### Internal references

You can also reference an internal part of the model. This might be useful for example when the model schema contains m:n relationship (for example,
a list of chemical samples and measurements performed on pairs of them).

Then you might have the following schema:

```yaml
# dataset model
model:
    properties:
        metadata:
            samples[]:
                type: object
                id: sample
                properties:
                    id: keyword
                    name: keyword

            measurements[]:
                type: object
                properties:
                    sample1:
                        type: relation
                        model: "#sample"
                        keys: [id, name]
                    sample2:
                        type: relation
                        model: "#sample"
                        keys: [id, name]
```

This will generate an intra-document references from `sample1` and `sample2`
to `samples`. Note that you have to specify the keys as the default `[id, metadata.title]` are not valid in this scenario.

With an input:

```json
{
    "metadata": {
        "samples": [
            {
                "id": "231",
                "name": "sea_water_sample_231"
            },
            {
                "id": "233",
                "name": "sea_water_sample_233"
            },
        ],
        "measurements": [
            {
                "sample1": {"id": "231"},
                "sample2": {"id": "233"},
            }
        ]
    }
}
```

you would get in your elasticsearch/REST api:

```json
{
    "metadata": {
        "samples": [
            {
                "id": "231",
                "name": "sea_water_sample_231"
            },
            {
                "id": "233",
                "name": "sea_water_sample_233"
            },
        ],
        "measurements": [
            {
                "sample1": {"id": "231", "name": "sea_water_sample_231"},
                "sample2": {"id": "233", "name": "sea_water_sample_233"},
            }
        ]
    }
}
```

### Referencing custom fields

You might reference even custom fields, but in this case you have to provide
your own schema for the field:

```yaml
# referred document
model:
    custom-fields:
    - config: CF
      element: custom_fields
    properties:
        metadata:
            properties:
                title: fulltext
```

```yaml
# reference
reference:
type: relation
    model: referred
    flatten: true
    keys: 
    - id
    - metadata.title
    - key: custom_fields.test   # <-- you need to specify
      model:                    #     both key and model
          type: keyword

```

## How does it work?

On the record level, the generated [json schema](https://github.com/oarepo/oarepo-model-builder-relations/blob/main/tests/referrer/referrer/records/jsonschemas/referrer-1.0.0.json) will contain copied parts from the referred
model.

The mapping for "keys" from the referred model is copied into the generated [mapping](https://github.com/oarepo/oarepo-model-builder-relations/blob/main/tests/referrer/referrer/records/mappings/os-v2/referrer/referrer-1.0.0.json). 

On [record API](https://github.com/oarepo/oarepo-model-builder-relations/blob/main/tests/referrer/referrer/records/api.py), `relations` field and dumper extension are added. The `relations` specify what is the relation's source and destination, the dumper extension will make sure that before the record is put to the search engine, relation is fetched and inserted to the appropriate position.