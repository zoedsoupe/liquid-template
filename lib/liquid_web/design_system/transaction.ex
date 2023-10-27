defmodule LiquidWeb.DesignSystem.Transaction do
  use LiquidWeb, :verified_routes

  use Phoenix.Component

  alias Liquid.Accounts
  alias Liquid.Accounts.Schemas.UserAccount
  alias Liquid.Operations.Models.Transaction
  alias LiquidWeb.DesignSystem
  alias LiquidWeb.DesignSystem.Form

  def navbar(assigns) do
    ~H"""
       <nav class="flex-center w-full" style="padding: 1.5rem; border-bottom: 1px solid #2d2d2d;">
        <ul class="profile-navbar">
          <.link navigate={~p"/app/dashboard"}>
            <Lucideicons.chevron_left class="text-white h-1 w-1" />
          </.link>
        <span class="text-white text-md">Transferir</span>
        </ul>
      </nav>
    """
  end

  def search_input(assigns) do
    ~H"""
    <div class="flex-col flex-start w-full" style="padding: 0 1.5rem; position: relative;">
      <span class="text-white text-lg" style="margin-bottom: 0.75rem;">Contato</span>
      <input type="text" name="search-contact-input" id="search-contact" class="search-input" phx-keyup="search" />
      <span class="text-white" style="position: absolute; right: 4rem; top: 2.75rem;">
        <Lucideicons.search />
      </span>
    </div>
    """
  end

  attr :accounts, :list, required: true

  def contact_list(assigns) do
    ~H"""
    <div class="flex-center w-full" style="gap: 1.5rem;">
      <dl class="contact-list">
        <.contact :for={account <- @accounts} name={account.owner_name} identifier={account.identifier} />
      </dl>
    </div>
    """
  end

  attr :name, :string, required: true
  attr :identifier, :string, required: true

  defp contact(assigns) do
    ~H"""
    <div class="contact" phx-click="transfer-to" phx-value-id={@identifier} style="cursor: pointer;">
      <dt class="flex-center" style="margin-right: 1rem;">
        <DesignSystem.user_profile size="sm" />
      </dt>
      <dd class="flex-start flex-col">
        <span class="text-white text-md"><%= @name %></span>
        <span class="text-white text-sm">ID: <%= @identifier %></span>
      </dd>
    </div>
    """
  end

  attr :account, UserAccount, required: true

  def profile_summary(assigns) do
    ~H"""
    <div class="flex-center flex-col w-full" style="padding: 1rem 1.5rem; gap: 1rem;">
      <DesignSystem.user_profile size="sm" />
      <span class="flex-center flex-col">
        <span class="text-white text-md"><%= @account.owner_name %></span>
        <span class="text-white text-xs">ID: <%= @account.identifier %></span>
      </span>
    </div>
    """
  end

  attr :account, UserAccount, required: true

  def profile_info(assigns) do
    ~H"""
    <div class="flex-start flex-col" style="gap: 1.5rem; padding: 0 1.5rem;">
      <div class="input-container" style="gap: 0.5rem;">
        <span class="text-gray text-sm">CPF</span>
        <input class="input" name="profile-info-cpf" id="profile-info" type="text" value={@account.owner_cpf} disabled />
      </div>
    </div>
    """
  end

  def action_buttons(assigns) do
    ~H"""
    <div class="flex-between" style="padding: 0 1.5rem; gap: 2rem;">
      <DesignSystem.button type="button" style="secondary" phx-click="cancel">
        Cancelar
      </DesignSystem.button>
      <DesignSystem.button type="button" style="primary" phx-click="confirm">
        Confirmar
      </DesignSystem.button>
    </div>
    """
  end

  attr :trigger_submit, :boolean, default: false
  attr :balance, :string, required: true
  attr :form, :any, required: true

  def transaction_modal(assigns) do
    ~H"""
    <.form :let={f} for={@form} phx-submit="transfer" phx-change="validate" class="transaction-modal" phx-trigger-action={@trigger_submit}>
      <span class="text-white text-lg">Quanto você quer transferir?</span>
      <Form.input field={f[:amount]} id="amount" type="tel" required />
      <span class="text-white text-md">Saldo disponível: <%= format_balance(@balance) %></span>
      <div class="flex-between" style="padding: 0 1.5rem; gap: 2rem;">
        <DesignSystem.button type="button" style="secondary" phx-click="cancel">
          Cancelar
        </DesignSystem.button>
        <DesignSystem.button type="submit" style="primary">
          Confirmar
        </DesignSystem.button>
      </div>
    </.form>
    """
  end

  defp format_balance(amount) do
    "R$ #{amount / 100}"
  end

  def close_summary(assigns) do
    ~H"""
    <.link navigate={~p"/app/extrato"}>
      <span class="h-1-5 w-1-5" style="position: absolute; right: 2rem; top: 1rem;">
        <Lucideicons.x class="text-white" />
      </span>
    </.link>
    """
  end

  def hero(assigns) do
    ~H"""
    <img src={~p"/images/pig_bank.svg"} style="margin-bottom: 2.7rem;" />
    """
  end

  attr :status, :atom, values: ~w[success failed pending]a, required: true
  attr :type, :atom, values: ~w[income expense]a, required: true

  def badge(assigns) do
    ~H"""
    <div class="transaction-badge">
      <Lucideicons.arrow_down :if={is_income?(@type, @status)} class="text-black" />
      <Lucideicons.arrow_up :if={is_expense?(@type, @status)} class="text-black" />
      <Lucideicons.x :if={is_failed?(@status)} class="text-black" />
      <span class="text-black text-sm">
        <%= cond do %>
          <% is_income?(@type, @status) -> %>Entrada
          <% is_expense?(@type, @status) -> %>Saída
          <% is_failed?(@status) -> %>Falha
        <% end %>
      </span>
    </div>
    """
  end

  defp is_income?(:income, :success), do: true
  defp is_income?(_, _), do: false

  defp is_expense?(:expense, :success), do: true
  defp is_expense?(_, _), do: false

  defp is_failed?(:failed), do: true
  defp is_failed?(_), do: false

  attr :current_account, UserAccount, required: true
  attr :transaction, Transaction, required: true

  def transaction_summary(assigns) do
    ~H"""
    <div class="flex-center flex-col">
      <span class="flex-center flex-col" style="gap: 0.5rem; margin-bottom: 3rem;">
        <span class="text-white text-xs" style="font-weight: 600;">
          <%= summary_account_name(@transaction, @current_account) %>
        </span>
        <span class="text-white text-xs">
          <%= summary_account_id(@transaction, @current_account) %>
        </span>
      </span>
      <span class="text-white text-sm" style="margin-bottom: 1.5rem;">
        <%= format_transaction_date(@transaction) %>
        <br />
        <span :if={@transaction.error_reason} class="text-white text-sm">
          <%= format_error(@transaction) %>
        </span>
      </span>
      <span class="text-white text-md" style="font-weight: 600; text-align: center; margin-bottom: 2.5rem;">
        <%= format_summary_description(@transaction) %>
      </span>
      <span class="text-white text-xl" style="font-weight: 700; margin-bottom: 2.5rem;">
       <%= format_balance(@transaction.amount) %>
      </span>
      <DesignSystem.button
        :if={can_cancel?(@transaction)}
        type="button"
        style="secondary"
        size="sm"
        phx-click="trigger-chargeback">
        Cancelar
      </DesignSystem.button>
      <DesignSystem.button
        :if={@transaction.status == :failed}
        type="button"
        style="secondary"
        size="sm"
        phx-click="transact-again">
        Tentar Novamente
      </DesignSystem.button>
    </div>
    """
  end

  defp summary_account(%Transaction{} = transaction, %UserAccount{} = account) do
    if transaction.sender_id == account.identifier do
      %{name: account.owner_name, id: account.identifier}
    else
      {:ok, sender} = Accounts.fetch_bank_account(transaction.sender_id, :schema)
      %{name: sender.owner_name, id: sender.identifier}
    end
  end

  defp summary_account_name(transaction, account) do
    %{name: name} = summary_account(transaction, account)
    name
  end

  defp summary_account_id(transaction, account) do
    %{id: id} = summary_account(transaction, account)
    id
  end

  defp format_transaction_date(%Transaction{} = transaction) do
    if transaction.processed_at do
      format = "{WDfull}, {D} de {Mfull} às {h24}h{m}"
      Timex.lformat!(transaction.processed_at, format, "pt-BR")
    else
      "Transação não chegou a ser processada!"
    end
  end

  defp format_error(%Transaction{error_reason: :invalid_sender}) do
    "Só é possível fazer transações da sua própria conta bancária"
  end

  defp format_error(%Transaction{error_reason: :insufficient_funds}) do
    "Seu saldo não é suficiente"
  end

  defp format_error(%Transaction{error_reason: :invalid_params}) do
    "Conta bancária inválida ou valor da transação inválido"
  end

  defp format_error(%Transaction{error_reason: :same_account}) do
    "Não é possível fazer transferência para sua própria conta"
  end

  defp format_error(_transaction), do: nil

  defp format_summary_description(%Transaction{} = transaction) do
    cond do
      transaction.status == :failed ->
        "Sua transferência falhou!"

      transaction.type == :income ->
        {:ok, sender} = Accounts.fetch_bank_account(transaction.sender_id, :schema)
        "Transferência recebida com sucesso de #{sender.owner_name}"

      transaction.type == :expense ->
        {:ok, receiver} = Accounts.fetch_bank_account(transaction.receiver_id, :schema)
        "Transferência enviada com sucesso para #{receiver.owner_name}"
    end
  end

  defp can_cancel?(%Transaction{} = transaction) do
    if transaction.processed_at do
      today = NaiveDateTime.utc_now()
      diff = NaiveDateTime.diff(today, transaction.processed_at, :day)

      diff <= 4 and transaction.status != :failed
    end
  end

  attr :processed_at, NaiveDateTime, required: true

  def cancel_at(assigns) do
    ~H"""
    <span class="text-white text-sm" style="margin-top: 3rem; text-align: center;">
      Você pode cancelar esta transação até o dia <%= format_cancel_date(@processed_at) %>.
      Após este período não é possível realizar o cancelamento.
    </span>
    """
  end

  defp format_cancel_date(%NaiveDateTime{} = date) do
    date = NaiveDateTime.add(date, 4, :day)
    Timex.lformat!(date, "{D}/{M}/{YYYY}", "pt-BR")
  end
end
