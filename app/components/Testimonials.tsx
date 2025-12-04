'use client'
import React, { useEffect, useRef, useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { useTranslation } from '../lib/i18n';

export default function Testimonials() {
  const { t, locale } = useTranslation();
  const ru = [
    { name: "Анна П.", text: "Очень быстро и аккуратно. Спасибо CleanGo!" },
    { name: "Иван С.", text: "Прекрасный сервис, всё как обещали." }
  ];
  const en = [
    { name: "Anna P.", text: "Fast and very neat. Thank you!" },
    { name: "Ivan S.", text: "Great service, as promised." }
  ];
  const TESTIMONIALS = locale === 'en' ? en : ru;

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(id);
  }, [TESTIMONIALS.length]);

  return (
    <AnimatedSection delay={80}>
      <section className="w-full max-w-7xl mt-12 p-6 bg-white rounded-2xl shadow-xl text-center">
        <h3 className="text-xl font-semibold mb-4">{t('testimonialsHeading') ?? 'Отзывы'}</h3>
        <p className="italic text-gray-700">“{TESTIMONIALS[index].text}”</p>
        <p className="font-semibold mt-2">{TESTIMONIALS[index].name}</p>
      </section>
    </AnimatedSection>
  );
}
