# Invenio

As stated previously, Invenio is a set of libraries on top of which repositories
are built. Samples of those repositories (flavours) are Invenio RDM
(Research Data Management), Invenio ILS (library system), Zenodo and others.

## Supported Invenio flavours for the National Repository Platform

NRP team provides its own flavour of Invenio, both as pre-built packages
and developer-friendly ecosystem.

### Pre-built docker image of document-based repository

Use this flavour if you are building a document repository (institutional repository of
theses, repository of articles, books, documents, ...). This flavour contains metadata
schema developed by the National Library of Technology (NTK) for the Czech National Document 
repository. You can browse the metadata schema **TODO here**.

The image can be configured by providing a configuration volume containing:

* basic branding (colors, logo, repository name)
* configuration of extra simple metadata - such as string, boolean, date, ...
  
The following parts of the repository can not be configured:

* metadata schema can not be restricted
* record approval process can not be modified

Configuration and installation documentation is available **TODO here**.

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

Configuration and installation documentation is available **TODO here**.

### Generic repository with custom metadata schema

For advanced cases we provide a set of command-line tools to simplify repository development.
They help developers (Python skills and skills with development on Linux/MacOS platforms are required) to:

* bootstrap a generic repository
* create, compile and deploy metadata schema (or reuse one of the schemas above and customize it)
* provide custom user interface for the repository (including custom visualizations of metadata/data, customized deposit editors etc.)
* completely change the UI of the repository
* plug their own authentication, authorization, data storage and other supporting services

For technical details see the following documentation:

1. [Required ecosystem services](ecosystem)
2. [Overall architecture of Invenio repository](architecture)
3. [NRP toolchain](nrp-toolchain)
4. Metadata model description and model generators developed as a part of the National
   Repository Platform
5. Scaffolding Invenio Site
6. Adding metadata model
7. Creating a new UI
8. Running the repository

## References

TODO: references to invenio etc...