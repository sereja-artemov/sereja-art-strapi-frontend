'use client'

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

interface paginationProps {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

const Pagination = ({pagination}: paginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  function createPageURL(pageNumber: string | number) {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  }

  return (
    (pagination.pageCount > 1) && <ul className='flex justify-center'>
      <li><Link href={currentPage <= 1 ? `${(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => e.preventDefault}` : createPageURL(currentPage - 1)} className={`${currentPage <= 1 && "opacity-0 pointer-events-none"} default-btn-color border border-darkPrimary/50 dark:border-whiteSecondary/30 rounded-full p-4 h-12 flex justify-center items-center md:text-base text-sm`}>Назад</Link></li>
      <li className="border border-darkPrimary/50 dark:border-whiteSecondary/30 rounded-full p-4 aspect-square h-12 flex justify-center items-center md:text-base text-sm">{currentPage}</li>
      <li><Link href={currentPage >= pagination.pageCount ? `${(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => e.preventDefault}` : createPageURL(currentPage + 1)} className={`${currentPage >= pagination.pageCount && "opacity-0 pointer-events-none"} default-btn-color border border-darkPrimary/50 dark:border-whiteSecondary/30 rounded-full p-4 h-12 flex justify-center items-center md:text-base text-sm`}>Вперед</Link></li>
    </ul>
  )
}

export default Pagination