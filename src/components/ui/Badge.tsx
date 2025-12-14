import React from 'react';
interface BadgeProps { children: React.ReactNode; }
export default function Badge({ children }: BadgeProps) {
  return <span className="bg-blue-500 text-white px-2 py-1 rounded">{children}</span>;
}
