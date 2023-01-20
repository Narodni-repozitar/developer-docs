---
sidebar_position: 3
---


# Technology

The Czech National Repository platform (NRP) is an ecosystem of heterogeneous repositories
which share basic infrastructure components (such as AAI, storage), provide their services
to the whole community (not just to one institution) and disseminate their content
to the National Repository (National Metadata Directory).

The following repository technologies are supported by the organizations involved in the NRP:

## Invenio

Invenio is a set of libraries created primarily by CERN that provide building blocks
for creating custom repositories. Repository metadata are expressed in JSON file format
that supports scenarios which require metadata of complex structure.

Being a set of libraries, setting up a new repository for complex metadata structure
requires developer experience - one must write the model, prepare UI (editor components
written in React, view components written as HTML/jinja2 snippets), build and create
deployment packages.

For simpler scenarios which use existing dataset/document metadata schemas we provide
ready to install images which can be customized just with configuration changes, without
the need for extra software development.

In NRP, Invenio makes the foundation for the National Data and Document Repository.

Responsible organizations:

* CESNET z.s.p.o.
* Czech National Library of Technology

[Invenio documentation](invenio/)

## DSpace

TODO

## Islandora

TODO