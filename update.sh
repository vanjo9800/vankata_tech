#!/bin/bash

git pull;

# Remove old ones
rm ../website;

cd repo;
ng build --prod;
mv dist/* ../;
