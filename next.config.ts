import type { NextConfig } from 'next';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// The CV sits at a stable URL, so once it is replaced every cache in the chain
// will happily keep serving the previous bytes — and phones are the worst
// offenders, because tapping a PDF link hands it to a viewer or a download that
// never revalidates. Cache-Control cannot fix that: the origin already sends
// max-age=5 and honours ETag revalidation, so the headers are not the problem.
//
// Stamping the site's own links with a hash of the file's contents changes the
// URL whenever the CV changes, which no cache can ignore, while
// /Ahmed_Ismail_resume.pdf keeps resolving for anyone who linked it directly.
const resumeVersion = createHash('sha256')
  .update(
    readFileSync(join(process.cwd(), 'public', 'Ahmed_Ismail_resume.pdf')),
  )
  .digest('hex')
  .slice(0, 8);

// 'unsafe-inline' stays because Next.js inlines its hydration scripts in prerendered pages.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://*.posthog.com${
    process.env.NODE_ENV === 'development' ? " 'unsafe-eval'" : ''
  }`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://*.posthog.com",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
].join('; ');

const nextConfig: NextConfig = {
  // Inlined at build time, so both server and client components can read it.
  env: { NEXT_PUBLIC_RESUME_VERSION: resumeVersion },
  // Stops next dev from writing AGENTS.md and CLAUDE.md into the repo.
  agentRules: false,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: contentSecurityPolicy },
        ],
      },
    ];
  },
};

export default nextConfig;
