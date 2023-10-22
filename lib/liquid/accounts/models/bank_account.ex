defmodule Liquid.Accounts.Models.BankAccount do
  use Ecto.Schema

  import Ecto.Changeset

  @derive {Jason.Encoder, only: [:id, :balance, :owner]}
  @primary_key {:id, :binary_id, autogenerate: true}
  schema "bank_account" do
    field(:balance, :integer, default: 10_000)

    belongs_to(:owner, Liquid.Auth.Models.User, type: :binary_id)

    timestamps()
  end

  def changeset(account \\ %__MODULE__{}, attrs) do
    account
    |> cast(attrs, [:balance, :owner_id])
    |> validate_required([:balance, :owner_id])
  end
end
