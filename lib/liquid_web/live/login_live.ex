defmodule LiquidWeb.LoginLive do
  use LiquidWeb, :live_view

  def render(assigns) do
    ~H"""
    <div class="mx-auto max-w-sm">
      <.header>
        Sign in to account
      </.header>

      <Form.render for={@form} id="login_form" action={~p"/log_in"} phx-update="ignore">
        <Form.input field={@form[:email]} id="#user_cpf" type="text" label="Email" required />
        <Form.input field={@form[:password]} type="password" label="Password" required />

        <:actions>
          <.button phx-disable-with="Signing in..." class="w-full">
            Sign in <span aria-hidden="true">→</span>
          </.button>
        </:actions>
      </Form.render>
    </div>
    """
  end

  def mount(_params, _session, socket) do
    email = live_flash(socket.assigns.flash, :email)
    form = to_form(%{"email" => email}, as: "user")
    {:ok, assign(socket, form: form), temporary_assigns: [form: form]}
  end
end
