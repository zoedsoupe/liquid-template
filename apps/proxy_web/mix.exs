defmodule ProxyWeb.MixProject do
  use Mix.Project

  def project do
    [
      app: :proxy_web,
      version: "0.1.0",
      build_path: "../../_build",
      config_path: "../../config/config.exs",
      deps_path: "../../deps",
      lockfile: "../../mix.lock",
      elixir: "~> 1.15",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger],
      mod: {ProxyWeb.Application, []}
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:bandit, "~> 0.6"},
      {:phoenix, "~> 1.7", override: true},
      {:phoenix_ecto, "~> 4.1"},
      {:phoenix_live_reload, "~> 1.2", only: :dev},
      {:liquid_auth, in_umbrella: true},
      {:liquid_accounts, in_umbrella: true},
      {:liquid_operations, in_umbrella: true}
    ]
  end
end
