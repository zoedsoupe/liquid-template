defmodule LiquidWeb.UserRegistrationLive do
  use LiquidWeb, :live_view

  alias Liquid.Accounts
  alias Liquid.Auth
  alias Liquid.Auth.Models.User

  def render(assigns) do
    ~H"""
    <div class="flex-center flex-col w-full">
      <span class="user-profile-container">
       <Lucideicons.user class="icon text-black" />
      </span>

      <Form.render
        for={@form}
        id="registration_form"
        phx-submit="save"
        phx-change="validate"
        phx-trigger-action={@trigger_submit}
        action={~p"/accounts/log_in?_action=registered"}
        method="post"
    class="w-full"
      >
        <Form.error :if={@check_errors}>
          Parece que alguns campos são inválidos, confirme os dados abaixo!
        </Form.error>

        <Form.input field={@form[:cpf]} id="user_cpf" type="text" label="Seu CPF" placeholder="000.000.000-00" required />
        <Form.input field={@form[:first_name]} type="text" label="Primeiro nome" required />
        <Form.input field={@form[:last_name]} type="text" label="Sobrenome" required />
        <Form.input field={@form[:password]} type="password" label="Sua Senha" required />

        <:actions>
          <.button size="lg" class="text-lg" phx-disable-with="Criando conta...">Cadastrar Conta</.button>
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
    case Accounts.register_account(user_params) do
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
