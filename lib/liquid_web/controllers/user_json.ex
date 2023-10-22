defmodule LiquidWeb.UserJSON do
  def show(%{token: token, user: user}) do
    %{data: %{token: token, user: user}}
  end

  def show(%{user: user}) do
    %{data: %{user: user}}
  end
end
