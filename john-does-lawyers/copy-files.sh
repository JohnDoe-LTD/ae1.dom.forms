#!/bin/bash

# crear estructura y copia de ficheros
mkdir -p dist/assets/images &&
    mkdir -p dist/assets/scripts &&
    mkdir -p dist/assets/styles &&
    cp -r ./assets/images -t ./dist/assets &&
    cp index.html ./dist/index.html