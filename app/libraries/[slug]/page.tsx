import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProduct, products, comingSoon, type Product, type ComingSoonLibrary } from "@/lib/products";
import Reveal from "@/components/Reveal";
import ParticleField from "@/components/ParticleField";
import AudioPlayer from "@/components/AudioPlayer";
import Faq from "@/components/Faq";
import Gallery from "@/components/Gallery";

export function generateStaticParams() {
  return [
    ...products.map((p) => ({ slug: p.slug })),
    ...comingSoon.map((c) => ({ slug: c.slug })),
  ];
}

function getComingSoonLibrary(slug: string): ComingSoonLibrary | undefined {
  return comingSoon.find((c) => c.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (product) {
    return { title: `${product.name} — Mont Sounds`, description: product.description };
  }
  const lib = getComingSoonLibrary(slug);
  if (lib) {
    return { title: `${lib.name} — Mont Sounds`, description: lib.tagline };
  }
  return {};
}

export default async function LibraryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (product) return <ProductDetail product={product} />;

  const lib = getComingSoonLibrary(slug);
  if (lib) return <ComingSoonDetail lib={lib} />;

  notFound();
}

const accentText: Record<string, string> = {
  crystal: "text-crystal-cyan",
  bronze: "text-ancient-bronze",
  woodwinds: "text-natural-moss",
};

function ProductDetail({ product }: { product: Product }) {
  const related = products.filter((p) => p.slug !== product.slug);
  const accent = accentText[product.accent];

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70svh] items-end overflow-hidden bg-forest-black pt-24">
        <div className="absolute inset-0">
          <Image
            src={product.heroImage ?? product.image}
            alt={product.name}
            fill
            sizes="100vw"
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-black via-forest-black/70 to-forest-black/30" />
        </div>
        <ParticleField />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 md:px-10">
          <p className={`text-xs uppercase tracking-[0.3em] ${accent}`}>
            {product.origin}
          </p>
          <h1 className="mt-4 font-display text-5xl italic text-crystal-white md:text-7xl">
            {product.name}
          </h1>
          <p className="mt-4 max-w-xl text-crystal-white/70 md:text-lg">
            {product.tagline}
          </p>

          <div id="buy" className="mt-9 flex flex-wrap items-center gap-5">
            <span className="font-display text-3xl text-crystal-white">
              ${product.price} USD
            </span>
            <button type="button" className="btn btn-primary">
              Comprar ahora
            </button>
            <a
              href="#trailer"
              className="text-sm uppercase tracking-[0.2em] text-crystal-white/70 hover:text-crystal-cyan"
            >
              Watch Trailer
            </a>
          </div>
          <p className="mt-5 max-w-md text-xs leading-relaxed text-crystal-white/45">
            Compatible con Native Instruments Kontakt (versión 7 o superior).
            Se requiere la versión Full de Kontakt para evitar el modo Demo.
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="bg-stone-black py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <Reveal>
            <div className="space-y-6 text-crystal-white/75">
              {product.longDescription.map((p, i) => (
                <p key={i} className={i === product.longDescription.length - 1 ? "font-display text-xl italic text-crystal-white/90" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trailer */}
      <section id="trailer" className="bg-forest-black py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <Reveal>
            <div className="group relative aspect-video overflow-hidden rounded-sm border border-crystal-white/10 bg-stone-black">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 50%, rgba(28,74,53,0.35) 0%, rgba(10,13,10,0.95) 70%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <button
                  aria-label="Play trailer"
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-crystal-white/30 text-crystal-white transition-all group-hover:scale-105 group-hover:border-crystal-cyan group-hover:text-crystal-cyan"
                >
                  <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <p className="font-display text-lg italic text-crystal-white/70">
                  {product.name} — Trailer
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Instrument screenshot */}
      {product.screenshot && (
        <section className="bg-forest-black py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <Reveal>
              <p className="text-center text-xs uppercase tracking-[0.3em] text-crystal-cyan/80">
                Inside The Instrument
              </p>
              <h2 className="mt-4 text-center font-display text-3xl italic text-crystal-white md:text-4xl">
                The real {product.name} interface
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-10 overflow-hidden rounded-sm border border-crystal-white/10 bg-stone-black">
                <Image
                  src={product.screenshot}
                  alt={`${product.name} Kontakt instrument interface`}
                  width={1448}
                  height={1186}
                  className="w-full object-contain"
                />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Audio demos */}
      <section className="bg-stone-black py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-crystal-cyan/80">
              Listen
            </p>
            <h2 className="mt-4 font-display text-3xl italic text-crystal-white md:text-4xl">
              Demo Tracks
            </h2>
          </Reveal>
          <div className="mt-10">
            <Reveal>
              <AudioPlayer demos={product.demos} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features + Requirements */}
      <section className="bg-forest-black py-24 md:py-32">
        <div className="mx-auto grid max-w-5xl gap-14 px-6 md:grid-cols-2 md:px-10">
          <Reveal>
            <h2 className="font-display text-3xl italic text-crystal-white">
              Features
            </h2>
            <ul className="mt-6 space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-crystal-white/70">
                  <span className={`mt-1 h-1 w-1 shrink-0 rounded-full ${accent} bg-current`} />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display text-3xl italic text-crystal-white">
              Requirements
            </h2>
            <ul className="mt-6 space-y-3">
              {product.requirements.map((r) => (
                <li key={r} className="flex gap-3 text-sm text-crystal-white/70">
                  <span className={`mt-1 h-1 w-1 shrink-0 rounded-full ${accent} bg-current`} />
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-crystal-white/40">
              Full Version of Kontakt Required
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-stone-black py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <Reveal>
            <h2 className="font-display text-3xl italic text-crystal-white">
              Gallery
            </h2>
          </Reveal>
          <div className="mt-8">
            <Gallery accent={product.accent} image={product.image} name={product.name} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-forest-black py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <Reveal>
            <h2 className="font-display text-3xl italic text-crystal-white">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="mt-8">
            <Faq items={product.faq} />
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-stone-black py-24 md:py-32">
          <div className="mx-auto max-w-5xl px-6 md:px-10">
            <Reveal>
              <h2 className="font-display text-3xl italic text-crystal-white">
                Related Libraries
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 100}>
                  <Link
                    href={`/libraries/${p.slug}`}
                    className="group flex overflow-hidden rounded-sm border border-crystal-white/10 transition-colors hover:border-crystal-cyan/30"
                  >
                    <div className="relative aspect-[10/3] w-full overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-black/85 via-forest-black/10 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                        <span className="font-display text-xl italic text-crystal-white">
                          {p.name}
                        </span>
                        <span className="text-sm text-crystal-white/70">${p.price}</span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

const comingSoonAccentText: Record<string, string> = {
  bronze: "text-ancient-bronze",
  woodwinds: "text-natural-moss",
  wings: "text-raven-violet",
};

function ComingSoonDetail({ lib }: { lib: ComingSoonLibrary }) {
  const accent = comingSoonAccentText[lib.accent];

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70svh] items-end overflow-hidden bg-forest-black pt-24">
        <div className="absolute inset-0">
          <Image
            src={lib.background}
            alt={lib.name}
            fill
            sizes="100vw"
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-black via-forest-black/70 to-forest-black/30" />
        </div>
        <ParticleField />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 md:px-10">
          <p className={`text-xs uppercase tracking-[0.3em] ${accent}`}>
            In Development
          </p>
          <h1 className="mt-4 font-display text-5xl italic text-crystal-white md:text-7xl">
            {lib.name}
          </h1>
          <p className="mt-4 max-w-xl text-crystal-white/70 md:text-lg">
            {lib.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <span className="btn btn-outline pointer-events-none">
              Próximamente
            </span>
          </div>
        </div>
      </section>

      {/* Instrument screenshot */}
      <section className="bg-stone-black py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <Reveal>
            <p className={`text-center text-xs uppercase tracking-[0.3em] ${accent}`}>
              Inside The Instrument
            </p>
            <h2 className="mt-4 text-center font-display text-3xl italic text-crystal-white md:text-4xl">
              A first look at the {lib.name} interface
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 overflow-hidden rounded-sm border border-crystal-white/10 bg-forest-black">
              <Image
                src={lib.daw}
                alt={`${lib.name} Kontakt instrument interface`}
                width={1448}
                height={1186}
                className="w-full object-contain"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
