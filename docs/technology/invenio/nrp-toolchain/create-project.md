---
sidebar_position: 1
---

# Create a new project

## Check the dependencies

[Once again make sure you have all the dependencies installed](../ecosystem.md). This will save you a lot of headaches later on.

## Download and run the installation script

To create a new repository, go to oarepo-cli github repository and download the initialization script
[`nrp-installer.sh` - https://github.com/oarepo/oarepo-cli/blob/v11.0/nrp-installer.sh](https://raw.githubusercontent.com/oarepo/oarepo-cli/v11.0/nrp-installer.sh).
Inspect its content (it is always good to inspect files before running them) and invoke it:

``` bash
bash nrp-installer.sh my-repository
```

This command will ask you a couple of questions (if unsure, use the defaults) and will create `my-repository` directory:

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

You can save the oarepo.yaml file and use it later for a repeatable installation.

**Files/directories**:

* `nrp-cli` is the command that will scaffold other parts and help you with using them in your repository
* `invenio-cli` is the normal invenio command-line tool, just pre-installed for you
* `sites` is a directory where you will have your invenio instances. The installer generates one for you. Within the instance you can add/remove python modules, configure skin and repository parameters and perform repository management tasks.
* `locals` is a directory where you can store your local libraries installed into the site. These might include, for example, metadata extraction code, specialized validations, connectors to external applications and services. Use this directory if you want to add more functionality but you do not want to build it (yet) into separate python packages.
* `models` is a directory containing all the code to build an API server. Here you will find all the resources, services, records, marshmallow schemas, json schemas, permissions, opensearch index definitions and other parts. `nrp-cli` can generate these files for you - see below
* `ui` is a directory where user interface for the models will be stored. Using `nrp-cli` you can generate an initial user interface from a model.

## Advanced usage

### Command-line options

The following options are supported in nrp-installer.sh:

* `-p <python_bin>` - specify your own path to a python binary. Please note that only Cpython 3.9 is officially supported, CONDA and other python versions are not supported.
* `-b <client-version>` - use this version of client tools from pypi repository. The default value is `11.*`

### Cookiecutter versions

Versions of cookiecutter packages can be modified via environment variables: `OAREPO_SITE_COOKIECUTTER_VERSION`, `OAREPO_MODEL_COOKIECUTTER_VERSION`, `OAREPO_UI_COOKIECUTTER_VERSION`. Possible values:

* `release`: Use the current release. This is the default option
* `maintrunk`: Use the maintrunk version of the respective cookiecutter
* `<local_path>`: Use the cookiecutter version installed locally on that path

### Invenio-cli version

Invenio-cli version is pinned inside the installer. In cases when the locked version
is old and a new one works, use `INVENIO_CLI_VERSION=1.0.xx` environment variable.
Currently the version is pinned to 1.0.16 due to rdm-related bug (#343).
