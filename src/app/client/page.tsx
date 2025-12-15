"use client";
import React from "react";
import ClientLayout from "./layout";
import ServiceCard from "./components/ServiceCard";
import ServiceCarousel from "./components/ServiceCarousel";
import { services } from "../../lib/mocks/clientMock";

const ClientPage = () => (
  <ClientLayout>
    <h2 className="text-xl font-semibold mb-4">Популярные услуги</h2>
    
    {/* Десктопная сетка 4 карточки */}
    <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((item) => (
        <ServiceCard key={item.id} {...item} />
      ))}
    </div>

    {/* Мобильный swipe */}
    <ServiceCarousel services={services} />
  </ClientLayout>
);

export default ClientPage;
