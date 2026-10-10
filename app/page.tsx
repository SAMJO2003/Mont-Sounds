import Hero from "@/components/Hero";
import TrailerSection from "@/components/TrailerSection";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import FeaturedLibraries from "@/components/FeaturedLibraries";
import ComingSoon from "@/components/ComingSoon";

// Re-render hourly so the launch price on the featured card expires by itself.
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Hero />
      <TrailerSection />
      <About />
      <Philosophy />
      <FeaturedLibraries />
      <ComingSoon />
    </>
  );
}
