defmodule Liquid.Operations.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      Liquid.Operations.Repo,
      {DNSCluster, query: Application.get_env(:liquid_operations, :dns_cluster_query) || :ignore},
      Liquid.OperationsWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Liquid.Operations.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    Liquid.OperationsWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
