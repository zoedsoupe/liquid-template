{pkgs}: {
  deps = let
    inherit (pkgs.beam.packages) erlang26;
  in [
    erlang26.elixir_1_15
    pkgs.nodejs
    pkgs.postgresql
  ];
}
