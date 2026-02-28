export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>

      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(135deg, #2563eb, #9333ea)",
        color: "white",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "48px",
          marginBottom: "15px",
          fontWeight: "bold"
        }}>
          Next.js Practical Test
        </h1>

        <p style={{
          fontSize: "20px",
          color: "#e0e7ff"
        }}>
          Demonstrating routing, middleware, components, and modern UI design
        </p>
      </section>


      {/* Features Section */}
      <section style={{
        padding: "60px 20px",
        background: "#f1f5f9"
      }}>

        <h2 style={{
          textAlign: "center",
          fontSize: "32px",
          marginBottom: "40px",
          color: "#111827",
          fontWeight: "bold"
        }}>
          Features Implemented
        </h2>

        <div style={{
          display: "flex",
          gap: "25px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}>

          {[
            "Next.js App Router",
            "Reusable Components",
            "Middleware Protection",
            "Modern UI Design",
            "GitHub Integration",
            "Vercel Deployment"
          ].map((feature, index) => (

            <div key={index} style={{
              background: "white",
              padding: "25px",
              borderRadius: "12px",
              width: "260px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              textAlign: "center",
              border: "1px solid #e5e7eb"
            }}>
              <h3 style={{
                color: "#111827",
                fontSize: "18px",
                fontWeight: "600"
              }}>
                {feature}
              </h3>
            </div>

          ))}

        </div>

      </section>


      {/* Footer */}
      <footer style={{
        background: "#111827",
        color: "white",
        textAlign: "center",
        padding: "20px",
        fontSize: "16px"
      }}>
        © 2026 Abhijeet Singh | Next.js Internship Assessment
      </footer>

    </main>
  )
}