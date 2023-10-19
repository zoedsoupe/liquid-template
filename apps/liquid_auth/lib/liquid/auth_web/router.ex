defmodule Liquid.AuthWeb.Router do
  use Liquid.AuthWeb, :router

  pipeline :api do
    plug(:accepts, ["json"])
  end

  scope "/api", Liquid.AuthWeb do
    pipe_through(:api)
  end
end
