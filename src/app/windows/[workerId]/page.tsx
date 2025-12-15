'use client';
import React from 'react';
import { useParams } from 'next/navigation';

const Page = () => {
  const params = useParams();
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Мытьё окон - Worker {params.workerId}</h1>
      <p>Эффективная мойка окон любой сложности.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">Мойка окон внутри</h2>
          <p>Бережная очистка внутренних стекол и рам.</p>
          <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded">Заказать</button>
        </div>
        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">Мойка окон снаружи</h2>
          <p>Безопасная мойка фасадов и внешних поверхностей.</p>
          <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded">Заказать</button>
        </div>
      </div>
    </div>
  );
};
export default Page;
