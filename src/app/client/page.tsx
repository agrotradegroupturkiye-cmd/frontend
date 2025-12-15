"use client";
import React from "react";
import ClientLayout from "./layout";
import ServiceCard from "./components/ServiceCard";
const services = Array.from({length:8}).map((_,i)=>({id:i+1,title:`Услуга ${i+1}`,price:1000+i*100,rating:4,img:`/assets/service-${i+1}.jpg`}));
const ClientPage = () => (
  <ClientLayout>
    <div className="md:hidden overflow-x-auto flex space-x-4 py-4">
      {services.map(s=><div key={s.id} className="flex-shrink-0 w-64"><ServiceCard {...s}/></div>)}
    </div>
    <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map(s=><ServiceCard key={s.id} {...s}/>)}
    </div>
  </ClientLayout>
);
export default ClientPage;
