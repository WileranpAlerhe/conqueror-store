import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartItem = {
  id: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  size: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  savings: number;
  add: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  remove: (id: string, size: string) => void;
  setQuantity: (id: string, size: string, quantity: number) => void;
  clear: () => void;
};

const STORAGE_KEY = "parfumbrasil-cart";
const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      /* carrinho vazio */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage indisponível */
    }
  }, [items, hydrated]);

  const add = useCallback((item: Omit<CartItem, "quantity">, quantity = 1) => {
    setItems((current) => {
      const index = current.findIndex((i) => i.id === item.id && i.size === item.size);
      if (index === -1) return [...current, { ...item, quantity }];
      const next = [...current];
      next[index] = { ...next[index], quantity: next[index].quantity + quantity };
      return next;
    });
  }, []);

  const remove = useCallback((id: string, size: string) => {
    setItems((current) => current.filter((i) => !(i.id === id && i.size === size)));
  }, []);

  const setQuantity = useCallback((id: string, size: string, quantity: number) => {
    setItems((current) =>
      quantity <= 0
        ? current.filter((i) => !(i.id === id && i.size === size))
        : current.map((i) =>
            i.id === id && i.size === size ? { ...i, quantity: Math.min(quantity, 20) } : i,
          ),
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(() => {
    const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const full = items.reduce((sum, i) => sum + (i.oldPrice || i.price) * i.quantity, 0);
    return {
      items,
      count: items.reduce((sum, i) => sum + i.quantity, 0),
      subtotal,
      savings: Math.max(0, full - subtotal),
      add,
      remove,
      setQuantity,
      clear,
    };
  }, [items, add, remove, setQuantity, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart precisa estar dentro de CartProvider");
  return context;
}
