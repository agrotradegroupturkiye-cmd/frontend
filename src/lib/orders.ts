export type OrderStatus =
  | "created"
  | "pending_payment"
  | "paid"
  | "assigned"
  | "completed"
  | "cancelled";

export interface Order {
  id: string;
  serviceTitle: string;
  servicePrice: number;
  area: number;
  quantity: number;
  total: number;
  providerId: number;
  providerName: string;
  date: string;
  status: OrderStatus;
  createdAt: string;
}

/**
 * MOCK: временное хранилище заказов
 * позже заменится на backend / DB
 */
export const ordersStore: Order[] = [];

export function createOrder(data: Omit<Order, "id" | "status" | "createdAt">): Order {
  const order: Order = {
    id: crypto.randomUUID(),
    status: "pending_payment",
    createdAt: new Date().toISOString(),
    ...data,
  };

  ordersStore.push(order);

  console.log("🧾 Order created:", order);

  return order;
}
