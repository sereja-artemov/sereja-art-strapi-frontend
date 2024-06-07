import Image from 'next/image';
import ZoomImage from './ZoomImage/ZoomImage';

interface figcaptionProps {
  src: string;
  caption?: string;
  alt: string;
  vertical?: boolean;
}

export default function Figcaption({ src, caption, alt, vertical }: figcaptionProps) {
  if (caption !== undefined) {
    return (
      <>
        {/* <ZoomImage src={src} alt={alt} /> */}
        <figure>
          <Image
            className={`${vertical && 'w-full h-auto max-w-[450px]'} w-auto mx-auto`}
            width={1920}
            height={1080}
            src={src}
            alt={alt}
            quality={85}
            placeholder={'blur'}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrQcAAX8A/n6ayNMAAAAASUVORK5CYII="
          />
          <figcaption className='text-center'>{caption}</figcaption>
        </figure>
      
      </>
      
    );
  } else {
    return (
      <Image
        className='w-auto mx-auto'
        width={1920}
        height={1080}
        src={src}
        alt={alt}
        quality={85}
        placeholder={'blur'}
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrQcAAX8A/n6ayNMAAAAASUVORK5CYII="
      />
    );
  }
}
