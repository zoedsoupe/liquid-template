defmodule Liquid.Repo.Migrations.CreateApiKey do
  use Ecto.Migration

  def change do
    create table(:api_key) do
      add :value, :uuid, null: false
      add :active?, :boolean, null: false

      timestamps()
    end
  end
end
