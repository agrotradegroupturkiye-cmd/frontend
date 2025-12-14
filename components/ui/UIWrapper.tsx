import React from 'react';
interface CardProps { children: React.ReactNode; className?: string }
export function Card({ children, className = '' }: CardProps) {
  return <div className={`bg-white shadow p-4 rounded ${className}`}>{children}</div>;
}
export interface TabGroupProps { tabs: string[]; activeTab: string; onChange: (tab:string)=>void }
export function TabGroup({ tabs, activeTab, onChange }: TabGroupProps) {
  return <div>{tabs.map(t => <button key={t} onClick={() => onChange(t)}>{t}</button>)}</div>;
}
