// Integração de pagamento PIX preservada do storefront original.
// As funções de borda continuam sendo as mesmas usadas pela loja hoje.
const API_URL = "https://lsgesqhuxlizwlegvdqa.supabase.co/functions/v1";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzZ2VzcWh1eGxpendsZWd2ZHFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzODEzMzIsImV4cCI6MjA5NDk1NzMzMn0.V7pLNBeRkD3EAmLPwbf2paB75KwqJ4Mtn6orRdpQVc4";

export type PixOrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  size?: string;
};

export type CreatePixPayload = {
  items: PixOrderItem[];
  customer: { name: string; cpf: string; email: string; phone: string };
  address: {
    zip: string;
    street: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    state: string;
  };
  shipping: { method: string; label: string; price: number };
};

export type OrderStatus = {
  order: {
    order_number: string;
    total: number | string;
    items: PixOrderItem[];
  };
  payment?: {
    status?: string;
    pix_copypaste?: string;
    pix_expires_at?: string;
  };
};

async function callFunction<T>(name: string, body: unknown): Promise<T> {
  const response = await fetch(`${API_URL}/${name}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      apikey: API_KEY,
      authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  const text = await response.text();
  let data: unknown;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = null;
  }

  const payload = data as { error?: string } | null;
  if (!response.ok || !payload || payload.error) {
    throw new Error(payload?.error || "Não foi possível concluir a operação.");
  }
  return payload as T;
}

export const createPixCharge = (payload: CreatePixPayload) =>
  callFunction<{ orderId: string }>("create-pix-charge", payload);

export const getOrderStatus = (orderId: string) =>
  callFunction<OrderStatus>("get-order-status", { orderId });
