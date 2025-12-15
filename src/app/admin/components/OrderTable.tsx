import React from "react";
import { orders } from "../../../lib/mocks/adminMock";
const OrderTable = () => (
  <table className="min-w-full bg-white border rounded shadow">
    <thead>
      <tr className="bg-gray-100"><th className="p-2">ID</th><th className="p-2">Клиент</th><th className="p-2">Услуга</th><th className="p-2">Статус</th><th className="p-2">Дата</th></tr>
    </thead>
    <tbody>
      {orders.map(o => (<tr key={o.id} className="border-t"><td className="p-2">{o.id}</td><td className="p-2">{o.client}</td><td className="p-2">{o.service}</td><td className="p-2">{o.status}</td><td className="p-2">{o.date}</td></tr>))}
    </tbody>
  </table>
);
export default OrderTable;
