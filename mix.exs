defmodule Liquid.MixProject do
  use Mix.Project

  def project do
    [
      apps_path: "apps",
      name: :liquid,
      deps: deps(),
      version: "0.1.0",
      elixir: "~> 1.14",
      start_permanent: Mix.env() == :prod,
      releases: [
        liquid: [
          include_executables_for: [:unix],
          applications: [
            liquid_auth: :permanent,
            liquid_accounts: :permanent,
            liquid_operations: :permanent,
            proxy_web: :permanent
          ]
        ]
      ]
    ]
  end

  # Specifies your project dependencies.
  #
  # Type `mix help deps` for examples and options.
  defp deps do
    [
      {:dialyxir, "~> 1.3", only: [:dev], runtime: false},
      {:credo, "~> 1.5", only: [:dev, :test], runtime: false}
    ]
  end
end
