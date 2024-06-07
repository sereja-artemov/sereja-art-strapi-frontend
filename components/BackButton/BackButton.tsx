'use client'

import Link from "next/link"
import { useRouter } from 'next/navigation'

function BackButton() {
  const router = useRouter();

  return (
    <div
    className={`flex grow mr-1.5 lg:max-w-[250px] shrink-0 p-0.5 lg:p-1 border border-darkPrimary/50 dark:border-whiteSecondary/30 rounded-full`}
  >
    <Link onClick={() => router.back()} href="/" className={`bg-darkPrimary text-whitePrimary dark:bg-whitePrimary dark:text-darkPrimary w-full h-full min-h-10 gap-3 px-3 p-0.5 pr-0.5 lg:pr-1 lg:p-1 lg:px-4 rounded-full flex justify-between items-center`}>
      <p className="m-0 lg:mb-[0.1em]">
       Назад
      </p>
      <svg
        className="w-auto h-full rotate-180"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={`fill-whitePrimary dark:fill-darkPrimary`}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.4049 9.45833L9.45911 12.4063C9.25547 12.6094 8.92578 12.6094 8.72265 12.4063C8.51901 12.2031 8.51901 11.8698 8.72265 11.6667L10.869 9.52083H5.35547C5.06745 9.52083 4.83464 9.28646 4.83464 9C4.83464 8.71354 5.06745 8.47916 5.35547 8.47916H10.869L8.72265 6.33333C8.51901 6.13021 8.51901 5.80206 8.72265 5.59373C8.92578 5.3906 9.25547 5.3906 9.45911 5.59373L12.4049 8.54166C12.5299 8.66666 12.569 8.83854 12.5404 9C12.569 9.16146 12.5299 9.33333 12.4049 9.45833ZM9.0013 0.666664C4.3987 0.666664 0.667969 4.39583 0.667969 9C0.667969 13.6042 4.3987 17.3333 9.0013 17.3333C13.6039 17.3333 17.3346 13.6042 17.3346 9C17.3346 4.39583 13.6039 0.666664 9.0013 0.666664Z"
          fill="white"
        />
      </svg>
    </Link>
  </div>
  )
}

export default BackButton