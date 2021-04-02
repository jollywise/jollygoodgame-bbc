#!/usr/bin/env bash
set -e

# 'build' the src files to output directory
echo '0. Delete /output folder'
rm -rf output
echo '1. Downloading and installing project dependencies via npm install'
npm ci
echo '2. Compiling optimised version of the game into /output'
npm run-script build:bbc
echo 'build complete'
