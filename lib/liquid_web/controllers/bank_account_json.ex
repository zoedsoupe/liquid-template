defmodule LiquidWeb.BankAccountJSON do
  def show(%{user_account: account}) do
    %{data: %{user_account: account}}
  end

  def index(%{user_accounts: accounts}) do
    %{data: %{user_accounts: accounts}}
  end
end
