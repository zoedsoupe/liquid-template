defmodule LiquidWeb.UserRegistrationLive do
  use LiquidWeb, :live_view

  alias Liquid.Accounts
  alias Liquid.Auth
  alias Liquid.Auth.Models.User

  def render(assigns) do
    ~H"""
    """
  end

  def mount(_params, _session, socket) do
    changeset = Auth.change_user_registration(%User{})

    socket =
      socket
      |> assign(trigger_submit: false, check_errors: false)
      |> assign_form(changeset)

    {:ok, socket, temporary_assigns: [form: nil]}
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
