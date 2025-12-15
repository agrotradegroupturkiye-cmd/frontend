import React from "react";
import ClientLayout from "../layout";
import ProductCard from "../../components/ui/ProductCard";

const mockOrders = [
  { id: 1, title: "Уборка квартиры", price: 2500, status: "Новый" },
  { id: 2, title: "Мытьё окон", price: 1500, status: "В процессе" },
  { id: 3, title: "Чистка ковров", price: 2000, status: "Выполнено" }
];

const OrdersPage = () => (
  <ClientLayout>
    <h2 className="text-xl font-semibold mb-4">Мои заказы</h2>
    <div className="flex flex-col gap-4">
      {mockOrders.map((order) => (
        <div key={order.id} className="p-4 border rounded shadow-sm flex justify-between">
          <div>{order.title}</div>
          <div>{order.status}</div>
          <div>{order.price}₸</div>
        </div>
      ))}
    </div>
  </ClientLayout>
);

export default OrdersPage;
