import { Link, createFileRoute } from "@tanstack/react-router";
import { SlidersHorizontal } from "lucide-react";

import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/data/products";

type Search = {
  categoria?: "importado" | "premium" | "promocao";
  genero?: "masculino" | "feminino" | "unissex";
  busca?: string;
  ordem?: "relevancia" | "menor" | "maior" | "desconto";
};

export const Route = createFileRoute("/produtos")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    categoria: ["importado", "premium", "promocao"].includes(String(search.categoria))
      ? (search.categoria as Search["categoria"])
      : undefined,
    genero: ["masculino", "feminino", "unissex"].includes(String(search.genero))
      ? (search.genero as Search["genero"])
      : undefined,
    busca: typeof search.busca === "string" && search.busca ? search.busca : undefined,
    ordem: ["relevancia", "menor", "maior", "desconto"].includes(String(search.ordem))
      ? (search.ordem as Search["ordem"])
      : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Catálogo de Perfumes — Parfum Brasil" },
      {
        name: "description",
        content:
          "Explore o catálogo completo da Parfum Brasil: perfumes importados, premium e em promoção com frete grátis para todo o Brasil.",
      },
      { property: "og:title", content: "Catálogo de Perfumes — Parfum Brasil" },
      {
        property: "og:description",
        content: "Filtre por gênero, categoria e preço e encontre a sua fragrância ideal.",
      },
    ],
  }),
  component: CatalogPage,
});

const categories = [
  { value: undefined, label: "Todos" },
  { value: "importado" as const, label: "Importados" },
  { value: "premium" as const, label: "Premium" },
  { value: "promocao" as const, label: "Promoções" },
];

const genders = [
  { value: undefined, label: "Todos" },
  { value: "masculino" as const, label: "Masculino" },
  { value: "feminino" as const, label: "Feminino" },
  { value: "unissex" as const, label: "Unissex" },
];

const orders = [
  { value: "relevancia" as const, label: "Relevância" },
  { value: "menor" as const, label: "Menor preço" },
  { value: "maior" as const, label: "Maior preço" },
  { value: "desconto" as const, label: "Maior desconto" },
];

function CatalogPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const term = (search.busca ?? "").toLowerCase().trim();

  let list = products.filter((product) => {
    if (search.categoria && product.category !== search.categoria) return false;
    if (search.genero && product.gender !== search.genero) return false;
    if (term && !product.name.toLowerCase().includes(term)) return false;
    return true;
  });

  if (search.ordem === "menor") list = [...list].sort((a, b) => a.price - b.price);
  if (search.ordem === "maior") list = [...list].sort((a, b) => b.price - a.price);
  if (search.ordem === "desconto")
    list = [...list].sort(
      (a, b) => (b.oldPrice - b.price) / b.oldPrice - (a.oldPrice - a.price) / a.oldPrice,
    );

  const chip = (active: boolean) =>
    `rounded-full border px-4 py-2 text-xs tracking-[0.12em] uppercase transition-colors ${
      active
        ? "border-gold bg-gold text-primary-foreground"
        : "border-border text-muted-foreground hover:border-gold/60 hover:text-gold"
    }`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <nav className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
        <Link to="/" className="hover:text-gold">
          Início
        </Link>{" "}
        / <span className="text-foreground">Catálogo</span>
      </nav>

      <header className="mt-4 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
        <div className="min-w-0">
          <h1 className="font-display text-4xl">Catálogo</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {list.length} produto(s) encontrado(s)
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2 text-xs text-muted-foreground">
          <SlidersHorizontal className="h-4 w-4" />
          <select
            aria-label="Ordenar"
            value={search.ordem ?? "relevancia"}
            onChange={(event) =>
              navigate({
                search: (prev) => ({ ...prev, ordem: event.target.value as Search["ordem"] }),
              })
            }
            className="h-10 rounded-full border border-border bg-card px-3 text-xs text-foreground outline-none focus:border-gold"
          >
            {orders.map((order) => (
              <option key={order.value} value={order.value}>
                {order.label}
              </option>
            ))}
          </select>
        </div>
      </header>

      <div className="no-scrollbar mt-6 flex gap-2 overflow-x-auto pb-1">
        {categories.map((category) => (
          <Link
            key={category.label}
            to="/produtos"
            search={(prev) => ({ ...prev, categoria: category.value })}
            className={chip(search.categoria === category.value)}
          >
            {category.label}
          </Link>
        ))}
      </div>
      <div className="no-scrollbar mt-2 flex gap-2 overflow-x-auto pb-1">
        {genders.map((gender) => (
          <Link
            key={gender.label}
            to="/produtos"
            search={(prev) => ({ ...prev, genero: gender.value })}
            className={chip(search.genero === gender.value)}
          >
            {gender.label}
          </Link>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="mt-16 text-center text-sm text-muted-foreground">
          Nenhum perfume encontrado. Tente outro filtro.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {list.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
