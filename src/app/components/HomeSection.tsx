'use client';
import React, { useState } from 'react';
import ApartmentCalculator from './ApartmentCalculator';
import OfficeCalculator from './OfficeCalculator';
import CarpetCalculator from './CarpetCalculator';
import WindowCalculator from './WindowCalculator';

type OrderData={service:string; params:any};

export default function HomeSection(){
  const services=[
    {title:'Уборка квартир',icon:'🏠',bg:'bg-blue-200',text:'text-blue-700',calculator:ApartmentCalculator},
    {title:'Уборка офисов',icon:'🏢',bg:'bg-green-200',text:'text-green-700',calculator:OfficeCalculator},
    {title:'Мойка ковров',icon:'🛋️',bg:'bg-yellow-200',text:'text-yellow-700',calculator:CarpetCalculator},
    {title:'Мойка окон',icon:'🪟',bg:'bg-purple-200',text:'text-purple-700',calculator:WindowCalculator},
  ];
  const [activeIndex,setActiveIndex]=useState<number|null>(null);
  const [orders,setOrders]=useState<OrderData[]>([]);

  const handleOrder=(service:string,params:any)=>{setOrders(prev=>[...prev,{service,params}]); alert(`Заказ для "${service}" создан!\n`+JSON.stringify(params,null,2)); console.log('Новый заказ:',{service,params});};

  return (
    <section className="w-full max-w-[1200px] mx-auto py-12 px-4 space-y-12 -translate-y-[10%]">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Агрегатор клининговых услуг</h1>
        <p className="text-gray-700 text-lg">Кликните на услугу, чтобы рассчитать стоимость</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s,index)=>{
          const CalcComponent=s.calculator;
          const isActive=activeIndex===index;
          return(
            <div key={s.title} className={`relative flex flex-col items-center p-3 rounded-2xl shadow-md cursor-pointer ${s.bg} ${s.text} h-[180px]`}>
              <div className="text-5xl mb-2">{s.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <button onClick={()=>setActiveIndex(isActive?null:index)} className="mt-auto px-5 py-2 bg-white text-black rounded-full shadow hover:bg-gray-200">Сделать расчёт</button>
              {isActive && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[260px] z-50 scale-90 bg-white rounded-lg shadow-lg p-2">
                  <CalcComponent onOrder={(params:any)=>handleOrder(s.title,params)} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
