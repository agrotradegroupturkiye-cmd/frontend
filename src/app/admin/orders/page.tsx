import OrdersClient from "./OrdersClient";

export const metadata = {
  title: "Дашборд заказов CleanGo",
  description: "Админ панель заказов с live-update и анимацией",
};

export default function OrdersPage() {
  return <OrdersClient />;
}
