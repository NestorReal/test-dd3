FROM node:16.10.0-alpine

COPY .  /app

WORKDIR /app

RUN npm install

VOLUME ["/build"]

ENTRYPOINT ["/app/docker/entrypoint.sh"]

CMD ["/bin/sh", "-ec", "while :; do echo '.'; sleep 1000 ; done"]
