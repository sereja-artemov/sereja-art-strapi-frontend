import React from 'react';
import { NoteType } from '@/lib/types';
import NoteCard from '../NoteCard/NoteCard';

interface CategoryType {
  category: string;
  renamedCategory: string;
}

const NotesList = ({ posts }: { posts: NoteType[] }) => {
  return (
    <>
      {posts.length === 0 && (
        <p className="text-center font-bold font-boss opacity-30 lg:mt-10 lg:text-7xl text-3xl mt-8">
          или не найдете...
        </p>
      )}
      <div className="inline-flex flex-wrap gap-2">
        {posts.map((note) => (
          <NoteCard key={note.id} {...note} />
        ))}
      </div>
    </>
  );
};

export default NotesList;
