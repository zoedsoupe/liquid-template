defmodule LiquidWeb.UserLoginLive do
  use LiquidWeb, :live_view

  def render(assigns) do
    ~H"""
    <div class="mx-auto max-w-sm">
      <.header class="text-center">
        Sign in to account
        <:subtitle>
          Don't have an account?
          <.link navigate={~p"/"} class="font-semibold text-brand hover:underline">
            Sign up
          </.link>
          for an account now.
        </:subtitle>
      </.header>

      <Form.render for={@form} id="login_form" action={~p"/login"} phx-update="ignore">
        <Form.input field={@form[:email]} id="user_cpf" type="text" label="Email" required />
        <Form.input field={@form[:password]} type="password" label="Password" required />

        <:actions>
          <.button phx-disable-with="Acessando..." class="w-full">
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
