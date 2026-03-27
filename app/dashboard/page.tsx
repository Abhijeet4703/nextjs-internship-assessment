"use client";

import { useState } from "react";
import Charts from "../../components/Chart";

const KPI_DATA: Record<
  string,
  { totalRevenue: string; unitsSold: string; avgOrder: string; yoyGrowth: string;
    revenueChange: string; unitsChange: string; avgChange: string; yoyChange: string;
    revenuePos: boolean; unitsPos: boolean; avgPos: boolean; yoyPos: boolean }
> = {
  "2022": {
    totalRevenue: "$718,000", unitsSold: "4,842", avgOrder: "$148", yoyGrowth: "—",
    revenueChange: "Baseline year", unitsChange: "Baseline year",
    avgChange: "0.0% vs prior period", yoyChange: "Baseline year",
    revenuePos: true, unitsPos: true, avgPos: true, yoyPos: true,
  },
  "2023": {
    totalRevenue: "$856,000", unitsSold: "5,791", avgOrder: "$148", yoyGrowth: "19.2%",
    revenueChange: "+19.2% vs prior period", unitsChange: "+19.6% vs prior period",
    avgChange: "0.0% vs prior period", yoyChange: "+19.2% vs prior period",
    revenuePos: true, unitsPos: true, avgPos: true, yoyPos: true,
  },
  "2024": {
    totalRevenue: "$956,000", unitsSold: "6,459", avgOrder: "$148", yoyGrowth: "11.6%",
    revenueChange: "+11.6% vs prior period", unitsChange: "+11.5% vs prior period",
    avgChange: "0.0% vs prior period", yoyChange: "+11.6% vs prior period",
    revenuePos: true, unitsPos: true, avgPos: true, yoyPos: true,
  },
};

const YEARS = ["2022", "2023", "2024"];

export default function Dashboard() {
  const [year, setYear] = useState("2024");
  const kpi = KPI_DATA[year];

  const statCards = [
    { label: "TOTAL REVENUE",   value: kpi.totalRevenue, change: kpi.revenueChange, pos: kpi.revenuePos },
    { label: "UNITS SOLD",      value: kpi.unitsSold,    change: kpi.unitsChange,   pos: kpi.unitsPos   },
    { label: "AVG ORDER VALUE", value: kpi.avgOrder,     change: kpi.avgChange,     pos: kpi.avgPos     },
    { label: "YOY GROWTH",      value: kpi.yoyGrowth,   change: kpi.yoyChange,     pos: kpi.yoyPos, neutral: year === "2022" },
  ];

  return (
    <div
      style={{
        padding: "40px 48px",
        maxWidth: "1440px",
        margin: "auto",
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "16px",
          marginBottom: "10px",
        }}
      >
        <div>
          <p style={{ color: "#64748b", fontSize: "13px", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Analytics Dashboard
          </p>
          <h1
            style={{
              fontSize: "30px",
              fontWeight: 800,
              color: "white",
              margin: "0 0 6px",
              letterSpacing: "-0.5px",
            }}
          >
            Sales Overview
          </h1>
          <p style={{ color: "#64748b", fontSize: "13px", margin: 0 }}>
            Retail sales performance · Data: 2022 – 2024
          </p>
        </div>

        {/* Year selector */}
        <div
          style={{
            display: "flex",
            gap: "6px",
            background: "#1e293b",
            padding: "6px",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {YEARS.map((y) => (
            <button
              key={y}
              onClick={() => setYear(y)}
              style={{
                padding: "8px 20px",
                borderRadius: "7px",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 600,
                background: year === y ? "#6366f1" : "transparent",
                color: year === y ? "white" : "#64748b",
                transition: "all 0.15s",
              }}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "24px 0 32px" }} />

      {/* ── KPI Cards ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          marginBottom: "40px",
        }}
      >
        {statCards.map((card) => (
          <div
            key={card.label}
            style={{
              background: "#1e293b",
              borderRadius: "14px",
              padding: "24px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
              border: "1px solid rgba(255,255,255,0.05)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Subtle glow top-right */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: card.pos ? "rgba(99,102,241,0.12)" : "rgba(248,113,113,0.1)",
                filter: "blur(18px)",
              }}
            />
            <p
              style={{
                color: "#475569",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              {card.label}
            </p>
            <p
              style={{
                color: "white",
                fontSize: "32px",
                fontWeight: 800,
                lineHeight: 1,
                marginBottom: "12px",
                letterSpacing: "-0.5px",
              }}
            >
              {card.value}
            </p>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "12px",
                fontWeight: 600,
                color: (card as { neutral?: boolean }).neutral ? "#64748b" : card.pos ? "#34d399" : "#f87171",
              }}
            >
              {!(card as { neutral?: boolean }).neutral && (card.pos ? "▲ " : "▼ ")}{card.change}
            </span>
          </div>
        ))}
      </div>

      {/* ── Charts ── */}
      <Charts year={year} />
    </div>
  );
}