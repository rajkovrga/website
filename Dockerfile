FROM node:19-alpine as build

ENV ASSETS_URL="https://www.vrga.dev"
ENV ORIGIN="https://www.vrga.dev"
ENV PROTOCOL_HEADER="X-Forwarded-Proto"
ENV HOST_HEADER="X-Forwarded-Host"
ENV ADDRESS_HEADER="X-Forwarded-For"
ENV XFF_DEPTH="1"

WORKDIR /app

COPY . .

RUN apk update \
    && apk add curl gcc make \
    && npm install -g pnpm \
    && pnpm install \
    && pnpm run build

FROM node:19-alpine as production

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

RUN apk update && apk add tini

COPY --from=build /app/build .
COPY ./package.json .
COPY ./pnpm-lock.yaml .
COPY ./static static/

RUN apk update \
    && npm install -g pnpm \
    && pnpm install --frozen-lockfile --prod

EXPOSE 3000

ENTRYPOINT [ "tini" ]
CMD [ "node", "index.js" ]