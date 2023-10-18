# General application configuration
import Config

config :liquid,
  ecto_repos: [Liquid.Repo]

# Configures the endpoint
config :liquid, LiquidWeb.Endpoint,
  url: [host: "localhost"],
  render_errors: [
    formats: [json: LiquidWeb.ErrorJSON],
    layout: false
  ],
  pubsub_server: Liquid.PubSub,
  live_view: [signing_salt: "TBdPgqKa"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"
