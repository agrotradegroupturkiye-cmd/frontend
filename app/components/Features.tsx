'use client'
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { useTranslation } from '../lib/i18n';

export default function Features() {
  const { t } = useTranslation();
  const items = [
    { title: 'Проверенные исполнители', desc: 'Верификация и рейтинги для каждой заявки.' },
    { title: 'Гарантия качества', desc: 'Вернём деньги или повторим работу.' },
    { title: 'Удобное бронирование', desc: 'Выберите дату и время за пару кликов.' }
  ];

  return (
    <section className="w-full max-w-7xl mt-12">
      <h2 className="text-2xl font-semibold mb-6">{t('featuresHeading')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <AnimatedSection key={i} delay={i*50}>
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="font-semibold mb-2">{it.title}</h3>
              <p className="text-gray-600 text-sm">{it.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
