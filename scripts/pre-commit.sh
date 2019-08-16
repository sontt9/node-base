#!/usr/bin/env bash

NPM=$(which npm)

if [[ -z $NPM ]]; then
  echo "Please Install Node and NPM first."
  exit 1
fi

# $NPM run eslint:fix
$NPM run eslint

if [ $? -ne 0 ]; then
  echo "*** ERROR *** : JSLint failed for file: $file, please fix code and recommit"
  exit 1
else
  exit 0
fi
