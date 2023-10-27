defmodule LiquidWeb.TransactionSummaryLive do
  use LiquidWeb, :live_view

  alias Liquid.Accounts
  alias Liquid.Operations
  alias LiquidWeb.DesignSystem.Transaction

  @impl true
  def mount(%{"id" => transaction_id}, _session, socket) do
  end

  @impl true
  def render(assigns) do
    ~H"""
    """
  end

  @impl true
  def handle_event("transact-again", _, socket) do
  end

  def handle_event("trigger-chargeback", _, socket) do
  end
end
