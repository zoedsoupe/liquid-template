defmodule LiquidWeb.Router do
  use LiquidWeb, :router

  pipeline :api do
    plug(:accepts, ["json"])
  end

  pipeline :auth do
    plug(LiquidWeb.VerifyHeader)
  end

  scope "/api", LiquidWeb do
    pipe_through(:api)
  end

  scope "/api", LiquidWeb do
    pipe_through([:api, :auth])
  end
end
