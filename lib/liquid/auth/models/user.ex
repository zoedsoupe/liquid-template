defmodule Liquid.Auth.Models.User do
  # módudo que define DSL                               
  use Ecto.Schema

  # módulo que define funções de validação        
  import Ecto.Changeset

  @fields ~w[id first_name last_name cpf inserted_at updated_at]a

  @derive {Jason.Encoder, only: @fields}
  @primary_key {:id, :binary_id, autogenerate: true}
  schema "user" do
    field(:cpf, :string)
    field(:first_name, :string)
    field(:last_name, :string)
    field(:hash_password, :string)
    field(:password, :string, virtual: true, redact: true)

    timestamps()
  end

  def changeset(user \\ %__MODULE__{}, attrs) do
    cast(user, attrs, ~w[cpf first_name last_name password]a)
  end

  def register_changeset(attrs) do
    %__MODULE__{}
    |> changeset(attrs)
    |> validate_required(~w[cpf first_name password]a)
    |> unique_constraint(:cpf)
    |> put_hash_senha()
  end

  def update_changeset(%__MODULE__{} = user, attrs) do
    user
    |> changeset(attrs)
    |> unique_constraint(:cpf)
    |> put_hash_senha()
  end

  defp put_hash_senha(%{valid?: false} = changeset), do: changeset

  defp put_hash_senha(changeset) do
    if password = get_change(changeset, :password) do
      put_change(changeset, :hash_password, Bcrypt.hash_pwd_salt(password))
    else
      changeset
    end
  end
end