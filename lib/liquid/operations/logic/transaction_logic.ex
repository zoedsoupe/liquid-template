defmodule Liquid.Operations.Logic.TransactionLogic do
  @moduledoc "Validation logic for Transaction"

  alias Liquid.Accounts.Models.BankAccount
  alias Liquid.Operations.Models.Transaction

  def check_if_was_chargebacked(%Transaction{} = transaction) do
    if transaction.chargebacked_at do
      {:error, :already_chargebacked}
    else
      {:ok, :can_be_chargebacked}
    end
  end

  def validate_transaction(%BankAccount{} = sender, %BankAccount{} = receiver, amount) do
    cond do
      !sender or !receiver or !amount -> {:error, :invalid_params}
      sender.id == receiver.id -> {:error, :same_account}
      sender.balance < amount -> {:error, :insufficient_funds}
      true -> :ok
    end
  end
end
