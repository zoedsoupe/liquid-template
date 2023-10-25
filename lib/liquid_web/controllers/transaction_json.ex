defmodule LiquidWeb.TransactionJSON do
  def show(%{transaction: %{error_reason: nil} = transaction}) do
    %{data: %{transaction: Map.drop(transaction, [:error])}}
  end

  def show(%{transaction: transaction}) do
    %{data: %{transaction: Map.take(transaction, [:identifier, :error])}}
  end

  def show(%{id: transaction_id}) do
    %{data: %{transaction: transaction_id, message: "Transaction scheduled to be processed"}}
  end
end
