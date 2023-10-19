defmodule ProxyWeb.Endpoint do
  use Phoenix.Endpoint, otp_app: :proxy_web

  # Code reloading can be explicitly enabled under the
  # :code_reloader configuration of your endpoint.
  if code_reloading? do
    plug(Phoenix.LiveReloader)
    plug(Phoenix.CodeReloader)
    plug(Phoenix.Ecto.CheckRepoStatus, otp_app: :liquid_auth)
    plug(Phoenix.Ecto.CheckRepoStatus, otp_app: :liquid_accounts)
    plug(Phoenix.Ecto.CheckRepoStatus, otp_app: :liquid_operations)
  end

  plug(ProxyWeb.Router, %{
    accounts: Liquid.AccountsWeb.Endpoint,
    operations: Liquid.OperationsWeb.Endpoint,
    default: Liquid.AuthWeb.Endpoint
  })
end
