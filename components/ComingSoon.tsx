import Image from "next/image";
import Link from "next/link";
import { comingSoon } from "@/lib/products";
import Reveal from "./Reveal";

const accentBorder: Record<string, string> = {
  bronze: "hover:border-ancient-bronze/50",
  woodwinds: "hover:border-forest-green/60",
  wings: "hover:border-raven-violet/60",
};

const accentText: Record<string, string> = {
  bronze: "group-hover:text-ancient-bronze",
  woodwinds: "group-hover:text-natural-moss",
  wings: "group-hover:text-raven-violet",
};

export default function ComingSoon() {
  return (
    <section id="coming-soon" className="relative bg-forest-black py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-ancient-bronze/80">
            In Development
          </p>
          <h2 className="mt-4 font-display text-4xl italic text-crystal-white md:text-5xl">
            Coming Soon
          </h2>
          <p className="mt-5 max-w-xl text-crystal-white/60">
            The philosophy of Mont Sounds keeps expanding — new elements,
            new landscapes, new resonances.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {comingSoon.map((lib, i) => (
            <Reveal key={lib.slug} delay={i * 100}>
              <Link
                href={`/libraries/${lib.slug}`}
                className={`group relative flex h-full flex-col overflow-hidden rounded-sm border border-crystal-white/10 transition-colors duration-500 ${accentBorder[lib.accent]}`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-black">
                  <Image
                    src={lib.daw}
                    alt={`${lib.name} Kontakt instrument interface`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-contain p-5 transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-crystal-white/25 bg-forest-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-crystal-white/70">
                    In Development
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3
                    className={`font-display text-2xl italic text-crystal-white transition-colors ${accentText[lib.accent]}`}
                  >
                    {lib.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-crystal-white/60">
                    {lib.tagline}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
