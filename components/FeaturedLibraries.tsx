import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import Reveal from "./Reveal";

const accentBorder: Record<string, string> = {
  crystal: "hover:border-crystal-cyan/40",
  bronze: "hover:border-ancient-bronze/50",
  woodwinds: "hover:border-forest-green/60",
};

const accentText: Record<string, string> = {
  crystal: "text-crystal-cyan",
  bronze: "text-ancient-bronze",
  woodwinds: "text-natural-moss",
};

export default function FeaturedLibraries() {
  return (
    <section id="libraries" className="relative bg-stone-black py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.3em] text-crystal-cyan/80">
            Featured Libraries
          </p>
          <h2 className="mt-4 text-center font-display text-4xl italic text-crystal-white md:text-5xl">
            Three elements. Three instruments.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 120}>
              <div
                className={`card-glass group flex h-full flex-col overflow-hidden rounded-sm transition-colors ${accentBorder[p.accent]}`}
              >
                <div className="relative aspect-[10/3] w-full overflow-hidden lg:aspect-[4/3]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-black/80 via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl italic text-crystal-white">
                      {p.name}
                    </h3>
                    <span className={`font-display text-xl ${accentText[p.accent]}`}>
                      ${p.price}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-crystal-white/60">
                    {p.description}
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <Link
                      href={`/libraries/${p.slug}#buy`}
                      className="rounded-full bg-crystal-white px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-forest-black transition-opacity hover:opacity-85"
                    >
                      Buy — ${p.price}
                    </Link>
                    <Link
                      href={`/libraries/${p.slug}`}
                      className={`text-xs uppercase tracking-[0.2em] ${accentText[p.accent]} border-b border-transparent hover:border-current`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
