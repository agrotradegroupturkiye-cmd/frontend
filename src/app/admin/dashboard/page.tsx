import OrdersClient from "./OrdersClient";

export const metadata = {
  title: "Дашборд заказов CleanGo",
  description: "Админ панель заказов с live-update и анимацией",
};

export default function DashboardPage() {
  return <OrdersClient />;
}
