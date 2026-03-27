export default function Hello() {
  return (
    <div>
      <h1
        style={{
          margin: 0,
          fontSize: "36px",
          fontWeight: 700,
          background: "linear-gradient(90deg, #3b82f6, #9333ea)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Hello, World!
      </h1>
      <p style={{ color: "#94a3b8", fontSize: "14px", marginTop: "8px" }}>
        Built with Next.js · React · TypeScript
      </p>
    </div>
  );
}