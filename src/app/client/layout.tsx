"use client";
import React from "react";
const ClientLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-gray-50">
    <header className="bg-white shadow p-4">
      <h1 className="text-2xl font-bold">Клиент</h1>
    </header>
    <main className="p-6">{children}</main>
  </div>
);
export default ClientLayout;
