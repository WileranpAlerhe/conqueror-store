import { Link } from "@tanstack/react-router";
import { ShoppingBag, Star } from "lucide-react";

import { brl, discountPercent } from "@/lib/format";
import { useCart } from "@/context/cart";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const off = discountPercent(product.price, product.oldPrice);
  const defaultSize = product.sizes[1] ?? product.sizes[0] ?? "100ml";

  return (
    <article className="card-hover group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card">
      <Link
        to="/produto/$slug"
        params={{ slug: product.slug }}
        className="relative block aspect-[4/5] overflow-hidden bg-surface"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {off > 0 && (
            <span className="rounded-full bg-destructive px-2.5 py-1 text-[10px] font-bold tracking-wide text-destructive-foreground">
              -{off}%
            </span>
          )}
          {product.bestseller && (
            <span className="rounded-full bg-gold px-2.5 py-1 text-[10px] font-bold tracking-wide text-primary-foreground">
              Mais vendido
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
          {product.category === "promocao" ? "Promoção" : product.category}
        </p>
        <h3 className="line-clamp-2 font-display text-lg leading-snug">
          <Link to="/produto/$slug" params={{ slug: product.slug }} className="hover:text-gold">
            {product.name}
          </Link>
        </h3>

        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="flex items-center gap-0.5 text-gold">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`h-3 w-3 ${index < Math.round(product.rating) ? "fill-current" : ""}`}
              />
            ))}
          </span>
          <span>({product.reviews})</span>
        </div>

        <div className="mt-auto pt-2">
          {product.oldPrice > product.price && (
            <p className="text-xs text-muted-foreground line-through">{brl(product.oldPrice)}</p>
          )}
          <p className="font-display text-2xl text-gold-soft">{brl(product.price)}</p>
          <p className="text-[11px] text-muted-foreground">
            ou {product.installments}x de {brl(product.installmentValue)}
          </p>
        </div>

        <button
          type="button"
          onClick={() =>
            add({
              id: product.id,
              slug: product.slug,
              name: product.name,
              image: product.image,
              price: product.sizePrices[defaultSize]?.price ?? product.price,
              oldPrice: product.sizePrices[defaultSize]?.oldPrice ?? product.oldPrice,
              size: defaultSize,
            })
          }
          className="mt-3 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gold text-xs font-semibold tracking-[0.16em] uppercase text-primary-foreground transition-all hover:bg-gold-soft active:scale-[0.98]"
        >
          <ShoppingBag className="h-4 w-4" /> Comprar
        </button>
      </div>
    </article>
  );
}
