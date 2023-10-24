defmodule LiquidWeb.Router do
  use LiquidWeb, :router

  import LiquidWeb.UserAuth

  pipeline :browser do
    plug(:accepts, ["html"])
    plug(:fetch_session)
    plug(:fetch_live_flash)
    plug(:protect_from_forgery)
    plug(:put_secure_browser_headers)
    plug(:put_root_layout, html: {AtivarWeb.Layouts, :root})
  end

  pipeline :api do
    plug(:accepts, ["json"])
  end

  pipeline :auth do
    plug(LiquidWeb.VerifyHeader)
  end

  scope "/", LiquidWeb do
    live("/", UserRegistrationLive, :render)
    live("/design-system", DesignSystemLive, :render)

    live_session :redirect_auth,
      on_mount: [{LiquidWeb.UserAuth, :redirect_if_user_is_authenticated}] do
      live("/login", UserLoginLive, :render)
    end

    scope "/app" do
      live_session :authenticated, on_mount: [{LiquidWeb.UserAuth, :ensure_authenticated}] do
        live("/dashboard", DashboardLive, :render)
      end
    end
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

  ## Authentication routes

  scope "/", LiquidWeb do
    pipe_through([:browser, :redirect_if_user_is_authenticated])

    live_session :redirect_if_user_is_authenticated,
      on_mount: [{LiquidWeb.UserAuth, :redirect_if_user_is_authenticated}] do
      live("/accounts/register", UserRegistrationLive, :new)
      live("/accounts/log_in", UserLoginLive, :new)
      live("/accounts/reset_password", UserForgotPasswordLive, :new)
      live("/accounts/reset_password/:token", UserResetPasswordLive, :edit)
    end

    post("/accounts/log_in", UserSessionController, :create)
  end

  scope "/", LiquidWeb do
    pipe_through([:browser, :require_authenticated_user])

    live_session :require_authenticated_user,
      on_mount: [{LiquidWeb.UserAuth, :ensure_authenticated}] do
      live("/accounts/settings", UserSettingsLive, :edit)
      live("/accounts/settings/confirm_email/:token", UserSettingsLive, :confirm_email)
    end
  end

  scope "/", LiquidWeb do
    pipe_through([:browser])

    delete("/accounts/log_out", UserSessionController, :delete)

    live_session :current_user,
      on_mount: [{LiquidWeb.UserAuth, :mount_current_user}] do
      live("/accounts/confirm/:token", UserConfirmationLive, :edit)
      live("/accounts/confirm", UserConfirmationInstructionsLive, :new)
    end
  end
end
