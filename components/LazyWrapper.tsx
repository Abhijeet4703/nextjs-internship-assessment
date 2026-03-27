"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically imported with ssr:false — must live in a Client Component
const LazyComponent = dynamic(() => import("./LazyComponent"), {
  loading: () => (
    <div
      style={{
        background: "#334155",
        borderRadius: "8px",
        height: "80px",
        margin: "0 auto",
        maxWidth: "500px",
      }}
    />
  ),
  ssr: false,
});

export default function LazyWrapper() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            background: "#334155",
            borderRadius: "8px",
            height: "80px",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        />
      }
    >
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          background: "#1e293b",
          borderRadius: "12px",
          padding: "28px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
        }}
      >
        <LazyComponent />
      </div>
    </Suspense>
  );
}
