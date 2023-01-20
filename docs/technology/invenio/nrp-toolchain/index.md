# NRP toolchain

NRP toolchain is a command-line tool (nrp-cli) and associated set of libraries
that help with creating, evolving and upgrading a repository based on the
invenio platform.

The toolchain brings:

* standardized layout of python packages on your disk/git repository (monorepo)
* command-line tool to build the whole API layer from a single description file
* simple to use templates for building your own UI layer
* pre-installed components to interact with other parts of NRP infrastructure

**Note:** if you want to build your own repository which uses the NRP dataset
or document metadata schema, in most cases you do not have to develop your own
repository - just use one of the pre-built images and configure them. See
[NRP Invenio](..) for details.

## Initializing the repository

To create a new repository, go to [nrp-cli github repository](https://github.com/oarepo/nrp-cli)
and download the initialization script `nrp-installer.sh`. Inspect its content (it is always good 
to inspect files before running them) and invoke it:

``` bash
bash nrp-installer.sh my-repository
```

This command will ask you a couple of questions (if unsure, use the defaults) 
and will create `my-repository` directory:

```directory
my-repository
   oarepo.yaml
   nrp-cli
   invenio-cli

   sites
      my-repository-site
   locals  (might be missing and created later)
   models  (might be missing and created later)
   ui      (might be missing and created later)
```

**Files/directories**:

* `nrp-cli` is the command that will scaffold other parts and help you with using them in your repository
* `invenio-cli` is the normal invenio command-line tool, just pre-installed for you
* `sites` is a directory where you will have your invenio instances. The installer generates one for you. Within the instance you can add/remove python modules, configure skin and repository parameters and perform repository management tasks.
* `locals` is a directory where you can store your local libraries installed into the site. These might include, for example, metadata extraction code, specialized validations, connectors to external applications and services. Use this directory if you want to add more functionality but you do not want to build it (yet) into separate python packages.
* `models` is a directory containing all the code to build an API server. Here you will find all the resources, services, records, marshmallow schemas, json schemas, permissions, opensearch index definitions and other parts. `nrp-cli` can generate these files for you - see below
* `ui` is a directory where user interface for the models will be stored. Using `nrp-cli` you can generate an initial user interface from a model.

**Running your repository**:

Go to the repository directory and run:

```bash
./nrp-cli run
```

After a couple of seconds, your new (and empty) repository will pop up at [https://localhost:5000/](https://localhost:5000/)

## Model

### Model structure

In invenio, model consists of multiple python (and non-python files) that have to work together and stay consistent when changes are introduced.
These files (and classes) are:

**Resource layer (http):**

* `resources/config.py`
  * defines the URL of the model, content negotiation
* `resources/resource.py`
  * parses the HTTP request and calls the service layer to handle it
  * modify this file if you want to add your own endpoints

**Service layer (business logic):**

* `services/config.py` contain the definition of:
  * the primary url of the model (**TODO** unify this with resources, not done in invenio)
  * permission policies for the service (referenced from config, defined in `permissions.py`)
  * Marshmallow schema that will be used for deposit validation (referenced from config, defined in `schema.py`)
  * Search options - what can be searched, ordered, aggregated (referenced from config, defined in `search.py` and `facets.py`)
  * Extension points (components) to plug into the standard CRUD processing without rewriting service
  * link to record layer
* `services/service.py`
  * implements the business layer of the model
  * the standard CRUD+search is already contained
  * you might add specialized methods here (and call them from the resource layer if they should be accessible via API)

**Record layer (data access):**

* `jsonschemas/**` - json schema of the metadata
* `mappings/**` - definition of elasticsearch mappings (json similar to json schema, but not the same)
* `api.py` - defines the Record class to store the metadata
* `dumper.py` - contains code that is used when storing the metadata and retrieving them from OpenSearch
* `models.py` - contains the low-level SQLAlchemy access to the database

**Top-level**

* `config.py` - default configuration
* `ext.py` - flask registration code for the model
* `views.py` - registration of the API endpoint
* `proxies.py` - defines flask proxies to use the service/resource from another model

### Scaffolding a model

To simplify model development, nrp-cli provides the following tools:

* `nrp-cli model add <name>` will add a model to the repository
* `nrp-cli model compile <name>` compiles the model and generates invenio source files
* `nrp-cli model install <name>` installs the model into a given site

#### `nrp-cli model add <name>` 

This command initializes a new model. It will add `models/<name>` directory and create two files in it:

* `model.yaml` contains a code for NRP generator (invoked by `nrp-cli model compile`)
* `metadata.yaml` defines your metadata in a superset of jsonschema and opensearch mapping

Having a `metadata.yaml` from which all other invenio files are generated makes sure that all the files
are in sync and saves you the tedious task of writing them by hand. This solution is also future-proof -
if a new version of invenio, which is not backwards compatible, is released, NRP toolchain will be upgraded
and a new model can be generated again.

The command will ask you if you want to inherit the model from a well-known schema or start from scratch.
See the schema browser in **TODO: reference to NRK/docs when it is ready** for the comparison of those
schemas.

#### Defining the model

Now edit the `metadata.yaml`. The initial metadata schema will be an empty object, 
feel free to add your own properties:

```yaml
title:
   type: fulltext
```

* Key in the object is the name of the property
* Value is always an object. It contains a required property "type" that gives the type of the object.

The file can be in [yaml (extension .yaml)](https://circleci.com/blog/what-is-yaml-a-beginner-s-guide/) or json5 file format, yaml is recommended. If you change the extension,
be sure to change the reference in `model.yaml` file. To edit the file, we recommend using VS Code with RedHat's
YAML extension.

Feel free to document the file/properties with comments starting with '#', just mind the nesting:

```yaml
myprop:
   # this is a comment
   type: keyword
```

##### Simple types

* integer
* float
* date
* time
* datetime
* boolean

##### String types

* fulltext - will be indexed as type="text" in opensearch
* keyword - will be indexed as type="keyword" in opensearch
* fulltext+kyword - will become type="text" with subfield keyword=(type:keyword)

##### Arrays

Arrays can be written in JSON Schema form or in a shortcut notation:

**JSONSchema-like**:

```yaml
tags:
   type: array
   ^label.en: Tags   # UI extension defining label
   items:
      type: keyword
      minLength: 3
```

**Shortcut notation**:

```yaml
tags[]:
   type: keyword
   ^label.en: Tags
   minLength[]: 3
```

In this notation, properties without `[]` suffix are used for the array element,
properties with `[]` are moved into the array item (the same way as brackets are
used in the programming language - in declaration they mean array, when used elsewhere
they access array member).

##### Complex values

As we need to distinguish between nested and object data type, 
complex values (object values) are written with types 'object' or 'nested'.
See [Opensearch documentation](https://opensearch.org/docs/1.3/opensearch/supported-field-types/nested/)
for the differences between the two.

**Example:**

Use Case: I want to filter all articles by John Smith with MIT affiliation. This means that cross-field search is required
and nested data type should be used.

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
      name: 
         type: keyword
      affiliation:
         type: keyword 
```

As a shortcut, you can omit the `type: object` - it will be added automatically if there is "properties" inside "authors":

```yaml
authors[]:
   properties:
      name: 
         type: keyword
      affiliation:
         type: keyword 
```

##### Custom types

Custom types might be added via plugin to oarepo-model-builder. See [i18n plugin](https://github.com/oarepo/oarepo-model-builder-multilingual)
for an example of extending the builder.

#### Structuring metadata file

You can put repeated blocks to a separate file and include them:

```yaml
# metadata.yaml
authors[]:
   ^use: person.yaml
contributors[]:
   ^use: person.yaml
```

```yaml
# person.yaml
type: object
properties:
   name:
      type: keyword
```

*Note:* `^` character in front of a key is a special character that gives commands to the generator. You will see it later
when further describing the model.

JSON pointer can be used to take just a part of file:

```yaml
# metadata.yaml
authors[]:
   ^use: "defs.yaml#/Person"
contributors[]:
   ^use: "person.yaml#/Person"
```

```yaml
# defs.yaml
Person:
   type: object
   properties:
      name:
         type: keyword
```

For readability we highly recommend splitting the metadata into multiple files and linking them via `^use`.
You can even put these into a python library - see [oarepo-model-builder](https://github.com/oarepo/oarepo-model-builder) for details.

#### I18n annotations

Properties in the metadata file can have proper labels, tooltips and editor hints:

```yaml
title:
   type: fulltext
   ^label.en: Article title
   # tooltip used on the detail page
   ^tooltip.en: |
      any tooltip here, even
      on multiple lines
   # hint for deposit interface
   ^hint.en: Copy/paste this from the journal site
```

You can separate them to the "^ui" property if you want:

```yaml
title:
   type: fulltext
   ^ui:
      label.en: Article title
      # tooltip passed to html "title" attribute
      tooltip.en: |
         any tooltip here, even
         on multiple lines
      # hint for deposit interface
      hint.en: Copy/paste this from the journal site
```

##### Languages

The labels/tooltip/... MUST have a language associated. If you want to translate them to other languages:

1. Duplicate the property with another language (this does not scale for more then 2-3 languages):
   ```yaml
   ^label.en: Article title
   ^label.cs: Název článku
   ```
2. Use a special ".key" language - this will turn into the exact "key" in translation files (for example, msgid in GNU gettext):
   ```yaml
   ^label.key: model.article.title
   ```
   and you can translate this afterwards in your translation software.

**TODO** look at this - invenio uses Transifex, but it is a paid product ($70/month minimum)
We can use '.po' which is common in translation community and convert to json afterwards

**TODO**: integrate i18n to nrp-cli - i18n make, i18n compile

#### Marshmallow annotations

[Marshmallow](https://marshmallow.readthedocs.io/en/stable/) is a library
that is used inside Invenio to validate json content of API uploads/UI deposits.
Marshmallow schema files are generated for you automatically from the model's metadata.

To customize the classes/fields generated, you can add `^marshmallow` annotation into your
model definition.

##### Adding extra arguments on marshmallow fields

You can add list of arguments on the generated marshmallow field:

```yaml
amount:
   type: integer
   ^marshmallow:
      arguments: ["strict=True", "just_to_illustrate=1"]
```

will generate:

```python
amount = ma_fields.IntegerField(strict=True, just_to_illustrate=1)
```

##### Validators

A list of validators can be specified. Be sure to import them with `imports` property.

```yaml
amount:
   type: integer
   ^marshmallow:
      validators: ["greater_than_zero"]
      imports:
        - import: mypkg.utils.greater_than_zero
```

will generate:

```python
amount = ma_fields.IntegerField(validators=[greater_than_zero])
```

##### Using custom marshmallow fields

To use a custom field class (instead, for example, ma_fields.IntegerField) pass the `field-class` property:

```yaml
amount:
   type: integer
   ^marshmallow:
      field-class: MyIntegerField
      imports:
        - import: mypkg.fields.MyIntegerField
```

will generate:

```python
amount = MyIntegerField(...)
```

##### Generating schema class for objects

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

###### Custom class name

A custom name can be supplied:

```yaml
structure:
  type: object
  ^marshmallow:
    schema-class: MyClassNameForStructureSchema
```

will generate:

```python
class MyClassNameForStructureSchema(ma.Schema):
   ....

class MetadataSchema:
   structure = ma_fields.Nested(lambda: MyClassNameForStructureSchema())
```

###### Package name

If you do not specify package in class name, it will be generated to the same file.
If '.' is present in the class name, the class will be generated to the given package.
For example, `schema-class: a.b.CSchema` will be generated to `a/b.py`.

###### Using already written class

Sometimes you would like to use your own class and do not generate it. To do so,
set `generate: false` together with the class name:

```yaml
structure:
  type: object
  ^marshmallow:
    generate: false
    schema-class: pkg.NotGeneratedSchema
```

###### Custom base classes

If you would like to have the schema generated but want to have your own base class instead of ma.Schema, set `base-classes` marshmallow property. This way you can also include any number of mixins:

```yaml
structure:
  type: object
  ^marshmallow:
    base-classes: [ "mypkg.MyBaseClass" ]

```

##### Imported packages/classes

You can add imports/import aliases with:

```yaml
^marshmallow:
   imports:
      - import: mypkg.MyClass
        alias: MyClassAlias 
```

will generate:

```python
import mypkg.MyClass as MyClassAlias
```

If the alias is omitted, and `import mypkg.MyClass` is generated.

##### Complete control on fields

In rare cases you might want to skip the generator and just use your own instantiated field. To do so, specify `field` property:

```yaml
fld:
   ^marshmallow:
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
  ^marshmallow:
    read: true          # default value
    write: false
```

#### `nrp-cli model compile <name>`

#### `nrp-cli model install <name>`