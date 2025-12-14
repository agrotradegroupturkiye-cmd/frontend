import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}
export default function Button({ children, onClick, className=''}: ButtonProps) {
  return <button className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ${className}`} onClick={onClick}>{children}</button>;
}
