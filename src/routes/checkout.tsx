import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { Loader2, Lock, QrCode } from "lucide-react";
import { useState } from "react";

import { useCart } from "@/context/cart";
import { brl, maskCpf, maskPhone, maskZip, onlyDigits } from "@/lib/format";
import { createPixCharge } from "@/lib/pix";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout seguro — Parfum Brasil" },
      {
        name: "description",
        content: "Finalize seu pedido na Parfum Brasil com pagamento via PIX aprovado na hora.",
      },
      { property: "og:title", content: "Checkout seguro — Parfum Brasil" },
      { property: "og:description", content: "Pagamento via PIX aprovado na hora." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CheckoutPage,
});

const field =
  "h-12 w-full rounded-lg border border-input bg-surface px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold";
const label = "mb-1.5 block text-xs tracking-[0.14em] uppercase text-muted-foreground";

function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [customer, setCustomer] = useState({ name: "", cpf: "", email: "", phone: "" });
  const [address, setAddress] = useState({
    zip: "",
    street: "",
    number: "",
    complement: "",
    district: "",
    city: "",
    state: "",
  });

  const lookupZip = async (value: string) => {
    const digits = onlyDigits(value);
    if (digits.length !== 8) return;
    try {
      const response = await fetch(`https://viacep.com.br/ws/${digits}/json/`);
      const data = (await response.json()) as {
        erro?: boolean;
        logradouro?: string;
        bairro?: string;
        localidade?: string;
        uf?: string;
      };
      if (data.erro) return;
      setAddress((prev) => ({
        ...prev,
        street: data.logradouro ?? prev.street,
        district: data.bairro ?? prev.district,
        city: data.localidade ?? prev.city,
        state: data.uf ?? prev.state,
      }));
    } catch {
      /* CEP opcional */
    }
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { orderId } = await createPixCharge({
        items: items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
          size: item.size,
        })),
        customer: {
          name: customer.name,
          cpf: onlyDigits(customer.cpf),
          email: customer.email,
          phone: onlyDigits(customer.phone),
        },
        address: { ...address, zip: onlyDigits(address.zip) },
        shipping: { method: "gratis", label: "Frete grátis", price: 0 },
      });
      clear();
      navigate({ to: "/pix/$orderId", params: { orderId } });
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Erro ao gerar o PIX.");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl">Nada para finalizar</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Adicione perfumes ao carrinho para concluir o pedido.
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
      <h1 className="font-display text-4xl">Checkout</h1>
      <p className="mt-1 flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-muted-foreground">
        <Lock className="h-3.5 w-3.5 text-gold" /> Ambiente seguro
      </p>

      <form onSubmit={submit} className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-8">
          <section className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-display text-2xl">Seus dados</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className={label} htmlFor="name">
                  Nome completo
                </label>
                <input
                  id="name"
                  required
                  className={field}
                  value={customer.name}
                  onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                />
              </div>
              <div>
                <label className={label} htmlFor="cpf">
                  CPF
                </label>
                <input
                  id="cpf"
                  required
                  inputMode="numeric"
                  placeholder="000.000.000-00"
                  className={field}
                  value={customer.cpf}
                  onChange={(e) => setCustomer({ ...customer, cpf: maskCpf(e.target.value) })}
                />
              </div>
              <div>
                <label className={label} htmlFor="phone">
                  Celular
                </label>
                <input
                  id="phone"
                  required
                  inputMode="tel"
                  placeholder="(11) 90000-0000"
                  className={field}
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: maskPhone(e.target.value) })}
                />
              </div>
              <div className="sm:col-span-2">
                <label className={label} htmlFor="email">
                  E-mail
                </label>
                <input
                  id="email"
                  required
                  type="email"
                  className={field}
                  value={customer.email}
                  onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                />
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-display text-2xl">Endereço de entrega</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label className={label} htmlFor="zip">
                  CEP
                </label>
                <input
                  id="zip"
                  required
                  inputMode="numeric"
                  placeholder="00000-000"
                  className={field}
                  value={address.zip}
                  onChange={(e) => {
                    const masked = maskZip(e.target.value);
                    setAddress({ ...address, zip: masked });
                    void lookupZip(masked);
                  }}
                />
              </div>
              <div className="sm:col-span-4">
                <label className={label} htmlFor="street">
                  Rua
                </label>
                <input
                  id="street"
                  required
                  className={field}
                  value={address.street}
                  onChange={(e) => setAddress({ ...address, street: e.target.value })}
                />
              </div>
              <div className="sm:col-span-2">
                <label className={label} htmlFor="number">
                  Número
                </label>
                <input
                  id="number"
                  required
                  className={field}
                  value={address.number}
                  onChange={(e) => setAddress({ ...address, number: e.target.value })}
                />
              </div>
              <div className="sm:col-span-4">
                <label className={label} htmlFor="complement">
                  Complemento
                </label>
                <input
                  id="complement"
                  className={field}
                  value={address.complement}
                  onChange={(e) => setAddress({ ...address, complement: e.target.value })}
                />
              </div>
              <div className="sm:col-span-2">
                <label className={label} htmlFor="district">
                  Bairro
                </label>
                <input
                  id="district"
                  required
                  className={field}
                  value={address.district}
                  onChange={(e) => setAddress({ ...address, district: e.target.value })}
                />
              </div>
              <div className="sm:col-span-3">
                <label className={label} htmlFor="city">
                  Cidade
                </label>
                <input
                  id="city"
                  required
                  className={field}
                  value={address.city}
                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                />
              </div>
              <div className="sm:col-span-1">
                <label className={label} htmlFor="state">
                  UF
                </label>
                <input
                  id="state"
                  required
                  maxLength={2}
                  className={field}
                  value={address.state}
                  onChange={(e) => setAddress({ ...address, state: e.target.value.toUpperCase() })}
                />
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-gold/40 bg-card p-6">
            <h2 className="font-display text-2xl">Pagamento</h2>
            <div className="mt-4 flex items-center gap-3 rounded-lg border border-gold/50 bg-surface p-4">
              <QrCode className="h-6 w-6 shrink-0 text-gold" />
              <div className="min-w-0">
                <p className="text-sm font-semibold">PIX — aprovação imediata</p>
                <p className="text-xs text-muted-foreground">
                  Geramos o QR Code na próxima etapa. Seu pedido é confirmado automaticamente.
                </p>
              </div>
            </div>
          </section>
        </div>

        <aside className="h-fit rounded-xl border border-border bg-card p-6 lg:sticky lg:top-32">
          <h2 className="font-display text-2xl">Seu pedido</h2>
          <ul className="mt-4 space-y-3">
            {items.map((item) => (
              <li key={`${item.id}-${item.size}`} className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 shrink-0 rounded-lg object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm">{item.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.size} · {item.quantity}x
                  </p>
                </div>
                <p className="shrink-0 text-sm text-gold-soft">
                  {brl(item.price * item.quantity)}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Frete</span>
              <span className="text-success">Grátis</span>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-muted-foreground">Total</span>
              <span className="font-display text-3xl text-gold-soft">{brl(subtotal)}</span>
            </div>
          </div>

          {error && (
            <p className="mt-4 rounded-lg border border-destructive/50 bg-destructive/10 p-3 text-xs text-destructive">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-full bg-gold text-xs font-bold tracking-[0.2em] uppercase text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Gerando PIX…
              </>
            ) : (
              "Pagar com PIX"
            )}
          </button>
        </aside>
      </form>
    </div>
  );
}
