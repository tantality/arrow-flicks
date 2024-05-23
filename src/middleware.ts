import { API_KEY, APT_URL } from "@/shared/const/api";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { validateMovieListQueryParams } from "./pages/api/proxy/lib/validation/movies";
import { BadRequestException } from "./pages/api/proxy/errors/bad-request";
import { NextURL } from "next/dist/server/web/next-url";

export const config = {
  matcher: "/api/proxy/:path*",
};

const getDestinationHref = (url: NextURL):string=>{
  const [, , , ...path] = url.pathname.split("/");
  const modifiedPath = path.join("/");

  return APT_URL + modifiedPath + url.search;
}

export function middleware(request: NextRequest) {
  try {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("Authorization", `Bearer ${API_KEY}`);

    const isRequestToGetMovieList = request.nextUrl?.pathname.includes("discover/movie");
    if (isRequestToGetMovieList) {
      validateMovieListQueryParams(request);
    }
  
    request.nextUrl.href = getDestinationHref(request.nextUrl);
  
    return NextResponse.rewrite(request.nextUrl, {
      request: {
        headers: requestHeaders,
      },
    });
  } catch (e) {
    if (e instanceof BadRequestException) {
      return NextResponse.json(e, {status: e.statusCode});
    }

    return NextResponse.json(e)
  }
}
