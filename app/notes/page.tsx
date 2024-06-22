import NotesList from '@/components/NotesList/NotesList';
import { Search } from '@/components/Search/Search';
import { getPosts, getTableOfContents } from '@/lib/getPosts';
import { notFound } from 'next/navigation';
import getReadingTime from '@/lib/readingTime';
import qs from 'qs';
import { baseURL } from '@/constants/constants';

export default async function Notes({searchParams}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  
  const query = searchParams?.query ?? "";
  const {data: posts, meta} = await getFilteredPosts(query);

  modifyPostData(posts);

  function modifyPostData(data) {
    data.forEach(post => {
      // add reading time
      let readingTime = getReadingTime(post.attributes.body);
      post.attributes.readingTime = readingTime;
      // add toc
      let toc = getTableOfContents(post.attributes.body);
      post.attributes.tableOfContents = toc;
    });
  }

  if (!posts) return notFound()

  return (
    <>
      <h1 className="block-title">Заметки</h1>
      <Search />
      <NotesList posts={posts} />
    </>
  );
}

async function getFilteredPosts(queryString: string) {
  const query = qs.stringify({
    sort: ["publishedAt:desc"],
    filters: {
      $or: [
        { title: { $containsi: queryString } },
        { description: { $containsi: queryString } },
      ],
    },
  });
  const url = new URL("/api/notes", baseURL);
  url.search = query;
  
  const res = await fetch(`${process.env.DB_HOST}/api/notes${url.search}&populate=*`, {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()

  return data;
}