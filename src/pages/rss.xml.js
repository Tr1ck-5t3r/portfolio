import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { Name, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  const posts = await getCollection('projects');
  return rss({
    title: Name,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/projects/${post.id}/`,
    })),
  });
}
