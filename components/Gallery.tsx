import Image from "next/image";
import Reveal from "./Reveal";

type Accent = "crystal" | "bronze" | "woodwinds";

const swatches: Record<
  Accent,
  { label: string; gradient: string; image?: string }[]
> = {
  crystal: [
    {
      label: "Struck Glass",
      image: "/images/crystal-sounds-struck-glass.png",
      gradient:
        "radial-gradient(circle at 30% 20%, rgba(147,216,208,0.35), transparent 60%), linear-gradient(160deg, #0e2b2c, #0a0d0a)",
    },
    {
      label: "Cracking Ice",
      image: "/images/crystal-sounds-cracking-ice.png",
      gradient:
        "radial-gradient(circle at 70% 70%, rgba(169,198,204,0.3), transparent 60%), linear-gradient(200deg, #12242a, #0a0d0a)",
    },
    {
      label: "Glass Resonance",
      image: "/images/crystal-sounds-glass-resonance.png",
      gradient:
        "radial-gradient(circle at 50% 40%, rgba(242,239,228,0.18), transparent 65%), linear-gradient(180deg, #0d1f20, #0a0d0a)",
    },
  ],
  bronze: [
    {
      label: "Forge Fire",
      gradient:
        "radial-gradient(circle at 35% 30%, rgba(196,106,53,0.35), transparent 60%), linear-gradient(160deg, #2a1a0d, #121412)",
    },
    {
      label: "Hammered Bronze",
      gradient:
        "radial-gradient(circle at 65% 65%, rgba(163,128,63,0.3), transparent 60%), linear-gradient(200deg, #241b0f, #121412)",
    },
    {
      label: "Ancient Bell",
      gradient:
        "radial-gradient(circle at 50% 45%, rgba(95,69,39,0.4), transparent 65%), linear-gradient(180deg, #1c140b, #121412)",
    },
  ],
  woodwinds: [
    {
      label: "Cloud Forest",
      gradient:
        "radial-gradient(circle at 30% 25%, rgba(28,74,53,0.4), transparent 60%), linear-gradient(160deg, #16241a, #0a0d0a)",
    },
    {
      label: "Waterfall",
      gradient:
        "radial-gradient(circle at 70% 30%, rgba(169,198,204,0.2), transparent 60%), linear-gradient(200deg, #14201a, #0a0d0a)",
    },
    {
      label: "Carved Wood",
      gradient:
        "radial-gradient(circle at 50% 60%, rgba(76,90,60,0.4), transparent 65%), linear-gradient(180deg, #191f14, #0a0d0a)",
    },
  ],
};

export default function Gallery({
  accent,
  image,
  name,
}: {
  accent: Accent;
  image: string;
  name: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      <Reveal className="col-span-2 row-span-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-crystal-white/10">
          <Image src={image} alt={name} fill sizes="50vw" className="object-cover" />
        </div>
      </Reveal>
      {swatches[accent].map((s, i) => (
        <Reveal key={s.label} delay={i * 80}>
          <div
            className="relative flex aspect-square items-end overflow-hidden rounded-sm border border-crystal-white/10 p-3"
            style={{ background: s.gradient }}
          >
            {s.image && (
              <Image
                src={s.image}
                alt={s.label}
                fill
                sizes="25vw"
                className="object-cover"
              />
            )}
            <span className="relative z-10 text-[11px] uppercase tracking-[0.15em] text-crystal-white/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.8)]">
              {s.label}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
