import { Link, createFileRoute, notFound, useNavigate } from "@tanstack/react-router";
import { Check, Minus, Plus, ShieldCheck, Star, Truck } from "lucide-react";
import { useState } from "react";

import { ProductCard } from "@/components/site/ProductCard";
import { useCart } from "@/context/cart";
import { getProduct, products } from "@/data/products";
import { brl, discountPercent } from "@/lib/format";

export const Route = createFileRoute("/produto/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Produto indisponível — Parfum Brasil" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const description = product.description.slice(0, 155);
    return {
      meta: [
        { title: `${product.name} — Parfum Brasil` },
        { name: "description", content: description },
        { property: "og:title", content: `${product.name} — Parfum Brasil` },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const navigate = useNavigate();
  const [size, setSize] = useState(product.sizes[1] ?? product.sizes[0] ?? "100ml");
  const [image, setImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const priceInfo = product.sizePrices[size] ?? {
    price: product.price,
    oldPrice: product.oldPrice,
  };
  const off = discountPercent(priceInfo.price, priceInfo.oldPrice);

  const cartItem = {
    id: `${product.id}-${size}`,
    slug: product.slug,
    name: product.name,
    image: product.image,
    price: priceInfo.price,
    oldPrice: priceInfo.oldPrice,
    size,
  };

  const related = products
    .filter((item) => item.id !== product.id && item.category === product.category)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <nav className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
        <Link to="/" className="hover:text-gold">
          Início
        </Link>{" "}
        /{" "}
        <Link to="/produtos" className="hover:text-gold">
          Catálogo
        </Link>{" "}
        / <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-xl border border-border bg-surface">
            <img src={image} alt={product.name} className="aspect-square w-full object-cover" />
          </div>
          <div className="mt-3 flex gap-3">
            {product.gallery.map((thumb, index) => (
              <button
                key={`${thumb}-${index}`}
                type="button"
                onClick={() => setImage(thumb)}
                className={`h-20 w-20 shrink-0 overflow-hidden rounded-lg border transition-colors ${
                  image === thumb ? "border-gold" : "border-border hover:border-gold/50"
                }`}
              >
                <img src={thumb} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow">{product.category === "promocao" ? "Promoção" : product.category}</p>
          <h1 className="mt-2 font-display text-3xl leading-tight sm:text-4xl">{product.name}</h1>

          <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`h-4 w-4 ${index < Math.round(product.rating) ? "fill-current" : ""}`}
                />
              ))}
            </span>
            {product.rating.toFixed(1)} · {product.reviews} avaliações
          </div>

          <div className="mt-6 rounded-xl border border-border bg-card p-5">
            {priceInfo.oldPrice > priceInfo.price && (
              <p className="text-sm text-muted-foreground line-through">{brl(priceInfo.oldPrice)}</p>
            )}
            <div className="flex flex-wrap items-end gap-3">
              <p className="font-display text-4xl text-gold-soft">{brl(priceInfo.price)}</p>
              {off > 0 && (
                <span className="rounded-full bg-destructive px-2.5 py-1 text-[11px] font-bold text-destructive-foreground">
                  -{off}%
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              ou {product.installments}x de {brl(priceInfo.price / product.installments)} sem juros
            </p>
            <p className="mt-1 text-sm text-success">
              À vista no PIX: {brl(priceInfo.price * 0.95)} (5% de desconto)
            </p>
          </div>

          <div className="mt-6">
            <p className="eyebrow">Tamanho</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSize(option)}
                  className={`rounded-full border px-5 py-2.5 text-sm transition-colors ${
                    size === option
                      ? "border-gold bg-gold text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-gold/60 hover:text-gold"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex h-12 items-center gap-1 rounded-full border border-border px-2">
              <button
                type="button"
                aria-label="Diminuir"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                className="grid h-9 w-9 place-items-center rounded-full hover:bg-surface"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center text-sm">{quantity}</span>
              <button
                type="button"
                aria-label="Aumentar"
                onClick={() => setQuantity((value) => Math.min(20, value + 1))}
                className="grid h-9 w-9 place-items-center rounded-full hover:bg-surface"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                add(cartItem, quantity);
                setAdded(true);
                setTimeout(() => setAdded(false), 2000);
              }}
              className="h-12 flex-1 rounded-full border border-gold/60 px-6 text-xs font-bold tracking-[0.18em] uppercase text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              {added ? (
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4" /> Adicionado
                </span>
              ) : (
                "Adicionar ao carrinho"
              )}
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              add(cartItem, quantity);
              navigate({ to: "/checkout" });
            }}
            className="mt-3 h-14 w-full rounded-full bg-gold text-xs font-bold tracking-[0.2em] uppercase text-primary-foreground transition-transform hover:scale-[1.01]"
          >
            Comprar agora
          </button>

          <div className="mt-6 grid gap-3 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <Truck className="h-4 w-4 shrink-0 text-gold" /> Frete grátis para todo o Brasil
            </p>
            <p className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 shrink-0 text-gold" /> Produto original com garantia
            </p>
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <h2 className="font-display text-2xl">Descrição</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="font-display text-3xl">Avaliações</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {product.reviewsList.slice(0, 6).map((review, index) => (
            <article key={index} className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="min-w-0 truncate text-sm font-semibold">
                  {review.name} · <span className="text-muted-foreground">{review.city}</span>
                </p>
                <span className="flex shrink-0 items-center gap-0.5 text-gold">
                  {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-3 w-3 fill-current" />
                  ))}
                </span>
              </div>
              <p className="mt-2 font-display text-lg">{review.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{review.text}</p>
              {review.verified && (
                <p className="mt-3 text-[11px] tracking-[0.16em] uppercase text-success">
                  Compra verificada
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-3xl">Você também vai gostar</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
