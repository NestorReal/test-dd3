#! /usr/bin/env sh
set -e

cd /app && npm run build

rm -rf /build/*
mv /app/build/* /build

exec "$@"