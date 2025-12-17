"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

interface Order {
  id: string;
  service: string;
  price: number;
  provider: string;
  date: string;
  status: "paid" | "accepted" | "in_progress" | "done";
  createdAt: string;
}

export default function CheckoutPage() {
  const params = useSearchParams();
  const router = useRouter();

  const service = params.get("service");
  const provider = params.get("provider");
  const date = params.get("date");
  const total = params.get("total");

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const handlePay = () => {
    if (!cardNumber || !cardName || !expiry || !cvc) {
      alert("Заполните данные карты");
      return;
    }

    const newOrder: Order = {
      id: crypto.randomUUID(),
      service: service || "",
      price: Number(total),
      provider: provider || "",
      date: date || "",
      status: "paid",
      createdAt: new Date().toISOString(),
    };

    const existing = localStorage.getItem("cleango_orders");
    const orders: Order[] = existing ? JSON.parse(existing) : [];

    localStorage.setItem(
      "cleango_orders",
      JSON.stringify([...orders, newOrder])
    );

    router.push("/client/orders");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-semibold mb-6">Оформление заказа</h1>

        <div className="bg-gray-50 p-4 rounded-lg mb-6 text-sm">
          <div><b>Услуга:</b> {service}</div>
          <div><b>Исполнитель:</b> {provider}</div>
          <div><b>Дата:</b> {date}</div>
          <div className="mt-2 font-semibold">Итого: {total} ₸</div>
        </div>

        <h2 className="font-semibold mb-3">Оплата картой</h2>

        <input
          className="w-full border p-3 rounded mb-3"
          placeholder="Номер карты"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />

        <input
          className="w-full border p-3 rounded mb-3"
          placeholder="Имя на карте"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />

        <div className="flex gap-3 mb-4">
          <input
            className="w-1/2 border p-3 rounded"
            placeholder="MM / YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
          />
          <input
            className="w-1/2 border p-3 rounded"
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
          />
        </div>

        <button
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 mb-3"
          onClick={handlePay}
        >
          Оплатить {total} ₸
        </button>

        <button
          className="w-full bg-gray-300 py-2 rounded hover:bg-gray-400"
          onClick={() => router.back()}
        >
          Назад
        </button>
      </div>
    </div>
  );
}
