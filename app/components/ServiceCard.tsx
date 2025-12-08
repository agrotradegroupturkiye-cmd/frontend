'use client';
import React from 'react';
export default function ServiceCard({ title }: { title: string }) {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
}
