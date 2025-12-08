'use client';
import React,{useState} from 'react';
import ApartmentCalculator from './ApartmentCalculator';
import OfficeCalculator from './OfficeCalculator';
import CarpetCalculator from './CarpetCalculator';
import WindowCalculator from './WindowCalculator';

export default function HomeSection(){
  const services=[
    {title:'Уборка квартир',icon:'🏠',bg:'bg-blue-100',text:'text-blue-800'},
    {title:'Уборка офисов',icon:'🏢',bg:'bg-green-100',text:'text-green-800'},
    {title:'Мойка ковров',icon:'🧼',bg:'bg-yellow-100',text:'text-yellow-800'},
    {title:'Мойка окон',icon:'🪟',bg:'bg-purple-100',text:'text-purple-800'},
  ];
  const [activeIndex,setActiveIndex]=useState<number|null>(null);
  const toggleCard=(index:number)=>{
    setActiveIndex(prev => prev===index? null : index);
  };
  return (
    <section className="w-full max-w-[1200px] mx-auto py-12 px-4 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Агрегатор клининговых услуг</h1>
        <p className="text-gray-700 text-lg">Кликните на услугу, чтобы рассчитать стоимость</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s,index)=>(
          // relative — нужно для absolute overlay калькулятора
          <div key={s.title} className={`relative flex flex-col items-center p-6 rounded-2xl shadow-md cursor-pointer transition-transform duration-200 ${s.bg} ${s.text} hover:scale-105 hover:shadow-xl`} onClick={()=>toggleCard(index)} >
            <div className="text-6xl mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>

            {/* Absolute overlay: не влияет на layout других карточек */}
            {activeIndex===index && (
              <div
                // позиция и стили оверлея
                className="absolute left-1/2 transform -translate-x-1/2 top-full mt-4 w-[320px] sm:w-[360px] lg:w-[420px] z-30"
                // важно: клики внутри оверлея не должны всплывать до карточки
                onClick={e=>e.stopPropagation()}
              >
                <div className="p-4 rounded-2xl shadow-lg bg-white">
                  {s.title==='Уборка квартир' && <ApartmentCalculator/>}
                  {s.title==='Уборка офисов' && <OfficeCalculator/>}
                  {s.title==='Мойка ковров' && <CarpetCalculator/>}
                  {s.title==='Мойка окон' && <WindowCalculator/>}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
