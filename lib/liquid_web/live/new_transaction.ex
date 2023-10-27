defmodule LiquidWeb.NewTransactionLive do
  use LiquidWeb, :live_view

  alias Liquid.Accounts
  alias LiquidWeb.DesignSystem.Transaction

  @impl true
  def mount(_params, _session, socket) do
    accounts = Accounts.list_bank_account()
    {:ok, assign(socket, accounts: accounts)}
  end

  @impl true
  def render(assigns) do
    ~H"""
      <div class="flex-center flex-col w-full" style="gap: 2rem;">
        <Transaction.navbar />
        <Transaction.search_input />
        <Transaction.contact_list accounts={@accounts} />
      </div>
    """
  end

  @impl true
  def handle_event("transfer-to", %{"id" => identifier}, socket) do
    account = Enum.find(socket.assigns.accounts, &(&1.identifier == identifier))

    {:noreply, push_navigate(socket, to: ~p"/app/transactions/review/#{account.identifier}")}
  end

  def handle_event("search", %{"value" => ""}, socket) do
    accounts = Accounts.list_bank_account()
    {:noreply, assign(socket, accounts: accounts)}
  end

  def handle_event("search", %{"value" => name}, socket) do
    accounts =
      Enum.filter(socket.assigns.accounts, fn account ->
        String.downcase(account.owner_name) =~ String.downcase(name)
      end)

    {:noreply, assign(socket, accounts: accounts)}
  end
end
