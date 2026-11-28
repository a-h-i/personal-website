import Link from 'next/link';
import { formatDate, Post } from '@/lib/writing';

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/writing/${post.slug}`}
      className='group bg-surface ring-line block rounded-xl p-5 ring-1 transition hover:ring-white/20'
    >
      <p className='text-muted text-xs'>
        <time dateTime={post.date.toISOString()}>{formatDate(post.date)}</time>
        {post.series && ` · ${post.series.name}, part ${post.series.part}`}
      </p>
      <h3 className='text-heading mt-2 text-base font-semibold group-hover:underline'>
        {post.title}
      </h3>
      <p className='text-ink mt-2 text-sm leading-relaxed'>{post.summary}</p>
    </Link>
  );
}
