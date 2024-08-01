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
            pathname === blogCategoryPath || pathname === `/blog`
              ? 'bg-darkPrimary text-whitePrimary dark:bg-whitePrimary dark:text-darkPrimary block-border  pointer-events-none'
              : ''
          } btn border-none text-xl md:text-base mb-1 dark:hover:bg-darkSecondary hover:bg-darkSecondary/5`}>
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
                  pathname === `${blogCategoryPath}/${category.attributes.name}`
                    ? 'bg-darkPrimary dark:bg-whitePrimary text-whitePrimary dark:text-darkPrimary pointer-events-none'
                    : ''
                } btn border-none text-xl md:text-base mb-1 dark:hover:bg-darkSecondary hover:bg-darkSecondary/5`}>
                {category.attributes.renamedCategory}
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
}
