import React from 'react';
interface Order { name: string; status: string }
interface OrderCardProps { order: Order }
export default function OrderCard({ order }: OrderCardProps) {
  return <div className="border p-2 rounded">{order.name} - {order.status}</div>;
}
