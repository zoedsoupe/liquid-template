defmodule Liquid.Repo.Migrations.AddTypeToTransaction do
  use Ecto.Migration

  def change do
    alter table(:transaction) do
      add :type, :string
    end
  end
end
