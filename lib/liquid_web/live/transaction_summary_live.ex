defmodule LiquidWeb.TransactionSummaryLive do
  use LiquidWeb, :live_view

  alias Liquid.Accounts
  alias Liquid.Operations
  alias LiquidWeb.DesignSystem.Transaction

  @impl true
  def mount(%{"id" => transaction_id}, _session, socket) do
    {:ok, transaction} = Operations.fetch_transaction(transaction_id)
    account_id = socket.assigns.current_user.bank_account.id
    {:ok, current_account} = Accounts.fetch_bank_account(account_id, :schema)
    {:ok, assign(socket, transaction: transaction, current_account: current_account)}
  end

  @impl true
  def render(assigns) do
    ~H"""
     <div class="flex-center flex-col w-full" style="position: relative;">
    	<Transaction.close_summary />
      <Transaction.hero />
      <Transaction.badge type={@transaction.type} status={@transaction.status} />
      <Transaction.transaction_summary transaction={@transaction} current_account={@current_account} />
      <Transaction.cancel_at :if={@transaction.processed_at} processed_at={@transaction.processed_at} />
    </div>
    """
  end

  @impl true
  def handle_event("transact-again", _, socket) do
    transaction = socket.assigns.transaction
    current_account = socket.assigns.current_account
    {:ok, account} = Accounts.fetch_bank_account(current_account.identifier)

    params = %{
      sender_id: transaction.sender_id,
      receiver_id: transaction.receiver_id,
      amount: transaction.amount
    }

    {:ok, _} = Operations.schedule_new_transaction(params, account)
    {:noreply, redirect(socket, to: ~p"/app/extrato")}
  end

  def handle_event("trigger-chargeback", _, socket) do
    transaction = socket.assigns.transaction
    :ok = Operations.schedule_transaction_chargeback(transaction.id)
    {:noreply, redirect(socket, to: ~p"/app/extrato")}
  end
end
