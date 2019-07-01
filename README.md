# Gripp client Vue

![Gripp client Vue](./docs/gripp_client_rvue.png?raw=true "Gripp client Vue")

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://raw.githubusercontent.com/noud/gripp_client_vue/master/LICENSE)
[![master](https://img.shields.io/badge/current-dev-aa11ff.svg)](https://github.com/noud/gripp_client_vue/releases)

This is a [Vue](https://vuejs.org/) [Single-page application (SPA)](https://en.wikipedia.org/wiki/Single-page_application) that does work with

[Gripp client Symfony](https://github.com/noud/gripp_client_symfony/blob/master/README.md)

and demonstrate [API-First](https://swagger.io/resources/articles/adopting-an-api-first-approach/) development to facilitate a [Rapid-application development (RAD)](https://en.wikipedia.org/wiki/Rapid_application_development) process.

## API

The app consumes:
* [RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer) with auto generated documentation conform [OpenAPI](https://swagger.io/specification/)
    * [JSON-LD](https://json-ld.org/)

## Security

@TODO

## Provisioning

For instance use an existing Docker workspace. :
```bash
cd laradock && docker-compose exec --user=laradock workspace bash
```
Provision the app with JavaScript Node.js NPM & YARN packages.:
```bash
cd gripp_client_vue && bin/provision.sh
```
Add url to your [Gripp client Symfony](https://github.com/noud/gripp_client_symfony/blob/master/README.md) .env.local file.:
```bash
CORS_ALLOW_ORIGIN=^http://app.gripp.localhost(:[0-9]+)?$
```

## Generating

We generate large part of the app:
```bash
cd gripp_client_vue && bin/generate.sh
```
## Usage

Browse to the app:
```bash
/opt/google/chrome/chrome http://app.gripp.localhost/
```
## Developing

Feel free to contribute.

## Tools

Created with [Vue in Eclipse](https://www.genuitec.com/tech/vue-in-eclipse)
 ([Eclipse Marketplace](https://marketplace.eclipse.org/content/vuejs-codemix?mpc=true&mpc_state=))   

[Eclipse](https://www.eclipse.org/) is free open-source project that grows with your contributions.