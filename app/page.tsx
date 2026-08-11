import Hero from "@/components/Hero";
import TrailerSection from "@/components/TrailerSection";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import FeaturedLibraries from "@/components/FeaturedLibraries";
import ComingSoon from "@/components/ComingSoon";

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
