#! /bin/bash 

if ! apt list -i npm | grep npm | grep -q installed
then
    sudo apt install npm
fi

if ! apt list -i webpack | grep webpack | grep -q installed
then
    sudo apt install webpack
fi

export NODE_OPTIONS=--openssl-legacy-provider

npm start
