"use client";
import React, { ReactNode } from "react";
interface ProviderLayoutProps { children: ReactNode; }
const ProviderLayout: React.FC<ProviderLayoutProps> = ({ children }) => (
  <div className="min-h-screen bg-gray-50">
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Панель провайдера</h1>
        <ul className="flex space-x-4">
          <li className="hover:text-blue-600 cursor-pointer">Главная</li>
          <li className="hover:text-blue-600 cursor-pointer">Заказы</li>
          <li className="hover:text-blue-600 cursor-pointer">Настройки</li>
        </ul>
      </nav>
    </header>
    <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
  </div>
);
export default ProviderLayout;
