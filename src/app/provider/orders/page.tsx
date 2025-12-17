"use client";

import React, { useEffect, useState } from "react";
import ProviderLayout from "../layout";

interface Order {
  id: string;
  service: string;
  price: number;
  provider: string;
  date: string;
  status: "paid" | "accepted" | "in_progress" | "done";
  createdAt: string;
}

export default function ProviderOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    import("@/app/lib/ordersStore").then(m => setOrders(m.getOrders()));
  }, []);

  const updateStatus = (id: string, status: Order["status"]) => {
    const updated = orders.map((o) =>
      o.id === id ? { ...o, status } : o
    );

    setOrders(updated);
    localStorage.setItem("cleango_orders", JSON.stringify(updated));
  };

  return (
    <ProviderLayout>
      <h2 className="text-xl font-semibold mb-4">Заказы клиентов</h2>

      {orders.length === 0 ? (
        <p className="text-gray-500">Заказов нет</p>
      ) : (
        <div className="flex flex-col gap-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="p-4 bg-white rounded shadow flex flex-col gap-2"
            >
              <div className="font-semibold">{order.service}</div>
              <div className="text-sm">Клиент: —</div>
              <div className="text-sm">Дата: {order.date}</div>
              <div className="font-medium">{order.price} ₸</div>

              <div className="text-sm">
                Текущий статус:{" "}
                <span className="font-semibold capitalize">
                  {order.status.replace("_", " ")}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {order.status === "paid" && (
                  <button
                    className="px-3 py-1 bg-blue-600 text-white rounded"
                    onClick={() => updateStatus(order.id, "accepted")}
                  >
                    Принять
                  </button>
                )}

                {order.status === "accepted" && (
                  <button
                    className="px-3 py-1 bg-purple-600 text-white rounded"
                    onClick={() => updateStatus(order.id, "in_progress")}
                  >
                    В работе
                  </button>
                )}

                {order.status === "in_progress" && (
                  <button
                    className="px-3 py-1 bg-green-600 text-white rounded"
                    onClick={() => updateStatus(order.id, "done")}
                  >
                    Завершить
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </ProviderLayout>
  );
}
