import {
  AiOutlineCalendar,
  AiOutlineFieldTime,
  AiOutlineRead,
} from 'react-icons/ai';
import TableOfContents from '@/components/TableOfContents/TableOfContents';
import MDXComponentsCustom from '@/components/MDXComponents';
import { getPosts, getPostBySlug, getTableOfContents, getPostSeoData } from '@/lib/getPosts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import getLocaleDate from '@/lib/getLocaleDate';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import { prettyCodeOptions } from '@/lib/prettyCodeOptions';
import rehypeAutolinkHeadings, {
  type Options as AutolinkOptions,
} from 'rehype-autolink-headings';
import { s } from 'hastscript';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Article, Graph, WithContext } from 'schema-dts';
import getReadingTime from '@/lib/readingTime';

interface IProps {
  params: { slug: string };
}

const PostLayout = async ({ params }: {params: {slug: string}}) => {
  const {data: post, meta} = await getPostBySlug('posts', params.slug);

  // add reading time
  let readingTime = getReadingTime(post.attributes.body);
  post.attributes.readingTime = readingTime;
  // add toc
  let toc = getTableOfContents(post.attributes.body);
  post.attributes.tableOfContents = toc;

  if (!post) notFound();

  const structuredData: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    "@id": `${process.env.HOST}/blog/${params.slug}/`,
    "text": post.attributes.body,
    headline: post.attributes.title,
    url: `${process.env.HOST}/blog/${params.slug}/`,
    image: {
      '@type': 'ImageObject',
      url: `${process.env.HOST}/${post.attributes.coverImage.data?.attributes.url.slice(1)}`,
    },
    description: post.attributes.description,
    datePublished: post.attributes.publishedAt,
    publisher: {
      '@type': 'Person',
      name: 'Sergey Artemov',
      url: process.env.HOST,
      image: '/hero-avatar.jpg',
    },
    author: {
      '@type': 'Person',
      name: 'Sergey Artemov',
      url: process.env.HOST,
      image: '/hero-avatar.jpg',
    },
  };
  const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [structuredData],
  };

  return (
    <div
      className={`grid grid-cols-1 lg:items-start ${
        post.attributes.tableOfContents.length > 0 && 'lg:grid-cols-[25%_1fr]'
      }`}
    >
      {post.attributes.tableOfContents.length > 0 && <TableOfContents post={post} />}
      <article
        className={`${
          post.attributes.tableOfContents.length <= 0 && 'mx-auto'
        } prose-code:not-prose w-full prose max-[375px]:prose-sm prose-custom prose-h2:blog-title-link prose-h3:blog-title-link prose-pre:not-prose lg:prose-xl dark:prose-invert prose-code:text-[15px] prose-pre:border prose-pre:border-blockBorderColorDark prose-pre:rounded-xl prose-pre:mt-0 prose-code:before:hidden prose-code:after:hidden prose-pre:rounded-t-none prose-pre:px-0`}
      >
        {/* шапка начало */}
        <div className="px-5 py-6 mb-5 border sm:px-6 lg:py-8 lg:px-10 rounded-3xl block-border block-bg">
          <h1 className="text-2xl leading-tight max-[375px]:text-xl font-bold font-boss lg:leading-tight lg:text-5xl">
            {post.attributes.title}
          </h1>
          <div className="flex flex-wrap justify-between gap-1.5 text-sm dark:text-secondTextColorDark text-secondTextColor">
            <span className="inline-flex items-center gap-2 mr-3 lg:text-base [&>svg]:w-[1.4em] [&>svg]:h-auto">
              {<AiOutlineCalendar />}
              {getLocaleDate('ru', post.attributes?.publishedAt, 'short')}
            </span>
            <div className="inline-flex gap-4">
              <span className="flex items-center gap-2 lg:text-base [&>svg]:w-[1.4em] [&>svg]:h-auto">
                {<AiOutlineFieldTime />}
                {post.attributes.readingTime.readingTimeText}
              </span>
              <span className="flex items-center gap-2 lg:text-base [&>svg]:w-[1.4em] [&>svg]:h-auto">
                {<AiOutlineRead />}
                
                {post.attributes.readingTime.wordsQuantityStr}
              </span>
            </div>
          </div>
        </div>
        {/* шапка конец */}
        <MDXRemote
          source={post.attributes.body}
          options={{
            mdxOptions: {
              rehypePlugins: [
                rehypeSlug, // автоматически создает заголовкам id с таким же названием
                [
                  rehypeAutolinkHeadings,
                  {
                    behavior: 'append',
                    // на какие заголовки будет действовать
                    test: ['h2', 'h3'],
                    properties: { class: 'heading-link' },
                    content: s(
                      'svg',
                      {
                        xmlns: 'http://www.w3.org/2000/svg',
                        viewBox: '0 0 24 24',
                        width: '24',
                        height: '24',
                        fill: 'none',
                        stroke: 'currentColor',
                        'stroke-width': '2',
                        'stroke-linecap': 'round',
                        'stroke-linejoin': 'round',
                        'aria-label': 'Anchor link',
                      },
                      [
                        s('line', { x1: '4', y1: '9', x2: '20', y2: '9' }),
                        s('line', { x1: '4', y1: '15', x2: '20', y2: '15' }),
                        s('line', { x1: '10', y1: '3', x2: '8', y2: '21' }),
                        s('line', { x1: '16', y1: '3', x2: '14', y2: '21' }),
                      ]
                    ),
                  } satisfies Partial<AutolinkOptions>,
                ],
                [rehypePrettyCode, prettyCodeOptions],
              ],
            },
          }}
          components={MDXComponentsCustom}
        />
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default PostLayout;

export const generateStaticParams = async () => {
  const {data: posts} = await getPosts('posts');
  return posts.map((post) => ({ slug: post.attributes.slug }));
};


//SEO metadata
export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const {data: post} = await getPostBySlug('posts', params.slug);
  const {data: postMetaImageData} = await getPostSeoData('posts', params.slug, 'populate=seo.metaImage');

  if (!post) {
    return {};
  }

  const { description, title, publishedAt, slug } = post.attributes;
  const { metaTitle, metaDescription, keywords, metaRobots, structuredData, metaViewport, canonicalURL } = post.attributes?.seo ?? {};
  const { metaImage } = postMetaImageData.attributes?.seo ?? {};

  return {
    metadataBase: new URL('https://sereja-art.ru'),
    title: `${metaTitle || title} — sereja-art`,
    description: metaDescription || description,
    keywords,
    openGraph: {
      type: 'article',
      title: metaTitle || title,
      url: `${process.env.HOST}/blog/${slug}`,
      description: metaDescription || description,
      publishedTime: publishedAt,
      images: `${process.env.DB_HOST}/${metaImage?.data.attributes.url.slice(1)}`,
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
    },
  };
}