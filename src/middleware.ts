import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const allowedPathPattern =
    /^\/$|^\/(FE|BE|DE|DA|ML)\/(skillFrequency|resion1Fenquency|educationFenquency|experienceRangeFenquency)$/;

  if (!allowedPathPattern.test(pathname)) {
    const redirectUrl = new URL("/", request.url);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
