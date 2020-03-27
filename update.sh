#!/bin/bash

git pull;
npm install;
npm audit fix;

# Remove old ones
rm -r ../website;

ng build --prod;
mv dist/* ../;
