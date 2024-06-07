'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { navigationRoutes } from '@/data/navigationRoutes';
import Link from 'next/link';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const openMenu = () => isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  const closeMenu = () => isMenuOpen && setIsMenuOpen(false);

  useEffect(() => {
    const close = (e: any) => {
      if (e.keyCode === 27) {
        closeMenu();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname])

  return (
    <>
      <ul className="hidden h-auto p-1 overflow-auto border rounded-full lg:flex border-darkPrimary/50 dark:border-whiteSecondary/30">
        {navigationRoutes.map((route, index) => {
          const isActive = pathname === route.route;

          return (
            <li key={index} className="flex items-stretch">
              <Link
                className={`mb-[0.1em] ${
                  isActive
                    ? 'bg-darkPrimary text-whitePrimary dark:bg-whitePrimary dark:text-darkPrimary'
                    : 'bg-whiteSecondary dark:bg-darkSecondary'
                } default-btn-color py-[.4em] leading-none px-[1em] max-xl:px-[.61em] my-0.5 lg:my-0 border rounded-full text-lg flex items-center border-darkPrimary/50 dark:border-whiteSecondary/20 `}
                href={route.route}
              >
                {route.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex">
        {/* Кнопка меню */}
        <div
          onClick={openMenu}
          className="lg:hidden border border-slate-900/50 dark:border-whiteSecondary/30 rounded-full p-0.5 flex items-center"
        >
          <button
            className="leading-none px-4 py-3 p-0.5 border border-slate-900/50 dark:border-whiteSecondary/30 rounded-full h-full min-w-[87px]"
            type="button"
          >
           Меню
          </button>
        </div>


      </div>
        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className='fixed z-[9999] flex flex-col justify-between w-full h-full px-7 py-8 overflow-auto -translate-x-1/2 border top-1 left-1/2 bg-whitePrimary dark:bg-darkPrimary block-border lg:hidden rounded-3xl'>
            <ul>
              {navigationRoutes.map((item, index) => (
                <li
                  key={index}
                  className="w-full mb-5 last:mb-0"
                >
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    className="relative z-10 link text-stroke text-5xl font-bold uppercase"
                    href={item.route}
                  >
                    <span data-text={item.name}>{item.name}</span>
                    
                  </Link>

                </li>
              ))}
            </ul>
            <button className='flex items-center justify-center px-5 py-4 m-0 mt-5 text-2xl uppercase rounded-full last:mb-0 block-border bg-whiteSecondary dark:bg-darkSecondary font-boss' onClick={() => setIsMenuOpen(false)} type="button">Закрыть</button>
          </div>

        )}
    </>
  );
};

export default Navigation;
