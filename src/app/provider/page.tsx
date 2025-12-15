"use client";
import React from "react";
import ProviderLayout from "./layout";
import OrderCard from "./components/OrderCard";
const orders = Array.from({length:8}).map((_,i)=>({id:i+1,title:`Заказ ${i+1}`,price:1000+i*100,rating:4,img:`/assets/service-${i+1}.jpg`}));
const ProviderPage = () => (
  <ProviderLayout>
    <div className="md:hidden overflow-x-auto flex space-x-4 py-4">
      {orders.map(o=><div key={o.id} className="flex-shrink-0 w-64"><OrderCard {...o}/></div>)}
    </div>
    <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {orders.map(o=><OrderCard key={o.id} {...o}/>)}
    </div>
  </ProviderLayout>
);
export default ProviderPage;
