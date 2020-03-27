#!/bin/bash

git pull;
npm install;
npm audit fix;

# Remove old ones
rm ../website;

cd repo;
ng build --prod;
mv dist/* ../;
