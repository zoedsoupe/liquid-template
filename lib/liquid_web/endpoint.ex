defmodule LiquidWeb.Endpoint do
  use Phoenix.Endpoint, otp_app: :liquid

  @session_options [
    store: :cookie,
    key: "_pescarte_key",
    signing_salt: "7ZI1IH1h"
  ]

  socket "/socket", LiquidWeb.UserSocket,
    websocket: true,
    longpoll: false

  socket "/live", Phoenix.LiveView.Socket, websocket: [connect_info: [session: @session_options]]

  # Code reloading can be explicitly enabled under the
  # :code_reloader configuration of your endpoint.
  if code_reloading? do
    socket "/phoenix/live_reload/socket", Phoenix.LiveReloader.Socket
    plug(Phoenix.CodeReloader)
    plug(Phoenix.Ecto.CheckRepoStatus, otp_app: :liquid)
  end

  plug Plug.Static,
    at: "/",
    from: :liquid,
    gzip: true,
    only: LiquidWeb.static_paths()

  plug(Plug.RequestId)

  plug(Plug.Parsers,
    parsers: [:urlencoded, :multipart, :json],
    pass: ["*/*"],
    json_decoder: Phoenix.json_library()
  )

  plug(Plug.MethodOverride)
  plug(Plug.Head)
  plug Plug.Session, @session_options
  plug(LiquidWeb.Router)
end
