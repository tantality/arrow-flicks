import { API_KEY, APT_URL } from "@/shared/const/api";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: "/api/proxys/:path*",
};

export function middleware(request: NextRequest) {
  console.log("middleware 2");
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("Authorization", `Bearer ${API_KEY}`);

  const [, , , ...path] = request.nextUrl.pathname.split("/");
  const modifiedPath = path.join("/");
  request.nextUrl.href = APT_URL + modifiedPath + request.nextUrl.search;

  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}
