#!/usr/bin/env sh
npm install
sudo npm install -g @vue/cli-init
npm install @vue/cli-init --dev
rm -r gripp-app; vue init webpack-simple gripp-app
cd gripp-app
yarn add vue-router vuex babel-plugin-transform-builtin-extend babel-preset-es2015 babel-preset-stage-2
yarn add @api-platform/client-generator
yarn add bootstrap
yarn start