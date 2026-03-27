"use client";

import { useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  LineElement, BarElement, ArcElement,
  CategoryScale, LinearScale, PointElement,
  Tooltip, Legend, Filler
);

type ChartType = "bar" | "line" | "pie";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const REVENUE_BY_YEAR: Record<string, number[]> = {
  "2022": [41000, 38000, 52000, 60000, 55000, 72000, 68000, 75000, 80000, 88000, 91000, 95000],
  "2023": [52000, 49000, 64000, 70000, 74000, 85000, 88000, 92000, 97000, 102000, 108000, 115000],
  "2024": [68000, 72000, 85000, 91000, 99000, 104000, 110000, 118000, 122000, 128000, 133000, 140000],
};

const CATEGORY_COLORS = ["#6366f1", "#3b82f6", "#34d399", "#f59e0b", "#f87171"];
const CATEGORIES = ["Technology", "Furniture", "Office Supplies", "Clothing", "Food & Beverage"];
const CATEGORY_REVENUE = [312000, 208000, 165000, 142000, 129000];

const darkTooltip = {
  backgroundColor: "#0f172a",
  titleColor: "#f1f5f9",
  bodyColor: "#94a3b8",
  borderColor: "#334155",
  borderWidth: 1,
  padding: 10,
};

const axisStyle = {
  ticks: { color: "#64748b", font: { size: 12 } },
  grid: { color: "rgba(148,163,184,0.08)" },
};

function ToggleButton({
  active, label, onClick,
}: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "6px 16px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        fontSize: "13px",
        fontWeight: 600,
        background: active ? "#3b82f6" : "rgba(255,255,255,0.05)",
        color: active ? "white" : "#64748b",
        transition: "all 0.15s",
      }}
    >
      {label}
    </button>
  );
}

function ChartCard({
  title, subtitle, children, controls,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  controls: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "#1e293b",
        borderRadius: "16px",
        padding: "28px 32px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        <div>
          <h3 style={{ color: "white", fontSize: "17px", fontWeight: 700, margin: "0 0 4px" }}>
            {title}
          </h3>
          <p style={{ color: "#64748b", fontSize: "13px", margin: 0 }}>{subtitle}</p>
        </div>
        <div style={{ display: "flex", gap: "6px" }}>{controls}</div>
      </div>
      {children}
    </div>
  );
}

// ── Monthly Revenue Chart (full width) ──────────────────────────────────────
function RevenueChart({ year }: { year: string }) {
  const [type, setType] = useState<ChartType>("bar");
  const data = REVENUE_BY_YEAR[year];

  const dataset = {
    label: "Revenue ($)",
    data,
    backgroundColor:
      type === "line"
        ? "rgba(99,102,241,0.12)"
        : type === "bar"
          ? "rgba(99,102,241,0.75)"
          : MONTHS.map((_, i) => `hsl(${(i * 30) % 360}, 70%, 60%)`),
    borderColor:
      type === "pie" ? "#0f172a" : type === "line" ? "#6366f1" : undefined,
    borderWidth: type === "line" ? 2 : 0,
    borderRadius: type === "bar" ? 6 : undefined,
    fill: type === "line",
    tension: 0.4,
    pointRadius: type === "line" ? 4 : 0,
    pointHoverRadius: type === "line" ? 6 : 0,
    hoverOffset: 8,
  };

  const chartData = { labels: MONTHS, datasets: [dataset] };

  const commonOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: { display: type === "pie", labels: { color: "#94a3b8", font: { size: 12 }, padding: 14 } },
      tooltip: {
        ...darkTooltip,
        callbacks: {
          label: (ctx: { parsed: { y?: number }; raw?: unknown }) => {
            const val = type === "pie" ? (ctx.raw as number) : ctx.parsed.y ?? 0;
            return `  $${Number(val).toLocaleString()}`;
          },
        },
      },
    },
  };

  const axisOptions = {
    ...commonOptions,
    scales: {
      x: { ...axisStyle, grid: { color: "transparent" } },
      y: {
        ...axisStyle,
        ticks: {
          color: "#64748b",
          callback: (v: number | string) => `$${Number(v) / 1000}k`,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <ChartCard
      title={`Monthly Revenue — ${year}`}
      subtitle="Toggle between chart types using the buttons above"
      controls={
        <>
          <ToggleButton active={type === "bar"} label="Bar" onClick={() => setType("bar")} />
          <ToggleButton active={type === "line"} label="Line" onClick={() => setType("line")} />
          <ToggleButton active={type === "pie"} label="Pie" onClick={() => setType("pie")} />
        </>
      }
    >
      <div style={{ height: "320px" }}>
        {type === "bar" && <Bar data={chartData} options={axisOptions as object} />}
        {type === "line" && <Line data={chartData} options={axisOptions as object} />}
        {type === "pie" && <Pie data={chartData} options={commonOptions as object} />}
      </div>
    </ChartCard>
  );
}

// ── Sales by Category Chart ──────────────────────────────────────────────────
function CategoryChart() {
  const [type, setType] = useState<ChartType>("bar");

  const colors = CATEGORY_COLORS;

  const chartData = {
    labels: CATEGORIES,
    datasets: [
      {
        label: "Revenue ($)",
        data: CATEGORY_REVENUE,
        backgroundColor: colors,
        borderColor: type === "line" ? colors : "#0f172a",
        borderWidth: type === "pie" ? 2 : 0,
        borderRadius: type === "bar" ? 6 : undefined,
        tension: 0.4,
        pointRadius: type === "line" ? 5 : 0,
        pointHoverRadius: type === "line" ? 7 : 0,
        fill: type === "line",
        hoverOffset: 8,
      },
    ],
  };

  const commonOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: type === "pie",
        labels: { color: "#94a3b8", font: { size: 12 }, padding: 14 },
      },
      tooltip: {
        ...darkTooltip,
        callbacks: {
          label: (ctx: { parsed: { y?: number }; raw?: unknown }) => {
            const val = type === "pie" ? (ctx.raw as number) : ctx.parsed.y ?? 0;
            return `  $${Number(val).toLocaleString()}`;
          },
        },
      },
    },
  };

  const axisOptions = {
    ...commonOptions,
    scales: {
      x: { ...axisStyle, grid: { color: "transparent" } },
      y: {
        ...axisStyle,
        ticks: {
          color: "#64748b",
          callback: (v: number | string) => `$${Number(v) / 1000}k`,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <ChartCard
      title="Sales by Category — 2024"
      subtitle="Revenue breakdown by product category"
      controls={
        <>
          <ToggleButton active={type === "bar"} label="Bar" onClick={() => setType("bar")} />
          <ToggleButton active={type === "line"} label="Line" onClick={() => setType("line")} />
          <ToggleButton active={type === "pie"} label="Pie" onClick={() => setType("pie")} />
        </>
      }
    >
      {/* Category legend pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
        {CATEGORIES.map((cat, i) => (
          <span
            key={cat}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(255,255,255,0.04)",
              borderRadius: "999px",
              padding: "4px 12px",
              fontSize: "12px",
              color: "#94a3b8",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: colors[i],
                display: "inline-block",
              }}
            />
            {cat}
          </span>
        ))}
      </div>
      <div style={{ height: "300px" }}>
        {type === "bar" && <Bar data={chartData} options={axisOptions as object} />}
        {type === "line" && <Line data={chartData} options={axisOptions as object} />}
        {type === "pie" && <Pie data={chartData} options={commonOptions as object} />}
      </div>
    </ChartCard>
  );
}

// ── Main export ──────────────────────────────────────────────────────────────
export default function Charts({ year }: { year: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
      <RevenueChart year={year} />
      <CategoryChart />
    </div>
  );
}