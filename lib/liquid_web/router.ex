defmodule LiquidWeb.Router do
  use LiquidWeb, :router

  pipeline :browser do
    plug(:accepts, ["html"])
    plug(:fetch_session)
    plug(:fetch_live_flash)
    plug(:protect_from_forgery)
    plug(:put_secure_browser_headers)
    plug(LiquidWeb.Auth.Pipeline)
    plug(:put_root_layout, html: {AtivarWeb.Layouts, :root})
  end

  pipeline :api do
    plug(:accepts, ["json"])
  end

  pipeline :auth do
    plug(LiquidWeb.VerifyHeader)
  end

  scope "/api", LiquidWeb do
    pipe_through(:api)

    post("/login", UserController, :login)
    post("/accounts", BankAccountController, :create)
  end

  scope "/api", LiquidWeb do
    pipe_through([:api, :auth])

    get("/users/:id", UserController, :show)
    delete("/users/:id", UserController, :delete)
    put("/users/:id", UserController, :update)
    post("/users", UserController, :create)

    scope "/accounts" do
      get("/me", BankAccountController, :me)
      get("/", BankAccountController, :index)
      put("/:id", BankAccountController, :update)
      delete("/:id", BankAccountController, :delete)
    end

    scope "/transactions" do
      get("/:id", TransactionController, :show)
      post("/process", TransactionController, :process)
      post("/chargeback/:id", TransactionController, :chargeback)
    end
  end
end
