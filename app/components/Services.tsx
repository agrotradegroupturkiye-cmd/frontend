'use client';
import React from 'react';
import ServiceCard from './ServiceCard';
export default function Services() {
  const items = ['Квартиры', 'Офисы', 'Мойка окон', 'Мойка ковров'];
  return (
    <section className="w-full max-w-7xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((it, i) => <ServiceCard key={i} title={it} />)}
    </section>
  );
}
