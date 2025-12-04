'use client'
import React from 'react';
import AnimatedSection from './AnimatedSection';
import ServiceCard from './ServiceCard';
import { useTranslation } from '../lib/i18n';

export default function Services() {
  const { t } = useTranslation();
  const items = [
    { key: 'apt', title: t('apartments'), desc: t('apartmentsDesc'), price: '1 500₸', tag: 'Популярно' },
    { key: 'off', title: t('offices'), desc: t('officesDesc'), price: '2 500₸' },
    { key: 'car', title: t('carpets'), desc: t('carpetsDesc'), price: '800₸' },
    { key: 'win', title: t('windows'), desc: t('windowsDesc'), price: '500₸' }
  ];

  return (
    <section id="services" className="w-full max-w-7xl mt-12">
      <h2 className="text-2xl font-semibold mb-6">Наши услуги</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <AnimatedSection key={it.key} delay={i * 60}>
            <ServiceCard title={it.title} desc={it.desc} price={it.price} tag={it.tag} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
