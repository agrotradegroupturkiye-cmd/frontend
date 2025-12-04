"use client";
import { Line } from "react-chartjs-2";
import React from "react";

const data = {
  labels: ["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],
  datasets: [{ label: "Заказы", data: [12,19,10,14,18,20,16], borderColor: "#FF6B00", backgroundColor: "rgba(255,107,0,0.2)" }]
};

export const LineChart = ({ title }: { title: string }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <h3 className="font-bold mb-2">{title}</h3>
    <Line data={data} />
  </div>
);
