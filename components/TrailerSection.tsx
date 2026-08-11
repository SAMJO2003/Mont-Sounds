import Reveal from "./Reveal";

export default function TrailerSection() {
  return (
    <section id="trailer" className="relative bg-stone-black py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Reveal>
          <div className="group relative aspect-video overflow-hidden rounded-sm border border-crystal-white/10 bg-forest-black">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(28,74,53,0.4) 0%, rgba(10,13,10,0.95) 70%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
              <button
                aria-label="Play trailer"
                className="flex h-20 w-20 items-center justify-center rounded-full border border-crystal-white/30 text-crystal-white transition-all group-hover:scale-105 group-hover:border-crystal-cyan group-hover:text-crystal-cyan"
              >
                <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <p className="font-display text-lg italic text-crystal-white/70">
                Mont Sounds — Origin Trailer
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-crystal-white/35">
                Video coming soon
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
