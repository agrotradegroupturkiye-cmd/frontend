"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ClientLayout from "./layout";

interface Service {
  id: number;
  title: string;
  basePrice: number;
}

interface Provider {
  id: number;
  name: string;
  rating: number;
}

const services: Service[] = [
  { id: 1, title: "Мойка ковров", basePrice: 500 },
  { id: 2, title: "Мойка окон", basePrice: 300 },
  { id: 3, title: "Уборка офисов", basePrice: 800 },
  { id: 4, title: "Уборка квартир", basePrice: 700 },
];

const mockProviders: Provider[] = [
  { id: 1, name: "Клининговая компания А", rating: 4.7 },
  { id: 2, name: "Сервис Б", rating: 4.5 },
  { id: 3, name: "Уборка С", rating: 4.9 },
];

export default function ClientPage() {
  const router = useRouter();

  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [area, setArea] = useState(10);
  const [total, setTotal] = useState(0);

  const [showProviders, setShowProviders] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
  const [selectedDate, setSelectedDate] = useState("");

  const openCalculator = (service: Service) => {
    setSelectedService(service);
    setTotal(service.basePrice * area * quantity);
    setShowProviders(false);
    setSelectedProvider(null);
    setSelectedDate("");
  };

  const calculateTotal = () => {
    if (selectedService) {
      setTotal(selectedService.basePrice * area * quantity);
    }
  };

  const goToCheckout = () => {
    if (!selectedService || !selectedProvider || !selectedDate) {
      alert("Заполните все данные");
      return;
    }

    router.push(
      `/client/checkout?service=${encodeURIComponent(
        selectedService.title
      )}&provider=${encodeURIComponent(
        selectedProvider.name
      )}&date=${selectedDate}&total=${total}`
    );
  };

  return (
    <ClientLayout>
      <h2 className="text-xl font-semibold mb-4">Популярные услуги</h2>

      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {services.map((s) => (
          <div key={s.id} className="bg-white shadow rounded-lg p-4">
            <h3 className="font-semibold mb-2">{s.title}</h3>
            <p className="mb-3 text-gray-600">{s.basePrice} ₸ / м²</p>
            <button
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              onClick={() => openCalculator(s)}
            >
              Заказать
            </button>
          </div>
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden flex space-x-4 overflow-x-auto pb-4">
        {services.map((s) => (
          <div key={s.id} className="min-w-[260px] bg-white shadow rounded-lg p-4">
            <h3 className="font-semibold mb-2">{s.title}</h3>
            <p className="mb-3 text-gray-600">{s.basePrice} ₸ / м²</p>
            <button
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              onClick={() => openCalculator(s)}
            >
              Заказать
            </button>
          </div>
        ))}
      </div>

      {/* Calculator modal */}
      {selectedService && !showProviders && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h3 className="font-semibold mb-4">{selectedService.title}</h3>

            <label className="block mb-2">
              Количество
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(+e.target.value)}
                className="w-full border p-2 rounded"
              />
            </label>

            <label className="block mb-2">
              Площадь (м²)
              <input
                type="number"
                value={area}
                onChange={(e) => setArea(+e.target.value)}
                className="w-full border p-2 rounded"
              />
            </label>

            <div className="font-semibold mb-3">Итого: {total} ₸</div>

            <button
              className="w-full mb-2 bg-blue-600 text-white py-2 rounded"
              onClick={calculateTotal}
            >
              Посчитать
            </button>

            <button
              className="w-full mb-2 bg-purple-600 text-white py-2 rounded"
              onClick={() => setShowProviders(true)}
            >
              Выбрать исполнителя
            </button>

            <button
              className="w-full bg-gray-400 text-white py-2 rounded"
              onClick={() => setSelectedService(null)}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}

      {/* Provider + payment */}
      {showProviders && selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 max-h-[80vh] overflow-y-auto">
            <h3 className="font-semibold mb-4">
              Исполнители — {selectedService.title}
            </h3>

            {!selectedProvider && (
              <ul className="space-y-3">
                {mockProviders.map((p) => (
                  <li key={p.id} className="p-3 bg-gray-100 rounded flex justify-between">
                    <div>
                      {p.name} <span className="text-yellow-500">{p.rating} ★</span>
                    </div>
                    <button
                      className="bg-blue-600 text-white px-3 py-1 rounded"
                      onClick={() => setSelectedProvider(p)}
                    >
                      Выбрать
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {selectedProvider && (
              <>
                <p className="mb-2 font-medium">
                  {selectedProvider.name}
                </p>

                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full border p-2 rounded mb-3"
                />

                <button
                  className="w-full bg-green-600 text-white py-2 rounded"
                  onClick={goToCheckout}
                >
                  Вызвать и оплатить
                </button>
              </>
            )}

            <button
              className="w-full mt-3 bg-gray-400 text-white py-2 rounded"
              onClick={() => setShowProviders(false)}
            >
              Назад
            </button>
          </div>
        </div>
      )}
    </ClientLayout>
  );
}
