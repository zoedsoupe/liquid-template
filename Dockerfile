FROM hexpm/elixir:1.15.7-erlang-26.1.2-alpine-3.17.5 AS releaser

RUN apk add --no-cache build-base git python3 curl

WORKDIR /app

RUN mix do local.hex --force, local.rebar --force

COPY config/ ./config/
COPY mix.exs mix.lock ./

COPY ./priv ./

ENV MIX_ENV=prod

RUN mix deps.get
RUN mix deps.compile

COPY ./lib/ ./

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

CMD ["bin/liquid", "eval", "Liquid.Release.migrate", "&&", "exec", "bin/liquid", "start"]
