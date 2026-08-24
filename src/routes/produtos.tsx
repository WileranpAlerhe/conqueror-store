import { createFileRoute } from "@tanstack/react-router";
import html from "../legacy-site/produtos.html?raw";
import { htmlResponse, withHashSync } from "../lib/legacy-html";

export const Route = createFileRoute("/produtos")({
  server: {
    handlers: {
      GET: () => htmlResponse(withHashSync(html)),
    },
  },
});
