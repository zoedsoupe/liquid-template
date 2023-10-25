defmodule Liquid.Accounts.Schemas.UserAccount do
  use Ecto.Schema

  import Ecto.Changeset

  @fields ~w[balance owner_name identifier]a

  @derive {Jason.Encoder, only: @fields}
  @primary_key false
  embedded_schema do
    field(:balance, :string)
    field(:owner_name, :string)
    field(:identifier, :string)
  end

  def changeset(account \\ %__MODULE__{}, attrs) do
    account
    |> cast(attrs, @fields)
    |> validate_required(@fields)
  end
end
