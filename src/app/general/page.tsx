'use client';
import React from 'react';

const Page = () => (
  <div className="p-6 space-y-6">
    <h1 className="text-3xl font-bold">Общие услуги клининга</h1>
    <p>Дополнительные услуги: вывоз мусора, уборка после ремонта и дезинфекция.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 border rounded shadow">
        <h2 className="text-xl font-semibold">Вывоз мусора</h2>
        <p>Сбор и утилизация отходов после уборки.</p>
        <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded">Заказать</button>
      </div>
      <div className="p-4 border rounded shadow">
        <h2 className="text-xl font-semibold">Уборка после ремонта</h2>
        <p>Полная очистка помещений после строительных работ.</p>
        <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded">Заказать</button>
      </div>
    </div>
  </div>
);
export default Page;
