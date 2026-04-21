import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";

  // Serve Markdown when agents request it (content negotiation)
  if (accept.includes("text/markdown")) {
    const { pathname } = request.nextUrl;

    // Map URL to static markdown file in /public/md/
    const mdPath = pathname === "/" ? "/md/home.md" : `/md${pathname}.md`;
    const mdUrl = new URL(mdPath, request.url);

    return NextResponse.rewrite(mdUrl, {
      headers: { "content-type": "text/markdown; charset=utf-8" },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
