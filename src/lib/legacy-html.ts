export function htmlResponse(html: string) {
  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

/**
 * The exported storefront bundle uses hash history, so a pretty path such as
 * /produtos would boot the client router at "/". This inline script mirrors the
 * current path into the hash before the module entry runs, so deep links land
 * on the right screen while the pre-rendered markup stays intact for crawlers.
 */
const HASH_SYNC = `<script>(function(){try{if(!location.hash){var p=location.pathname;if(p&&p!=="/"){history.replaceState(null,"",p+location.search+"#"+p);}}}catch(e){}})();</script>`;

export function withHashSync(html: string) {
  return html.replace("<body>", `<body>${HASH_SYNC}`);
}

/**
 * Builds a client-only shell from a pre-rendered page: keeps <head> (styles,
 * fonts, preloads) and the module entry script, but drops the pre-rendered
 * markup and the hydration payload so the app renders the current URL fresh.
 */
export function clientShell(html: string) {
  const head = html.slice(0, html.indexOf("</head>") + "</head>".length);
  const entry = /<script type="module"[^>]*>[\s\S]*?<\/script>/.exec(html);
  return `${head}<body>${HASH_SYNC}${entry ? entry[0] : ""}</body></html>`;
}
