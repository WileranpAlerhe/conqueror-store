export function htmlResponse(html: string) {
  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

/**
 * Builds a client-only shell from a pre-rendered page: keeps <head> (styles,
 * fonts, preloads) and the module entry script, but drops the pre-rendered
 * markup and the hydration payload so the app renders the current URL fresh.
 */
export function clientShell(html: string) {
  const head = html.slice(0, html.indexOf("</head>") + "</head>".length);
  const entry = /<script type="module"[^>]*>[\s\S]*?<\/script>/.exec(html);
  return `${head}<body><div id="root"></div>${entry ? entry[0] : ""}</body></html>`;
}
