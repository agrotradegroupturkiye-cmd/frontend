'use client';
import React from 'react';
import { Card, Button } from '@/components/ui';

interface Props {
  orderId: string;
}

export default function ClientOrderDetail({ orderId }: Props) {
  return (
    <Card>
      Детали заказа #{orderId} <Button>Отменить</Button>
    </Card>
  );
}
