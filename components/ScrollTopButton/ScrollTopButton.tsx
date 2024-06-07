'use client'

import {useEffect, useState} from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleShowButton);
    return () => window.removeEventListener('scroll', toggleShowButton);
  }, [])

  function toggleShowButton() {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      { isVisible &&
        <button onClick={scrollToTop} className='fixed w-[50px] h-[50px] border border-[color:var(--font-color)] bg-[color:var(--card-background-color-opacity)] rounded-[50%] border-solid right-14 bottom-[145px]'>
          <IoIosArrowUp className='absolute -translate-x-2/4 -translate-y-2/4 w-4/5 h-auto block left-2/4 top-[48%]' />
        </button>
      }
    </>
  );
};

export default ScrollTopButton;
