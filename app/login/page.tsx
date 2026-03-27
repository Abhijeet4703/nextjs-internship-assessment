"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const VALID_EMAIL = "admin@test.com";
const VALID_PASSWORD = "Password123";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulate a brief network delay for realism
    await new Promise((r) => setTimeout(r, 600));

    if (!email || !password) {
      setError("Please fill in both fields.");
      setLoading(false);
      return;
    }

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      document.cookie = "auth_token=local_session; path=/; max-age=3600";
      router.push("/dashboard");
    } else {
      setError("Incorrect email or password. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
        padding: "20px",
        marginTop: "-80px",
      }}
    >
      <div style={{ width: "100%", maxWidth: "420px" }}>

        {/* Logo / Brand */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              borderRadius: "16px",
              marginBottom: "16px",
              boxShadow: "0 8px 32px rgba(59,130,246,0.35)",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1
            style={{
              color: "white",
              fontSize: "26px",
              fontWeight: 700,
              margin: "0 0 6px",
              letterSpacing: "-0.5px",
            }}
          >
            Welcome back
          </h1>
          <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>
            Sign in to your account to continue
          </p>
        </div>

        {/* Card */}
        <div
          style={{
            background: "rgba(30, 41, 59, 0.8)",
            backdropFilter: "blur(12px)",
            borderRadius: "20px",
            padding: "36px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              "0 25px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          {/* Demo credentials hint */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.25)",
              borderRadius: "10px",
              padding: "12px 14px",
              marginBottom: "28px",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="12" cy="12" r="10" stroke="#60a5fa" strokeWidth="2" />
              <path d="M12 8v4M12 16h.01" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div>
              <p style={{ color: "#93c5fd", fontSize: "12px", margin: 0, fontWeight: 600 }}>
                Demo credentials
              </p>
              <p style={{ color: "#64748b", fontSize: "12px", margin: 0 }}>
                admin@test.com &nbsp;/&nbsp; Password123
              </p>
            </div>
          </div>

          <form onSubmit={handleLogin}>
            {/* Error */}
            {error && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(239,68,68,0.1)",
                  border: "1px solid rgba(239,68,68,0.25)",
                  borderRadius: "8px",
                  padding: "10px 14px",
                  marginBottom: "20px",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" stroke="#f87171" strokeWidth="2" />
                  <path d="M12 8v4M12 16h.01" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <p style={{ color: "#f87171", fontSize: "13px", margin: 0 }}>{error}</p>
              </div>
            )}

            {/* Email field */}
            <div style={{ marginBottom: "18px" }}>
              <label
                style={{
                  display: "block",
                  color: "#94a3b8",
                  fontSize: "13px",
                  fontWeight: 500,
                  marginBottom: "7px",
                  letterSpacing: "0.02em",
                }}
              >
                Email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(15,23,42,0.6)",
                  color: "white",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgba(99,102,241,0.6)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                }
                suppressHydrationWarning
              />
            </div>

            {/* Password field */}
            <div style={{ marginBottom: "26px" }}>
              <label
                style={{
                  display: "block",
                  color: "#94a3b8",
                  fontSize: "13px",
                  fontWeight: 500,
                  marginBottom: "7px",
                  letterSpacing: "0.02em",
                }}
              >
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(15,23,42,0.6)",
                  color: "white",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgba(99,102,241,0.6)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                }
                suppressHydrationWarning
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "13px",
                background: loading
                  ? "#374151"
                  : "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                border: "none",
                borderRadius: "10px",
                color: "white",
                fontSize: "15px",
                fontWeight: 600,
                cursor: loading ? "not-allowed" : "pointer",
                letterSpacing: "0.02em",
                boxShadow: loading
                  ? "none"
                  : "0 4px 20px rgba(99,102,241,0.4)",
                transition: "all 0.2s",
              }}
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>

        <p style={{ textAlign: "center", color: "#334155", fontSize: "12px", marginTop: "24px" }}>
          Next.js Practical Test · Abhijeet Singh
        </p>
      </div>
    </div>
  );
}