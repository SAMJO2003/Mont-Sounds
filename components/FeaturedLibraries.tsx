import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import Reveal from "./Reveal";

export default function FeaturedLibraries() {
  const product = products[0];

  return (
    <section id="libraries" className="relative bg-stone-black py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-crystal-cyan/80">
            Available Now
          </p>
          <h2 className="mt-4 font-display text-4xl italic text-crystal-white md:text-5xl">
            The first library, ready to play.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="card-glass group mt-14 grid gap-0 overflow-hidden rounded-sm md:grid-cols-[1.15fr_1fr]">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-black md:aspect-auto">
              <Image
                src={product.screenshot ?? product.image}
                alt={`${product.name} Kontakt instrument interface`}
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-black/70 via-transparent to-transparent md:bg-gradient-to-r" />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-xs uppercase tracking-[0.25em] text-crystal-cyan/70">
                {product.origin}
              </p>
              <h3 className="mt-4 font-display text-3xl italic text-crystal-white md:text-4xl">
                {product.name}
              </h3>
              <p className="mt-2 text-crystal-white/55">{product.tagline}</p>
              <p className="mt-5 text-sm leading-relaxed text-crystal-white/65">
                {product.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <span className="font-display text-2xl text-crystal-white">
                  ${product.price} USD
                </span>
                <Link href={`/libraries/${product.slug}#buy`} className="btn btn-primary">
                  Comprar ahora
                </Link>
                <Link
                  href={`/libraries/${product.slug}`}
                  className="text-xs uppercase tracking-[0.2em] text-crystal-cyan border-b border-transparent hover:border-current"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
