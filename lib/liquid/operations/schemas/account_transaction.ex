defmodule Liquid.Operations.Schemas.AccountTransaction do
  @moduledoc "Represents an external Bank Account Transaction"

  use Ecto.Schema

  import Ecto.Changeset

  alias Liquid.Accounts.Schemas.UserAccount

  @fields ~w[amount status type processed_at chargebacked_at identifier error]a

  @derive Jason.Encoder
  @primary_key false
  embedded_schema do
    field(:identifier, :string)
    field(:amount, :string)
    field(:processed_at, :string)
    field(:chargebacked_at, :string)
    field :error, :string
    field :status, :string
    field :type, :string

    embeds_one(:sender, UserAccount)
    embeds_one(:receiver, UserAccount)
  end

  def parse(params) do
    %__MODULE__{}
    |> cast(params, @fields)
    |> put_embed(:sender, params[:sender], required: true)
    |> put_embed(:receiver, params[:receiver], required: true)
    |> validate_required([:amount, :identifier, :status, :type])
    |> apply_action(:parse)
  end
end
