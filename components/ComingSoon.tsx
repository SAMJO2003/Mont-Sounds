import { comingSoon } from "@/lib/products";
import Reveal from "./Reveal";

export default function ComingSoon() {
  return (
    <section id="coming-soon" className="relative bg-forest-black py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.3em] text-crystal-cyan/80">
            In Development
          </p>
          <h2 className="mt-4 text-center font-display text-4xl italic text-crystal-white md:text-5xl">
            Coming Soon
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-crystal-white/60">
            The philosophy of Mont Sounds keeps expanding — new elements,
            new landscapes, new resonances.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {comingSoon.map((lib, i) => (
            <Reveal key={lib.name} delay={i * 80}>
              <div className="group relative overflow-hidden rounded-sm border border-crystal-white/10 bg-dark-moss/40 p-8">
                <div
                  className="absolute inset-0 opacity-60 blur-[2px] transition-all duration-700 group-hover:blur-0 group-hover:opacity-80"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 20%, rgba(147,216,208,0.08), transparent 60%)",
                  }}
                />
                <div className="relative">
                  <span className="rounded-full border border-crystal-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-crystal-white/50">
                    In Development
                  </span>
                  <h3 className="mt-5 font-display text-2xl italic text-crystal-white/85 blur-[1px] transition-all duration-500 group-hover:blur-0">
                    {lib.name}
                  </h3>
                  <p className="mt-2 text-sm text-crystal-white/45">{lib.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
