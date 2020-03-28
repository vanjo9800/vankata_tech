#!/bin/bash

git pull;
npm install;
npm audit fix;

# Remove old ones
rm -r ../website;

npm run ng build --prod;
mv dist/* ../;
