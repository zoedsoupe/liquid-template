FROM hexpm/elixir:1.15.7-erlang-26.1.2-alpine-3.17.5 AS releaser

RUN apk add --no-cache build-base git python3 curl nodejs npm

WORKDIR /app

RUN mix do local.hex --force, local.rebar --force

COPY config/ ./config/
COPY mix.exs mix.lock ./

COPY priv/ ./priv/

ENV MIX_ENV=prod

RUN mix deps.get
RUN mix deps.compile

COPY lib/ ./lib/
COPY rel/ ./rel/

COPY assets/ ./assets/
RUN npm install --global npm@9.8.1
RUN npm i --prefix ./assets/

# dart sass overlay
ENV GLIBC_VERSION=2.34-r0
RUN wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub && \
    wget -q -O /tmp/glibc.apk https://github.com/sgerrand/alpine-pkg-glibc/releases/download/${GLIBC_VERSION}/glibc-${GLIBC_VERSION}.apk && \
    apk add --force-overwrite /tmp/glibc.apk && \
    rm -rf /tmp/glibc.apk

RUN mix assets.deploy

RUN mix compile --force
RUN mix release

FROM alpine:3.17.5 AS app

RUN apk add --no-cache libstdc++ openssl ncurses-libs

EXPOSE 4000

ENV PORT=4000 \
    MIX_ENV=prod \
    SHELL=/bin/bash \
    PHX_SERVER=true

WORKDIR /app

COPY --from=releaser /app/_build/prod/rel/liquid ./

CMD /app/bin/server
