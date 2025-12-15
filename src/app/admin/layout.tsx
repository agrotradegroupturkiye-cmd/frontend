import React from "react";
const AdminLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-gray-50">
    <header className="bg-white shadow p-4"><h1 className="text-2xl font-bold">Админ панель</h1></header>
    <main className="p-6">{children}</main>
  </div>
);
export default AdminLayout;
