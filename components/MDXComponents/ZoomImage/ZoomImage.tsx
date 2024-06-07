'use client'

import Image from 'next/image';
import { useState } from 'react';

type ZoomImageProps = {
  src: string,
  alt: string,
}

const ZoomImage = ({src, alt}: ZoomImageProps) => {
  const [isZoom, setIsZoom] = useState(false);
  return (
    <div className={`${isZoom && 'fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-auto'}`}>
      <Image
        className='max-w-full'
        onClick={() => setIsZoom(!isZoom)}
        width={1920}
        height={1080}
        src={src}
        alt={alt}
        placeholder={'blur'}
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrQcAAX8A/n6ayNMAAAAASUVORK5CYII="
      />
    </div>

  );
};

export default ZoomImage;
