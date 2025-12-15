import React from "react";
import ProviderLayout from "./layout";
import OrderCard from "./components/OrderCard";
const ProviderPage = () => (<ProviderLayout><h2 className="text-xl font-semibold mb-4">Ваши заказы</h2><OrderCard /></ProviderLayout>);
export default ProviderPage;
