defmodule Liquid.Accounts.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      Liquid.Accounts.Repo,
      {DNSCluster, query: Application.get_env(:liquid_accounts, :dns_cluster_query) || :ignore},
      Liquid.AccountsWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Liquid.Accounts.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    Liquid.AccountsWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
