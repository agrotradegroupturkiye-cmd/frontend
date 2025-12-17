"use client";

import React, { useEffect, useState } from "react";
import ClientLayout from "../layout";

interface Order {
  id: string;
  service: string;
  price: number;
  provider: string;
  date: string;
  status: "paid" | "accepted" | "in_progress" | "done";
  createdAt: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
  import("@/app/lib/ordersStore").then(m => setOrders(m.getOrders()));
}, []);

  return (
    <ClientLayout>
      <h2 className="text-xl font-semibold mb-4">Мои заказы</h2>

      {orders.length === 0 ? (
        <p className="text-gray-500">Заказов пока нет</p>
      ) : (
        <div className="flex flex-col gap-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="p-4 bg-white border rounded shadow-sm flex flex-col gap-1"
            >
              <div className="font-semibold">{order.service}</div>
              <div className="text-sm text-gray-600">
                Исполнитель: {order.provider}
              </div>
              <div className="text-sm">Дата: {order.date}</div>
              <div className="font-medium">{order.price} ₸</div>
              <div className="text-sm">
                Статус:{" "}
                <span className="font-semibold capitalize">
                  {order.status.replace("_", " ")}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </ClientLayout>
  );
}
