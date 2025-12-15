'use client';
import React from 'react';

const Page = () => (
  <div className="p-6 space-y-6">
    <h1 className="text-3xl font-bold">Админ панель клининга</h1>
    <p>Управление заказами, работниками и услугами сервиса.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 border rounded shadow">
        <h2 className="text-xl font-semibold">Статистика заказов</h2>
        <p>Общий обзор текущих и выполненных заказов.</p>
        <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded">Перейти</button>
      </div>
      <div className="p-4 border rounded shadow">
        <h2 className="text-xl font-semibold">Управление работниками</h2>
        <p>Добавление, редактирование и удаление специалистов.</p>
        <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded">Перейти</button>
      </div>
    </div>
  </div>
);
export default Page;
