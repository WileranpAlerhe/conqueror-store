export function htmlResponse(html: string) {
  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
