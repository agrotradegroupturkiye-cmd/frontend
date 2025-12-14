import React from 'react';
interface OrderCardProps { order: { name: string; status: string }; }
export default function OrderCard({ order }: OrderCardProps) { return <div className="border p-2 rounded">{order.name} - {order.status}</div>; }
