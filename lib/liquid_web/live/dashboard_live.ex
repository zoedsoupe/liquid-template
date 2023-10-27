defmodule LiquidWeb.DashboardLive do
  use LiquidWeb, :live_view

  alias LiquidWeb.DesignSystem.Dashboard

  def render(assigns) do
    ~H"""
    	<div style="gap: 2.5rem;" class="flex-center flex-col w-full">
    		<Dashboard.navbar user_name={@current_user.first_name} />
        <Dashboard.balance amount={@current_user.bank_account.balance} />
        <Dashboard.actions />
        <Dashboard.call_to_action />
    	</div>
    """
  end
end
