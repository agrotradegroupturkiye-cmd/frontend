"use client"
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-xl w-full text-center bg-white shadow-lg rounded-2xl p-8 animate-fadeIn">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Страница в разработке</h1>
        <p className="text-gray-600 text-lg mb-6">Контент скоро появится...</p>
        <div className="mt-6">
          <div className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:shadow-xl transition">
            Следите за обновлениями
          </div>
        </div>
      </div>
    </main>
  );
}
