defmodule Liquid.Repo do
  use Ecto.Repo, otp_app: :liquid, adapter: Ecto.Adapters.Postgres
end
