"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function PaymentPage() {
  const params = useSearchParams();
  const router = useRouter();

  const service = params.get("service");
  const provider = params.get("provider");
  const date = params.get("date");
  const total = params.get("total");

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <h1 className="text-2xl font-semibold mb-4">Оплата услуги</h1>

        <div className="space-y-2 text-gray-700 mb-6">
          <div><strong>Услуга:</strong> {service}</div>
          <div><strong>Исполнитель:</strong> {provider}</div>
          <div><strong>Дата:</strong> {date}</div>
          <div className="text-lg font-semibold mt-2">
            Итог: {total} ₸
          </div>
        </div>

        <button
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 mb-3"
          onClick={() => { import("/@/app/lib/ordersStore").then(m => { const newOrder = { id: crypto.randomUUID(), service: service||"", price: Number(total), provider: provider||"", date: date||"", status: "paid", createdAt: new Date().toISOString() }; m.addOrder(newOrder); alert("💳 Оплата успешно выполнена (мок)"); router.push("/client/orders"); }); }}
        >
          Оплатить
        </button>

        <button
          className="w-full bg-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-400"
          onClick={() => router.back()}
        >
          Назад
        </button>
      </div>
    </div>
  );
}
