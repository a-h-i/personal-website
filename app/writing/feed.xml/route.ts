import { getPosts } from '@/lib/writing';

export const dynamic = 'force-static';

function escapeXml(text: string): string {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

export function GET() {
  const host = process.env.NEXT_PUBLIC_HOST!;
  const items = getPosts()
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${host}/writing/${post.slug}</link>
      <guid isPermaLink="true">${host}/writing/${post.slug}</guid>
      <pubDate>${post.date.toUTCString()}</pubDate>
      <description>${escapeXml(post.summary)}</description>
    </item>`,
    )
    .join('\n');
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Ahmed H. Ismail · Writing</title>
    <link>${host}/writing</link>
    <description>Posts by Ahmed H. Ismail on platform engineering, Kubernetes and running infrastructure.</description>
    <language>en</language>
    <atom:link href="${host}/writing/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
  return new Response(feed, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
