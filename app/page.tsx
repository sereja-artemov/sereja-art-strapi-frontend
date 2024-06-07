import CardsGrid from "@/components/CardsGrid/CardsGrid";
import Facts from "@/components/Facts/Facts";
import Hero from "@/components/Hero/Hero";
import { FullWidthSkeleton } from "@/components/Skeletons/FullWidthSkeleton";

export default function Home() {
  return (
    <>
      <Hero />
      <Facts />
      <CardsGrid />
    </>
  );
}
