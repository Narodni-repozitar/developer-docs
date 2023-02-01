---
sidebar_position: 3
---

# Scaffold a model

To simplify model development, nrp-cli provides the following tools:

* `nrp-cli model add <name>` will add a model to the repository
* `nrp-cli model compile <name>` compiles the model and generates invenio source files
* `nrp-cli model install <name>` installs the model into a given site

## `nrp-cli model add <name>` 

This command initializes a new model. It will add `models/<name>` directory and create two files in it:

* `model.yaml` contains a code for NRP generator (invoked by `nrp-cli model compile`)
* `metadata.yaml` defines your metadata in a superset of jsonschema and opensearch mapping

Having a `metadata.yaml` from which all other invenio files are generated makes sure that all the files
are in sync and saves you the tedious task of writing them by hand. This solution is also future-proof -
if a new version of invenio, which is not backwards compatible, is released, NRP toolchain will be upgraded
and you'll just regenerate the model.

The command will ask you if you want to inherit the model from a well-known schema or start from scratch.
<p style={{color: 'red', fontWeight: "bold"}}>For now, just use the empty model - the other ones are not ready yet</p>

## Model plugins

The following plugins can be used in model. They will be installed automatically if you've selected them in model scaffolding.

* [Tests generator](plugins/tests.md)
* [Support for files on record](plugins/files.md)
* [I18N values inside record](plugins/i18n.md)
