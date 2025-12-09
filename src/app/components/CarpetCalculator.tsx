'use client';
import React, { useState } from 'react';
export default function CarpetCalculator({ onOrder }: { onOrder?: (params:any)=>void }) {
  const [count,setCount]=useState(1), [size,setSize]=useState(0), [material,setMaterial]=useState('Шерсть'), [urgent,setUrgent]=useState(false);
  const calcPrice=()=>{let p=50*(size||1)*count; if(material==='Полиэстер')p*=0.9; if(urgent)p*=1.2; return Math.round(p);};
  const renderCounter=(v:number,s:(n:number)=>void)=>(<div className="flex items-center space-x-2 mt-1"><button className="bg-gray-200 rounded px-2" onClick={e=>{e.stopPropagation(); s(Math.max(0,v-1))}}>-</button><span className="px-2">{v}</span><button className="bg-gray-200 rounded px-2" onClick={e=>{e.stopPropagation(); s(v+1)}}>+</button></div>);
  return (<div onClick={e=>e.stopPropagation()} className="p-2 bg-white rounded-lg shadow-inner space-y-2 text-sm">
    <label>Площадь ковров (м²)</label><input type="number" className="w-full border rounded p-1 text-sm" value={size} onChange={e=>setSize(Number(e.target.value))}/>
    <label>Количество ковров</label>{renderCounter(count,setCount)}
    <label>Материал</label>
    <select className="w-full border rounded p-1 text-sm" value={material} onChange={e=>setMaterial(e.target.value)}><option>Шерсть</option><option>Полиэстер</option></select>
    <div className="inline-flex items-center space-x-2"><input type="checkbox" checked={urgent} onChange={e=>setUrgent(e.target.checked)}/><span>Срочно (+20%)</span></div>
    <div className="text-center font-bold text-lg mt-1">Цена: {calcPrice()}₸</div>
    <button onClick={()=>onOrder?.({count,size,material,urgent,price:calcPrice()})} className="w-full mt-1 bg-yellow-500 text-white rounded-full py-1 hover:bg-yellow-600">Заказать услугу</button>
  </div>);
}
