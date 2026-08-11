export type DemoTrack = {
  id: string;
  title: string;
  category: string;
  duration: string;
  src?: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  heroImage?: string;
  screenshot?: string;
  accent: "crystal" | "bronze" | "woodwinds";
  origin: string;
  description: string;
  longDescription: string[];
  features: string[];
  requirements: string[];
  demos: DemoTrack[];
  faq: FaqItem[];
};

const demoCategories = [
  "Field Recordings",
  "Atmospheres",
  "Textures",
  "Pads",
  "Playable Instruments",
  "One Shots",
] as const;

function buildDemos(prefix: string): DemoTrack[] {
  const titles: Record<(typeof demoCategories)[number], string> = {
    "Field Recordings": `${prefix} — Source Recording`,
    Atmospheres: `${prefix} — Distant Atmosphere`,
    Textures: `${prefix} — Resonant Texture`,
    Pads: `${prefix} — Sustained Pad`,
    "Playable Instruments": `${prefix} — Solo Performance`,
    "One Shots": `${prefix} — Impact & Hits`,
  };
  const durations = ["1:42", "2:15", "1:58", "2:40", "1:33", "0:47"];
  return demoCategories.map((category, i) => ({
    id: `${prefix.toLowerCase()}-${i}`,
    title: titles[category],
    category,
    duration: durations[i],
  }));
}

export const products: Product[] = [
  {
    slug: "crystal-sounds",
    name: "Crystal Sounds",
    tagline: "The music hidden inside light and ice",
    price: 40,
    image: "/images/crystal-sounds.png",
    heroImage: "/images/crystal-sounds-hero.png",
    screenshot: "/images/crystal-sounds-instrument.png",
    accent: "crystal",
    origin: "Recorded from struck, rubbed and shattered crystal goblets, carved crystal bottles and cracking ice",
    description:
      "A cinematic collection crafted from struck and rubbed crystal goblets, glass-flute bottles and cracking ice, capturing the delicate beauty of light reflected through crystal.",
    longDescription: [
      "Crystal Sounds began with a single struck goblet that rang out and refused to fade. That resonance — thin, pure, endlessly sustaining — became the seed of this entire library.",
      "Every layer was captured from real crystal goblets struck, rubbed and shattered by hand, crystal bottles carved and played as glass flutes, and ice recorded as it cracked apart. Natural textures — flowing water, colliding rocks — round out the palette. Nothing here is synthesized from nothing; every texture began as a vibration in the physical world.",
      "The result is an instrument for moments of clarity and wonder — for scenes where light seems to make a sound of its own.",
    ],
    features: [
      "20 deep-sampled crystal instruments",
      "40+ evolving pads built from bowed glass resonance",
      "Multi-mic'd recordings of cracking ice and natural textures",
      "Custom Kontakt UI with curve, envelope and reverb macros",
      "Round-robin and velocity layers for natural performance",
      "Includes dry and processed convolution reverb variants",
    ],
    requirements: [
      "Kontakt 7 or later (Player compatible, free)",
      "16 GB RAM recommended",
      "4.2 GB free disk space",
      "macOS 12+ or Windows 10+",
    ],
    demos: buildDemos("Crystal").map((d) =>
      d.category === "Field Recordings"
        ? {
            ...d,
            title: "Crystal Drums",
            duration: "1:39",
            src: "/audio/crystal-drums.m4a",
          }
        : d
    ),
    faq: [
      {
        q: "Do I need the full version of Kontakt?",
        a: "No. Crystal Sounds runs in the free Kontakt Player using Native Instruments' licensing.",
      },
      {
        q: "Are the field recordings included as raw files?",
        a: "Yes — the raw, unprocessed source recordings are included alongside the finished instruments.",
      },
      {
        q: "Can I use this in commercial media?",
        a: "Yes. A single-user license covers use in any commercial composition, game, or media project.",
      },
    ],
  },
  {
    slug: "bronze-sounds",
    name: "Bronze Sounds",
    tagline: "Ancient metal, forged into music",
    price: 40,
    image: "/images/bronze-sounds.png",
    accent: "bronze",
    origin: "Recorded at a working forge, hammer on bronze, fire and ancient bells",
    description:
      "Ancient bronze transformed into expressive instruments through recordings of forging, hammering, fire, resonance and handcrafted metal textures inspired by Celtic craftsmanship.",
    longDescription: [
      "Bronze Sounds was recorded inside a working forge — the same kind of fire and hammer that has shaped bronze for thousands of years. Every strike, scrape and resonant ring was captured as it happened, unrehearsed.",
      "We recorded hammers on hot and cold bronze, coals settling in a firepit, and cast bells left to ring to complete silence. Those recordings were then shaped into playable instruments that keep the warmth and imperfection of the original metal.",
      "This library is built for themes of craft, ritual and ancient strength — anything that needs the sound of something built by hand, not by machine.",
    ],
    features: [
      "96 hammered and resonant bronze instruments",
      "Fire and coal textures for tension and atmosphere",
      "Deep bell and gong hits with natural long tails",
      "Rhythmic hammer-on-metal percussion kits",
      "Celtic-inspired tuned metal scales",
      "Custom Kontakt UI with curve, envelope and reverb macros",
    ],
    requirements: [
      "Kontakt 7 or later (Player compatible, free)",
      "16 GB RAM recommended",
      "3.8 GB free disk space",
      "macOS 12+ or Windows 10+",
    ],
    demos: buildDemos("Bronze"),
    faq: [
      {
        q: "Do I need the full version of Kontakt?",
        a: "No. Bronze Sounds runs in the free Kontakt Player using Native Instruments' licensing.",
      },
      {
        q: "Is this tuned to a specific scale?",
        a: "Core bells and tuned metal instruments are mapped chromatically, with a curated set of Celtic-inspired scale presets available from the UI.",
      },
      {
        q: "Can I use this in commercial media?",
        a: "Yes. A single-user license covers use in any commercial composition, game, or media project.",
      },
    ],
  },
  {
    slug: "woodwinds-sounds",
    name: "Woodwinds Sounds",
    tagline: "The forest, breathing through wood",
    price: 40,
    image: "/images/woodwinds-sounds.png",
    accent: "woodwinds",
    origin: "Recorded in Costa Rican cloud forest, alongside rivers and waterfalls",
    description:
      "Organic woodwinds blended with handcrafted wooden instruments, forests, waterfalls and the living resonance of Costa Rican nature.",
    longDescription: [
      "Woodwinds Sounds was recorded at the edge of a cloud forest waterfall, where handcrafted flutes and pan pipes were played into open, living air rather than a studio booth.",
      "Every instrument was chosen for its wooden, breath-driven character — bamboo flutes, carved wooden whistles, reed pipes — and layered with the forest itself: rain, water, wind through leaves, distant birdsong.",
      "The result feels less like a sample library and more like a living forest that happens to know how to play a melody.",
    ],
    features: [
      "80+ deep-sampled wooden woodwind instruments",
      "Legato and true-performance scripting for natural phrasing",
      "Layered forest, river and waterfall atmospheres",
      "Breath and key-noise controls for realism",
      "Field-recorded bird and rain textures as bonus one-shots",
      "Custom Kontakt UI with curve, envelope and reverb macros",
    ],
    requirements: [
      "Kontakt 7 or later (Player compatible, free)",
      "16 GB RAM recommended",
      "4.6 GB free disk space",
      "macOS 12+ or Windows 10+",
    ],
    demos: buildDemos("Woodwinds"),
    faq: [
      {
        q: "Do I need the full version of Kontakt?",
        a: "No. Woodwinds Sounds runs in the free Kontakt Player using Native Instruments' licensing.",
      },
      {
        q: "Does it include the ambient forest recordings separately?",
        a: "Yes — atmospheres and field recordings are included as their own playable category alongside the instruments.",
      },
      {
        q: "Can I use this in commercial media?",
        a: "Yes. A single-user license covers use in any commercial composition, game, or media project.",
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const comingSoon = [
  { name: "Stone Sounds", note: "Carved rock, cave resonance & ancient weight" },
  { name: "Rain Sounds", note: "Storm textures across the cloud forest canopy" },
  { name: "Volcano Sounds", note: "Deep earth resonance & volcanic stone" },
  { name: "Wing Sounds", note: "Feather, flight & the movement of birds" },
  { name: "Leaf Sounds", note: "Rustling canopy & the language of the forest floor" },
  { name: "Ocean Sounds", note: "Pacific tides along the Costa Rican coast" },
];
