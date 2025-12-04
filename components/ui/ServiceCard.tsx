import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4 hover:shadow-xl transition">
    {icon && <div className="text-3xl">{icon}</div>}
    <div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);
