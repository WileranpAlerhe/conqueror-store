import { Link } from "@tanstack/react-router";
import { Instagram, Lock, MessageCircle, ShieldCheck, Truck } from "lucide-react";

import { LOGO_URL, WHATSAPP_URL } from "./brand";

const perks = [
  { icon: Truck, title: "Frete grátis", text: "Enviamos para todo o Brasil" },
  { icon: ShieldCheck, title: "100% original", text: "Fragrâncias importadas selecionadas" },
  { icon: Lock, title: "Compra segura", text: "Pagamento via PIX com criptografia" },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-3">
        {perks.map((perk) => (
          <div key={perk.title} className="flex items-start gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
              <perk.icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold">{perk.title}</p>
              <p className="text-xs text-muted-foreground">{perk.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="gold-rule h-px" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={LOGO_URL} alt="Parfum Brasil" className="h-12 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Perfumaria de alta performance com curadoria de fragrâncias importadas e premium.
            Entrega rápida, atendimento humano e a certeza de um perfume que marca presença.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-2 text-xs tracking-[0.16em] uppercase text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
          </a>
        </div>

        <nav className="text-sm">
          <p className="eyebrow">Loja</p>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li>
              <Link to="/produtos" className="transition-colors hover:text-gold">
                Todos os perfumes
              </Link>
            </li>
            <li>
              <Link
                to="/produtos"
                search={{ genero: "masculino" }}
                className="transition-colors hover:text-gold"
              >
                Masculinos
              </Link>
            </li>
            <li>
              <Link
                to="/produtos"
                search={{ genero: "feminino" }}
                className="transition-colors hover:text-gold"
              >
                Femininos
              </Link>
            </li>
            <li>
              <Link
                to="/produtos"
                search={{ categoria: "promocao" }}
                className="transition-colors hover:text-gold"
              >
                Promoções
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="text-sm">
          <p className="eyebrow">Ajuda</p>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li>
              <Link to="/carrinho" className="transition-colors hover:text-gold">
                Meu carrinho
              </Link>
            </li>
            <li>
              <Link to="/minha-conta" className="transition-colors hover:text-gold">
                Minha conta
              </Link>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-gold"
              >
                Atendimento
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4" /> @parfumbrasil
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Parfum Brasil. Todos os direitos reservados.
      </div>
    </footer>
  );
}
