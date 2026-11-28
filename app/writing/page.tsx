import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { getPosts } from '@/lib/writing';
import PostCard from '@/ui/writing/PostCard';

export const metadata: Metadata = {
  title: 'Writing · Ahmed H. Ismail',
  description:
    'Posts by Ahmed H. Ismail on platform engineering, Kubernetes and running infrastructure.',
  alternates: {
    canonical: '/writing',
    types: { 'application/rss+xml': '/writing/feed.xml' },
  },
};

const earlierOnMedium = [
  {
    title: 'DRF nested params and multipart',
    href: 'https://medium.com/p/488c86d89191',
  },
  { title: 'Web Services', href: 'https://medium.com/p/9543bf9aad8c' },
  { title: 'Evaluator.in', href: 'https://medium.com/p/1e9f775ccfef' },
  { title: 'Issue tracking', href: 'https://medium.com/p/a19cce9a7f09' },
  {
    title: 'Generic Rails Controllers',
    href: 'https://medium.com/p/7a170d507e66',
  },
];

export default function WritingIndex() {
  const posts = getPosts();
  return (
    <>
      <h1 className='text-heading text-3xl font-bold tracking-tight sm:text-4xl'>
        Writing
      </h1>
      {posts.length === 0 ? (
        <p className='text-ink mt-8'>The first post is on its way.</p>
      ) : (
        <ul className='mt-8 space-y-5'>
          {posts.map((post) => (
            <li key={post.slug}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      )}
      <section className='mt-16'>
        <h2 className='text-accent text-sm font-semibold tracking-widest uppercase'>
          Earlier, on Medium
        </h2>
        <ul className='mt-6 space-y-3'>
          {earlierOnMedium.map((article) => (
            <li key={article.href}>
              <a
                href={article.href}
                className='text-ink hover:text-heading inline-flex items-center gap-2 text-sm hover:underline'
              >
                {article.title}
                <ArrowUpRight className='text-muted h-4 w-4' />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
