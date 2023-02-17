# OARepo model builder expansions
Plugin for oarepo-model-builder to allow invenio expandable fields. Expandable fields allow saving fields of other referenced records in the referencing record object.
Expandable fields are specified on model level as a list and the yaml for 
single expandable field has following structure:
- `field name` path to the field in the referencing record
- `referenced keys` list of paths to the fields in the referenced record
- `service` service for the referenced record, used to retrieve the referenced 
record to get the field values
- `service-alias` not required, specify alias for the service in the previous option
- `pid-field` not required, specify the field in the referencing record holding the 
pid of the referenced record.
- `expandable-field-class` not required, specify the class of the expandable 
field, by default it's [oarepo_runtime.expansions.expandable_fields.ReferencedRecordExpandableField](https://github.com/oarepo/oarepo-runtime/blob/main/oarepo_runtime/expansions/expandable_fields.py)

## Example
A simple example of a referencing record with expandable fields can be defined as follows:
``` yaml
model:
  properties:
    metadata:
      properties:  # to add yout own properties, remove this line and uncomment the next one
        main-title:
          type: fulltext
        file:
          properties:
           id:
             type: keyword
          sample:
            skip: true
  use:
    - invenio
  package: model_document
  schema-server: 'local://'
  expandable-fields:
    - field-name: metadata.file
      referenced-keys:
      - metadata.filename
      - metadata.filesize
      service: model_file.proxies.current_service
```
And the associated referenced record:
```yaml
model:
  properties:
    metadata:
      properties:  # to add yout own properties, remove this line and uncomment the next one
        filename:
          type: fulltext
        licence:
          type: keyword
        filesize:
          type: integer
  use:
  - invenio
  package: model_file
  schema-server: 'local://'
```
The field-name attribute tells that the referencing record needs
a file entry in its metadata. Since pid-field is not specified,
it is expected that the id of the referenced record is in metadata.file.id
on the referencing record.

The referenced-keys tell which keys of the referenced record are
to be included in the expandable field. And the service attribute
specifies the service which fetches the referenced record. 