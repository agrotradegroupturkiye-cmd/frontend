'use client'
import React from 'react';
import { I18nProvider } from './lib/i18n';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <I18nProvider>
      <main className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
        <Hero />
        <Services />
        <Features />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </I18nProvider>
  );
}
