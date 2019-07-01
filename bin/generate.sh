#!/usr/bin/env sh
cd gripp-app
node_modules/.bin/generate-api-platform-client http://gripp.localhost/api/ src/ --generator vue --resource tag
cd ..
bin/edited.sh