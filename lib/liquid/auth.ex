defmodule Liquid.Auth do
  alias Liquid.Auth.Models.ApiKey
  alias Liquid.Auth.Models.User
  alias Liquid.Repo

  import Ecto.Query

  def valid_api_key?(key) do
    query = from(a in ApiKey, select: a, where: a.value == ^key)
    Repo.one(query)
  end

  def generate_api_key do
    value = Ecto.UUID.generate()

    %ApiKey{}
    |> ApiKey.changeset(%{value: value})
    |> Repo.insert()
  end

  def register_user(attrs) do
    %User{}
    |> User.register_changeset(attrs)
    |> Repo.insert()
  end

  def fetch_user(id) do
    query = from(u in User, select: u, where: u.id == ^id)

    if user = Repo.one(query) do
      {:ok, user}
    else
      {:error, :not_found}
    end
  end

  def fetch_user_by_cpf_and_password(cpf, password) do
    query = from(u in User, select: u, where: u.cpf == ^cpf)
    maybe_user = Repo.one(query)

    if maybe_user && Bcrypt.verify_pass(password, maybe_user.hash_password) do
      {:ok, maybe_user}
    else
      {:error, :invalid_credentials}
    end
  end

  def update_user(%User{} = user, attrs) do
    user
    |> User.update_changeset(attrs)
    |> Repo.update()
  end

  defdelegate delete_user(user), to: Repo, as: :delete

  def change_user_registration(%User{} = user, params \\ %{}) do
    User.register_changeset(user, params)
  end
end
