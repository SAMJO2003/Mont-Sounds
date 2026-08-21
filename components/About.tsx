import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative bg-stone-black py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[0.85fr_1.15fr] md:px-10">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm border border-ancient-bronze/30">
            <Image
              src="/images/santiago-agramont-portrait.png"
              alt="Santiago Agramont playing piano"
              fill
              sizes="(min-width: 768px) 30vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-xs uppercase tracking-[0.3em] text-ancient-bronze/80">
            The Founder
          </p>
          <h2 className="mt-4 font-display text-4xl italic text-crystal-white md:text-5xl">
            Santiago Agramont Menacho
          </h2>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-crystal-white/45">
            Composer · Producer · Sound Designer · Pianist · Percussionist
          </p>

          <div className="mt-8 space-y-5 text-crystal-white/70">
            <p>
              Santiago has played piano and percussion for more than ten years.
              He is also Deaf — and rather than treating that as a limitation,
              it has profoundly shaped the way he experiences and creates
              sound.
            </p>
            <p>
              Instead of focusing only on pitch, his attention goes to
              resonance, vibration, texture, movement and emotion — the
              physical presence of a sound, not just its note. That
              perspective inspires every library Mont Sounds creates.
            </p>
            <p>
              Mont Sounds is a boutique sample library company inspired by the
              natural beauty of Costa Rica — one of the most biodiverse
              countries on Earth, and one that few companies have explored as
              a source for cinematic virtual instruments. Every sound begins
              with authentic field recordings: cloud forests, rain, volcanoes,
              rivers, waterfalls, wind, birds, crystal, bronze, wood and stone.
            </p>
            <p className="font-display text-xl italic text-crystal-white/90">
              Mont Sounds is not about recording instruments. It is about
              discovering the music already hidden inside nature.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
