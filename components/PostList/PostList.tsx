'use client';

import React from 'react';
import { PostType } from '@/lib/types';
import PostCard from '../PostCard/PostCard';

interface CategoryType {
  category: string;
  renamedCategory: string;
}

const PostList = ({ posts }: { posts: PostType[] }) => {
  return (
    <>
      {posts.length === 0 && <p className='text-center font-bold font-boss opacity-30 lg:mt-10 lg:text-7xl text-3xl mt-8'>или не найдете...</p>}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 mb-8 lg:mb-12">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
