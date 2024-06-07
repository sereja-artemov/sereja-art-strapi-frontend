import { Metadata } from 'next';
// import { Article, Graph, WithContext } from 'schema-dts';
import MDXComponentsCustom from '@/components/MDXComponents';
import { getPostBySlug, getPostSeoData, getPosts } from '@/lib/getPosts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from "rehype-pretty-code";
import { prettyCodeOptions } from '@/lib/prettyCodeOptions';
import rehypeAutolinkHeadings, {
  type Options as AutolinkOptions,
} from 'rehype-autolink-headings';
import { s } from 'hastscript';
import { notFound } from 'next/navigation';
import { Article, Graph, WithContext } from 'schema-dts';

interface IProps {
  params: { slug: string };
}

const NoteLayout = async ({ params }: { params: { slug: string } }) => {
  const {data: post, meta} = await getPostBySlug('notes', params.slug);
  if (!post) notFound()
  
    const structuredData: WithContext<Article> = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      "@id": `${process.env.HOST}/notes/${params.slug}/`,
      "text": post.attributes.body,
      headline: post.attributes.title,
      url: `${process.env.HOST}/notes/${params.slug}/`,
      image: {
        '@type': 'ImageObject',
        url: `${process.env.HOST}/${post.attributes.coverImage?.data?.attributes.url.slice(1)}`,
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
    <div className='mx-auto prose-code:not-prose w-full prose max-[375px]:prose-sm prose-custom prose-h2:blog-title-link prose-h3:blog-title-link prose-pre:not-prose lg:prose-xl dark:prose-invert prose-code:text-[15px] prose-pre:border prose-pre:border-blockBorderColorDark prose-pre:rounded-xl prose-pre:mt-0 prose-code:before:hidden prose-code:after:hidden prose-pre:rounded-t-none prose-pre:px-0'>
      <h1 className='text-2xl leading-tight max-[375px]:text-xl font-bold font-boss lg:leading-tight lg:text-5xl'>{post.attributes.title}</h1>
      <MDXRemote source={post.attributes.body} options = {{mdxOptions: {
           rehypePlugins: [
             rehypeSlug, // автоматически создает заголовкам id с таким же названием
             [rehypeAutolinkHeadings, {
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
            } satisfies Partial<AutolinkOptions>,],
             [rehypePrettyCode, prettyCodeOptions],
           ],
        }}} components={MDXComponentsCustom} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}

export default NoteLayout;

export const generateStaticParams = async () => {
  const {data: posts} = await getPosts('notes');
  return posts.map((post) => ({ slug: post.attributes.slug }));
}

//SEO metadata
export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const {data: post} = await getPostBySlug('notes', params.slug);
  const {data: postMetaImageData} = await getPostSeoData('notes', params.slug, 'populate=seo.metaImage');

  if (!post) {
    return {};
  }

  const { description, title, publishedAt, slug } = post.attributes;
  const { metaTitle, metaDescription, keywords, metaRobots, structuredData, metaViewport, canonicalURL } = post.attributes.seo || {};
  const { metaImage } = postMetaImageData.attributes.seo || {};

  return {
    metadataBase: new URL('https://sereja-art.ru'),
    title: `${metaTitle || title} — sereja-art`,
    description: metaDescription || description,
    keywords,
    openGraph: {
      type: 'article',
      title: metaTitle || title,
      url: `${process.env.HOST}/notes/${slug}`,
      description: metaDescription || description,
      publishedTime: publishedAt,
      images: `${process.env.DB_HOST}/${metaImage?.data?.attributes.url.slice(1)}`,
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
    },
  };
}