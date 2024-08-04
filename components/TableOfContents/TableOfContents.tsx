'use client';

import { PostType } from '@/lib/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// import {TableOfContents} from '@/lib/types';

function TableOfContents({ post }: { post: PostType | any }) {
  const [isTocActive, setIsTocActive] = useState(false);
  const [activeId, setActiveId] = useState('');
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -85% 0px' }
    );

    post.attributes.tableOfContents.forEach((element: any) => {
      let heading = document.getElementById(element.slugifyHeading);
      if (heading) {
        observer.observe(heading);
      }
    });

    return () => {
      post.attributes.tableOfContents.forEach((element: any) => {
        let heading = document.getElementById(element.slugifyHeading);
        if (heading) {
          observer.unobserve(heading);
        }
      });
    };
  }, [post.attributes.tableOfContents]);

  return (
    <div
      className={`${
        isTocActive ? 'max-lg:translate-y-0' : 'max-lg:translate-y-full'
      } lg:sticky z-10 transition-transform lg:border-none lg:top-[120px] lg:pr-12 fixed left-0 bottom-0 w-full max-lg:bg-whiteSecondary/50 max-lg:dark:bg-darkSecondary/50 border border-blockBorderColorLight dark:border-blockBorderColorDark`}
    >
      <nav className={`max-lg:px-5 max-lg:py-6 max-lg:max-h-[60vh] max-lg:overflow-auto relative max-lg:bg-whiteSecondary max-lg:dark:bg-darkSecondary`}>
        <div className="mb-1 mt-[7px] text-base font-medium">Содержание</div>
        <ul className="max-h-[70vh] overflow-y-auto py-2 pr-3 text-sm text-secondTextColor dark:text-secondTextColorDark max-lg:color-inherit max-lg:max-h-[50%] overflow-auto">
          {post.attributes.tableOfContents.map(
            (element: any, index: number) =>
              element.level <= 2 && (
                <li
                  style={{
                    marginLeft: element.level * 15 + 'px',
                  }}
                  key={index}
                  className="py-[.25em] text-[clamp(1rem,0.8571rem_+_0.2232vw,1.125rem)] leading-normal"
                >
                  <Link
                    href={`#${element.slugifyHeading}`}
                    className={`${
                      activeId === element.slugifyHeading ? 'text-[--light-text-color] dark:text-[--dark-text-color] font-semibold' : ''
                    }`}
                    style={{
                      fontSize: 1 - Number(`0.${element.level}`) + 'em',
                    }}
                  >
                    {element.heading}
                  </Link>
                </li>
              )
          )}
        </ul>
      </nav>

      <button
        onClick={() => setIsTocActive(!isTocActive)}
        className="absolute top-[-70px] px-8 py-4 border rounded-full lg:hidden left-1/2 -translate-x-1/2 block-border max-lg:bg-whiteSecondary max-lg:dark:bg-darkSecondary"
      >
        {!isTocActive ? 'Оглавление' : 'Закрыть'}
      </button>
    </div>
  );
}

export default TableOfContents;
