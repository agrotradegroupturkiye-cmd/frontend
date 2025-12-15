"use client";
import React, { useState, useRef } from "react";
import ServiceCard from "./ServiceCard";

interface Service {
  id: number;
  title: string;
  price: number;
  rating: number;
  img: string;
}

interface ServiceCarouselProps {
  services: Service[];
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ services }) => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const delta = touchStartX.current - touchEndX.current;
      if (delta > 50) next();
      else if (delta < -50) prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const prev = () => setCurrent((c) => (c === 0 ? services.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === services.length - 1 ? 0 : c + 1));

  return (
    <div
      className="md:hidden w-full flex flex-col items-center"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {services.map((s) => (
            <div key={s.id} className="flex-shrink-0 w-full flex justify-center">
              <ServiceCard {...s} />
            </div>
          ))}
        </div>
      </div>

      {/* Точки-индикаторы */}
      <div className="flex space-x-2 mt-3">
        {services.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              idx === current ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>

      {/* Кнопки перелистывания */}
      <div className="flex justify-between w-32 mt-4">
        <button onClick={prev} className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300">
          ←
        </button>
        <button onClick={next} className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300">
          →
        </button>
      </div>
    </div>
  );
};

export default ServiceCarousel;
