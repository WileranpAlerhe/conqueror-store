import { createFileRoute } from "@tanstack/react-router";
import html from "../legacy-site/index.html?raw";
import { clientShell, htmlResponse } from "../lib/legacy-html";

// Client-rendered fallback for routes that were not pre-rendered in the
// original export (/produto/$slug, /carrinho, /checkout, /minha-conta, /pix/$orderId).
export const Route = createFileRoute("/$")({
  server: {
    handlers: {
      GET: () => htmlResponse(clientShell(html)),
    },
  },
});
