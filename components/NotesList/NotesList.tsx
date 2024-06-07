import React from 'react';
import { NoteType } from '@/lib/types';
import NoteCard from '../NoteCard/NoteCard';

interface CategoryType {
  category: string;
  renamedCategory: string;
}

const NotesList = ({ posts }: { posts: NoteType[] }) => {
  return (
    <div className="inline-flex flex-wrap gap-2">
      {posts.length === 0 && <p>или не найдете...</p>}
      {posts.map((note) => (
        <NoteCard key={note.id} {...note} />
      ))}
    </div>
  );
};

export default NotesList;
