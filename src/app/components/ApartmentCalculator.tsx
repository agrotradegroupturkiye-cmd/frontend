'use client';
import React, { useState } from 'react';
export default function ApartmentCalculator({ onOrder }: { onOrder?: (params:any)=>void }) {
  const [size,setSize]=useState(0), [floor,setFloor]=useState(1), [rooms,setRooms]=useState(1), [bathrooms,setBathrooms]=useState(1),
        [cleaningType,setCleaningType]=useState('Поверхностная'), [urgent,setUrgent]=useState(false);
  const calcPrice=()=>{let p=150*(size||1)*rooms+bathrooms*100; if(cleaningType==='Генеральная')p*=1.5; if(floor>5)p*=1.1; if(urgent)p*=1.3; return Math.round(p);};
  const renderCounter=(v:number,s:(n:number)=>void)=>(<div className="flex items-center space-x-2 mt-1"><button className="bg-gray-200 rounded px-2" onClick={e=>{e.stopPropagation(); s(Math.max(0,v-1))}}>-</button><span className="px-2">{v}</span><button className="bg-gray-200 rounded px-2" onClick={e=>{e.stopPropagation(); s(v+1)}}>+</button></div>);
  return (<div onClick={e=>e.stopPropagation()} className="p-2 bg-white rounded-lg shadow-inner space-y-2 text-sm">
    <label>Площадь (м²)</label><input type="number" className="w-full border rounded p-1 text-sm" value={size} onChange={e=>setSize(Number(e.target.value))}/>
    <label>Этаж</label>{renderCounter(floor,setFloor)}
    <label>Тип уборки</label><select className="w-full border rounded p-1 text-sm" value={cleaningType} onChange={e=>setCleaningType(e.target.value)}><option>Поверхностная</option><option>Генеральная</option></select>
    <label>Комнаты</label>{renderCounter(rooms,setRooms)}
    <label>Ванные</label>{renderCounter(bathrooms,setBathrooms)}
    <div className="inline-flex items-center space-x-2"><input type="checkbox" checked={urgent} onChange={e=>setUrgent(e.target.checked)}/><span>Срочно (+30%)</span></div>
    <div className="text-center font-bold text-lg mt-1">Цена: {calcPrice()}₸</div>
    <button onClick={()=>onOrder?.({size,floor,rooms,bathrooms,cleaningType,urgent,price:calcPrice()})} className="w-full mt-1 bg-blue-500 text-white rounded-full py-1 hover:bg-blue-600">Заказать услугу</button>
  </div>);
}
