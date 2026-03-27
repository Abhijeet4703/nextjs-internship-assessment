import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authToken = request.cookies.get("auth_token")?.value;

  // Proxy runs before every matched request — demonstrated here by logging.
  // In production you would uncomment the redirect below to hard-enforce auth.
  console.log(`[Proxy] ${pathname} | authenticated: ${!!authToken}`);

  // Uncomment to enable hard auth protection:
  // if (pathname.startsWith("/dashboard") && !authToken) {
  //   const loginUrl = new URL("/login", request.url);
  //   loginUrl.searchParams.set("redirect", pathname);
  //   return NextResponse.redirect(loginUrl);
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};