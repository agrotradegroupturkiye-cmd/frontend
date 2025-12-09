'use client';
import React,{useState} from 'react';
import { useRouter } from 'next/navigation';

export default function OfficeCalculator(){
  const router = useRouter();
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

  const createOrderAndRedirect = () => {
    const order = {
      id: (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : 'ord_' + Date.now(),
      service: 'Уборка офисов',
      params: { size, floor, rooms, urgent },
      price: calculatePrice(),
      address: '',
      createdAt: new Date().toISOString()
    };
    const list = JSON.parse(localStorage.getItem('serviceOrders')||'[]');
    list.push(order);
    localStorage.setItem('serviceOrders', JSON.stringify(list));
    router.push('/providers?orderId=' + order.id);
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

      <div className="flex justify-center mt-3">
        <button
          type="button"
          onClick={(e)=>{ e.stopPropagation(); createOrderAndRedirect(); }}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Заказать услугу
        </button>
      </div>
    </div>
  );
}
