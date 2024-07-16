'use client'

import useWindowSize from '@/hooks/useWindowSize';
import Image from 'next/image';
import Link from 'next/link';

function TimeWebCreative() {
  const windowSize = useWindowSize();

  if (windowSize.width > 425) {
    return (
      <Link target="_new" href="https://timeweb.com/ru/?i=113017&a=237">
          <Image
            width={970}
            height={250}
             className='mx-auto'
            src={'https://wm.timeweb.ru/images/posters/970x250/970x250.jpg'}
            alt=""
            quality={100}
          />
      </Link>
    )
  } else {
    return (
      <Link target="_new" href="https://timeweb.com/ru/?i=113017&a=201">
          <Image
            width={336}
            height={280}
             className='mx-auto'
            src={'https://wm.timeweb.ru/images/posters/336x280/336x280.jpg'}
            alt=""
            quality={100}
          />
      </Link>
    )
  }

}

export default TimeWebCreative;