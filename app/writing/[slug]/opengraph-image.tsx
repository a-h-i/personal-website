import { ImageResponse } from 'next/og';
import { getPost, getPosts } from '@/lib/writing';

export const alt = 'Title card for a post by Ahmed H. Ismail';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return getPosts().map(({ slug }) => ({ slug }));
}

export default async function PostImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = getPost((await params).slug);
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 72,
        backgroundColor: '#0f172a',
        color: '#e2e8f0',
      }}
    >
      <div style={{ display: 'flex', fontSize: 28, color: '#34d399' }}>
        {post?.series
          ? `${post.series.name} · Part ${post.series.part}`
          : 'Writing'}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'block', fontSize: 68, lineHeight: 1.15 }}>
          {post?.title ?? 'Writing'}
        </div>
        {post?.subtitle && (
          <div
            style={{
              display: 'flex',
              marginTop: 20,
              fontSize: 34,
              color: '#94a3b8',
            }}
          >
            {post.subtitle}
          </div>
        )}
      </div>
      <div style={{ display: 'flex', fontSize: 28, color: '#94a3b8' }}>
        Ahmed H. Ismail · ahm3dhisham.com
      </div>
    </div>,
    size,
  );
}
