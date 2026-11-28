import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getPosts } from '@/lib/writing';
import PostCard from '@/ui/writing/PostCard';

export default function Writing() {
  const posts = getPosts().slice(0, 3);
  if (posts.length === 0) return null;
  return (
    <section id='writing' className='scroll-mt-24'>
      <h2 className='text-accent text-sm font-semibold tracking-widest uppercase'>
        Writing
      </h2>
      <ul className='mt-6 space-y-5'>
        {posts.map((post) => (
          <li key={post.slug}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
      <div className='mt-4'>
        <Link
          href='/writing'
          className='text-accent-soft inline-flex items-center gap-2 text-sm hover:text-emerald-200'
        >
          All writing <ArrowUpRight className='h-4 w-4' />
        </Link>
      </div>
    </section>
  );
}
