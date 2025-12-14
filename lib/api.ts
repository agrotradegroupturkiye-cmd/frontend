export async function apiFetch(url: string, options?: any) {
  return fetch(url, options).then(res => res.json());
}
export async function takeOrder(orderId: number) {
  return apiFetch(`/api/v1/orders/${orderId}/take`, { method: 'POST' });
}
