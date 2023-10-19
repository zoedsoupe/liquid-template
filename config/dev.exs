import Config

database_url = System.fetch_env!("DATABASE_URL")

# Configure your database
config :liquid_accounts, Liquid.Accounts.Repo,
  url: database_url,
  stacktrace: true,
  show_sensitive_data_on_connection_error: true,
  pool_size: 10

config :liquid_auth, Liquid.Auth.Repo,
  url: database_url,
  stacktrace: true,
  show_sensitive_data_on_connection_error: true,
  pool_size: 10

config :liquid_operations, Liquid.Operations.Repo,
  url: database_url,
  stacktrace: true,
  show_sensitive_data_on_connection_error: true,
  pool_size: 10

config :proxy_web, ProxyWeb.Endpoint,
  http: [ip: {0, 0, 0, 0}, port: 4000],
  check_origin: false,
  code_reloader: true,
  debug_errors: true,
  secret_key_base: "RRAVO4QBlitT2HujaRWbPmSH0BUAiJBP7Wn2tOk1SM4DevqLx6TQDUnhnseq8S9y"

config :liquid_auth, Liquid.AuthWeb.Endpoint, debug_errors: true
config :liquid_accounts, Liquid.AccountsWeb.Endpoint, debug_errors: true
config :liquid_operations, Liquid.OperationsWeb.Endpoint, debug_errors: true

# Set a higher stacktrace during development. Avoid configuring such
# in production as building large stacktraces may be expensive.
config :phoenix, :stacktrace_depth, 20

# Initialize plugs at runtime for faster development compilation
config :phoenix, :plug_init_mode, :runtime
