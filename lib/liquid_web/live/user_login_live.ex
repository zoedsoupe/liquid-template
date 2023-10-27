defmodule LiquidWeb.UserLoginLive do
  use LiquidWeb, :live_view

  def render(assigns) do
    ~H"""
    <div class="flex-center flex-col w-full default-padding">
      <DesignSystem.user_profile size="lg" />

      <Form.render for={@form} id="login_form" action={~p"/login"} phx-update="ignore">
        <Form.input field={@form[:cpf]} id="user_cpf" type="text" label="CPF" required />
        <Form.input field={@form[:password]} type="password" label="Password" required />

        <:actions>
          <.button type="submit" style="primary" size="lg" class="text-lg" phx-disable-with="Acessando...">
            Entrar
          </.button>
        </:actions>

          <.link navigate={~p"/register"} class="text-white text-md">
            Não possui conta? Cadastre-se já!
          </.link>
      </Form.render>
    </div>
    """
  end

  def mount(_params, _session, socket) do
    form = to_form(%{}, as: "user")
    {:ok, assign(socket, form: form), temporary_assigns: [form: form]}
  end
end
