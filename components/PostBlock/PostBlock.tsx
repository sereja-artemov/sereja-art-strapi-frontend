import Image from 'next/image';
import {
  AiOutlineCalendar,
  AiOutlineFieldTime,
} from 'react-icons/ai';
import getLocaleDate from '@/lib/getLocaleDate';
import Link from 'next/link';
import { getPosts, modifyPostData } from '@/lib/getPosts';
import { baseURL } from '@/constants/constants';

export default async function PostBlock() {
  const {data: posts} = await getPosts('posts');
  const post = posts[0];

  modifyPostData(posts);

  return (
    <article className="flex flex-col h-full rounded-xl">
      <div className="mb-0 overflow-hidden rounded-lg sm:border border-blockBorderColorLight/50 dark:border-blockBorderColorDark/50">
        <Link href={`blog/${post.attributes.slug}`}>
          <Image
            className="w-full h-auto"
            src={post.attributes.coverImage.data ? `${baseURL}/${post.attributes.coverImage.data?.attributes.url.slice(1)}` : '/image-empty.jpg'}
            width={640}
            height={336}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrQcAAX8A/n6ayNMAAAAASUVORK5CYII="
            alt={`${post.attributes.title} - обложка записи блога frontend-разработчика sereja-art`}
          />
        </Link>
      </div>
      <div className="flex flex-col pt-5 grow">
        {/* техническая информация */}
        <div className="flex flex-wrap gap-1.5 text-sm mb-3">
          <span className="inline-flex items-center gap-2 mr-3 [&>svg]:w-[1.4em] [&>svg]:h-auto dark:text-secondTextColorDark text-secondTextColor">
            {<AiOutlineCalendar />}
            {getLocaleDate('ru', post.attributes.publishedAt, 'short')}
          </span>
          <div className="inline-flex gap-4">
            <span className="flex items-center gap-2 [&>svg]:w-[1.4em] [&>svg]:h-auto dark:text-secondTextColorDark text-secondTextColor">
              {<AiOutlineFieldTime />}
              {post.attributes.readingTime && post.attributes.readingTime?.readingTimeText}
            </span>
          </div>
        </div>
        <Link
          className="block mb-1.5 leading-snug md:text-lg text-base font-semibold"
          href={`blog/${post.attributes.slug}`}
        >
          <h3>{post.attributes.title}</h3>
        </Link>
        <p className="mb-5 leading-normal dark:text-secondTextColorDark text-secondTextColor md:text-sm lg:text-base line-clamp-3 md:line-clamp-2">
          {post.attributes.description}
        </p>
        <Link
          className="flex items-center justify-between gap-3 px-5 py-1 mt-auto font-semibold uppercase border rounded-xl lg:text-base border-blockBorderColorLight dark:border-blockBorderColorDark default-btn-color"
          href={`blog/${post.attributes.slug}`}
        >
          <p>Читать</p>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="2.2em"
            width="2.2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
      </div>
    </article>
  );
};
