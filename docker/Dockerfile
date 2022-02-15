FROM node:16.10.0-alpine

COPY .  /app

WORKDIR /app

RUN npm install

VOLUME ["/app/build"]

ENTRYPOINT ["/app/docker/entrypoint.sh"]