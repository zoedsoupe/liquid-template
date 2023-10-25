defmodule Liquid.Operations.Adapters.TransactionAdapter do
  alias Liquid.Accounts.Models.BankAccount
  alias Liquid.Operations.Events.TransactEvent
  alias Liquid.Operations.Models.Transaction

  def internal_to_event(%Transaction{} = transaction, %BankAccount{} = current_account) do
    TransactEvent.parse(%{
      amount: transaction.amount,
      sender_identifier: transaction.sender_id,
      receiver_identifier: transaction.receiver_id,
      transaction_identifier: transaction.id,
      current_account_identifier: current_account.id
    })
  end
end
