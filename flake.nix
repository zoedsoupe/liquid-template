{
  outputs = {nixpkgs, ...}: {
    devShells.aarch64-darwin.default = let
      pkgs = import nixpkgs {
        system = "aarch64-darwin";
        config.allowUnfree = true;
      };
      inherit (pkgs.beam.packages) erlangR26;
    in
      pkgs.mkShell {
        name = "liquid-dev";
        packages = with pkgs;
          [erlangR26.elixir_1_15 redpanda gnumake gcc postgresql]
          ++ lib.optional stdenv.isDarwin [
            darwin.apple_sdk.frameworks.CoreServices
            darwin.apple_sdk.frameworks.CoreFoundation
          ];

        shellHook = "mkdir -p .nix-mix";
      };
  };
}
