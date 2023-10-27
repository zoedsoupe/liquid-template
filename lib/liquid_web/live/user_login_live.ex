defmodule LiquidWeb.UserLoginLive do
  use LiquidWeb, :live_view

  def render(assigns) do
    ~H"""
    """
  end

  def mount(_params, _session, socket) do
    form = to_form(%{}, as: "user")
    {:ok, assign(socket, form: form), temporary_assigns: [form: form]}
  end
end
