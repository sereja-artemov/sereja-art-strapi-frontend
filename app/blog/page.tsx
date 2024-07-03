import Pagination from '@/components/Pagination/Pagination';
import PostList from '@/components/PostList/PostList';
import { Search } from '@/components/Search/Search';
import { baseURL } from '@/constants/constants';
import { getPosts, getTableOfContents, modifyPostData } from '@/lib/getPosts';
import getReadingTime from '@/lib/readingTime';
import { notFound } from 'next/navigation';
import qs from 'qs';

export default async function Blog({searchParams}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  // const {data: posts, meta} = await getPosts('posts');
  const query = searchParams?.query ?? "";
  const currentPage = searchParams?.page ?? "";

  const {data: posts, meta} = await getFilteredPosts(query, currentPage);

  modifyPostData(posts);

  if (!posts) return notFound()

  return (
    <>
      <h1 className="block-title">Блог</h1>
      <Search />
      <PostList posts={posts} />
      <Pagination pagination={meta.pagination} />
    </>
  );
}

async function getFilteredPosts(queryString: string, currentPage: string | number) {
  const PAGE_SIZE = 9;

  const query = qs.stringify({
    sort: ["publishedAt:desc"],
    filters: {
      $or: [
        { title: { $containsi: queryString } },
        { description: { $containsi: queryString } },
      ],
    },
    pagination: {
      pageSize: PAGE_SIZE,
      page: currentPage,
    }
  });
  const url = new URL("/api/posts", baseURL);
  url.search = query;
  
  const res = await fetch(`${process.env.DB_HOST}/api/posts${url.search}&populate=*`, {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()

  return data;
}