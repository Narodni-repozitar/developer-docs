# OARepo model builder files

Plugin adding support for working with files based on the invenio model.
Files are represented as another ("file") record connected with the original parent one.
The plugin generates the file record and modifies the parent record to create connection with new file one.
The file record is specified under "files" attribute in the model yaml file, see example 
in tests.

The plugin runs the original model builder on the files model in "files" profile, 
reusing a lot of the model builder code with different configuration, notably with different
base classes for record, service, resource and config classes.
To get an idea which code is reused, see entrypoints. For configuration changes, see model preprocessors.

## Api

The files plugin provides an api for working with files.
The api is by default accessible at {original model url}/{base record id}/files.
The api is taken from InvenioRDM, the docs are [here](https://inveniordm.docs.cern.ch/reference/rest_api_drafts_records/#record-files)