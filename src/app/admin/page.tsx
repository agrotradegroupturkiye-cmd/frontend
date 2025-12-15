"use client";
import React, { useState } from "react";
import AdminLayout from "./layout";

interface Order {
  id: number;
  client: string;
  service: string;
  price: number;
  status: "new" | "in-progress" | "done";
}

interface User {
  id: number;
  name: string;
  role: "client" | "provider";
}

const ordersMock: Order[] = [
  { id: 1, client: "Иван", service: "Уборка квартиры", price: 3000, status: "new" },
  { id: 2, client: "Мария", service: "Мойка окон", price: 1500, status: "done" },
  { id: 3, client: "Алексей", service: "Глубокая уборка", price: 4500, status: "in-progress" },
];

const usersMock: User[] = [
  { id: 1, name: "Иван", role: "client" },
  { id: 2, name: "Пётр", role: "provider" },
  { id: 3, name: "Мария", role: "client" },
];

const AdminPage = () => {
  const [orders, setOrders] = useState(ordersMock);

  const updateStatus = (id: number, status: Order["status"]) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status } : o))
    );
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Админ панель клининга</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 shadow rounded">Всего заказов: {orders.length}</div>
        <div className="bg-white p-4 shadow rounded">
          Активных провайдеров: {usersMock.filter(u => u.role === "provider").length}
        </div>
        <div className="bg-white p-4 shadow rounded">
          Популярная услуга: {orders[0].service}
        </div>
      </div>
      <div className="bg-white shadow rounded overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border-b">ID</th>
              <th className="p-3 border-b">Клиент</th>
              <th className="p-3 border-b">Услуга</th>
              <th className="p-3 border-b">Цена</th>
              <th className="p-3 border-b">Статус</th>
              <th className="p-3 border-b">Действия</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{o.id}</td>
                <td className="p-3 border-b">{o.client}</td>
                <td className="p-3 border-b">{o.service}</td>
                <td className="p-3 border-b">{o.price}₸</td>
                <td className="p-3 border-b capitalize">{o.status}</td>
                <td className="p-3 border-b space-x-2">
                  {["new", "in-progress", "done"].map((s) => (
                    <button
                      key={s}
                      className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
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
    </AdminLayout>
  );
};

export default AdminPage;
