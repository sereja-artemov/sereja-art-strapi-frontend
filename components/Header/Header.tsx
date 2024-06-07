'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import useWindowSize from '@/hooks/useWindowSize';
import HeaderSocialIcons from '../HeaderSocialIcons/HeaderSocialIcons';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import Navigation from '../Navigation/Navigation';

export function Header() {
  const pathname = usePathname();
  const windowSize = useWindowSize();

  const navRef = useRef<HTMLDivElement>(null);
  const navBgBlur = useRef<HTMLDivElement>(null);

  const isIndexPath = pathname === '/';

  const activateSticky = () => {
    const scrollTop = window.scrollY;

    if (navRef.current) {
      if (scrollTop >= 88) {
        navRef.current?.classList.add(
          ...[
            'sticky',
            'top-0',
            'shadow',
            'bg-whiteSecondary/50',
            'dark:bg-darkSecondary/50',
          ]
        );
        navBgBlur.current?.classList.add(...['backdrop-blur-md']);
      } else {
        navRef.current?.classList.remove(
          ...[
            'sticky',
            'top-0',
            'shadow',
            'bg-whiteSecondary/50',
            'dark:bg-darkSecondary/50',
          ]
        );
        navBgBlur.current?.classList.remove(...['backdrop-blur-md']);
      }
    }
  };

  useEffect(() => {
    activateSticky();
    window.addEventListener('scroll', activateSticky);
    return () => {
      window.removeEventListener('scroll', activateSticky);
    };
  }, []);


  return (
    <>
      <header ref={navRef} className="z-50 w-full py-5">
        {/* blur bg */}
        <div
          ref={navBgBlur}
          className="absolute top-0 left-0 w-full h-full -z-10"
        ></div>
        <div className="container flex gap-x-1.5 items-stretch mx-auto">
          <nav className="mx-auto w-full left-0 inline-flex gap-x-1.5">
            <div
              className={`inline-flex shrink-0 p-0.5 lg:p-1 border border-darkPrimary/50 dark:border-whiteSecondary/30 rounded-full flex-grow`}
            >
              <Link
                href="/"
                className={`${
                  isIndexPath
                    ? 'bg-darkPrimary text-whitePrimary dark:bg-whitePrimary dark:text-darkPrimary'
                    : 'bg-whiteSecondary dark:text-whitePrimary dark:bg-darkSecondary hover:bg-white/0 dark:hover:bg-white/0'
                } w-full h-full gap-3 px-3 p-0.5 pr-0.5 lg:pr-1 lg:p-1 lg:px-4 rounded-full flex justify-between items-center`}
              >
                <p className="m-0 lg:mb-[0.1em]">
                  {windowSize.width <= 320 ? 'Главная' : 'Главная страница'}
                </p>
                <svg
                  className="w-auto h-full"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={`${
                      isIndexPath
                        ? 'fill-whitePrimary dark:fill-darkPrimary'
                        : 'fill-darkPrimary dark:fill-whitePrimary'
                    } `}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.4049 9.45833L9.45911 12.4063C9.25547 12.6094 8.92578 12.6094 8.72265 12.4063C8.51901 12.2031 8.51901 11.8698 8.72265 11.6667L10.869 9.52083H5.35547C5.06745 9.52083 4.83464 9.28646 4.83464 9C4.83464 8.71354 5.06745 8.47916 5.35547 8.47916H10.869L8.72265 6.33333C8.51901 6.13021 8.51901 5.80206 8.72265 5.59373C8.92578 5.3906 9.25547 5.3906 9.45911 5.59373L12.4049 8.54166C12.5299 8.66666 12.569 8.83854 12.5404 9C12.569 9.16146 12.5299 9.33333 12.4049 9.45833ZM9.0013 0.666664C4.3987 0.666664 0.667969 4.39583 0.667969 9C0.667969 13.6042 4.3987 17.3333 9.0013 17.3333C13.6039 17.3333 17.3346 13.6042 17.3346 9C17.3346 4.39583 13.6039 0.666664 9.0013 0.666664Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
            {/* Меню */}
            <Navigation />

          </nav>

          {/* dark mode toggle */}
          <DarkModeToggle />

          {/* Иконки соцсетей */}
        <HeaderSocialIcons />
        </div>
      </header>
    </>
  );
}
