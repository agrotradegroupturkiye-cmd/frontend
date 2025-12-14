'use client';
import React from 'react';
import { Card, Button } from '@/components/ui';

interface Props {
  orderId: string;
}

export default function ServiceOrderDetail({ orderId }: Props) {
  return (
    <Card>
      Управление заказом #{orderId} <Button>Выполнено</Button>
    </Card>
  );
}
