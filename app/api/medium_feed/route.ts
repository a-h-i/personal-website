import { inspect } from 'node:util';
import Parser from 'rss-parser';

export const revalidate = 60 * 60;

type MediumItem = {
  title: string;
  link: string;
  'content:encoded'?: string;
  content?: string;
  isoDate?: string;
  categories?: string[];
  guid?: string;
};

const parser = new Parser<MediumItem>({
  customFields: { item: [['content:encoded', 'content']] },
});

export type MediumFeedItem = {
  title: string;
  url: string;
  date?: Date;
  html: string;
  categories: string[];
  guid: string;
  link: string;
};

export async function GET() {
  try {
    const feedUrl = 'https://medium.com/feed/@ahm3d.hisham';
    const feed = await parser.parseURL(feedUrl);
    return Response.json(
      feed.items.map((item) => ({
        title: item.title!,
        url: item.link!,
        date: item.isoDate ? new Date(item.isoDate) : undefined,
        html: item.content ?? '',
        categories: item.categories ?? [],
        guid: item.guid ?? item.link,
        link: item.link!,
      })),
    );
  } catch (error) {
    console.error('Error fetching Medium feed:', inspect(error, { depth: 20 }));
    return Response.json([]);
  }
}
