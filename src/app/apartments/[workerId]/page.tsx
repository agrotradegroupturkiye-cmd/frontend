'use client';

import React from 'react';

const Page = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Уборка квартир — Работник</h1>
      <p>Подробная информация о специалисте и его услугах для квартир.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">Ежедневная уборка</h2>
          <p>Поддержка чистоты и порядка каждый день.</p>
          <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded">Заказать</button>
        </div>

        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">Генеральная уборка</h2>
          <p>Глубокая уборка с дезинфекцией всех помещений.</p>
          <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded">Заказать</button>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <h3 className="text-2xl font-semibold">Отзывы</h3>
        <p>“Быстро и качественно. Очень довольны.”</p>
        <p>“Всё идеально, рекомендую друзьям.”</p>
      </div>
    </div>
  );
};

export default Page;
