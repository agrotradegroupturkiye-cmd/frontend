export const apiFetch = (input: RequestInfo, init?: RequestInit) => fetch(input, init);

export async function takeOrder(orderId: string) {
  return apiFetch(`/api/v1/orders/${orderId}/take`, { method: 'POST' });
}
