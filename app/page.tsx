import CardsGrid from "@/components/CardsGrid/CardsGrid";
import Facts from "@/components/Facts/Facts";
import Hero from "@/components/Hero/Hero";
import { FullWidthSkeleton } from "@/components/Skeletons/FullWidthSkeleton";
import type { Metadata } from 'next';

export default function Home() {
  return (
    <>
      <Hero />
      <Facts />
      <CardsGrid />
    </>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL('https://sereja-art.ru'),
  alternates: {
    canonical: '/',
  },
}