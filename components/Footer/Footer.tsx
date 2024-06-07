import Link from 'next/link';
import React from 'react';
import { BsTelegram } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import BackButton from '../BackButton/BackButton';

const Footer = () => {

  return (
    <footer className='container flex flex-wrap items-stretch gap-1 py-10 my-5'>
      {/* кнопка Назад */}
      <BackButton />

      <div className='flex flex-wrap gap-1 lg:text-lg'>
        <div className='flex items-center gap-2 px-4 py-2 border rounded-full border-darkPrimary/50 dark:border-whiteSecondary/30'>
          <MdEmail />
          <Link className='lg:mb-[2px]' href='mailto:artemov46@gmail.com' target='_blank'>artemov46@gmail.com</Link>
        </div>
        <div className='flex items-center gap-2 px-4 py-2 border rounded-full border-darkPrimary/50 dark:border-whiteSecondary/30'>
          <BsTelegram />
          <Link className='lg:mb-[2px]' href='https://t.me/sereja_art' target='_blank'>@sereja_art</Link>
        </div>
        <div className='flex items-center gap-2 px-4 py-2 border rounded-full border-darkPrimary/50 dark:border-whiteSecondary/30'>
          <IoLogoWhatsapp />
          <Link className='lg:mb-[2px]' href='https://wa.me/79513339923' target='_blank'>whatsapp</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;