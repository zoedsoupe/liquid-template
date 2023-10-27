defmodule LiquidWeb.ExtratoLive do
  use LiquidWeb, :live_view

  alias Liquid.Operations

  alias LiquidWeb.DesignSystem.Dashboard
  alias LiquidWeb.DesignSystem.Extrato

  @impl true
  def mount(_params, _session, socket) do
  end

  @impl true
  def render(assigns) do
    ~H"""
    """
  end

  @impl true
  def handle_event("trigger-summary", %{"transaction-id" => transaction_id}, socket) do
    {:noreply, push_navigate(socket, to: ~p"/app/transactions/#{transaction_id}")}
  end

  def handle_event("filter-by", %{"filter" => filter}, socket) do
    account = socket.assigns.current_user.bank_account

    case filter do
      "income" ->
        transactions =
          account.id
          |> Operations.list_transactions_by_processed_at()
          |> Enum.map(&filter_by(&1, "income"))

        {:noreply, assign(socket, transactions: transactions, current_tab: "income")}

      "expense" ->
        transactions =
          account.id
          |> Operations.list_transactions_by_processed_at()
          |> Enum.map(&filter_by(&1, "expense"))

        {:noreply, assign(socket, transactions: transactions, current_tab: "expense")}

      _ ->
        transactions = Operations.list_transactions_by_processed_at(account.id)
        {:noreply, assign(socket, transactions: transactions, current_tab: "all")}
    end
  end

  defp filter_by({processed_at, transactions}, type) do
    {processed_at, Enum.filter(transactions, &(&1.type == type))}
  end
end
