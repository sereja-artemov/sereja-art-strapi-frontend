'use client';

import Link from 'next/link';
import { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';

import testImage1 from '@/public/images/servicesBlock/develop.png';
import testImage2 from '@/public/images/servicesBlock/support.png';
import testImage3 from '@/public/images/servicesBlock/promotion.png';
import testImage4 from '@/public/images/servicesBlock/html-coding.png';
import testImage5 from '@/public/images/servicesBlock/design.png';

type ServicesItemProps = {
  children?: any;
  linkHref: string;
  imgLink: string | StaticImageData;
  imgAlt: string;
};

export const ServicesListItem = ({
  children,
  linkHref,
  imgLink,
  imgAlt,
}: ServicesItemProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const ImageWidth = 500;
  const ImageHeight = 500;

  const mouseMoveEvent = (event: { pageX: number; pageY: number }) => {
    if (imgRef.current !== null) {
      imgRef.current.style.top = event.pageY - ImageHeight / 2 + 'px';
      imgRef.current.style.left = event.pageX + 20 + 'px';
    }
  };

  const mouseEnterEvent = () => {
    if (imgRef.current !== null) {
      imgRef.current.style.display = 'inline-block';
    }
  };

  const mouseLeaveEvent = () => {
    if (imgRef.current !== null) {
      imgRef.current.style.display = 'none';
    }
  };

  return (
    <li className="text-2xl font-bold leading-snug lg:text-4xl md:text-3xl md:leading-snug lg:leading-snug lg:font-bold max-w-fit">
      <Link
        onMouseMove={mouseMoveEvent}
        onMouseLeave={mouseLeaveEvent}
        onMouseEnter={mouseEnterEvent}
        href={linkHref}
        className="relative z-10 hover:mix-blend-difference hover:text-whitePrimary/75 link text-stroke"
      >
        {children}
      </Link>
      <Image
        width={ImageWidth}
        height={ImageHeight}
        ref={imgRef}
        className={`hidden absolute z-auto`}
        src={imgLink}
        alt={imgAlt}
        quality={100}
      />
    </li>
  );
};

const ServicesBlock = () => {
  return (
    <div className='lg:p-7 p-[clamp(0.1rem,3.8%,2rem)] flex flex-col justify-between h-full gap-9 '>
      <ul className="inline-flex flex-col w-full gap-2 text-lg">
        <ServicesListItem
          linkHref="/services"
          imgLink={testImage1}
          imgAlt="Разработка сайтов"
        >
          <span data-text={`Разработка\u00A0сайтов`}>Разработка сайтов</span>
        </ServicesListItem>
        <ServicesListItem
          linkHref="/services"
          imgLink={testImage2}
          imgAlt="Сопровождение"
        >
          <span data-text={`Сопровождение`}>Сопровождение</span>
        </ServicesListItem>
        <ServicesListItem
          linkHref="/services"
          imgLink={testImage3}
          imgAlt="Продвижение"
        >
          <span data-text={`Продвижение`}>Продвижение</span>
        </ServicesListItem>
        <ServicesListItem
          linkHref="/services"
          imgLink={testImage4}
          imgAlt="HTML верстка"
        >
          <span data-text={`HTML\u00A0верстка`}>HTML верстка</span>
        </ServicesListItem>
        <ServicesListItem linkHref="/services" imgLink={testImage5} imgAlt="Дизайн">
          <span data-text={`Дизайн`}>Дизайн</span>
        </ServicesListItem>
      </ul>
      <Link href="/services" className='leading-loose underline lg:text-base underline-offset-8 decoration-whitePrimary/30'><span className='text-4xl'>🐻</span> посмотреть все <span className='whitespace-nowrap'>❌ не медвежьи услуги</span></Link>

    </div>
  );
};

export default ServicesBlock;
