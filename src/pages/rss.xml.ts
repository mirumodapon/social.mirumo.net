import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE_DESCRIPTION, SITE_NAME } from '../config/site';
import { renderMarkdown } from '../utils/renderMarkdown';

function hasBodyContent(body: string | undefined) {
  return !!body?.trim();
}

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');
  const items = await Promise.all(
    posts
      .filter((post) => hasBodyContent(post.body))
      .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
      .map(async (post) => ({
        link: `/post/${post.id}/`,
        description: await renderMarkdown(post.data.abstract),
        content: await renderMarkdown(post.body ?? ''),
        pubDate: new Date(post.data.date),
        categories: post.data.tags,
        customData: `<dc:creator>${post.data.author}</dc:creator>`,
      })),
  );

  return rss({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: context.site ?? new URL('http://localhost:4321'),
    xmlns: {
      dc: 'http://purl.org/dc/elements/1.1/',
    },
    items,
    customData: '<language>zh-tw</language>',
  });
}
