import Reveal from "./Reveal";

const cards = [
  {
    title: "Nature",
    text: "Every instrument has a natural origin — the forest, the river and the mountain are the first instrument makers.",
    path: "M4 20 L10 8 L14 14 L18 4 L22 20 Z",
  },
  {
    title: "Materials",
    text: "Crystal, bronze, wood and stone each carry their own voice. Mont Sounds listens for it before shaping anything.",
    path: "M12 2 L20 8 L17 20 L7 20 L4 8 Z",
  },
  {
    title: "Costa Rica",
    text: "One of the most biodiverse countries on Earth — cloud forests, volcanoes and coastlines, recorded as they are.",
    path: "M2 18 Q7 10 12 18 Q17 10 22 18",
  },
  {
    title: "Field Recording",
    text: "Every library begins outdoors, on location, with real air and real distance between the microphone and the source.",
    path: "M12 3 L12 15 M6 9 A6 6 0 0 0 18 9 M4 21 L20 21",
  },
  {
    title: "Sound Design",
    text: "Raw recordings are shaped — not replaced — into textures, pads and atmospheres that keep their origin audible.",
    path: "M3 12 Q7 4 11 12 T19 12 T27 12",
  },
  {
    title: "Virtual Instruments",
    text: "Deep-sampled, expressively scripted instruments built so composers can play nature like any other instrument.",
    path: "M4 18 L4 10 L9 10 L9 18 M11 18 L11 4 L16 4 L16 18 M18 18 L18 13 L23 13 L23 18",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative bg-forest-black py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.3em] text-natural-moss">
            Philosophy
          </p>
          <h2 className="mt-4 text-center font-display text-4xl italic text-crystal-white md:text-5xl">
            Every landscape has its own resonance.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-crystal-white/60">
            Mont Sounds reconnects traditional instruments with the natural
            elements that define their character — crystal and ice, bronze and
            fire, woodwinds and waterfalls.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div className="card-glass group h-full rounded-sm p-8 transition-colors hover:border-crystal-cyan/30">
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-ancient-bronze transition-colors group-hover:text-crystal-cyan"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={c.path} />
                </svg>
                <h3 className="mt-6 font-display text-2xl italic text-crystal-white">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-crystal-white/60">
                  {c.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
