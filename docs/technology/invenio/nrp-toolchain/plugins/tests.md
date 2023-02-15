# OARepo model builder tests
Plugin for oarepo-model-builder to generate 
test files and add test dependencies.

The record service and its rest api are covered for now. Tests read, write,
update, delete and search operations.

The tests use automatically generated metadata in {model_name}/data/sample_data.yaml file to create records and upload them as fixtures. If you modify sample_data.yaml, make sure it contains at least two records with different metadata.

## Installation

### model.yaml

```yaml
model:
 plugins:
  packages:
   - oarepo-model-builder-tests
```
### command line
```bash
pip install oarepo-model-builder
pip install oarepo-model-builder-tests
```
