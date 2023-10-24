defmodule LiquidWeb.UserSessionController do
  use LiquidWeb, :controller

  alias Liquid.Auth
  alias LiquidWeb.UserAuth

  def create(conn, %{"_action" => "registered"} = params) do
    create(conn, params, "Conta cadastrada com sucesso!")
  end

  def create(conn, params) do
    create(conn, params, "Boas vindas novamente!")
  end

  defp create(conn, %{"user" => user_params}, info) do
    %{"cpf" => cpf, "password" => password} = user_params

    if user = Auth.fetch_user_by_cpf_and_password(cpf, password) do
      conn
      |> put_flash(:info, info)
      |> UserAuth.log_in_user(user)
    else
      # In order to prevent user enumeration attacks, don't disclose whether the email is registered.
      conn
      |> put_flash(:error, "CPF ou Senha inválidos")
      |> redirect(to: ~p"/login")
    end
  end

  def delete(conn, _params) do
    conn
    |> put_flash(:info, "Desconectade com sucesso!")
    |> UserAuth.log_out_user()
  end
end
