import Config

config :liquid,
  ecto_repos: [Liquid.Repo],
  generators: [timestamp_type: :utc_datetime, binary_id: true]

config :liquid, LiquidWeb.Endpoint,
  adapter: Bandit.PhoenixAdapter,
  url: [host: "localhost"],
  pubsub_server: Liquid.PubSub,
  render_errors: [
    formats: [json: LiquidWeb.ErrorJSON],
    layout: false
  ],
  server: true,
  live_view: [signing_salt: "ZtBLfa1kGfwAS8/hYV4B6XYwwaF9wOac"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :esbuild,
  version: "0.18.6",
  default: [
    args: ~w(js/app.js --bundle --platform=node --target=es2017 --outdir=../priv/static/assets),
    cd: Path.expand("../assets", __DIR__),
    env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
  ]

config :dart_sass,
  version: "1.63.6",
  default: [
    args: ~w(css/app.scss ../priv/static/assets/app.css),
    cd: Path.expand("../assets", __DIR__)
  ]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"
