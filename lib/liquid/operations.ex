defmodule Liquid.Operations do
  import Liquid.Operations.Adapters.AccountTransactionAdapter
  import Liquid.Operations.Adapters.TransactionAdapter

  alias Liquid.Accounts
  alias Liquid.Accounts.Models.BankAccount
  alias Liquid.Operations.Consumer
  alias Liquid.Operations.Events.TransactEvent
  alias Liquid.Operations.Logic.TransactionLogic
  alias Liquid.Operations.Models.Transaction
  alias Liquid.Repo

  import Ecto.Query

  require Logger

  defdelegate delete_transaction(transaction), to: Repo, as: :delete

  def fetch_transaction(id, mode \\ :model) do
    query =
      from(t in Transaction,
        join: s in assoc(t, :sender),
        join: su in assoc(s, :owner),
        join: r in assoc(t, :receiver),
        join: ru in assoc(r, :owner),
        where: t.id == ^id,
        select: %{
          transaction: t,
          sender: s,
          receiver: r,
          sender_owner: su,
          receiver_owner: ru
        }
      )

    payload = Repo.one(query)

    cond do
      payload && mode == :model -> {:ok, payload.transaction}
      payload && mode == :schema -> internal_to_external(payload)
      true -> {:error, :not_found}
    end
  end

  def list_transactions(from, to) do
    query =
      from(t in Transaction,
        join: s in assoc(t, :sender),
        join: su in assoc(s, :owner),
        join: r in assoc(t, :receiver),
        join: ru in assoc(r, :owner),
        where: t.processed_at >= ^from,
        where: t.processed_at <= ^to,
        select: %{
          transaction: t,
          sender: s,
          receiver: r,
          sender_owner: su,
          receiver_owner: ru
        }
      )

    Repo.all(query)
    |> Enum.map(&internal_to_external/1)
    |> Enum.reduce_while([], fn
      {:ok, transaction}, acc -> {:cont, [transaction | acc]}
      {:error, changeset}, _ -> {:halt, changeset}
    end)
  end

  def schedule_new_transaction(params, %BankAccount{} = current_account) do
    with {:ok, transaction} <- create_transaction(params),
         {:ok, event} <- internal_to_event(transaction, current_account) do
      Consumer.process_transaction(event)
      transaction_process_scheduled_message(transaction.id)
      {:ok, transaction.id}
    end
  end

  defp create_transaction(params) do
    %Transaction{}
    |> Transaction.changeset(params)
    |> Repo.insert()
  end

  def schedule_transaction_chargeback(id) do
    Consumer.chargeback_transaction(id)
    :ok
  end

  def transact!(%TransactEvent{} = event) do
    with {:ok, sender} <- Accounts.fetch_bank_account(event.sender_identifier),
         {:ok, receiver} <- Accounts.fetch_bank_account(event.receiver_identifier),
         {:ok, current_account} <- Accounts.fetch_bank_account(event.current_account_identifier),
         {:ok, transaction} <- fetch_transaction(event.transaction_identifier),
         :ok <-
           TransactionLogic.validate_transaction(sender, receiver, current_account, event.amount),
         {:ok, :done} <- Accounts.transfer_amount_between_accounts(sender, receiver, event.amount) do
      set_transaction_processed(transaction)
    else
      :error ->
        event
        |> transfer_error_message()
        |> Logger.error()

        set_transaction_failed(event)

      {:error, :not_found} ->
        event
        |> account_does_not_exists_error_message()
        |> Logger.error()

        set_transaction_failed(event)

      {:error, validation_error} ->
        event
        |> transaction_validation_error_message(validation_error)
        |> Logger.error()

        set_transaction_failed(event, validation_error)
    end
  end

  def chargeback!(%Transaction{} = transaction) do
    with {:ok, :can_be_chargebacked} <- TransactionLogic.check_if_was_chargebacked(transaction),
         {:ok, sender} <- Accounts.fetch_bank_account(transaction.sender_id),
         {:ok, receiver} <- Accounts.fetch_bank_account(transaction.receiver_id),
         {:ok, :done} <-
           Accounts.transfer_amount_between_accounts(receiver, sender, transaction.amount),
         {:ok, _} <- set_transaction_chargebacked(transaction) do
      :ok
    else
      :error ->
        transaction
        |> transfer_error_message()
        |> Logger.error()

      {:error, :not_found} ->
        transaction
        |> account_does_not_exists_error_message()
        |> Logger.error()

      {:error, :already_chargebacked} ->
        transaction
        |> transaction_already_chargebacked_message()
        |> Logger.error()
    end
  end

  defp set_transaction_chargebacked(%Transaction{} = transaction) do
    payload = %{chargebacked_at: NaiveDateTime.utc_now()}
    transaction |> Transaction.changeset(payload) |> Repo.update()
  end

  defp set_transaction_failed(%TransactEvent{} = event) do
    with {:ok, transaction} <- fetch_transaction(event.transaction_identifier) do
      transaction |> Transaction.changeset(%{status: :failed}) |> Repo.update()
    end
  end

  defp set_transaction_failed(%TransactEvent{} = event, error_reason)
       when is_atom(error_reason) do
    with {:ok, transaction} <- fetch_transaction(event.transaction_identifier) do
      transaction
      |> Transaction.changeset(%{status: :failed, error_reason: error_reason})
      |> Repo.update()
    end
  end

  defp set_transaction_processed(%Transaction{} = transaction) do
    payload = %{status: :success, processed_at: NaiveDateTime.utc_now()}
    transaction |> Transaction.changeset(payload) |> Repo.update()
  end

  def transaction_does_not_exist_log(ident) do
    Logger.error("[#{__MODULE__}] ==> Transaction #{ident} does not exist")
  end

  defp transaction_validation_error_message(event, error) do
    "[#{__MODULE__}] ==> Transaction #{Jason.encode!(event)} failed with: #{to_string(error)}"
  end

  defp account_does_not_exists_error_message(event) do
    "[#{__MODULE__}] ==> Transaction #{Jason.encode!(event)} failed because one of accounts does not exist"
  end

  defp transaction_process_scheduled_message(identifier) do
    "[#{__MODULE__}] ==> Transaction scheduled: #{identifier}"
  end

  defp transfer_error_message(event) do
    "[#{__MODULE__}] ==> Transaction #{Jason.encode!(event)} failed transfer between accounts"
  end

  defp transaction_already_chargebacked_message(transaction) do
    "[#{__MODULE__}] ==> Transaction #{transaction.id} was already chargebacked"
  end
end
