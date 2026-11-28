import { MetadataRoute } from 'next';
import { getPosts } from '@/lib/writing';

export default function sitemap(): MetadataRoute.Sitemap {
  const host = process.env.NEXT_PUBLIC_HOST!;
  const posts = getPosts();
  return [
    {
      url: host,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${host}/writing`,
      lastModified: posts[0]?.date ?? new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${host}/writing/${post.slug}`,
      lastModified: post.updated ?? post.date,
      priority: 0.7,
    })),
  ];
}
