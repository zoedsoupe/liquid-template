defmodule Release do
  @moduledoc """
  Documentation for `Release`.
  """

  @apps ~w[liquid_auth liquid_accounts liquid_operations]a

  def migrate do
    load_app()

    for repo <- repos() do
      {:ok, _, _} =
        Ecto.Migrator.with_repo(repo, &Ecto.Migrator.run(&1, :up, all: true))
    end
  end

  def rollback(repo, version) do
    load_app()
    {:ok, _, _} = Ecto.Migrator.with_repo(repo, &Ecto.Migrator.run(&1, :down, to: version))
  end

  defp load_app do
    Enum.each(@apps, &Application.load/1)
  end

  defp repos do
    Enum.reduce(@apps, [], &(Application.fetch_env!(&1, :ecto_repos) ++ &2))
  end
end
