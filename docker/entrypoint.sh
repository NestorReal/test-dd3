#! /usr/bin/env sh
set -e

rm -rf /app/build/*

cd /app && npm run build