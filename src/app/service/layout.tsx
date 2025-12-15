'use client';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Service Overview</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
