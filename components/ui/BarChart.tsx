"use client";
import { Bar } from "react-chartjs-2";
import React from "react";

const data = {
  labels: ["Квартиры","Офисы","Окна","Ковры"],
  datasets: [{ label: "Количество заказов", data: [20,14,7,9], backgroundColor: "#00ACC1" }]
};

export const BarChart = ({ title }: { title: string }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <h3 className="font-bold mb-2">{title}</h3>
    <Bar data={data} />
  </div>
);
