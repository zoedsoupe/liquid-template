defmodule Liquid.Auth.Repo do
  use Ecto.Repo,
    otp_app: :liquid_auth,
    adapter: Ecto.Adapters.Postgres
end
