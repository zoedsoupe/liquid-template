defmodule Liquid.Auth.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      Liquid.Auth.Repo,
      {DNSCluster, query: Application.get_env(:liquid_auth, :dns_cluster_query) || :ignore},
      Liquid.AuthWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Liquid.Auth.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    Liquid.AuthWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
