import {
  getMediumFeed,
  MediumFeedItem,
} from '@/lib/actions/mediumPosts.action';
export const revalidate = 60 * 60;

export default async function Writing() {
  const posts: MediumFeedItem[] = await getMediumFeed();
  return (
    <section id='writing' className='scroll-mt-24'>
      <h2 className='text-accent text-sm font-semibold tracking-widest uppercase'>
        Writing
      </h2>
      <div className='mt-6 grid gap-5 md:grid-cols-2'>
        {posts.map((post) => (
          <a
            key={post.guid}
            className='bg-surface ring-line rounded-xl p-5 text-base font-semibold ring-1 hover:underline hover:ring-white/20'
            href={post.link}
          >
            {post.title}
          </a>
        ))}
      </div>
    </section>
  );
}
