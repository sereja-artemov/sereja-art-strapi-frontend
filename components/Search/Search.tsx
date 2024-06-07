'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { useDebouncedCallback } from 'use-debounce';

export function Search() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchField = useRef<HTMLInputElement>(null);

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    // params.set('page', '1');

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  function clearForm() {
    if (searchField.current) {
      searchField.current.value = '';
    }
    replace(pathname);
  }

  return (
    <form className="mb-4 max-w-[750px] mx-auto flex md:text-4xl text-xl items-center gap-1 relative">
      <input
        ref={searchField}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
        type="search"
        id="default-search"
        className="w-full py-[.4em] leading-none px-[1em] border border-darkPrimary/50 dark:border-whiteSecondary/30 rounded-full bg-whiteSecondary md:pr-[75px] pr-[45px] dark:text-whitePrimary dark:bg-darkSecondary"
        placeholder="Начните искать и вы найдете..."
        required
      />

      <button
        onClick={clearForm}
        type="button"
        className="border absolute md:right-5 bg-whiteSecondary dark:bg-darkSecondary border-darkPrimary/50 dark:border-whiteSecondary/30 rounded-full aspect-square right-[.35rem] h-[2.1rem] md:h-10">
        <IoCloseOutline size={`100%`} />
      </button>
    </form>
  );
}
