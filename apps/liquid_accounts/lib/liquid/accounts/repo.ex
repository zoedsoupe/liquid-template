defmodule Liquid.Accounts.Repo do
  use Ecto.Repo,
    otp_app: :liquid_accounts,
    adapter: Ecto.Adapters.Postgres
end
