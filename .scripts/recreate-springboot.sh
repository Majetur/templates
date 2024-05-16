#!/bin/bash
# https://stackoverflow.com/questions/47160524/linux-remove-all-files-except-hidden-files-and-folders
rm -rf springboot

mkdir springboot

cd springboot

cp -a ../.scripts/springboot/. .

chmod +x .scripts/*