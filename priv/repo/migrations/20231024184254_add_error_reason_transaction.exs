defmodule Liquid.Repo.Migrations.AddErrorReasonTransaction do
  use Ecto.Migration

  def change do
    alter table(:transaction) do
      add :error_reason, :string, null: true
    end
  end
end
