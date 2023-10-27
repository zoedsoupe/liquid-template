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

  defp create(conn, %{"user" => user_params}, _) do
    %{"cpf" => cpf, "password" => password} = user_params

    if user = Auth.fetch_user_by_cpf_and_password(cpf, password) do
      UserAuth.log_in_user(conn, user)
    else
      # In order to prevent user enumeration attacks, don't disclose whether the email is registered.
      redirect(conn, to: ~p"/")
    end
  end

  def delete(conn, _params) do
    UserAuth.log_out_user(conn)
  end
end
