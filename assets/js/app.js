import "phoenix_html";
import {Maskito, MaskitoOptions} from '@maskito/core';
import {maskitoNumberOptionsGenerator} from '@maskito/kit';
 

window.addEventListener("phx:mask-input", _e => {
  const amountMask = maskitoNumberOptionsGenerator({
      decimalZeroPadding: true,
      precision: 2,
      decimalSeparator: ',',
      min: 0,
      prefix: 'R$',
  });

  const amount = document.querySelector("#amount");
  if (amount) {
    new Maskito(amount, amountMask);
  }
})

const cpf = document.querySelector("#user_cpf");
if (cpf) {
  new Maskito(cpf, {mask: [
    ...new Array(3).fill(/\d/),
    ".",
    ...new Array(3).fill(/\d/),
    ".",
    ...new Array(3).fill(/\d/),
    "-",
    ...new Array(2).fill(/\d/)
  ]});
}

// live view
import { Socket } from "phoenix";
import { LiveSocket } from "phoenix_live_view";

let csrfToken = document
  .querySelector("meta[name='csrf-token']")
  .getAttribute("content");
let liveSocket = new LiveSocket("/live", Socket, {
  params: { _csrf_token: csrfToken },
});

// Connect if there are any LiveViews on the page
liveSocket.connect();
window.liveSocket = liveSocket;

// Show progress bar on live navigation and form submits
import topbar from "topbar";

topbar.config({ barColors: { 0: "#29d" }, shadowColor: "rgba(0, 0, 0, .3)" });
window.addEventListener("phx:page-loading-start", (info) => topbar.show());
window.addEventListener("phx:page-loading-stop", (info) => topbar.hide());
