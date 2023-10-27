defmodule LiquidWeb.DesignSystem.Dashboard do
  use LiquidWeb, :verified_routes
  use Phoenix.Component

  alias LiquidWeb.DesignSystem

  attr :user_name, :string, required: true

  def navbar(assigns) do
    ~H"""
     <nav class="flex-center w-full" style="padding: 1.5rem; border-bottom: 1px solid #2d2d2d;">
      <ul class="profile-navbar">
        <span class="flex-center" style="width: 7.25rem;">
          <DesignSystem.user_profile size="sm" />
          <span style="margin-left: 0.75rem;" class="text-white text-md">
            Olá, <%= @user_name %>
          </span>
        </span>
        <.link navigate={~p"/app/profile"}>
          <Lucideicons.settings class="text-white h-1 w-1" />
        </.link>
      </ul>
    </nav>
    """
  end

  attr :amount, :integer, required: true

  def balance(assigns) do
    ~H"""
      <div class="balance-summary">
        <span class="flex-start flex-col">
          <span class="text-white text-sm">Saldo</span>
           <span class="text-white text-2xl"><%= format_amount(@amount) %></span>
        </span>
      </div>
    """
  end

  def actions(assigns) do
    ~H"""
      <div class="flex-between w-full" style="padding: 0 1.5rem;">
      <.action_button path={~p"/app/extrato"} label="Extrato">
        <Lucideicons.banknote class="text-orange h-1-5 w-1-5" />
      </.action_button>
      <.action_button path={~p"/app/transactions/new"} label="Transferir">
        <Lucideicons.arrow_left_right class="text-orange h-1-5 w-1-5" />
      </.action_button>
    </div>
    """
  end

  attr :path, :string, required: true
  attr :label, :string, required: true

  slot :inner_block

  defp action_button(assigns) do
    ~H"""
      <.link navigate={@path} class="btn-action flex-between">
        <%= render_slot(@inner_block) %>
        <span class="text-white text-md"><%= @label %></span>
      </.link>
    """
  end

  defp format_amount(amount) when is_integer(amount) do
    "R$ #{amount / 100}"
  end

  def call_to_action(assigns) do
    ~H"""
      <div class="flex-center w-full" style="padding: 0 1.5rem;">
        <img src={~p"/images/request_card.svg"} class="w-full" />
      </div>
    """
  end
end
