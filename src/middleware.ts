import { NextRequest, NextResponse } from "next/server";
import { createJobClassificationArray } from "./app/common/utils/classification";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname === "/" ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt"
  ) {
    return NextResponse.next();
  }

  const [, classification, analysisType] = pathname.split("/");

  const classificationArray = createJobClassificationArray();

  const isValidClassification = classificationArray.some(
    (classificationObj) => classificationObj.classification === classification,
  );

  const isValidAnalysisType = [
    "skillFrequency",
    "resion1Fenquency",
    "educationFenquency",
    "experienceRangeFenquency",
  ].includes(analysisType);

  if (!isValidClassification || !isValidAnalysisType) {
    const redirectUrl = new URL("/", request.url);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
