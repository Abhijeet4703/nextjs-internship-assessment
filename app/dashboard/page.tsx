"use client";

import Charts from "../../components/Chart";

export default function Dashboard() {
  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "1200px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "36px",
          marginBottom: "10px",
          color: "white",
        }}
      >
        Dashboard
      </h1>

      <p
        style={{
          marginBottom: "40px",
          color: "#cbd5f5",
          fontSize: "16px",
        }}
      >
        Analytics overview of the application
      </p>

      {/* Stats Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "60px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "#1e293b",
            color: "white",
            padding: "25px",
            borderRadius: "10px",
            width: "180px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>Users</h3>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>120</p>
        </div>

        <div
          style={{
            background: "#1e293b",
            color: "white",
            padding: "25px",
            borderRadius: "10px",
            width: "180px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>Sales</h3>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>75</p>
        </div>

        <div
          style={{
            background: "#1e293b",
            color: "white",
            padding: "25px",
            borderRadius: "10px",
            width: "180px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>Revenue</h3>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>$2400</p>
        </div>
      </div>

      {/* Charts Section */}
      <Charts />
    </div>
  );
}