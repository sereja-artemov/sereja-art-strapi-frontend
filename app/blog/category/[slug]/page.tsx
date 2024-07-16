import FilterPosts from '@/components/FilterPosts/FilterPosts';
import Pagination from '@/components/Pagination/Pagination';
import PostList from '@/components/PostList/PostList';
import { Search } from '@/components/Search/Search';
import { baseURL } from '@/constants/constants';
import { getCategories, modifyPostData } from '@/lib/getPosts';
import getReadingTime from '@/lib/readingTime';
import { NoteType, PostType } from '@/lib/types';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import qs from 'qs';
import { Suspense } from 'react';

interface CategoryType {
  id: number;
  attributes: {
    name: string;
    renamedCategory: string;
  }
}

export default async function BlogCategory({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  // const {data: posts, meta} = await getPosts('posts');
  const query = searchParams?.query ?? '';
  const currentPage = searchParams?.page ?? '';
 
  const { data: posts, meta } = await getFilteredPostsByCategory(query, currentPage, params.slug);
  const {data: categories} = await getCategories();

  modifyPostData(posts);

  if (!posts) return notFound();

  return (
    <>
      <h1 className="block-title">Блог</h1>
      <Suspense fallback={<></>}>
        <FilterPosts categories={categories} />
      </Suspense>
      <Search />
      <PostList posts={posts} />
      <Pagination pagination={meta.pagination} />
    </>
  );
}

async function getFilteredPostsByCategory(queryString: string, currentPage: string | number, category: string) {
  const PAGE_SIZE = 9;

  const query = qs.stringify({
    sort: ['publishedAt:desc'],
    filters: {
      $or: [{ title: { $containsi: queryString } }, { description: { $containsi: queryString } }],
      categories: {
        name: {
          $eqi: category,
        },
      },
    },
    pagination: {
      pageSize: PAGE_SIZE,
      page: currentPage,
    },
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

export const generateStaticParams = async () => {
  const {data: categories} = await getCategories();

  return categories.map((category: CategoryType) => ({ slug: category.attributes.name }));
};