import {
  getMediumFeed,
  MediumFeedItem,
} from '@/lib/actions/mediumPosts.action';
export const revalidate = 60 * 60;

export default async function Writing() {
  const posts: MediumFeedItem[] = await getMediumFeed();
  return (
    <section id='writing' className='scroll-mt-24'>
      <h2 className='text-sm font-semibold tracking-widest text-emerald-400 uppercase'>
        Writing
      </h2>
      <div className='mt-6 grid gap-5 md:grid-cols-2'>
        {posts.map((post) => (
          <a
            key={post.guid}
            className='rounded-xl bg-slate-900/40 p-5 text-base font-semibold ring-1 ring-white/10 hover:underline hover:ring-white/20'
            href={post.link}
          >
            {post.title}
          </a>
        ))}
      </div>
    </section>
  );
}
