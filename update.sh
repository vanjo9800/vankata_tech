#!/bin/bash

git pull;
npm install;
npm audit fix;

# Remove old ones
rm -r ../website;

npm run build --prod;
mv dist/* ../;
