"use client";
import React from "react";
import ProviderLayout from "../layout";
import { providerOrders } from "../../../lib/mocks/providerMock";

const OrdersPage = () => (
  <ProviderLayout>
    <h2 className="text-xl font-semibold mb-4">Список заказов</h2>
    <div className="flex flex-col space-y-4">
      {providerOrders.length === 0 ? (
        <p>Заказов нет</p>
      ) : (
        providerOrders.map(order => (
          <div key={order.id} className="p-4 bg-white rounded shadow">
            <p><strong>Клиент:</strong> {order.client}</p>
            <p><strong>Услуга:</strong> {order.service}</p>
            <p><strong>Статус:</strong> {order.status}</p>
            <p><strong>Дата:</strong> {order.date}</p>
          </div>
        ))
      )}
    </div>
  </ProviderLayout>
);

export default OrdersPage;
