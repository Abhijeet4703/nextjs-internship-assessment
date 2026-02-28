import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      background: "#111827",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between"
    }}>

      <h2 style={{ color: "white" }}>
        NextJS Test
      </h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/" style={{ color: "white" }}>
          Home
        </Link>

        <Link href="/login" style={{ color: "white" }}>
          Login
        </Link>

        <Link href="/dashboard" style={{ color: "white" }}>
          Dashboard
        </Link>
      </div>

    </nav>
  )
}