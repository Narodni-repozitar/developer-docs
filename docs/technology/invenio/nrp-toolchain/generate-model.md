---
sidebar_position: 5
---

# Generate the model

To generate the model, invoke `nrp-cli model compile <model-name>`. 
This will parse and validate the metadata file and generate invenio source files.

## Model structure

In invenio, model consists of multiple python (and non-python files) that have to work together and stay consistent when changes are introduced.
These files (and classes) are:

**Resource layer (http):**

* `resources/config.py`
  * defines the URL of the model, content negotiation
* `resources/resource.py`
  * parses the HTTP request and calls the service layer to handle it
  * modify this file if you want to add your own endpoints

**Service layer (business logic):**

* `services/config.py` contain the definition of:
  * the primary url of the model (**TODO** unify this with resources, not done in invenio)
  * permission policies for the service (referenced from config, defined in `permissions.py`)
  * Marshmallow schema that will be used for deposit validation (referenced from config, defined in `schema.py`)
  * Search options - what can be searched, ordered, aggregated (referenced from config, defined in `search.py` and `facets.py`)
  * Extension points (components) to plug into the standard CRUD processing without rewriting service
  * link to record layer
* `services/service.py`
  * implements the business layer of the model
  * the standard CRUD+search is already contained
  * you might add specialized methods here (and call them from the resource layer if they should be accessible via API)

**Record layer (data access):**

* `jsonschemas/**` - json schema of the metadata
* `mappings/**` - definition of elasticsearch mappings (json similar to json schema, but not the same)
* `api.py` - defines the Record class to store the metadata
* `dumper.py` - contains code that is used when storing the metadata and retrieving them from OpenSearch
* `models.py` - contains the low-level SQLAlchemy access to the database

**Top-level**

* `config.py` - default configuration
* `ext.py` - flask registration code for the model
* `views.py` - registration of the API endpoint
* `proxies.py` - defines flask proxies to use the service/resource from another model

