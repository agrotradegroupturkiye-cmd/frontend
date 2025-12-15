"use client";
import React, { useState } from "react";
import ClientLayout from "./layout";

interface Service { id: number; title: string; basePrice: number; }
interface Provider { id: number; name: string; rating: number; }

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

const ClientPage = () => {
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

  const calculateTotal = () => { if (selectedService) setTotal(selectedService.basePrice * area * quantity); };

  const handleConfirm = () => {
    if (!selectedProvider || !selectedDate) { alert("Выберите провайдера и дату"); return; }
    alert(`Вы выбрали ${selectedProvider.name} на ${selectedDate}. Итоговая сумма: ${total}₸`);
    setSelectedService(null);
    setShowProviders(false);
    setSelectedProvider(null);
    setSelectedDate("");
  };

  return (
    <ClientLayout>
      <h2 className="text-xl font-semibold mb-4">Популярные услуги</h2>

      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {services.map((s) => (
          <div key={s.id} className="bg-white shadow-md rounded-lg overflow-hidden p-4">
            <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-700 mb-3">{s.basePrice}₸ / м²</p>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700" onClick={() => openCalculator(s)}>
              Заказать
            </button>
          </div>
        ))}
      </div>

      <div className="md:hidden overflow-x-auto flex space-x-4 py-4">
        {services.map((s) => (
          <div key={s.id} className="flex-shrink-0 w-64 bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-700 mb-3">{s.basePrice}₸ / м²</p>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700" onClick={() => openCalculator(s)}>
              Заказать
            </button>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h3 className="text-xl font-semibold mb-4">{selectedService.title}</h3>
            <div className="mb-2">
              <label className="block mb-1">Количество:</label>
              <input type="number" className="w-full border p-2 rounded" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}/>
            </div>
            <div className="mb-2">
              <label className="block mb-1">Площадь (м²):</label>
              <input type="number" className="w-full border p-2 rounded" value={area} onChange={(e) => setArea(parseInt(e.target.value))}/>
            </div>
            <div className="mb-4 font-semibold">Итоговая стоимость: {total}₸</div>
            <button className="mb-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700" onClick={calculateTotal}>
              Посчитать
            </button>
            <button className="mb-2 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700" onClick={() => setShowProviders(true)}>
              Выбор исполнителя
            </button>
            <button className="w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500" onClick={() => setSelectedService(null)}>
              Закрыть
            </button>
          </div>
        </div>
      )}

      {showProviders && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 max-h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-semibold mb-4">Исполнители для {selectedService.title}</h3>
            {selectedProvider ? (
              <div className="p-3 bg-gray-100 rounded">
                <div className="mb-2 font-medium">{selectedProvider.name} - <span className="text-yellow-500">{selectedProvider.rating} ★</span></div>
                <label className="block mb-1">Выберите дату:</label>
                <input type="date" className="w-full border p-2 rounded mb-2" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}/>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700" onClick={handleConfirm}>
                  Оплатить и вызвать
                </button>
              </div>
            ) : (
              <ul className="space-y-3">
                {mockProviders.map((p) => (
                  <li key={p.id} className="p-3 bg-gray-100 rounded flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div className="mb-2 sm:mb-0">
                      <span className="font-medium">{p.name}</span> - <span className="text-yellow-500">{p.rating} ★</span>
                    </div>
                    <button className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700" onClick={() => setSelectedProvider(p)}>
                      Выбрать
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <button className="mt-4 w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500" onClick={() => setShowProviders(false)}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </ClientLayout>
  );
};

export default ClientPage;
