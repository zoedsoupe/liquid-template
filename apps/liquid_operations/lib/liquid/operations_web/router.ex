defmodule Liquid.OperationsWeb.Router do
  use Liquid.OperationsWeb, :router

  pipeline :api do
    plug(:accepts, ["json"])
  end

  scope "/api", Liquid.OperationsWeb do
    pipe_through(:api)
  end
end
