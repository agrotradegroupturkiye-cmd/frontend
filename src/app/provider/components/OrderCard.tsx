import React from "react";
import { providerOrders } from "../../lib/mocks/providerMock";
const OrderCard = () => (
  <div className="flex flex-col space-y-4">
    {providerOrders.map(o => (<div key={o.id} className="bg-white shadow rounded p-4"><p><strong>Клиент:</strong> {o.client}</p><p><strong>Услуга:</strong> {o.service}</p><p><strong>Статус:</strong> {o.status}</p><button className="mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">Выполнено</button></div>))}
  </div>
);
export default OrderCard;
