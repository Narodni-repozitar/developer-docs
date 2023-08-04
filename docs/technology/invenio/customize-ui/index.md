---
sidebar_position: 4
---
# Customize UI

## Intended audience

This guide is intended for system administrators and developers, who need to customize look-and-feel
or implement branding of their repository instance to match their organizational environment.

## Customization hierarchy

To help you understand customization and use the appropriate methods, keep in mind the following hierarchy of customization.
This hierarchy lists the customization approaches from "least involved, most well-supported, and least flexible" to "most involved,
least supported, and most flexible" -from the shallow-end of the pool to the deep-end.

1. Set configuration values - least effort, most limited.
2. Create and place files in expected locations.
3. Install modules (and set their configuration values).
4. Create your own modules and install them.
5. Make contributions to core modules.
6. Strike out on your own and fork modules (you do you!) -- most effort, least limited.

We recommend you exhaust the capacities of an approach before you reach out for a more involved one (e.g., don't create an extension to change the logo).

In the following sections, we cover customization opportunities that a NRP project provides. These span the gamut of level 1 to 4.

## OARepo-UI

A newly created NRP project contains an already pre-installed [oarepo-ui](https://github.com/oarepo/oarepo-ui)

## Overview

- [Forms](./forms/) - how to customize or create your own record deposition/edit forms
