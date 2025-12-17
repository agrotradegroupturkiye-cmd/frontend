export type OrderStatus = "paid" | "accepted" | "in_progress" | "done";

export interface Order {
  id: string;
  service: string;
  price: number;
  provider: string;
  date: string;
  status: OrderStatus;
  createdAt: string;
}

const STORAGE_KEY = "cleango_orders";

export function getOrders(): Order[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function createOrder(order: Order): Order[] {
  const orders = getOrders();
  const updated = [...orders, order];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

export function updateOrderStatus(
  id: string,
  status: OrderStatus
): Order[] {
  const orders = getOrders();
  const updated = orders.map((o) =>
    o.id === id ? { ...o, status } : o
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}
