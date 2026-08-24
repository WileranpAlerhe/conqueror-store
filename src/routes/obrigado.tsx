import { createFileRoute } from "@tanstack/react-router";
import html from "../legacy-site/obrigado.html?raw";
import { htmlResponse, withHashSync } from "../lib/legacy-html";

export const Route = createFileRoute("/obrigado")({
  server: {
    handlers: {
      GET: () => htmlResponse(withHashSync(html)),
    },
  },
});
