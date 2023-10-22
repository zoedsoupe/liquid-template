defmodule Liquid.Operations.Consumer do
  @moduledoc "Consumes Transaction events and process them"

  use GenServer

  alias Liquid.Operations

  require Logger

  def start_link(opts) do
    GenServer.start_link(__MODULE__, opts, name: __MODULE__)
  end

  def process_transaction(event) do
    payload = {:process_transaction, event}
    GenServer.cast(__MODULE__, payload)
  end

  def chargeback_transaction(identifier) do
    payload = {:chargeback_transaction, %{transaction_identifier: identifier}}
    GenServer.cast(__MODULE__, payload)
  end

  @impl true
  def init(_dummy) do
    {:ok, []}
  end

  @impl true
  def handle_cast({:chargeback_transaction, %{transaction_identifier: identifier}}, _state) do
    case Operations.fetch_transaction(identifier) do
      {:ok, transaction} -> Operations.chargeback!(transaction)
      _ -> Operations.transaction_does_not_exist_log(identifier)
    end

    {:noreply, :processing}
  end

  def handle_cast({:process_transaction, event}, _) do
    Operations.transact!(event)
    {:noreply, :processing}
  end
end
