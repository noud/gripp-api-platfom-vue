#!/usr/bin/env sh
APP_NAME=gripp-app

rm -r ${APP_NAME} node_modules package-lock.json yarn.lock

yarn install; yarn upgrade
node_modules/.bin/vue init webpack-simple ${APP_NAME}

cd ${APP_NAME}
yarn add vue-router vuex vuex-map-fields babel-plugin-transform-builtin-extend babel-preset-es2015 babel-preset-stage-2 lodash
yarn add bootstrap font-awesome

# yarn add --dev @api-platform/client-generator
# yarn add https://github.com/api-platform/client-generator
# yarn add /home/noud/workspace/client-generator

cd ..
./bin/generate.sh
cd ${APP_NAME}
yarn dev