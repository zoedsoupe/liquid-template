defmodule Liquid.Accounts.Adapters.UserAccountAdapter do
  alias Liquid.Auth.Models.User
  alias Liquid.Accounts.Schemas.UserAccount
  alias Liquid.Accounts.Models.BankAccount

  def internal_to_external(%User{} = user, %BankAccount{} = account) do
    params = %{
      owner_name: format_name(user),
      balance: format_balance(account.balance),
      identifier: account.id
    }

    params
    |> UserAccount.changeset()
    |> Ecto.Changeset.apply_action(:parse)
  end

  defp format_name(%User{} = user) do
    String.trim(user.first_name <> " " <> user.last_name)
  end

  defp format_balance(balance) when is_integer(balance) do
    "R$ #{balance / 100}"
  end
end
