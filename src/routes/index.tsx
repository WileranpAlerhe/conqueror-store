import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

import { HERO_BANNER } from "@/components/site/brand";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Parfum Brasil — Perfumes Importados e Premium" },
      {
        name: "description",
        content:
          "Perfumaria de luxo com curadoria de fragrâncias importadas e premium. Frete grátis para todo o Brasil e pagamento seguro via PIX.",
      },
      { property: "og:title", content: "Parfum Brasil — Perfumes Importados e Premium" },
      {
        property: "og:description",
        content:
          "Fragrâncias importadas e premium com entrega rápida para todo o Brasil. Descubra o perfume que marca presença.",
      },
    ],
  }),
  component: HomePage,
});

const collections = [
  {
    label: "Importados",
    to: { categoria: "importado" as const },
    text: "Clássicos internacionais que nunca saem de moda",
  },
  {
    label: "Premium",
    to: { categoria: "premium" as const },
    text: "Fixação intensa e assinaturas olfativas raras",
  },
  {
    label: "Promoções",
    to: { categoria: "promocao" as const },
    text: "Seleção com os melhores descontos da semana",
  },
];

function HomePage() {
  const bestsellers = products.filter((product) => product.bestseller).slice(0, 8);
  const deals = [...products]
    .sort((a, b) => (b.oldPrice - b.price) / b.oldPrice - (a.oldPrice - a.price) / a.oldPrice)
    .slice(0, 4);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={HERO_BANNER}
          alt="Parfum Brasil — coleção de perfumes exclusivos"
          className="h-[38vh] w-full object-cover object-center sm:h-[52vh] lg:h-[68vh]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 pb-8 text-center">
            <p className="eyebrow">Nova coleção 2026</p>
            <h1 className="max-w-2xl font-display text-3xl leading-tight sm:text-5xl">
              Fragrâncias que contam a sua história
            </h1>
            <Link
              to="/produtos"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-gold px-8 text-xs font-bold tracking-[0.2em] uppercase text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Comprar agora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-4 md:grid-cols-3">
          {collections.map((collection) => (
            <Link
              key={collection.label}
              to="/produtos"
              search={collection.to}
              className="card-hover group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-6"
            >
              <div className="min-w-0">
                <p className="eyebrow">Coleção</p>
                <h2 className="font-display text-2xl">{collection.label}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{collection.text}</p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-gold transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <header className="mb-8 flex items-end justify-between gap-4">
          <div className="min-w-0">
            <p className="eyebrow">Favoritos dos clientes</p>
            <h2 className="font-display text-3xl sm:text-4xl">Mais vendidos</h2>
          </div>
          <Link
            to="/produtos"
            className="shrink-0 text-xs tracking-[0.18em] uppercase text-gold hover:underline"
          >
            Ver tudo
          </Link>
        </header>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4">
          <header className="mb-8 flex items-center gap-3">
            <Sparkles className="h-5 w-5 shrink-0 text-gold" />
            <div className="min-w-0">
              <p className="eyebrow">Ofertas relâmpago</p>
              <h2 className="font-display text-3xl">Descontos imperdíveis</h2>
            </div>
          </header>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {deals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <p className="eyebrow">Curadoria Parfum Brasil</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl">
          Cada frasco é escolhido pela intensidade e fixação
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Trabalhamos apenas com fragrâncias de alta concentração, avaliadas por nossa equipe antes
          de entrar no catálogo. São {products.length} perfumes disponíveis com envio para todo o
          Brasil.
        </p>
        <Link
          to="/produtos"
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-full border border-gold/60 px-8 text-xs font-bold tracking-[0.2em] uppercase text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
        >
          Explorar catálogo
        </Link>
      </section>
    </div>
  );
}
