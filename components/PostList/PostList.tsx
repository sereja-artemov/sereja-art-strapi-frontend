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
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {posts.length === 0 && <p>или не найдете...</p>}
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
};

export default PostList;
