defmodule Liquid.Accounts do
  alias Liquid.Auth
  alias Liquid.Accounts.Adapters.UserAccountAdapter
  alias Liquid.Accounts.Models.BankAccount
  alias Liquid.Repo

  import Ecto.Query

  def fetch_bank_account(id, mode \\ :model) do
    query = from(a in BankAccount, select: a, where: a.id == ^id, preload: [:owner])
    account = Repo.one(query)

    cond do
      account && mode == :model ->
        {:ok, account}

      account && mode == :schema ->
        UserAccountAdapter.internal_to_external(account.owner, account)

      !account ->
        {:error, :not_found}
    end
  end

  def fetch_bank_account_by_owner_id(owner_id, mode \\ :model) do
    query = from(a in BankAccount, select: a, where: a.owner_id == ^owner_id, preload: [:owner])
    account = Repo.one(query)

    cond do
      account && mode == :model ->
        {:ok, account}

      account && mode == :schema ->
        UserAccountAdapter.internal_to_external(account.owner, account)

      !account ->
        {:error, :not_found}
    end
  end

  def list_bank_account do
    BankAccount
    |> Repo.all()
    |> Enum.map(&Repo.preload(&1, [:owner]))
    |> Enum.map(&UserAccountAdapter.internal_to_external(&1.owner, &1))
    |> Enum.reduce_while([], fn
      {:ok, user_account}, acc -> {:cont, [user_account | acc]}
      {:error, changeset}, _ -> {:halt, changeset}
    end)
  end

  def update_bank_account(account, params) do
    Repo.transaction(fn ->
      with {:ok, user} <- Auth.fetch_user(account.owner_id),
           {:ok, user} <- Auth.update_user(user, params),
           {:ok, bank_account} <- update_bank_account(account, params, user),
           {:ok, user_account} <- UserAccountAdapter.internal_to_external(user, bank_account) do
        user_account
      else
        {:error, changeset} -> Repo.rollback(changeset)
      end
    end)
  end

  defp update_bank_account(bank_account, params, user) do
    params = Map.put(params, :owner_id, user.id)

    bank_account
    |> BankAccount.changeset(params)
    |> Repo.update()
  end

  def register_account(params) do
    Repo.transaction(fn ->
      with {:ok, user} <- Auth.register_user(params),
           {:ok, bank_account} <- create_bank_account(params, user),
           {:ok, user_account} <- UserAccountAdapter.internal_to_external(user, bank_account) do
        user_account
      else
        {:error, changeset} -> Repo.rollback(changeset)
      end
    end)
  end

  defp create_bank_account(params, user) do
    params = Map.put(params, :owner_id, user.id)

    %BankAccount{}
    |> BankAccount.changeset(params)
    |> Repo.insert()
  end

  def delete_account(account) do
    with {:ok, _user} <- Auth.delete_user(account.owner) do
      Repo.delete(account)
    end
  end

  def transfer_amount_between_accounts(sender, receiver, amount) do
    sender_attrs = withdrawl_amount(sender, amount)
    receiver_attrs = deposit_amount(receiver, amount)

    Repo.transaction(fn ->
      with {:ok, _} <- BankAccount.changeset(sender, sender_attrs) |> Repo.update(),
           {:ok, _} <- BankAccount.changeset(receiver, receiver_attrs) |> Repo.update() do
        :done
      else
        {:error, changeset} -> Repo.rollback(changeset)
      end
    end)
  end

  defp withdrawl_amount(%BankAccount{} = sender, amount) do
    sender
    |> Map.from_struct()
    |> Map.update(:balance, sender.balance, &Kernel.-(&1, amount))
  end

  defp deposit_amount(%BankAccount{} = receiver, amount) do
    receiver
    |> Map.from_struct()
    |> Map.update(:balance, receiver.balance, &Kernel.+(&1, amount))
  end
end
