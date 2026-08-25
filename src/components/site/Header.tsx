import { Link } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useEffect, useState } from "react";

import { GENDER_LINKS, LOGO_URL, NAV_LINKS } from "./brand";
import { useCart } from "@/context/cart";

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md">
      <div className="bg-surface text-center text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
        <div className="shimmer py-2">
          Frete grátis para todo o Brasil · 10% off na primeira compra
        </div>
      </div>

      <div className="border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 md:py-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full transition-colors hover:bg-surface lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
            <Link to="/" className="flex shrink-0 items-center" aria-label="Parfum Brasil — início">
              <img
                src={LOGO_URL}
                alt="Parfum Brasil"
                className="h-9 w-auto md:h-11"
                loading="eager"
              />
            </Link>
          </div>

          <nav className="hidden min-w-0 items-center justify-center gap-8 text-[13px] tracking-[0.12em] uppercase lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative py-1 text-muted-foreground transition-colors hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {link.label}
              </Link>
            ))}
            {GENDER_LINKS.map((link) => (
              <Link
                key={link.gender}
                to="/produtos"
                search={{ genero: link.gender }}
                className="py-1 text-muted-foreground transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              aria-label="Buscar"
              onClick={() => setSearchOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-surface"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>
            <Link
              to="/minha-conta"
              aria-label="Minha conta"
              className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-surface"
            >
              <User className="h-[18px] w-[18px]" />
            </Link>
            <Link
              to="/carrinho"
              aria-label="Carrinho"
              className="relative grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-surface"
            >
              <ShoppingBag className="h-[18px] w-[18px]" />
              {count > 0 && (
                <span className="absolute top-1 right-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-gold px-1 text-[10px] font-bold text-primary-foreground">
                  {count}
                </span>
              )}
            </Link>
          </div>
        </div>

        {searchOpen && (
          <div className="border-t border-border bg-surface">
            <form
              className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3"
              onSubmit={(event) => {
                event.preventDefault();
                setSearchOpen(false);
              }}
            >
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar perfumes, marcas, notas…"
                className="h-10 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <Link
                to="/produtos"
                search={query.trim() ? { busca: query.trim() } : {}}
                onClick={() => setSearchOpen(false)}
                className="shrink-0 rounded-full bg-gold px-4 py-2 text-xs font-semibold tracking-wide uppercase text-primary-foreground"
              >
                Buscar
              </Link>
            </form>
          </div>
        )}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Fechar menu"
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute inset-y-0 left-0 flex w-[82%] max-w-xs flex-col bg-background shadow-elevated">
            <div className="flex items-center justify-between border-b border-border px-4 py-4">
              <img src={LOGO_URL} alt="Parfum Brasil" className="h-9 w-auto" />
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-full hover:bg-surface"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-4 text-sm tracking-[0.12em] uppercase">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-foreground transition-colors hover:bg-surface hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
              {GENDER_LINKS.map((link) => (
                <Link
                  key={link.gender}
                  to="/produtos"
                  search={{ genero: link.gender }}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-foreground transition-colors hover:bg-surface hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/minha-conta"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-muted-foreground transition-colors hover:bg-surface hover:text-gold"
              >
                Minha conta
              </Link>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
