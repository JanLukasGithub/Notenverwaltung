#! /bin/bash 

if ! apt list -i npm | grep npm | grep -q installed
then
    sudo apt install npm
fi

if ! apt list -i webpack | grep webpack | grep -q installed
then
    sudo apt install webpack
fi

wget -O data/myData.json -o - -b https://www.dropbox.com/sh/rd8m1hm5ub2upls/AABngqaUZVIsdso_4U8ZeGSwa/myData.txt

export NODE_OPTIONS=--openssl-legacy-provider

npm start
