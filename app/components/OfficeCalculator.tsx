'use client';
import React,{useState} from 'react';
export default function OfficeCalculator(){
  const [size,setSize]=useState(0);
  const [floor,setFloor]=useState(1);
  const [rooms,setRooms]=useState(1);
  const [urgent,setUrgent]=useState(false);
  const calculatePrice=()=>{
    let price=200*(size||1)+rooms*50;
    if(floor>5) price*=1.1;
    if(urgent) price*=1.3;
    return Math.round(price);
  };
  const renderCounter=(value:number,setter:(n:number)=>void)=>(<div className="flex items-center space-x-2 mt-1">
    <button type="button" className="bg-gray-200 hover:bg-gray-300 rounded px-2" onClick={(e)=>{e.stopPropagation(); setter(Math.max(0,value-1))}}>-</button>
    <span className="px-2">{value}</span>
    <button type="button" className="bg-gray-200 hover:bg-gray-300 rounded px-2" onClick={(e)=>{e.stopPropagation(); setter(value+1)}}>+</button>
  </div>);
  return (
    <div onClick={e=>e.stopPropagation()} className="p-4 bg-white rounded-lg shadow-inner space-y-4 w-full">
      <label className="block">Площадь (м²)</label>
      <input type="number" className="w-full border rounded p-2 mt-1" value={size} onChange={e=>setSize(Number(e.target.value))}/>
      <label className="block">Этаж</label>{renderCounter(floor,setFloor)}
      <label className="block">Количество кабинетов</label>{renderCounter(rooms,setRooms)}
      <div className="mt-2">
        <label className="inline-flex items-center space-x-2">
          <input onClick={e=>e.stopPropagation()} type="checkbox" checked={urgent} onChange={e=>setUrgent(e.target.checked)}/>
          <span>Срочно (+30%)</span>
        </label>
      </div>
      <div className="text-center font-bold text-xl mt-2">Цена: {calculatePrice()}₸</div>
    </div>
  );
}
