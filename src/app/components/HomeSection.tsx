'use client';
import React, { useState } from 'react';
import ApartmentCalculator from './ApartmentCalculator';
import OfficeCalculator from './OfficeCalculator';
import CarpetCalculator from './CarpetCalculator';
import WindowCalculator from './WindowCalculator';

export default function HomeSection() {
  const services = [
    { title: 'Уборка квартир', icon: '🏠', bg:'bg-blue-200', text:'text-blue-700', calc: <ApartmentCalculator/> },
    { title: 'Уборка офисов', icon: '🏢', bg:'bg-green-200', text:'text-green-700', calc: <OfficeCalculator/> },
    { title: 'Мойка ковров', icon: '🛋️', bg:'bg-yellow-200', text:'text-yellow-700', calc: <CarpetCalculator/> },
    { title: 'Мойка окон', icon: '🪟', bg:'bg-purple-200', text:'text-purple-700', calc: <WindowCalculator/> },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="w-full max-w-[1200px] mx-auto py-12 px-4 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Агрегатор клининговых услуг</h1>
        <p className="text-gray-700 text-lg">Кликните на услугу, чтобы рассчитать стоимость</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, index)=>(
          <div key={s.title} className={`flex flex-col items-center p-6 rounded-2xl shadow-md cursor-pointer transition-all duration-500 ${s.bg} ${s.text} hover:scale-105 hover:shadow-xl`}>
            <div className="text-6xl mb-4" onClick={()=>setActiveIndex(activeIndex===index?null:index)}>{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <div className={`w-full mt-4 overflow-hidden transition-all duration-500 ${activeIndex===index?'max-h-[2000px]':'max-h-0'}`}>
              {activeIndex===index && s.calc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
