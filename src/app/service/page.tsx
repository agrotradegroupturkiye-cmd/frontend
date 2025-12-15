'use client';
import React from 'react';

const Page = () => (
  <div className="p-6 space-y-6">
    <h1 className="text-3xl font-bold">Сервисы клининга</h1>
    <p>Обзор всех доступных услуг и тарифов.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 border rounded shadow">
        <h2 className="text-xl font-semibold">Уборка квартир</h2>
        <p>Полная уборка любого размера.</p>
        <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded">Выбрать</button>
      </div>
      <div className="p-4 border rounded shadow">
        <h2 className="text-xl font-semibold">Уборка офисов</h2>
        <p>Поддержка чистоты вашего бизнеса.</p>
        <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded">Выбрать</button>
      </div>
    </div>
    <div className="mt-6">
      <h3 className="text-2xl font-semibold">Дополнительно</h3>
      <p>Мытье окон, химчистка ковров и спецуслуги.</p>
    </div>
  </div>
);
export default Page;
