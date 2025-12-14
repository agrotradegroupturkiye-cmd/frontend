import React, { useState, useEffect, useRef } from 'react';
interface Order { id: number; customer: string; status: 'new' | 'in-progress' | 'completed'; items: string[] }
interface Props { role: 'client' | 'service' }
export default function OrderList({ role }: Props) {
  const [orders, setOrders] = useState<Order[]>([]);
  const prevOrdersRef = useRef<Order[]>([]);
  useEffect(() => {
    const data: Order[] = [
      { id:1, customer:'John', status:'new', items:['a','b'] },
      { id:2, customer:'Jane', status:'in-progress', items:['c'] }
    ];
    setOrders(data);
    prevOrdersRef.current = data;
  }, []);
  return (
    <div>
      {orders.map(o => <div key={o.id}>{o.customer} - {o.status}</div>)}
    </div>
  );
}
