export default function LazyComponent() {
  return (
    <div style={{ textAlign: "center" }}>
      <span
        style={{
          display: "inline-block",
          background: "#22c55e20",
          color: "#4ade80",
          borderRadius: "999px",
          padding: "4px 14px",
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          marginBottom: "12px",
          textTransform: "uppercase",
        }}
      >
        Lazy Loaded
      </span>
      <h2
        style={{
          color: "white",
          fontSize: "20px",
          fontWeight: 600,
          margin: "0 0 8px",
        }}
      >
        This component was loaded lazily
      </h2>
      <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>
        It was not part of the initial JavaScript bundle — it was fetched
        on-demand using <code style={{ color: "#60a5fa" }}>next/dynamic</code>.
      </p>
    </div>
  );
}