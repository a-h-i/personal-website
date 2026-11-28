import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';

export interface Post {
  slug: string;
  title: string;
  subtitle?: string;
  summary: string;
  date: Date;
  updated?: Date;
  series?: { name: string; part: number };
  draft: boolean;
  minutes: number;
}

const contentDir = join(process.cwd(), 'content', 'writing');
const wordsPerMinute = 230;

function isDate(value: unknown): value is Date {
  return value instanceof Date && !Number.isNaN(value.getTime());
}

function readPost(slug: string): Post {
  const { data, content } = matter(
    readFileSync(join(contentDir, slug, 'index.mdx'), 'utf8'),
  );
  const fail = (problem: string): never => {
    throw new Error(`content/writing/${slug}/index.mdx: ${problem}`);
  };
  for (const key of ['title', 'summary']) {
    if (typeof data[key] !== 'string' || !data[key].trim()) {
      fail(`"${key}" is missing`);
    }
  }
  if (!isDate(data.date)) fail('"date" must be a date such as 2026-11-28');
  if (data.updated !== undefined && !isDate(data.updated)) {
    fail('"updated" must be a date such as 2026-11-28');
  }
  if (
    data.series !== undefined &&
    (typeof data.series?.name !== 'string' ||
      !Number.isInteger(data.series?.part))
  ) {
    fail('"series" needs a name and a whole-number part');
  }
  return {
    slug,
    title: data.title,
    subtitle: data.subtitle,
    summary: data.summary,
    date: data.date,
    updated: data.updated,
    series: data.series,
    draft: data.draft === true,
    minutes: Math.max(
      1,
      Math.round(content.split(/\s+/).length / wordsPerMinute),
    ),
  };
}

/** Newest first; drafts appear in development only. */
export function getPosts(): Post[] {
  if (!existsSync(contentDir)) return [];
  return readdirSync(contentDir, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        existsSync(join(contentDir, entry.name, 'index.mdx')),
    )
    .map((entry) => readPost(entry.name))
    .filter((post) => !post.draft || process.env.NODE_ENV !== 'production')
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((post) => post.slug === slug);
}

/** The published parts of a post's series, in order. */
export function getSeries(post: Post): Post[] {
  if (!post.series) return [];
  return getPosts()
    .filter((other) => other.series?.name === post.series?.name)
    .sort((a, b) => a.series!.part - b.series!.part);
}

const dateFormat = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export function formatDate(date: Date): string {
  return dateFormat.format(date);
}
