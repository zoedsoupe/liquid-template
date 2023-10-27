defmodule Liquid.Operations.Schemas.NewTransaction do
  use Ecto.Schema
  import Ecto.Changeset

  embedded_schema do
    field :amount, :integer
    field :sender_id, :binary_id
    field :receiver_id, :binary_id
  end

  def changeset(form \\ %__MODULE__{}, attrs, amount) do
    form
    |> cast(attrs, [:amount, :sender_id, :receiver_id])
    |> validate_required([:amount, :sender_id, :receiver_id])
    |> validate_number(:amount, less_than_or_equal_to: amount)
  end
end
