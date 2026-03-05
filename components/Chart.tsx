"use client";

import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

import { Line, Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function Charts() {

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "User Growth",
        data: [10, 35, 25, 60, 45],
        borderColor: "#3b82f6",
        backgroundColor: "#93c5fd",
        tension: 0.4
      }
    ]
  };

  const barData = {
    labels: ["Product A", "Product B", "Product C"],
    datasets: [
      {
        label: "Sales",
        data: [30, 50, 20],
        backgroundColor: ["#34d399", "#60a5fa", "#fbbf24"]
      }
    ]
  };

  const pieData = {
    labels: ["Mobile", "Desktop", "Tablet"],
    datasets: [
      {
        label: "Traffic",
        data: [55, 30, 15],
        backgroundColor: ["#6366f1", "#f87171", "#facc15"]
      }
    ]
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "60px",
        flexWrap: "wrap",
        marginTop: "40px"
      }}
    >

      {/* Line Chart */}
      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "10px",
          width: "350px"
        }}
      >
        <h3 style={{ color: "white", marginBottom: "15px" }}>
          User Growth
        </h3>

        <Line data={lineData} />
      </div>

      {/* Bar Chart */}
      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "10px",
          width: "350px"
        }}
      >
        <h3 style={{ color: "white", marginBottom: "15px" }}>
          Product Sales
        </h3>

        <Bar data={barData} />
      </div>

      {/* Pie Chart */}
      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "10px",
          width: "350px"
        }}
      >
        <h3 style={{ color: "white", marginBottom: "15px" }}>
          Traffic Sources
        </h3>

        <Pie data={pieData} />
      </div>

    </div>
  );
}