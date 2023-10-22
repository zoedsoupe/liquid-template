defmodule LiquidWeb.TransactionJSON do
  def show(%{transaction: transaction}) do
    %{data: %{transaction: transaction}}
  end
end
