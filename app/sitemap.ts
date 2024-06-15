import { MetadataRoute } from 'next';
import { getPosts } from '../lib/getPosts';
import { navigationRoutes } from '../data/navigationRoutes';
import { PostType } from '../lib/types';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
const {data: blogsData} = await getPosts('posts');
const {data: notesData} = await getPosts('notes');

  const navRoutes = navigationRoutes.map((element) => ({
      url: `${process.env.HOST}${element.route}`,
      lastModified: new Date(),
  }));

  const blogsSitemap: MetadataRoute.Sitemap = blogsData.map((post: PostType) => ({
    url: `${process.env.HOST}/blog/${post.attributes.slug}`,
    lastModified: post.attributes.updatedAt,
  }));

  const notesSitemap: MetadataRoute.Sitemap = notesData.map((post: PostType) => ({
    url: `${process.env.HOST}/notes/${post.attributes.slug}`,
    lastModified: post.attributes.updatedAt,
  }));

  return [
    {
      url: `${process.env.HOST}`,
      lastModified: new Date(),
    },
    ...navRoutes,
    ...blogsSitemap,
    ...notesSitemap,
  ];
}