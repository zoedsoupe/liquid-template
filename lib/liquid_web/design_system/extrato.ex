defmodule LiquidWeb.DesignSystem.Extrato do
  use LiquidWeb, :verified_routes

  use Phoenix.Component

  def navbar(assigns) do
    ~H"""
       <nav class="flex-center w-full" style="padding: 1.5rem; border-bottom: 1px solid #2d2d2d;">
        <ul class="profile-navbar">
          <.link navigate={~p"/app/dashboard"}>
            <Lucideicons.chevron_left class="text-white h-1 w-1" />
          </.link>
        <span class="text-white text-md">Saldo e Extrato</span>
        </ul>
      </nav>
    """
  end

  attr :current, :string, values: ~w[all income expense], default: "all"

  def tabs(assigns) do
    ~H"""
      <div class="flex-between w-full" style="padding: 0 2rem;">
        <.tab current?={@current == "all"} label="Todas" click="filter-by" filter="all" />
        <.tab current?={@current == "income"} label="Entrada" click="filter-by" filter="income" />
        <.tab current?={@current == "expense"} label="Saída" click="filter-by" filter="expense" />
      </div>
    """
  end

  attr :label, :string, required: true
  attr :current?, :boolean, default: false
  attr :click, :string, required: true
  attr :filter, :string, required: true

  defp tab(assigns) do
    ~H"""
      <span
        phx-click={@click}
        phx-value-filter={@filter}
        class={["text-white", "text-lg", @current? && "tab-active"]}
      >
        <%= @label %>
      </span>
    """
  end

  attr :transactions, :list, required: true

  def receipt(assigns) do
    ~H"""
    <div class="flex-center w-full" style="gap: 1.5rem;">
      <dl class="transactions-list">
        <div :for={{processed_at, transactions}<- @transactions} class="flex-between">
          <span class="flex-center flex-col">
            <span class="badge text-xs"><%= format_date(processed_at) %></span>
            <.transaction
              :for={transaction <- transactions}
              id={transaction.identifier}
              amount={transaction.amount}
              status={transaction.status}
              type={transaction.type} />
          </span>
        </div>
      </dl>
    </div>
    """
  end

  attr :id, :string, required: true
  attr :amount, :integer, required: true
  attr :status, :string, values: ~w[success failed pending], required: true
  attr :type, :string, values: ~w[income expense], required: true

  defp transaction(assigns) do
    ~H"""
    <div class="transaction" phx-click="trigger-summary" phx-value-transaction-id={@id} style="cursor: pointer;">
      <span class="transaction-icon">
        <Lucideicons.clock :if={@status == "pending"} class="transaction-icon" />
        <Lucideicons.arrow_down :if={@type == "income" and @status != "pending"} class="transaction-icon" />
        <Lucideicons.arrow_up :if={@type == "expense" and @status != "pending"} class="transaction-icon" />
      </span>
      <dt class="flex-start flex-col">
        <span class="text-gray text-xs"><%= format_transaction_subtitle(@type, @status) %></span>
        <span class="text-white text-sm"><%= @id %></span>
      </dt>
      <dd class="text-white text-sm"><%= @amount %></dd>
    </div>
    """
  end

  defp format_date(nil), do: "Não Processadas"

  defp format_date(%Date{} = date) do
    today = Date.utc_today()
    yesterday? = Date.compare(date, Date.add(today, -1)) == :eq

    if yesterday? do
      "Ontem"
    else
      "#{date.day}/#{date.month}/#{date.year}"
    end
  end

  defp format_status("success"), do: "Sucesso"
  defp format_status("pending"), do: "Em Processamento"
  defp format_status("failed"), do: "Falha"

  defp format_transaction_subtitle("expense", status) do
    "Saída . " <> format_status(status)
  end

  defp format_transaction_subtitle("income", status) do
    "Entrada . " <> format_status(status)
  end
end
