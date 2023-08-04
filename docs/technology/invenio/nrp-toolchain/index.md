---
sidebar_position: 3
---
# NRP toolchain

NRP toolchain is a command-line tool (nrp-cli) and associated set of libraries
that help creating, evolving and upgrading a repository based on the
invenio platform.

The toolchain brings:

* standardized layout of python packages on your disk/git repository (monorepo)
* command-line tool to build the whole API layer from a single description file
* templates for building your own UI layer
* pre-installed components to interact with other parts of NRP infrastructure

**Note:** if you want to build your own repository which uses the NRP dataset
or document metadata schema, in most cases you do not have to develop your own
repository - just use one of the pre-built images and configure them. See
[NRP Invenio](..) for details.

## Getting the tool

The toolchain is on github at [oarepo-cli github repository](https://github.com/oarepo/oarepo-cli).
You can either download the `nrp-installer.sh` from there or clone and set up the repository
manually.

## Then continue with

* [Create a new project](create-project)
* [Test if the repository is running](run-repository)
* [Scaffold a model](scaffold-model)
* [Edit the metadata](edit-metadata)
* [Generate the model](generate-model)
* [Install the model](install-model)

Finally, run the server and head your browser to `https://localhost:5000/api/your-model-name/` - you have your API running there
