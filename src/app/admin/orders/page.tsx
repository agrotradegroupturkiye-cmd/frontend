"use client";

import React, { useEffect, useState } from "react";
import AdminLayout from "../layout";

interface Order {
  id: string;
  service: string;
  price: number;
  provider: string;
  date: string;
  status: "paid" | "accepted" | "in_progress" | "done";
  createdAt: string;
}

export default function AdminOrdersPage() {
  const ordersStore = import("/@/app/lib/ordersStore");
const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => { ordersStore.then(m => setOrders(m.getOrders())); }, []);

  const updateStatus = (id: string, status: Order["status"]) => {
    const updated = orders.map((o) =>
      o.id === id ? { ...o, status } : o
    );

    setOrders(updated);
    localStorage.setItem("cleango_orders", JSON.stringify(updated));
  };

  return (
    <AdminLayout>
      <h2 className="text-xl font-semibold mb-4">Все заказы</h2>

      {orders.length === 0 ? (
        <p className="text-gray-500">Заказов нет</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border-b">ID</th>
                <th className="p-3 border-b">Услуга</th>
                <th className="p-3 border-b">Исполнитель</th>
                <th className="p-3 border-b">Дата</th>
                <th className="p-3 border-b">Цена</th>
                <th className="p-3 border-b">Статус</th>
                <th className="p-3 border-b">Действия</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="hover:bg-gray-50">
                  <td className="p-3 border-b text-xs">{o.id.slice(0, 8)}</td>
                  <td className="p-3 border-b">{o.service}</td>
                  <td className="p-3 border-b">{o.provider}</td>
                  <td className="p-3 border-b">{o.date}</td>
                  <td className="p-3 border-b">{o.price} ₸</td>
                  <td className="p-3 border-b capitalize">
                    {o.status.replace("_", " ")}
                  </td>
                  <td className="p-3 border-b space-x-2">
                    {["paid", "accepted", "in_progress", "done"].map((s) => (
                      <button
                        key={s}
                        className="px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700"
                        onClick={() => updateStatus(o.id, s as Order["status"])}
                      >
                        {s}
                      </button>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  );
}
