defmodule Liquid.Operations.Repo do
  use Ecto.Repo,
    otp_app: :liquid_operations,
    adapter: Ecto.Adapters.Postgres
end
