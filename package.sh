#!/bin/bash

rm -rf ./lib
npm ci

./node_modules/.bin/tsc
cp -r ./utility_chains ./lib/
cp -r ./mosaic_config ./lib/