defmodule LiquidWeb.ReviewTransactionLive do
  use LiquidWeb, :live_view

  alias Liquid.Accounts
  alias Liquid.Operations
  alias Liquid.Operations.Schemas.NewTransaction
  alias LiquidWeb.DesignSystem.Transaction

  @impl true
  def mount(%{"id" => account_id}, _session, socket) do
    {:ok, account} = Accounts.fetch_bank_account(account_id, :schema)
    current_account = socket.assigns.current_user.bank_account

    changeset =
      NewTransaction.changeset(
        %NewTransaction{},
        %{sender_id: current_account.id, receiver_id: account.identifier},
        current_account.balance
      )

    {:ok,
     socket
     |> assign(trigger_submit: false)
     |> assign(account: account)
     |> assign(form: changeset)
     |> assign(show_modal: false)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    	<div class="flex-col flex-center w-full" style="gap: 2rem; position: relative;">
        <Transaction.navbar />
    		<Transaction.profile_summary account={@account} />
        <Transaction.profile_info account={@account} />
        <Transaction.action_buttons />
        <Transaction.transaction_modal :if={@show_modal} form={@form} balance={@current_user.bank_account.balance} trigger_submit={@trigger_submit} />
     	</div>
    """
  end

  @impl true
  def handle_event("cancel", _, socket) do
    {:noreply, redirect(socket, to: ~p"/app/dashboard")}
  end

  def handle_event("confirm", _, socket) do
    {:noreply,
     socket
     |> assign(show_modal: true)
     |> push_event("mask-input", %{})}
  end

  def handle_event("validate", %{"new_transaction" => %{"amount" => amount}}, socket) do
    amount = to_integer(amount)
    balance = socket.assigns.current_user.bank_account.balance
    sender = socket.assigns.current_user.bank_account
    receiver = socket.assigns.account
    params = %{sender_id: sender.id, receiver_id: receiver.identifier, amount: amount}
    changeset = NewTransaction.changeset(params, balance)
    {:noreply, assign_form(socket, Map.put(changeset, :action, :validate))}
  end

  def handle_event("transfer", %{"new_transaction" => %{"amount" => amount}}, socket) do
    amount = to_integer(amount)
    sender = socket.assigns.current_user.bank_account
    receiver = socket.assigns.account
    params = %{sender_id: sender.id, receiver_id: receiver.identifier, amount: amount}

    with %Ecto.Changeset{valid?: true} = changeset <-
           NewTransaction.changeset(params, sender.balance),
         {:ok, _} <- Operations.schedule_new_transaction(params, sender) do
      {:noreply,
       socket
       |> assign(trigger_submit: true)
       |> assign_form(changeset)
       |> redirect(to: ~p"/app/extrato")}
    else
      %Ecto.Changeset{valid?: false} = changeset ->
        {:noreply, assign_form(socket, Map.put(changeset, :action, :validate))}
    end
  end

  defp to_integer(""), do: 0

  defp to_integer(amount) do
    amount
    |> Money.parse!(:BRL)
    |> Money.to_decimal()
    |> Decimal.to_integer()
  end

  defp assign_form(socket, %Ecto.Changeset{} = changeset) do
    form = to_form(changeset)

    if changeset.valid? do
      assign(socket, form: form, check_errors: false)
    else
      assign(socket, form: form)
    end
  end
end
