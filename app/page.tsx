import Link from "next/link";

const FEATURES = [
  { icon: "⚡", title: "App Router", desc: "File-based routing with layouts and nested pages" },
  { icon: "🧩", title: "Components", desc: "Reusable, typed React components across the app" },
  { icon: "🔐", title: "Auth Guard", desc: "Proxy-level route protection with cookie auth" },
  { icon: "📊", title: "Charts", desc: "Interactive charts with Bar, Line, and Pie toggles" },
  { icon: "🎨", title: "Modern UI", desc: "Dark theme with glassmorphism and responsive layout" },
  { icon: "🚀", title: "Optimised", desc: "Lazy loading, code splitting, and fast builds" },
];

export default function Home() {
  return (
    <main style={{ fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif", background: "#0f172a", minHeight: "100vh" }}>

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #1e40af 0%, #6d28d9 60%, #0f172a 100%)",
          color: "white",
          padding: "100px 24px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div style={{
          position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)",
          width: "600px", height: "300px", borderRadius: "50%",
          background: "rgba(139,92,246,0.15)", filter: "blur(60px)", pointerEvents: "none",
        }} />

        <p style={{ color: "#a5b4fc", fontSize: "13px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
          Next.js Internship Assessment
        </p>
        <h1 style={{ fontSize: "52px", fontWeight: 800, lineHeight: 1.1, marginBottom: "20px", letterSpacing: "-1px" }}>
          Sales Analytics<br />
          <span style={{ background: "linear-gradient(90deg, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Dashboard
          </span>
        </h1>
        <p style={{ fontSize: "17px", color: "#c7d2fe", maxWidth: "480px", margin: "0 auto 40px", lineHeight: 1.6 }}>
          Built with Next.js 16, React 19, Chart.js, and Tailwind CSS.
          Explore real-time retail analytics across products and categories.
        </p>

        <Link
          href="/dashboard"
          style={{
            display: "inline-block",
            background: "white",
            color: "#4f46e5",
            fontWeight: 700,
            fontSize: "15px",
            padding: "14px 36px",
            borderRadius: "10px",
            textDecoration: "none",
            boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
            transition: "transform 0.15s",
          }}
        >
          Go to Dashboard →
        </Link>
      </section>

      {/* Features */}
      <section style={{ padding: "80px 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "28px", fontWeight: 700, color: "white", marginBottom: "8px" }}>
          What&apos;s Inside
        </h2>
        <p style={{ textAlign: "center", color: "#64748b", fontSize: "14px", marginBottom: "48px" }}>
          Core features implemented throughout this project.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {FEATURES.map((f) => (
            <div
              key={f.title}
              style={{
                background: "#1e293b",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "14px",
                padding: "28px 24px",
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontSize: "24px", lineHeight: 1, marginTop: "2px" }}>{f.icon}</span>
              <div>
                <h3 style={{ color: "white", fontSize: "15px", fontWeight: 700, marginBottom: "6px" }}>{f.title}</h3>
                <p style={{ color: "#64748b", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px", textAlign: "center", color: "#475569", fontSize: "13px" }}>
        © 2026 Next.js Practical Assessment
      </footer>

    </main>
  );
}