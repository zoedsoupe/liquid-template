import Config

# Configure your database
#
# The MIX_TEST_PARTITION environment variable can be used
# to provide built-in test partitioning in CI environment.
# Run `mix help test` for more information.
url = System.fetch_env!("DATABASE_URL")
database = "liquid_test#{System.get_env("MIX_TEST_PARTITION")}"

config :liquid_auth, Liquid.Auth.Repo,
  url: String.replace(url, "liquid_dev", database),
  pool: Ecto.Adapters.SQL.Sandbox,
  pool_size: 10

config :liquid_accounts, Liquid.Accounts.Repo,
  url: String.replace(url, "liquid_dev", database),
  pool: Ecto.Adapters.SQL.Sandbox,
  pool_size: 10

config :liquid_operations, Liquid.Operations.Repo,
  url: String.replace(url, "liquid_dev", database),
  pool: Ecto.Adapters.SQL.Sandbox,
  pool_size: 10

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :proxy_web, ProxyWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "D4asCItV8y8fOoQJfo9FYt0b7ea69dbRLK4Ct+AmU3QHGZW6LBk9Bv2qjz8KHmdY",
  server: false

# Print only warnings and errors during test
config :logger, level: :warning

# Initialize plugs at runtime for faster test compilation
config :phoenix, :plug_init_mode, :runtime
