import Config

config :liquid_accounts,
  ecto_repos: [Liquid.Accounts.Repo],
  generators: [timestamp_type: :utc_datetime, binary_id: true]

config :liquid_auth,
  ecto_repos: [Liquid.Auth.Repo],
  generators: [timestamp_type: :utc_datetime, binary_id: true]

config :liquid_operations,
  ecto_repos: [Liquid.Operations.Repo],
  generators: [timestamp_type: :utc_datetime, binary_id: true]

# --------- #
# Proxy Web #
# --------- #
config :proxy_web, ProxyWeb.Endpoint,
  adapter: Bandit.PhoenixAdapter,
  url: [host: "localhost"],
  pubsub_server: Liquid.PubSub,
  render_errors: [
    formats: [json: LiquidAccountsWeb.ErrorJSON],
    layout: false
  ]

config :liquid_auth, Liquid.AuthWeb.Endpoint,
  pubsub_server: Liquid.Pubsub,
  secret_key_base: "",
  server: false

config :liquid_accounts, Liquid.AccountsWeb.Endpoint,
  pubsub_server: Liquid.Pubsub,
  secret_key_base: "",
  server: false

config :liquid_operations, Liquid.OperationsWeb.Endpoint,
  pubsub_server: Liquid.Pubsub,
  secret_key_base: "",
  server: false

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"
