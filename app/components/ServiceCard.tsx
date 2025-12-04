'use client'
import React from 'react';

/**
 * Полноценная карточка услуги — улучшенный визуал:
 * - превью изображение (svg placeholder)
 * - аккуратная типографика
 * - цена, рейтинг, CTA
 * - micro-interactions on hover
 */
export default function ServiceCard({ title, desc, price, tag }: { title: string; desc: string; price?: string; tag?: string; }) {
  return (
    <article className="bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image / preview */}
      <div className="h-40 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <svg width="180" height="100" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect width="180" height="100" rx="12" fill="#f8fafc" />
          <g transform="translate(18,16)" stroke="#cbd5e1" strokeWidth="2" fill="none">
            <rect x="0" y="0" width="144" height="68" rx="8" />
            <path d="M8 54h128" stroke="#e6eaf5" strokeWidth="6"/>
          </g>
        </svg>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">{desc}</p>
          </div>
          {tag && <div className="text-xs bg-gray-100 px-2 py-1 rounded">{tag}</div>}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-800 font-medium">{price ? `от ${price}` : ''}</div>
            <div className="flex items-center gap-1 text-yellow-500" aria-hidden>
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.455a1 1 0 00-.364 1.118l1.287 3.956c.3.922-.755 1.688-1.54 1.118l-3.37-2.455a1 1 0 00-1.176 0l-3.37 2.455c-.784.57-1.838-.196-1.539-1.118l1.286-3.956a1 1 0 00-.364-1.118L2.06 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z"/></svg>
              <span className="text-sm text-gray-700">4.7</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a href="#order" className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition">Заказать</a>
            <button className="px-2 py-2 border border-gray-200 rounded-lg hover:bg-gray-50" aria-label="Подробнее">⋯</button>
          </div>
        </div>
      </div>
    </article>
  );
}
