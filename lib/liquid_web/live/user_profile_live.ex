defmodule LiquidWeb.UserProfileLive do
  use LiquidWeb, :live_view

  alias Liquid.Accounts
  alias Liquid.Auth
  alias Liquid.Auth.Models.User

  @impl true
  def mount(_params, _session, socket) do
  end

  @impl true
  def render(assigns) do
    ~H"""
    """
  end

  @impl true
  def handle_event("logout", _, socket) do
    {:noreply, assign(socket, trigger_submit: true)}
  end

  def handle_event("save", %{"user" => user_params}, socket) do
  end

  def handle_event("validate", %{"user" => user_params}, socket) do
  end

  defp assign_form(socket, %Ecto.Changeset{} = changeset) do
    form = to_form(changeset, as: "user")

    if changeset.valid? do
      assign(socket, form: form, check_errors: false)
    else
      assign(socket, form: form)
    end
  end
end
