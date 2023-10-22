defmodule Liquid.Operations.Adapters.TransactionAdapter do
  alias Liquid.Operations.Events.TransactEvent
  alias Liquid.Operations.Models.Transaction

  def internal_to_event(%Transaction{} = transaction) do
    TransactEvent.parse(%{
      amount: transaction.amount,
      sender_identifier: transaction.sender_id,
      receiver_identifier: transaction.receiver_id,
      transaction_identifier: transaction.id
    })
  end
end
