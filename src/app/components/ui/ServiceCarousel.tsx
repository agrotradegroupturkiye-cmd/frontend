"use client";
import React from "react";
import ServiceCard from "./ServiceCard";

interface ServiceCarouselProps {
  services: Array<{
    id: number;
    title: string;
    price: number;
    rating: number;
    img: string;
    buttonText?: string;
  }>;
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ services }) => (
  <div className="md:hidden overflow-x-auto flex space-x-4 py-4">
    {services.map((s) => (
      <div key={s.id} className="flex-shrink-0 w-64">
        <ServiceCard {...s} />
      </div>
    ))}
  </div>
);

export default ServiceCarousel;
