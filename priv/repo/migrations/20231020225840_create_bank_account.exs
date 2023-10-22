defmodule Liquid.Repo.Migrations.CreateBankAccount do
  use Ecto.Migration

  def change do
    create table(:bank_account, primary_key: false) do
      add(:id, :uuid, null: false, primary_key: true)
      add(:balance, :integer, null: false)
      add(:owner_id, references(:user, type: :uuid, on_delete: :delete_all), null: false)

      timestamps()
    end
  end
end
