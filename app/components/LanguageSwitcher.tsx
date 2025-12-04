'use client'
import React from 'react';
import { useTranslation } from '../lib/i18n';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();
  return (
    <div className="inline-flex items-center gap-2" role="toolbar" aria-label="Language switcher">
      <button
        onClick={() => setLocale('ru')}
        aria-pressed={locale === 'ru'}
        className={`px-2 py-1 rounded ${locale === 'ru' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
      >
        RU
      </button>
      <button
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        className={`px-2 py-1 rounded ${locale === 'en' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
      >
        EN
      </button>
    </div>
  );
}
