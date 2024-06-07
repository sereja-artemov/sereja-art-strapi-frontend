import type { Metadata } from "next";
import "./globals.css";
import { DarkModeProvider } from '@/context/darkModeContext';
import { Raleway, Open_Sans, Playfair_Display } from 'next/font/google'
import { Header } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import NextTopLoader from "nextjs-toploader";
import dynamic from "next/dynamic";
import Script from "next/script";
import YandexMetrika from "@/components/YandexMetrika/YandexMetrika";
import { Suspense } from "react";
const ScrollTopButton = dynamic(() => import("@/components/ScrollTopButton/ScrollTopButton"));
const ScrollProgressBar = dynamic(() => import("@/components/ScrollProgressBar/ScrollProgressBar"));

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
})
 
const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

const playfair_display = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DarkModeProvider>
      <html lang="ru" className={`${playfair_display.variable} ${raleway.variable} ${open_sans.variable}`}>
        <body>
            <Script id="metrika-counter" strategy="afterInteractive">
            {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(94063322, "init", {
                    defer: true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });`
            }
          </Script>
          <Suspense fallback={<></>}>
            <YandexMetrika />
          </Suspense>
          <Header />
          <main>{children}</main>
          <Footer />
          <NextTopLoader height={6} color='#6767ab' />
          <ScrollProgressBar />
          <ScrollTopButton />

          {/* Чат Битрикс24 Открытые линии */}
          <Script id="show-banner" strategy="lazyOnload">
            {`(function (w, d, u) {
                var s = d.createElement('script');
                s.async = true;
                s.src = u + '?' + ((Date.now() / 60000) | 0);
                var h = d.getElementsByTagName('script')[0];
                h.parentNode.insertBefore(s, h);
              })(window,
                  document,
                  'https://cdn-ru.bitrix24.ru/b17818108/crm/site_button/loader_1_xrfang.js');`
            }
          </Script>
        </body>
      </html>
    </DarkModeProvider>
  );
}

export const metadata: Metadata = {
  title: {
    template: '%s — sereja-art',
    default: 'Разработка и продвижение сайтов под ключ — sereja-art',
  },
  description: 'Сайт-портфолио frontend-разработчика Артемова Сергея',
  applicationName: 'sereja-art',
  referrer: 'origin-when-cross-origin',
  keywords: ['sereja-art, sergey artemov, сайт портфолио веб-разработчика, веб разработка, frontend разработчик, портфолио веб разработчика'],
  authors: [{ name: 'Сергей Артемов', url: 'https://sereja-art.ru' }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{url: '/meta-icons/favicon-32x32.png'}, {url: '/meta-icons/favicon-16x16.png'}],
    apple: [
      { url: '/meta-icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/meta-icons/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  other: {
    ['yandex-verification']: '2b752f09221380d0',
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    siteName: 'sereja-art',
    type: 'website',
  },
};