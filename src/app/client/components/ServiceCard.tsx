import React from "react";

interface ServiceCardProps {
  id: number;
  title: string;
  price: number;
  rating: number;
  img: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, price, rating, img }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={`text-yellow-400 ${i < Math.round(rating) ? "" : "text-gray-300"}`}>
      ★
    </span>
  ));

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-72 m-2 hover:shadow-lg transition-shadow duration-300">
      <img src={img} alt={title} className="w-full h-40 object-cover"/>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-1">{stars}</div>
          <span className="font-bold text-gray-800">{price}₸</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
          Заказать
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
