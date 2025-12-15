'use client';
import React from 'react';
import { useParams } from 'next/navigation';

const Page = () => {
  const params = useParams();
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Уборка ковров - Worker {params.workerId}</h1>
      <p>Выберите услугу по коврам и добавьте в заказ.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">Химчистка ковров</h2>
          <p>Эффективная чистка без повреждения тканей.</p>
          <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded">Заказать</button>
        </div>
        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">Стирка ковров</h2>
          <p>Бережная стирка для домашних и офисных ковров.</p>
          <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded">Заказать</button>
        </div>
      </div>
      <div className="mt-6 space-y-2">
        <h3 className="text-2xl font-semibold">Отзывы клиентов</h3>
        <p>Смотрите отзывы о качестве нашей уборки.</p>
      </div>
    </div>
  );
};
export default Page;
