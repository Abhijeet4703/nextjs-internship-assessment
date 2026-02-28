"use client";

import { useState } from "react";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if(email && password){
      alert("Login successful (demo)");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "80vh"
    }}>

      <form
        onSubmit={handleLogin}
        style={{
          background: "#020617",
          padding: "40px",
          borderRadius: "10px",
          width: "350px",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)"
        }}
      >

        <h2 style={{
          textAlign: "center",
          marginBottom: "20px"
        }}>
          Login
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "none"
          }}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "none"
          }}
        />

        {/* Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563eb",
            border: "none",
            borderRadius: "5px",
            color: "white",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Login
        </button>

      </form>

    </div>
  );
}