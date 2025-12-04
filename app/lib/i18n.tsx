'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

type Locale = 'ru' | 'en';

const translations: Record<Locale, Record<string,string>> = {
  ru: {
    siteName: 'CleanGo',
    heroTitle: 'CleanGo — клининг без забот',
    heroSubtitle: 'Агрегатор профессиональных услуг по уборке квартир, офисов, ковров и окон. Найди исполнителя быстро и удобно.',
    orderNow: 'Заказать уборку',
    servicesHeading: 'Услуги',
    apartments: 'Уборка квартир',
    apartmentsDesc: 'Быстро и качественно, под ключ.',
    offices: 'Уборка офисов',
    officesDesc: 'Поддерживаем чистоту вашего бизнеса.',
    carpets: 'Чистка ковров',
    carpetsDesc: 'Профессиональная чистка любых ковров.',
    windows: 'Мойка окон',
    windowsDesc: 'Прозрачные окна без разводов.',
    featuresHeading: 'Почему нас выбирают',
    testimonialsHeading: 'Отзывы клиентов',
    ctaTitle: 'Готовы заказать услугу?',
    ctaSubtitle: 'Оставьте контакт — мы поможем подобрать исполнителя и подтвердим заказ.',
    submit: 'Оставить заявку',
    footer: '© 2025 CleanGo — агрегатор клининговых услуг'
  },
  en: {
    siteName: 'CleanGo',
    heroTitle: 'CleanGo — cleaning made simple',
    heroSubtitle: 'Aggregator of professional cleaning services for homes, offices, carpets and windows. Find a trusted cleaner fast.',
    orderNow: 'Order cleaning',
    servicesHeading: 'Services',
    apartments: 'Home Cleaning',
    apartmentsDesc: 'Fast and thorough, turnkey service.',
    offices: 'Office Cleaning',
    officesDesc: 'We keep your business space spotless.',
    carpets: 'Carpet Cleaning',
    carpetsDesc: 'Professional cleaning for all carpet types.',
    windows: 'Window Washing',
    windowsDesc: 'Crystal-clear windows without streaks.',
    featuresHeading: 'Why Choose Us',
    testimonialsHeading: 'Customer Reviews',
    ctaTitle: 'Ready to book a cleaning?',
    ctaSubtitle: 'Leave your contact — we will help you choose a cleaner and confirm the booking.',
    submit: 'Send request',
    footer: '© 2025 CleanGo — cleaning services aggregator'
  }
};

const I18nContext = createContext({
  locale: 'ru' as Locale,
  t: (k:string) => (translations.ru[k] ?? k),
  setLocale: (l:Locale) => {}
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('ru');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('cleanGo_locale') as Locale | null;
      if (saved === 'ru' || saved === 'en') setLocale(saved);
    } catch (e) {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem('cleanGo_locale', locale); } catch(e) {}
  }, [locale]);

  const t = (k: string) => translations[locale][k] ?? k;

  return <I18nContext.Provider value={{ locale, t, setLocale }}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  return useContext(I18nContext);
}
