---
sidebar_position: 4
---

# Edit the metadata
See [metadata cheat sheet](../Model%20cheat%20sheet.pdf) as a quick reference.

Now edit the `metadata.yaml`. The initial metadata schema will be an empty object,
feel free to add your own properties:

```yaml
title:
   type: fulltext
```

* Key in the object is the name of the property
* Value is always an object. It contains a required property "type" that gives the type of the object.

For simpler cases you can use a shorthand notation:

```yaml
title: fulltext
```

The file can be in [yaml (extension .yaml)](https://circleci.com/blog/what-is-yaml-a-beginner-s-guide/) or json5 file format, yaml is recommended. If you change the extension,
be sure to change the reference in `model.yaml` file. To edit the file, we recommend using VS Code with RedHat's
YAML extension.

Feel free to document the file/properties with comments starting with '#', just mind the nesting:

```yaml
myprop:
   # this is a comment
   type: keyword
```

## Simple types

* integer
* float
* date
* time
* datetime (date, time, datetime)
* edtf (edtf, edtf-interval)
* boolean

## String types

* fulltext - will be indexed as type="text" in opensearch
* keyword - will be indexed as type="keyword" in opensearch
* fulltext+kyword - will become type="text" with subfield keyword=(type:keyword)

## Arrays

Arrays can be written in JSON Schema form or in a shortcut notation:

**JSONSchema-like**:

```yaml
tags:
   type: array
   label.en: Tags   # UI extension defining label
   items:
      type: keyword
      minLength: 3
```

**Shortcut notation**:

```yaml
tags[]:
   ^label.en: Tags
   type: keyword
   minLength[]: 3
```

In this notation, properties with `^` prefix are used for the array element,
properties without the suffix define array item.

## Complex values

As we need to distinguish between nested and object data type, 
complex values (object values) are written with types 'object' or 'nested'.
See [Opensearch documentation](https://opensearch.org/docs/1.3/opensearch/supported-field-types/nested/)
for the differences between the two.

**Example:**

Use Case: I want to filter all articles by John Smith with MIT affiliation. This means that cross-field search is required
and nested data type must be used.

```yaml
authors[]:
   type: nested
   properties:
      name: 
         type: keyword
      affiliation:
         type: keyword 
```

If cross-field search will never be required, use "object" data type:

```yaml
authors[]:
   type: object
   properties:
      name: keyword
      affiliation: keyword 
```

As a shortcut, you can omit the `type: object` - it will be added automatically if there is "properties" element inside "authors":

```yaml
authors[]:
   properties:
      name: keyword
      affiliation: keyword 
```

Another shortcut is to use `{}` suffix with `^` behaving the same way as in arrays:

```yaml
author{}:
  ^label.en: Label of the "author" element
  name: keyword
  affiliation: keyword
```

## Custom types

Custom data types might be added via plugin to oarepo-model-builder. See [i18n plugin](https://github.com/oarepo/oarepo-model-builder-multilingual)
for an example of extending the builder.


## Structuring metadata file

You can put repeated blocks to a separate file and include them:

```yaml
# metadata.yaml
authors[]:
   use: person.yaml
contributors[]:
   use: person.yaml
```

```yaml
# person.yaml
type: object
properties:
   name:
      type: keyword
```

JSON pointer can be used to take just a part of file:

```yaml
# metadata.yaml
authors[]:
   use: "defs.yaml#/Person"
contributors[]:
   use: "person.yaml#/Person"
```

```yaml
# defs.yaml
Person:
   type: object
   properties:
      name:
         type: keyword
```

For readability we highly recommend splitting the metadata into multiple files and linking them via `use`.
You can even put these into a python library - see [oarepo-model-builder](https://github.com/oarepo/oarepo-model-builder) for details.

## I18n annotations

Properties in the metadata file can have proper labels, tooltips and editor hints:

```yaml
title:
   type: fulltext
   label.en: Article title
   tooltip.en: |
      any tooltip here, even
      on multiple lines
   hint.en: Copy/paste this from the journal site
   help.en: A longer help text shown, for example, after a click on '?'
```

Note: these need the oarepo-model-builder-ui plugin to work.

### Languages

The labels/tooltip/... MUST have a language associated. If you want to translate them to other languages:

1. Duplicate the property with another language (this does not scale for more then 2-3 languages):

```yaml
   label.en: Article title
   label.cs: Název článku
```

2. Use a special ".key" language - this will turn into the exact "key" in translation files (for example, msgid in GNU gettext)
   and translate this afterwards in your translation software:

```yaml
   label.key: model.article.title
```

## Marshmallow (validation) annotations

[Marshmallow](https://marshmallow.readthedocs.io/en/stable/) is a library
that is used inside Invenio to validate json content of API uploads/UI deposits.
Marshmallow schema files are generated for you automatically from the model's metadata.

To customize the classes/fields generated, you can add `marshmallow` annotation into your
model definition.

### Adding extra arguments on marshmallow fields

You can add list of arguments on the generated marshmallow field:

```yaml
amount:
   type: integer
   marshmallow:
      arguments: ["strict=True", "just_to_illustrate=1"]
```

will generate:

```python
amount = ma_fields.IntegerField(strict=True, just_to_illustrate=1)
```

### Validators

A list of validators can be specified. Be sure to import them with `imports` property.

```yaml
amount:
   type: integer
   marshmallow:
      validators: ["greater_than_zero"]
      imports:
        - import: mypkg.utils.greater_than_zero
```

will generate:

```python
amount = ma_fields.IntegerField(validators=[greater_than_zero])
```

### Using custom marshmallow fields

To use a custom field class (instead, for example, ma_fields.IntegerField) pass the `field-class` property:

```yaml
amount:
   type: integer
   marshmallow:
      field-class: MyIntegerField
      imports:
        - import: mypkg.fields.MyIntegerField
```

will generate:

```python
amount = MyIntegerField(...)
```

### Generating schema class for objects

For object/nested types, a marshmallow schema class is automatically generated.
The class name is created by capitalizing the name of the property and adding Schema
to the end of it.

```yaml
structure:
  type: object
```

will generate:

```python
class StructureSchema(ma.Schema):
   ....

class MetadataSchema(ma.Schema):
   structure = ma_fields.Nested(lambda: StructureSchema())
```

The lambda is added so that we can have circular usages and do not have to rely on the order of classes in the generated schema file.

#### Custom class name

A custom name can be supplied:

```yaml
structure:
  type: object
  marshmallow:
    schema-class: MyClassNameForStructureSchema
```

will generate:

```python
class MyClassNameForStructureSchema(ma.Schema):
   ....

class MetadataSchema:
   structure = ma_fields.Nested(lambda: MyClassNameForStructureSchema())
```

#### Package name

If you do not specify package in class name, it will be generated to the same file.
If '.' is present in the class name, the class will be generated to the given package.
For example, `schema-class: a.b.CSchema` will be generated to `a/b.py`.

#### Using already written class

Sometimes you would like to use your own class and do not generate it. To do so,
set `generate: false` together with the class name:

```yaml
structure:
  type: object
  marshmallow:
    generate: false
    schema-class: pkg.NotGeneratedSchema
```

#### Custom base classes

If you would like to have the schema generated but want to have your own base class instead of ma.Schema, set `base-classes` marshmallow property. This way you can also include any number of mixins:

```yaml
structure:
  type: object
  marshmallow:
    base-classes: [ "mypkg.MyBaseClass" ]

```

### Imported packages/classes

You can add imports/import aliases with:

```yaml
marshmallow:
   imports:
      - import: mypkg.MyClass
        alias: MyClassAlias 
```

will generate:

```python
import mypkg.MyClass as MyClassAlias
```

If the alias is omitted, and `import mypkg.MyClass` is generated.

### Complete control on fields

In rare cases you might want to skip the generator and just use your own instantiated field. To do so, specify `field` property:

```yaml
fld:
   marshmallow:
      field: "mypkg.MyField(required=False, other_prop='Hello world')"
```

This will copy the definition, without any processing:

```python
fld = mypkg.MyField(required=False, other_prop='Hello world')
```

##### Dump-only and load-only properties

In rare cases cases:

To have a dump-only property (such as one that is generated by a service and can not be directly edited),
set `write: false` on the marshmallow definition. To have a write-only field, add `read:false`.

```yaml
auto_field:
  marshmallow:
    read: true          # default value
    write: false
```
## Search options annotations

Options for creating facets and sorting rules can be specified within the model.

### Facets creation

It is possible to specify a Boolean `searchable` field at the top level of the model. If this value is set to false, facets will not be created for any fields unless otherwise specified within the fields. By default, this value is set to true. The no-facet-creation setting does not apply to the Invenio default fields (id, $schema, created, updated).
In the example below, only facets for invenio fields will be generated, because the `searchable` option is set to false.
```json
"model": {
                "use": "invenio",
                "searchable" : false,
                "properties": {
                   "a" : "fulltext+keyword",
                   "b" : "keyword"

            },
```

Will generate

```python
_id = TermsFacet(field = "id")

created = TermsFacet(field = "created")

updated = TermsFacet(field = "updated")

_schema = TermsFacet(field = "$schema")
```
If the `searchable` option is not set or is set to true:
```json
"model": {
                "use": "invenio",
                "properties": {
                   "a" : "fulltext+keyword",
                   "b" : "keyword"

            },
```

Will generate

```python
a_keyword = TermsFacet(field = "a.keyword")

b = TermsFacet(field="b")

_id = TermsFacet(field = "id")

created = TermsFacet(field = "created")

updated = TermsFacet(field = "updated")

_schema = TermsFacet(field = "$schema")
```
### Facets additional definition

You can specify the exact facet value for each field and change the facet key name. For this purposes use `field` and `key` in `facets` object, as in the example below. It is also possible to specify whether to create a facet for a given field using the searchable Boolean value. If the facet object is used and the searchable field is not defined, it is automatically set to true.

```json
"model": {
                "properties": {
                   "a" : {
                      "type" : "keyword",
                      "facets": {"searchable": false}
                   },
                   "b" : {
                      "type" : "keyword",
                      "facets": {"key": "name"}
                   },
                   "c" : {
                      "type" : "keyword",
                      "facets": {"field": "TermsFacet(field="name")"}
                   },
                   

            },
```

Will generate

```python

name = TermsFacet(field="b")

c = TermsFacet(field = "name")

```