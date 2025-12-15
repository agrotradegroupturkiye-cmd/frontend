"use client";
import React, { useState, useRef } from "react";
import OrderCard from "./OrderCard";

interface Order {
  id: number;
  clientName: string;
  service: string;
  date: string;
  status: string;
}

interface Props {
  orders: Order[];
}

const ProviderOrderCarousel: React.FC<Props> = ({ orders }) => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  if (!orders || orders.length === 0) return null;

  const prev = () => setCurrent((c) => (c === 0 ? orders.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === orders.length - 1 ? 0 : c + 1));

  const handleTouchStart = (e: React.TouchEvent) => touchStartX.current = e.touches[0].clientX;
  const handleTouchMove = (e: React.TouchEvent) => touchEndX.current = e.touches[0].clientX;
  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const delta = touchStartX.current - touchEndX.current;
      if (delta > 50) next();
      else if (delta < -50) prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="md:hidden w-full flex flex-col items-center"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-full overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
          {orders.map((o, idx) => (
            <div key={o.id} className={`flex-shrink-0 w-full flex justify-center transform transition-transform duration-300 ${idx === current ? "scale-100" : "scale-95 opacity-70"}`}>
              <OrderCard {...o} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-2 mt-3">
        {orders.map((_, idx) => (
          <span key={idx} className={`w-2 h-2 rounded-full transition-colors duration-200 ${idx === current ? "bg-blue-600" : "bg-gray-300"}`}></span>
        ))}
      </div>

      <div className="flex justify-between w-32 mt-4">
        <button onClick={prev} className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300">←</button>
        <button onClick={next} className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300">→</button>
      </div>
    </div>
  );
};

export default ProviderOrderCarousel;
