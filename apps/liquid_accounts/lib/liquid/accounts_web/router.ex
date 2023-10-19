defmodule Liquid.AccountsWeb.Router do
  use Liquid.AccountsWeb, :router

  pipeline :api do
    plug(:accepts, ["json"])
  end

  scope "/api", Liquid.AccountsWeb do
    pipe_through(:api)
  end
end
