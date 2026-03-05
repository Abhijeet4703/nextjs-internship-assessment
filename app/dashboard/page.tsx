import ChartComponent from "../../components/Chart";

export default function Dashboard() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>Dashboard</h1>
      <p style={{ marginBottom: "40px" }}>
        This page demonstrates protected routes using middleware.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <div style={{ padding: "20px", background: "#1e293b", color: "white" }}>
          Users: 120
        </div>

        <div style={{ padding: "20px", background: "#1e293b", color: "white" }}>
          Sales: 75
        </div>

        <div style={{ padding: "20px", background: "#1e293b", color: "white" }}>
          Revenue: $2400
        </div>
      </div>

      <ChartComponent />
    </div>
  );
}