import { NextResponse } from "next/server";

export function middleware() {
  console.log("Middleware running");
  return NextResponse.next();
}