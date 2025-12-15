"use client";

import { useState } from "react";
import OrderList from "@/components/ui/OrderList";

export default function OrdersClient() {
  const [selectedOrder, setSelectedOrder] = useState(null);

  return <OrderList role="service" />;
}
