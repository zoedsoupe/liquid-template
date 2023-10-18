defmodule LiquidWeb.Router do
  use LiquidWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", LiquidWeb do
    pipe_through :api
  end
end
