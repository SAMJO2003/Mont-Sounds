import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { compositions, getComposition, type Composition } from "@/lib/compositions";
import { products, comingSoon } from "@/lib/products";
import Reveal from "@/components/Reveal";
import ParticleField from "@/components/ParticleField";
import BuyButton from "@/components/BuyButton";
import ScorePreview from "@/components/ScorePreview";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export function generateStaticParams() {
  return compositions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const piece = getComposition(slug);
  if (!piece) return {};
  return {
    title: piece.seo.title,
    description: piece.seo.description,
    keywords: piece.seo.keywords,
    openGraph: {
      title: piece.seo.title,
      description: piece.seo.description,
      images: [{ url: piece.previewImage, alt: piece.previewAlt }],
    },
  };
}

export default async function CompositionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const piece = getComposition(slug);
  if (!piece) notFound();
  return <CompositionDetail piece={piece} />;
}

function CompositionDetail({ piece }: { piece: Composition }) {
  // Cross-sell: libraries for sale first, then what's coming.
  const alsoFrom = [
    ...products.map((p) => ({ href: `/libraries/${p.slug}`, name: p.name, image: p.image, note: `$${p.price}` })),
    ...comingSoon.map((c) => ({ href: `/libraries/${c.slug}`, name: c.name, image: c.background, note: "Coming soon" })),
  ].slice(0, 3);

  return (
    <>
      {/* Title */}
      <section className="relative overflow-hidden bg-forest-black pb-12 pt-32 md:pb-16 md:pt-40">
        <ParticleField />
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
          <Link
            href="/compositions"
            className="text-xs uppercase tracking-[0.3em] text-ancient-bronze hover:text-crystal-cyan"
          >
            ← Compositions
          </Link>
          <h1 className="mt-5 font-display text-4xl italic text-crystal-white md:text-6xl">
            {piece.title}
          </h1>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-crystal-white/55">
            {piece.subtitle}
          </p>
          <p className="mt-6 max-w-2xl text-crystal-white/70 md:text-lg">
            {piece.shortDescription}
          </p>
        </div>
      </section>

      {/* Preview + video + purchase */}
      <section className="bg-stone-black py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:px-10">
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-crystal-cyan/80">
              Preview · Page 1
            </p>
            <ScorePreview
              src={piece.previewImage}
              alt={piece.previewAlt}
              width={piece.previewWidth}
              height={piece.previewHeight}
            />
          </Reveal>

          <div className="space-y-12">
            {piece.youtubeId && (
              <Reveal delay={80}>
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-crystal-cyan/80">
                  Listen
                </p>
                <YouTubeEmbed id={piece.youtubeId} title={`${piece.title} — ${piece.composer}`} />
              </Reveal>
            )}

            {piece.options.length > 0 && (
              <Reveal delay={140}>
                <p id="buy" className="mb-4 text-xs uppercase tracking-[0.3em] text-crystal-cyan/80">
                  Sheet Music
                </p>
                <div className="grid gap-5 sm:grid-cols-2">
                  {piece.options.map((option) => (
                    <div
                      key={option.id}
                      className={`relative flex flex-col rounded-sm border p-6 ${
                        option.bestValue
                          ? "border-ancient-bronze/60 bg-forest-black"
                          : "border-crystal-white/10 bg-forest-black/60"
                      }`}
                    >
                      {option.bestValue && (
                        <span className="absolute -top-3 left-6 bg-ancient-bronze px-3 py-0.5 text-[10px] uppercase tracking-[0.2em] text-forest-black">
                          Best value
                        </span>
                      )}
                      <h2 className="font-display text-xl italic text-crystal-white">
                        {option.label}
                      </h2>
                      <p className="mt-2 font-display text-3xl text-crystal-white">
                        ${option.price.toFixed(2)}{" "}
                        <span className="text-sm text-crystal-white/50">USD</span>
                      </p>
                      <ul className="mt-4 flex-1 space-y-2">
                        {option.includes.map((item) => (
                          <li key={item} className="flex gap-3 text-sm text-crystal-white/70">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-crystal-cyan" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <BuyButton
                        priceId={option.paddlePriceId}
                        label={`Buy ${option.id === "pdf" ? "PDF" : option.label}`}
                        allowLaunchDiscount={false}
                        className={`btn mt-6 w-full ${option.bestValue ? "btn-primary" : "btn-outline"}`}
                      />
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs leading-relaxed text-crystal-white/45">
                  Instant digital download. The download link is emailed to you
                  right after payment.
                </p>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Description + specs */}
      <section className="bg-forest-black py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:px-10">
          <Reveal>
            <h2 className="font-display text-3xl italic text-crystal-white">About the piece</h2>
            <div className="mt-6 space-y-5 text-crystal-white/75">
              {piece.longDescription.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display text-3xl italic text-crystal-white">Details</h2>
            <dl className="mt-6 divide-y divide-crystal-white/10 border-y border-crystal-white/10">
              {piece.specs.map((spec) => (
                <div key={spec.label} className="flex justify-between gap-6 py-3 text-sm">
                  <dt className="text-crystal-white/50">{spec.label}</dt>
                  <dd className="text-right text-crystal-white/85">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* License */}
      <section className="bg-stone-black py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <Reveal>
            <h2 className="font-display text-2xl italic text-crystal-white">License</h2>
            <p className="mt-4 text-sm leading-relaxed text-crystal-white/60">{piece.license}</p>
          </Reveal>
        </div>
      </section>

      {/* Also from Mont Sounds */}
      <section className="bg-forest-black py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-crystal-cyan/80">Sample Libraries</p>
            <h2 className="mt-4 font-display text-3xl italic text-crystal-white">Also from Mont Sounds</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {alsoFrom.map((lib, i) => (
              <Reveal key={lib.href} delay={i * 100}>
                <Link
                  href={lib.href}
                  className="group block overflow-hidden rounded-sm border border-crystal-white/10 transition-colors hover:border-crystal-cyan/30"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={lib.image}
                      alt={lib.name}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-black/90 via-forest-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                      <span className="font-display text-xl italic text-crystal-white">{lib.name}</span>
                      <span className="text-xs uppercase tracking-[0.15em] text-crystal-white/70">{lib.note}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
