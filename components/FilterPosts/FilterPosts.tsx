'use client';

import { NoteType, PostType } from '@/lib/types';

interface CategoryType {
  category: string;
  renamedCategory: string;
}

const FilterPosts = ({
  categories,
  onClickHandler,
  activeCategory,
}: {
  posts: PostType[] | NoteType[];
  categories: CategoryType[];
  onClickHandler: any;
  activeCategory: string;
}) => {
  return (
    <ul className="flex flex-wrap justify-center mb-4">
      {categories.map((category, index) => {
        return (
          <li key={index}>
            <button
              onClick={onClickHandler}
              className={`${
                activeCategory === category.category &&
                'bg-darkPrimary text-whitePrimary dark:bg-whitePrimary dark:text-darkPrimary'
              } btn border-darkPrimary/50 dark:border-whiteSecondary/20 text-xl md:text-base mb-1`}
              id={category.category}
              type="button">
              {category.renamedCategory}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FilterPosts;
