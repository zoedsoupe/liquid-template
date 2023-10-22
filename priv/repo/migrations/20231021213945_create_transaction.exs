defmodule Liquid.Repo.Migrations.CreateTransaction do
  use Ecto.Migration

  def change do
    create table(:transaction, primary_key: false) do
      add(:id, :uuid, primary_key: true, null: false)
      add(:amount, :integer, null: false)
      add :status, :string, null: false
      add(:processed_at, :naive_datetime)
      add(:chargebacked_at, :naive_datetime)
      add(:sender_id, references(:bank_account, type: :uuid, on_delete: :nothing))
      add(:receiver_id, references(:bank_account, type: :uuid, on_delete: :nothing))

      timestamps()
    end
  end
end
