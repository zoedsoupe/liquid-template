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
  server: true

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"
