# Invenio

As stated previously, Invenio is a set of libraries on top of which repositories
are built. Samples of those repositories (flavours) are Invenio RDM
(Research Data Management), Invenio ILS (library system), Zenodo, TU Wien research 
data and others.

## Supported Invenio flavours for the National Repository Platform

NRP team provides its own flavour of Invenio, both as pre-built packages
and developer-friendly ecosystem. The flavour builds on Invenio core components
and adds development tools and NMA compatible metadata models.

### Pre-built docker image of document-based repository

Use this flavour if you are building a document repository (institutional repository of
theses, repository of articles, books, documents, ...). This flavour contains metadata
schema developed by the National Library of Technology (NTK) for the Czech National Document 
repository. You can browse the metadata schema **TODO** here.

The image can be configured by providing a configuration volume containing:

* basic branding (colors, logo, repository name)
* configuration of extra simple metadata - such as string, boolean, date, ...
  
The following parts of the repository can not be configured:

* metadata schema can not be restricted
* record approval process can not be modified

**TODO**: The first version of the image should be available by the end of 2023

### Pre-built docker image of data-centric repository

This flavour is designed for a generic dataset repository that does not need custom metadata
schema. The built-in schema is compatible with the Core metadata schema developed by the 
National Library of Technology. You can browse the metadata schema **TODO here**.

The image can be configured by providing a configuration volume containing:

* basic branding (colors, logo, repository name)
* configuration of extra simple metadata - such as extra string value, boolean, date, ...
  
The following parts of the repository can not be configured:

* metadata schema can not be restricted
* record approval process can not be modified

**TODO**: The first version of the image should be available by the end of 2023

### Generic repository with custom metadata schema

For advanced cases we provide a set of command-line tools to simplify repository development.
They help developers (Python skills and skills with development on Linux/MacOS platforms are required) to:

* bootstrap a generic repository
* create, compile and deploy metadata schema (or reuse one of the schemas above and customize it)
* provide custom user interface for the repository (including custom visualizations of metadata/data, customized deposit editors etc.)
* completely change the UI of the repository
* plug one's own authentication, authorization, data storage and other supporting services

For technical details see the following documentation:

1. [Required ecosystem services](ecosystem)
2. [Overall architecture of Invenio repository](architecture)
3. [NRP toolchain](nrp-toolchain)
   1. [Creating a new repository project](nrp-toolchain/create-project)
   2. [Adding metadata model](nrp-toolchain/scaffold-model)
   3. [Editing the metadata](nrp-toolchain/edit-metadata), [compiling](nrp-toolchain/generate-model) and [installing](nrp-toolchain/install-model) the model
       * [Metadata model file format cheat sheet](Model%20cheat%20sheet.pdf)
   4. Creating a new UI
   5. Running the repository in development mode(run-repository)
   6. Packaging the repository for production deployment

## References

TODO: references to invenio etc...