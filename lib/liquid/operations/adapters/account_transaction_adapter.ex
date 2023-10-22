defmodule Liquid.Operations.Adapters.AccountTransactionAdapter do
  alias Liquid.Accounts.Adapters.UserAccountAdapter
  alias Liquid.Operations.Schemas.AccountTransaction

  def internal_to_external(%{transaction: transaction} = params) do
    %{
      sender: sender,
      receiver: receiver,
      sender_owner: sender_user,
      receiver_owner: receiver_user
    } =
      params

    with {:ok, sender} <- UserAccountAdapter.internal_to_external(sender_user, sender),
         {:ok, receiver} <- UserAccountAdapter.internal_to_external(receiver_user, receiver) do
      AccountTransaction.parse(%{
        identifier: transaction.id,
        amount: format_balance(transaction.amount),
        processed_at: maybe_naive_date_time(transaction.processed_at),
        chargebacked_at: maybe_naive_date_time(transaction.chargebacked_at),
        sender: sender,
        receiver: receiver
      })
    end
  end

  defp maybe_naive_date_time(%NaiveDateTime{} = naive) do
    NaiveDateTime.to_iso8601(naive)
  end

  defp maybe_naive_date_time(nil), do: nil

  defp format_balance(balance) when is_integer(balance) do
    "R$ #{balance / 100}"
  end
end
