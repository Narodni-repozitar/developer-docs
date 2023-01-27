---
sidebar_position: 1
---

# Required ecosystem services

![Overall architecture](architecture-overall.png)

The following services are required for running the repository. In real deployment, these services
might be run containerized (inside docker or k8s infrastructure) or on bare metal.

Invenio provides sample **docker-compose files** to be used while developing the repository.

If you plan to run these services in k8s (either your own cluster or CESNET), please ask CESNET for
a sample configuration.

## Development

The development requires Linux or MacOS. **Invenio does not run on Windows.**

The following components are required in development (all of those are initialized
during bootstrap process as docker-compose services):

* Redis 7 - cache, user sessions
* Postgresql 12+ - database backend
* RabbitMQ - for background tasks
* OpenSearch 2.0+ - for indexing metadata

Recommended components:

* PGAdmin
* Opensearch Dashboards
* Minio - S3 compatible simple storage

Additionally to these docker services, you will need the following packages 
installed directly on your system:

* Python (currently version 3.9 is supported)
* Pipenv
* Docker and Docker compose
* Node (currently version 14 is supported)
* NPM (currently version 6 is supported)
* Imagemagick
* Git

Versions that work:

```
Python version OK. Got 3.9.16.
Checking Pipenv is installed...
Pipenv OK. Got version 2022.9.24.
Checking Docker version...
Docker version OK. Got 20.10.21.
Checking Docker Compose version...
Docker Compose version OK. Got 2.13.0.
Checking Node version...
Node version OK. Got 14.19.3.
Checking NPM version...
NPM version OK. Got 6.14.17.
Checking ImageMagick version...
ImageMagick version OK. Got 7.1.0.
Checking git version...
git version OK. Got 2.37.1.
```

## Required Ports

**Security warning**: Invenio in development mode opens all ports on 0.0.0.0, bypassing iptables.
This has been reported as a security bug. If you store any sensitive data during the development,
change the interface to 127.0.0.1 inside the generated docker-compose.yml

The following ports must be available on the system (mostly these are default application ports + 200
so that they do not conflict with versions installed on your system):

| Container                          | Ports                       |
|------------------------------------|-----------------------------|
| opensearchproject/opensearch:2.3.0 | 9400 (HTTP), 9800 (cluster) |
| redis:7                            | 6579                        |
| rabbitmq:3-management              | 15872 (HTTP), 5872 (mq)     |
| opensearchproject/opensearch-dashboards:2.3.0            | 5801  |
| dpage/pgadmin4:5.2                 | 5251 (HTTPS), 5250 (HTTP)   |
| postgres:12.4                      | 5632                        |
| minio/minio:latest                 | 9000, 9001                  |
| invenio                            | 5000 (HTTPS)                |
## Deployment

For deployment all the above services plus:

* Postgresql - in cluster configuration
* OpenSearch - in cluster configuration
* NGINX / k8s ingress as a frontend web server
