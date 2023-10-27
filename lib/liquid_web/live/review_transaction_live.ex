defmodule LiquidWeb.ReviewTransactionLive do
  use LiquidWeb, :live_view

  alias Liquid.Accounts
  alias Liquid.Operations
  alias Liquid.Operations.Schemas.NewTransaction
  alias LiquidWeb.DesignSystem.Transaction

  @impl true
  def mount(%{"id" => account_id}, _session, socket) do
  end

  @impl true
  def render(assigns) do
    ~H"""
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
  end

  def handle_event("transfer", %{"new_transaction" => %{"amount" => amount}}, socket) do
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
