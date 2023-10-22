defmodule Liquid.Operations.Events.TransactEvent do
  @moduledoc "Event that represents a Transaction to be processed"

  use Ecto.Schema

  import Ecto.Changeset

  @fields ~w[amount sender_identifier receiver_identifier transaction_identifier]a
  @required_fields ~w[sender_identifier receiver_identifier transaction_identifier]a

  @derive {Jason.Encoder, @fields}
  @primary_key false
  embedded_schema do
    field(:amount, :integer)
    field(:sender_identifier, :string)
    field(:receiver_identifier, :string)
    field(:transaction_identifier, :string)
  end

  def parse(params) do
    %__MODULE__{}
    |> cast(params, @fields)
    |> validate_required(@required_fields)
    |> apply_action(:parse)
  end
end
