defmodule Liquid.Repo.Migrations.CreateUser do
  use Ecto.Migration

  def change do
    create table(:user, primary_key: false) do
      add(:id, :uuid, primary_key: true, null: false)
      add(:cpf, :string, null: false)
      add(:first_name, :string, null: false)
      add(:last_name, :string)
      add(:hash_password, :string, null: false)

      timestamps()
    end

    create(unique_index(:user, [:cpf]))
  end
end
