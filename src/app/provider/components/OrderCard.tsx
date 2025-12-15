"use client";
import React from "react";
interface OrderCardProps { id:number,title:string,price:number,rating:number,img:string;buttonText?:string; }
const OrderCard: React.FC<OrderCardProps> = ({ title, price, rating, img, buttonText }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden w-full hover:shadow-xl transition-shadow duration-300">
    <img src={img} alt={title} className="h-40 w-full object-cover"/>
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="flex justify-between items-center">
        <span className="text-gray-700 font-medium">{price}₸</span>
        <span className="text-yellow-500 font-semibold">{rating} ★</span>
      </div>
      <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">{buttonText||"Взять в исполнение"}</button>
    </div>
  </div>
);
export default OrderCard;
