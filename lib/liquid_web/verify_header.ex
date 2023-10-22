defmodule LiquidWeb.VerifyHeader do
  import Plug.Conn
  import Phoenix.Controller, only: [render: 2, put_view: 2]

  @one_day 86_400

  def salt, do: "token-usuario-liquid-api"

  def init(opts), do: opts

  def call(%Plug.Conn{path_info: ["api", "login"]} = conn, _opts), do: conn

  def call(conn, _opts) do
    api_key = List.first(get_req_header(conn, "x-api-key"))
    token = fetch_token(get_req_header(conn, "authorization"))

    cond do
      !token and !api_key ->
        unauthorized(conn)

      token ->
        with {:ok, user_id} <- verify_token(conn, token),
             {:ok, user} <- Liquid.Auth.fetch_user(user_id) do
          conn
          |> assign(:user, user)
          |> assign(:token, token)
        else
          _ -> unauthorized(conn)
        end

      api_key ->
        if Liquid.Auth.valid_api_key?(api_key) do
          conn
        else
          unauthorized(conn)
        end
    end
  end

  defp unauthorized(conn) do
    conn
    |> put_status(:unauthorized)
    |> put_view(LiquidWeb.ErrorJSON)
    |> render(:"401")
  end

  defp fetch_token([]), do: nil

  defp fetch_token([token | _]) do
    token
    |> String.replace("Bearer ", "")
    |> String.trim()
  end

  defp verify_token(conn, token) do
    Phoenix.Token.verify(conn, salt(), token, max_age: @one_day)
  end
end
