'use client'
import React from 'react';
import { useTranslation } from '../lib/i18n';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="w-full max-w-7xl mt-16 py-8 text-gray-500 text-sm text-center border-t border-gray-200">
      <div className="mb-3">CleanGo — агрегатор клининговых услуг</div>
      <div>{t('footer')}</div>
    </footer>
  );
}
