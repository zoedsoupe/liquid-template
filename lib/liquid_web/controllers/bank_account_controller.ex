defmodule LiquidWeb.BankAccountController do
  use LiquidWeb, :controller

  alias Liquid.Accounts

  action_fallback(LiquidWeb.FallbackController)

  def me(conn, _params) do
    user = conn.assigns.user

    with {:ok, bank_account} <- Accounts.fetch_bank_account_by_owner_id(user.id) do
      render(conn, :show, user_account: bank_account)
    end
  end

  def index(conn, _params) do
    render(conn, :index, user_accounts: Accounts.list_bank_account())
  end

  def create(conn, params) do
    with {:ok, bank_account} <- Accounts.register_account(params) do
      render(conn, :show, user_account: bank_account)
    end
  end

  def update(conn, %{"id" => id} = params) do
    with {:ok, bank_account} <- Accounts.fetch_bank_account(id),
         {:ok, bank_account} <- Accounts.update_bank_account(bank_account, params) do
      render(conn, :show, user_account: bank_account)
    end
  end

  def delete(conn, %{"id" => id}) do
    with {:ok, bank_account} <- Accounts.fetch_bank_account(id),
         {:ok, _} <-
           Accounts.delete_account(bank_account) do
      render(conn, :show, user_account: bank_account)
    end
  end
end
