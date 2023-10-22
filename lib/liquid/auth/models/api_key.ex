defmodule Liquid.Auth.Models.ApiKey do
  use Ecto.Schema

  import Ecto.Changeset

  schema "api_key" do
    field(:value, :binary_id)
    field(:active?, :boolean, default: true)

    timestamps()
  end

  def changeset(key \\ %__MODULE__{}, attrs) do
    key
    |> cast(attrs, [:value, :active?])
    |> validate_required([:value])
  end
end
