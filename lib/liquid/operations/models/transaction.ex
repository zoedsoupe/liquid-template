defmodule Liquid.Operations.Models.Transaction do
  @moduledoc "Represents a Bank Account Transaction"

  use Ecto.Schema
  import Ecto.Changeset

  alias Liquid.Accounts.Models.BankAccount

  @status ~w[pending failed success]a
  @reasons ~w[invalid_params invalid_sender same_account insufficient_funds]a

  @required_fields ~w[amount status sender_id receiver_id]a
  @optional_fields ~w[processed_at chargebacked_at error_reason]a

  @primary_key {:id, :binary_id, autogenerate: true}
  schema "transaction" do
    field(:amount, :integer)
    field(:processed_at, :naive_datetime)
    field(:chargebacked_at, :naive_datetime)
    field(:status, Ecto.Enum, values: @status, default: :pending)
    field :error_reason, Ecto.Enum, values: @reasons

    belongs_to(:sender, BankAccount, type: :binary_id)
    belongs_to(:receiver, BankAccount, type: :binary_id)

    timestamps()
  end

  def changeset(transaction \\ %__MODULE__{}, attrs) do
    transaction
    |> cast(attrs, @required_fields ++ @optional_fields)
    |> validate_required(@required_fields)
    |> foreign_key_constraint(:sender_id)
    |> foreign_key_constraint(:receiver_id)
  end
end
