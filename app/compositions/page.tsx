import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { compositions } from "@/lib/compositions";
import Reveal from "@/components/Reveal";
import ParticleField from "@/components/ParticleField";

export const metadata: Metadata = {
  title: "Compositions — Santiago Agramont | Mont Sounds",
  description:
    "Original cinematic music by Santiago Agramont. Listen to each piece, read about it, and play it yourself with the official sheet music.",
};

export default function CompositionsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-black pb-16 pt-36 md:pb-24 md:pt-44">
        <ParticleField />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-ancient-bronze">
            Santiago Agramont
          </p>
          <h1 className="mt-4 font-display text-5xl italic text-crystal-white md:text-7xl">
            Compositions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-crystal-white/70 md:text-lg">
            Original cinematic music by the composer behind Mont Sounds. Listen
            to each piece, read the story behind it, and play it yourself with
            the official sheet music.
          </p>
        </div>
      </section>

      <section className="bg-stone-black py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-3 md:px-10">
          {compositions.map((piece, i) => {
            const fromPrice = Math.min(...piece.options.map((o) => o.price));
            return (
              <Reveal key={piece.slug} delay={i * 100}>
                <Link
                  href={`/compositions/${piece.slug}`}
                  className="group block overflow-hidden rounded-sm border border-crystal-white/10 transition-colors hover:border-crystal-cyan/30"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#f7f5f0]">
                    <Image
                      src={piece.previewImage}
                      alt={piece.previewAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-black/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-2xl italic text-crystal-white">
                      {piece.title}
                    </h2>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-crystal-white/45">
                      {piece.subtitle}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-crystal-white/65">
                      {piece.shortDescription}
                    </p>
                    {piece.options.length > 0 && (
                      <p className="mt-5 text-xs uppercase tracking-[0.2em] text-ancient-bronze">
                        Sheet music from ${fromPrice.toFixed(2)}
                      </p>
                    )}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
