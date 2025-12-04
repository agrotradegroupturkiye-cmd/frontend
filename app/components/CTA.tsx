'use client'
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { useTranslation } from '../lib/i18n';

export default function CTA() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'error'>('idle');

  const submit = (e:any) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      if (!email.trim() && !phone.trim()) { setStatus('error'); return; }
      setStatus('ok'); setEmail(''); setPhone('');
    }, 700);
  };

  return (
    <AnimatedSection delay={120}>
      <section id="cta" className="w-full max-w-7xl mt-12 p-8 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl shadow-xl text-center">
        <h2 className="text-3xl font-bold mb-3">{t('ctaTitle')}</h2>
        <p className="mb-6 text-blue-100">{t('ctaSubtitle')}</p>
        <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="px-4 py-3 rounded-lg w-72 text-gray-900" />
          <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Телефон" className="px-4 py-3 rounded-lg w-72 text-gray-900" />
          <button type="submit" className="px-5 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-100 transition">{t('submit')}</button>
        </form>

        <div className="mt-4">
          {status === 'ok' && <span className="text-green-100">Заявка принята — мы свяжемся.</span>}
          {status === 'error' && <span className="text-yellow-100">Заполните email или телефон.</span>}
        </div>
      </section>
    </AnimatedSection>
  );
}
