import { NextResponse } from "next/server";

export function GET() {
  return new NextResponse(
    `User-agent: *
Allow: /
Sitemap: ${process.env.NEXT_PUBLIC_HOST!}/sitemap.xml
`,
    { headers: { "Content-Type": "text/plain" } }
  );
}