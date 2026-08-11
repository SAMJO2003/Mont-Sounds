import Image from "next/image";
import Link from "next/link";
import ParticleField from "./ParticleField";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-forest-black">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(28,74,53,0.35) 0%, rgba(10,13,10,0.9) 55%, #0a0d0a 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(180deg, transparent 0%, rgba(10,13,10,0.4) 70%, #0a0d0a 100%)",
        }}
      />
      <ParticleField />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <div className="relative mb-8 h-40 w-40 md:h-52 md:w-52">
          <Image
            src="/images/mont-logo.png"
            alt="Mont Sounds"
            fill
            sizes="208px"
            className="mask-fade-radial object-contain animate-fade-up"
            priority
          />
        </div>

        <h1 className="animate-fade-up font-display text-5xl italic tracking-wide text-crystal-white text-balance md:text-7xl [animation-delay:150ms]">
          Nature becomes music.
        </h1>

        <p className="animate-fade-up mt-6 max-w-xl text-base text-crystal-white/65 md:text-lg [animation-delay:350ms]">
          From raw textures to musical expression.
        </p>

        <div className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row [animation-delay:550ms]">
          <Link
            href="/#libraries"
            className="rounded-full bg-gradient-to-r from-forest-green to-deep-emerald px-8 py-3 text-sm uppercase tracking-[0.2em] text-crystal-white shadow-[0_0_30px_rgba(28,74,53,0.5)] transition-transform hover:scale-[1.03]"
          >
            Explore Libraries
          </Link>
          <Link
            href="#trailer"
            className="rounded-full border border-crystal-white/25 px-8 py-3 text-sm uppercase tracking-[0.2em] text-crystal-white/85 transition-colors hover:border-crystal-cyan hover:text-crystal-cyan"
          >
            Watch Trailer
          </Link>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <div className="h-10 w-px animate-shimmer bg-gradient-to-b from-transparent via-crystal-white/60 to-transparent" />
      </div>
    </section>
  );
}
