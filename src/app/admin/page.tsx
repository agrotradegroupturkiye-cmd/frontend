import React from "react";
import AdminLayout from "./layout";
import OrderTable from "./components/OrderTable";
const AdminPage = () => (<AdminLayout><h2 className="text-xl font-semibold mb-4">Статистика заказов</h2><OrderTable /></AdminLayout>);
export default AdminPage;
