defmodule LiquidWeb.UserController do
  use LiquidWeb, :controller

  alias Liquid.Auth

  @salt "token-usuario-liquid-api"

  action_fallback(LiquidWeb.FallbackController)

  def login(conn, %{"cpf" => cpf, "password" => password}) do
    with {:ok, user} <- Auth.fetch_user_by_cpf_and_password(cpf, password) do
      token = Phoenix.Token.sign(LiquidWeb.Endpoint, @salt, user.id)
      render(conn, :show, token: token, user: user)
    end
  end

  def show(conn, %{"id" => user_id}) do
    with {:ok, user} <- Auth.fetch_user(user_id) do
      render(conn, :show, user: user)
    end
  end

  def create(conn, params) do
    with {:ok, user} <- Auth.register_user(params) do
      render(conn, :show, user: user)
    end
  end

  def update(conn, %{"id" => user_id} = params) do
    with {:ok, user} <- Auth.fetch_user(user_id),
         {:ok, user} <- Auth.update_user(user, params) do
      render(conn, :show, user: user)
    end
  end

  def delete(conn, %{"id" => user_id}) do
    with {:ok, user} <- Auth.fetch_user(user_id),
         {:ok, _deleted} <- Auth.delete_user(user) do
      render(conn, :show, user: user)
    end
  end
end
