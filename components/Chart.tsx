"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function ChartComponent() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Users Growth",
        data: [10, 35, 25, 60, 45],
        borderColor: "#3b82f6",
        backgroundColor: "#93c5fd",
      },
    ],
  };

  return (
    <div style={{ width: "600px", margin: "auto" }}>
      <Line data={data} />
    </div>
  );
}