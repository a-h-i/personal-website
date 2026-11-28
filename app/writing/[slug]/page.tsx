import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { formatDate, getPost, getPosts, getSeries } from '@/lib/writing';

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map(({ slug }) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const url = `/writing/${post.slug}`;
  return {
    title: `${post.title} · Ahmed H. Ismail`,
    description: post.summary,
    alternates: {
      canonical: url,
      types: { 'application/rss+xml': '/writing/feed.xml' },
    },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.summary,
      publishedTime: post.date.toISOString(),
      modifiedTime: post.updated?.toISOString(),
      authors: ['Ahmed H. Ismail'],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { default: Content } = await import(
    `@/content/writing/${slug}/index.mdx`
  );
  const series = getSeries(post);
  const position = series.findIndex((part) => part.slug === post.slug);
  const previous = series[position - 1];
  const next = series[position + 1];

  return (
    <article>
      <header>
        {post.series && (
          <p className='text-accent text-sm font-semibold'>
            {post.series.name} · Part {post.series.part}
          </p>
        )}
        <h1 className='text-heading mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl'>
          {post.title}
        </h1>
        {post.subtitle && (
          <p className='text-ink mt-3 text-xl'>{post.subtitle}</p>
        )}
        <p className='mt-5 text-sm'>
          <Link
            href='/'
            className='text-ink hover:text-heading hover:underline'
          >
            Ahmed H. Ismail
          </Link>
          {' · '}
          <time dateTime={post.date.toISOString()}>
            {formatDate(post.date)}
          </time>
          {post.updated && ` · updated ${formatDate(post.updated)}`}
          {` · ${post.minutes} min read`}
        </p>
      </header>

      <div className='prose prose-site mt-10 max-w-none'>
        <Content />
      </div>

      {post.series && (
        <aside className='bg-surface ring-line mt-14 rounded-xl p-5 ring-1'>
          <h2 className='text-accent text-sm font-semibold tracking-widest uppercase'>
            In this series
          </h2>
          <p className='text-ink mt-2 text-sm'>{post.series.name}</p>
          <ol className='mt-4 space-y-2 text-sm'>
            {series.map((part) => (
              <li key={part.slug} className='flex gap-3'>
                <span className='text-muted'>{part.series!.part}.</span>
                {part.slug === post.slug ? (
                  <span className='text-heading font-semibold'>
                    {part.title}
                  </span>
                ) : (
                  <Link
                    href={`/writing/${part.slug}`}
                    className='text-ink hover:text-heading hover:underline'
                  >
                    {part.title}
                  </Link>
                )}
              </li>
            ))}
          </ol>
          {(previous || next) && (
            <div className='border-line mt-5 flex justify-between gap-4 border-t pt-4 text-sm'>
              {previous ? (
                <Link
                  href={`/writing/${previous.slug}`}
                  className='text-accent-soft hover:text-emerald-200'
                >
                  ← Previous
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link
                  href={`/writing/${next.slug}`}
                  className='text-accent-soft hover:text-emerald-200'
                >
                  Next →
                </Link>
              )}
            </div>
          )}
        </aside>
      )}

      <p className='text-ink mt-10 text-sm'>
        Written by{' '}
        <Link href='/' className='text-accent-soft hover:text-emerald-200'>
          Ahmed H. Ismail
        </Link>
        , senior full-stack and platform engineer in Porto.
      </p>
    </article>
  );
}
