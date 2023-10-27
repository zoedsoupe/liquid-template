defmodule LiquidWeb.UserProfileLive do
  use LiquidWeb, :live_view

  alias Liquid.Accounts
  alias Liquid.Auth
  alias Liquid.Auth.Models.User

  @impl true
  def mount(_params, _session, socket) do
    changeset = Auth.change_user_registration(socket.assigns.current_user, %{}, :update)

    {:ok,
     socket
     |> assign(check_errors: false)
     |> assign_form(changeset)
     |> assign(trigger_submit: false)}
  end

  @impl true
  def render(assigns) do
    ~H"""
      <div class="flex-center flex-col w-full default-padding">
        <DesignSystem.user_profile size="lg" />

        <Form.render
          for={@form}
          id="profile_form"
          phx-submit="save"
          phx-change="validate"
          class="w-full"
        phx-trigger-action={@trigger_submit}
        action={~p"/logout"}
        method="delete"
        >
          <Form.error :if={@check_errors}>
            Parece que alguns campos são inválidos, confirme os dados abaixo!
          </Form.error>

          <Form.input field={@form[:cpf]} id="user_cpf" type="text" label="Seu CPF" placeholder="000.000.000-00" class="text-md" disabled />
          <Form.input field={@form[:first_name]} type="text" label="Primeiro nome" />
          <Form.input field={@form[:last_name]} type="text" label="Sobrenome" />
          <Form.input field={@form[:password]} type="password" label="Sua Senha" />

          <:actions>
            <.button type="submit" size="lg" class="text-lg" phx-disable-with="Atualizando conta...">Atualizar Conta</.button>
          </:actions>
          <.button phx-click="logout" size="lg" style="secondary" class="text-lg">Desconectar</.button>
        </Form.render>
      </div>
    """
  end

  @impl true
  def handle_event("logout", _, socket) do
    {:noreply, assign(socket, trigger_submit: true)}
  end

  def handle_event("save", %{"user" => user_params}, socket) do
    account = socket.assigns.current_user.bank_account

    with {:ok, account} <- Accounts.update_bank_account(account, user_params),
         {:ok, user} <- Auth.fetch_user_by_cpf(account.owner_cpf) do
      changeset = Auth.change_user_registration(user, %{}, :update)
      {:noreply, assign_form(socket, changeset)}
    else
      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply,
         socket
         |> assign(check_errors: true)
         |> assign_form(changeset)}
    end
  end

  def handle_event("validate", %{"user" => user_params}, socket) do
    changeset = Auth.change_user_registration(%User{}, user_params, :update)
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
