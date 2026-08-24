import { createFileRoute } from "@tanstack/react-router";
import html from "../legacy-site/index.html?raw";
import { htmlResponse } from "../lib/legacy-html";

export const Route = createFileRoute("/$")({
  server: {
    handlers: {
      GET: () => htmlResponse(html),
    },
  },
});
