import { NoteType, PostType } from './types';

export default function getCategories(posts: PostType[] | NoteType[]) {
  let categoryArr: string[] = [];
  categoryArr.push('all');

  posts.map((post) => {
    if (typeof post.category === 'string') {
      categoryArr.push(post.category);
    } else if (Array.isArray(post.category)) {
      categoryArr = categoryArr.concat(post.category);
    }
  });

  let sortedArray = Array.from(new Set(categoryArr.flat())).sort((a, b) => a.localeCompare(b));

  let renamedArray = sortedArray.map((category) => {
    switch (category) {
      case 'all':
        return { category, renamedCategory: 'Все записи' };
      case 'web-dev':
        return { category, renamedCategory: 'Разработка' };
      case 'tilda':
        return { category, renamedCategory: 'Tilda' };
      case 'other':
        return { category, renamedCategory: 'Прочее' };
        case 'seo':
          return { category, renamedCategory: 'SEO' };
      case 'bitrix':
        return { category, renamedCategory: '1C-Битрикс' };
        case 'figma':
          return { category, renamedCategory: 'Figma' };
      default:
        return { category, renamedCategory: category };
    }
  });

  return renamedArray;
}
