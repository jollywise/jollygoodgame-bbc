#!/usr/bin/env bash
set -e
#   Use this to create gdz files for local testing.

#   Give the scripts execute permissions if you get errors
#   chmod +x create_gdz_compressed.sh
#   chmod +x create_gdz_uncompressed.sh

#   npm run-script bbc : generate the BBC output files via webpack build
#   bash create_gdz.sh : generate the gdz (zip essentially)
#   Connect android device to computer via USB
#   In chrome : chrome://inspect/#devices (make sure usb debugging enabled on android device)

mkdir -p gdz
cd 'output'
zip -r ../gdz/cbbc-horrible-histories-2.gdz -Z store . --exclude=*.sh* --exclude=*.svn* --exclude=*.git* --exclude=*.DS_Store*
