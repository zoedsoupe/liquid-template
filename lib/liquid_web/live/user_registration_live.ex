defmodule LiquidWeb.UserRegistrationLive do
  use LiquidWeb, :live_view

  alias Liquid.Auth
  alias Liquid.Auth.Models.User

  def render(assigns) do
    ~H"""
    <div class="mx-auto max-w-sm">
      <.header class="text-center">
        Register for an account
        <:subtitle>
          Already registered?
          <.link navigate={~p"/login"} class="font-semibold text-brand hover:underline">
            Sign in
          </.link>
          to your account now.
        </:subtitle>
      </.header>

      <Form.render
        for={@form}
        id="registration_form"
        phx-submit="save"
        phx-change="validate"
        phx-trigger-action={@trigger_submit}
        action={~p"/accounts/log_in?_action=registered"}
        method="post"
      >
        <Form.error :if={@check_errors}>
          Oops, something went wrong! Please check the errors below.
        </Form.error>

        <Form.input field={@form[:cpf]} id="user_cpf" type="text" label="Seu CPF" required />
        <Form.input field={@form[:password]} type="password" label="Sua Senha" required />

        <:actions>
          <.button phx-disable-with="Criando conta..." class="w-full">Cadastrar Conta</.button>
        </:actions>
      </Form.render>
    </div>
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
    case Auth.register_user(user_params) do
      {:ok, user} ->
        changeset = Auth.change_user_registration(user)
        {:noreply, socket |> assign(trigger_submit: true) |> assign_form(changeset)}

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, socket |> assign(check_errors: true) |> assign_form(changeset)}
    end
  end

  def handle_event("validate", %{"user" => user_params}, socket) do
    changeset = Auth.change_user_registration(%User{}, user_params)
    {:noreply, assign_form(socket, Map.put(changeset, :action, :validate))}
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
