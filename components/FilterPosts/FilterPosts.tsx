'use client';

import { NoteType, PostType } from '@/lib/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface CategoryType {
  id: number;
  attributes: {
    name: string;
    renamedCategory: string;
    posts: PostType[];
    notes: NoteType[];
  };
}

export default function FilterPosts({ categories }: any) {
  const pathname = usePathname();
  const blogCategoryPath = `/blog/category`;

  return (
    <ul className="flex flex-wrap justify-center mb-4">
      <li>
        <Link
          href={`/blog`}
          className={`${
            (pathname === blogCategoryPath || pathname === `/blog`)  &&
            'bg-darkPrimary text-whitePrimary dark:bg-whitePrimary dark:text-darkPrimary'
          } btn border-darkPrimary/50 dark:border-whiteSecondary/20 text-xl md:text-base mb-1`}>
          Все
        </Link>
      </li>
      {categories?.map((category: CategoryType) => {
        if (category.attributes.posts.data.length > 0) {
          return (
            <li key={category.id}>
              <Link
                href={`${blogCategoryPath}/${category.attributes.name}`}
                className={`${
                  pathname === `${blogCategoryPath}/${category.attributes.name}` &&
                  'bg-darkPrimary text-whitePrimary dark:bg-whitePrimary dark:text-darkPrimary'
                } btn border-darkPrimary/50 dark:border-whiteSecondary/20 text-xl md:text-base mb-1`}>
                {category.attributes.renamedCategory}
              </Link>
            </li>
          );
        }
        
      })}
    </ul>
  );
}
