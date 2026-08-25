import { Link, createFileRoute } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

import { useCart } from "@/context/cart";
import { brl } from "@/lib/format";

export const Route = createFileRoute("/carrinho")({
  head: () => ({
    meta: [
      { title: "Meu carrinho — Parfum Brasil" },
      {
        name: "description",
        content: "Revise os perfumes selecionados e finalize sua compra com pagamento via PIX.",
      },
      { property: "og:title", content: "Meu carrinho — Parfum Brasil" },
      { property: "og:description", content: "Revise seus perfumes e finalize a compra." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, subtotal, savings, setQuantity, remove } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold/40 text-gold">
          <ShoppingBag className="h-7 w-7" />
        </span>
        <h1 className="mt-6 font-display text-3xl">Seu carrinho está vazio</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Explore o catálogo e escolha a fragrância que combina com você.
        </p>
        <Link
          to="/produtos"
          className="mt-8 inline-flex h-12 items-center rounded-full bg-gold px-8 text-xs font-bold tracking-[0.2em] uppercase text-primary-foreground"
        >
          Ver perfumes
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-display text-4xl">Meu carrinho</h1>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        <ul className="space-y-4">
          {items.map((item) => (
            <li
              key={`${item.id}-${item.size}`}
              className="grid grid-cols-[88px_minmax(0,1fr)] gap-4 rounded-xl border border-border bg-card p-4"
            >
              <Link
                to="/produto/$slug"
                params={{ slug: item.slug }}
                className="h-22 w-22 overflow-hidden rounded-lg bg-surface"
              >
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
              </Link>
              <div className="min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <Link
                      to="/produto/$slug"
                      params={{ slug: item.slug }}
                      className="line-clamp-2 font-display text-lg hover:text-gold"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-muted-foreground">Tamanho: {item.size}</p>
                  </div>
                  <button
                    type="button"
                    aria-label="Remover item"
                    onClick={() => remove(item.id, item.size)}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-surface hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex h-10 items-center gap-1 rounded-full border border-border px-1.5">
                    <button
                      type="button"
                      aria-label="Diminuir quantidade"
                      onClick={() => setQuantity(item.id, item.size, item.quantity - 1)}
                      className="grid h-8 w-8 place-items-center rounded-full hover:bg-surface"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-7 text-center text-sm">{item.quantity}</span>
                    <button
                      type="button"
                      aria-label="Aumentar quantidade"
                      onClick={() => setQuantity(item.id, item.size, item.quantity + 1)}
                      className="grid h-8 w-8 place-items-center rounded-full hover:bg-surface"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <p className="font-display text-xl text-gold-soft">
                    {brl(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-xl border border-border bg-card p-6 lg:sticky lg:top-32">
          <h2 className="font-display text-2xl">Resumo</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Subtotal</dt>
              <dd>{brl(subtotal)}</dd>
            </div>
            {savings > 0 && (
              <div className="flex justify-between text-success">
                <dt>Economia</dt>
                <dd>-{brl(savings)}</dd>
              </div>
            )}
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Frete</dt>
              <dd className="text-success">Grátis</dd>
            </div>
          </dl>
          <div className="mt-4 flex items-end justify-between border-t border-border pt-4">
            <span className="text-sm text-muted-foreground">Total</span>
            <span className="font-display text-3xl text-gold-soft">{brl(subtotal)}</span>
          </div>
          <Link
            to="/checkout"
            className="mt-6 flex h-14 items-center justify-center rounded-full bg-gold text-xs font-bold tracking-[0.2em] uppercase text-primary-foreground transition-transform hover:scale-[1.01]"
          >
            Finalizar compra
          </Link>
          <Link
            to="/produtos"
            className="mt-3 flex h-12 items-center justify-center rounded-full border border-border text-xs tracking-[0.18em] uppercase text-muted-foreground hover:border-gold/60 hover:text-gold"
          >
            Continuar comprando
          </Link>
        </aside>
      </div>
    </div>
  );
}
