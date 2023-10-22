defmodule LiquidWeb.TransactionController do
  use LiquidWeb, :controller

  alias Liquid.Operations

  action_fallback(LiquidWeb.FallbackController)

  def process(conn, params) do
    with {:ok, transaction} <- Operations.schedule_new_transaction(params) do
      render(conn, :show, transaction: transaction)
    end
  end

  def chargeback(conn, %{"id" => id}) do
    with :ok <- Operations.schedule_transaction_chargeback(id) do
      resp(conn, :accepted, "")
    end
  end

  def show(conn, %{"id" => id}) do
    with {:ok, transaction} <- Operations.fetch_transaction(id, :schema) do
      render(conn, :show, transaction: transaction)
    end
  end
end
