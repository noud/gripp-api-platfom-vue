#!/usr/bin/env sh
cd gripp-app

npx @api-platform/client-generator http://gripp.localhost/api/ src/ --generator vue --resource tag

cd ..
bin/edited.sh