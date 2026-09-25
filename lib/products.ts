// Toggle this to false while promoting the site pre-launch (visitors can browse
// and listen to demos, but the buy button is disabled). Flip back to true once
// checkout/delivery is fully wired up and ready for real sales.
export const SALES_ENABLED = true;

// Launch discount — auto-applied at checkout, no code needed. Mirrors the
// expiration already set on the discount itself in Paddle (Catalog →
// Discounts → "Launch price - first month"), so if this ever isn't updated
// in time, Paddle simply stops honoring the discount id and the checkout
// falls back to full price.
export const LAUNCH_DISCOUNT_ID = "dsc_01m2m7mkx9mmjfzf08bnrz6gmp";
export const LAUNCH_DISCOUNT_ENDS = new Date("2026-10-15T23:59:00Z");
export const LAUNCH_PRICE = 29;

export function isLaunchDiscountActive(): boolean {
  return new Date() < LAUNCH_DISCOUNT_ENDS;
}

export type DemoTrack = {
  id: string;
  title: string;
  category: string;
  duration: string;
  src?: string;
  // Main credit shown under the title; composerRealName is a smaller
  // secondary line (e.g. artist name first, real name below).
  composer?: string;
  composerRealName?: string;
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
  paddlePriceId: string;
  // Temporary manual delivery while sales are too low for Pulse Downloader's
  // automated hosting. Must be a *direct-download* Google Drive link:
  // https://drive.google.com/uc?export=download&id=FILE_ID
  // (right-click the file in Drive → "Share" → "Anyone with the link", then
  // copy the file id out of the normal share link and build the URL above).
  driveFileUrl: string;
  image: string;
  heroImage?: string;
  screenshot?: string;
  trailerUrl?: string;
  accent: "crystal" | "bronze" | "woodwinds";
  origin: string;
  description: string;
  longDescription: string[];
  features: string[];
  requirements: string[];
  demos: DemoTrack[];
  faq: FaqItem[];
};

export type ComingSoonLibrary = {
  slug: string;
  name: string;
  tagline: string;
  accent: "bronze" | "woodwinds" | "wings";
  background: string;
  daw: string;
};

const crystalSoundsDemos: DemoTrack[] = [
  {
    id: "crystal-cave-of-mirrors",
    title: "The Cave of Mirrors",
    category: "Featured Composer",
    duration: "0:44",
    src: "/audio/crystal-cave-of-mirrors.m4a",
    composer: "ShermanPlays",
    composerRealName: "Lucas Sherman",
  },
  {
    id: "crystal-echo-cave",
    title: "Crystal Echo Cave",
    category: "Atmospheres",
    duration: "1:18",
    src: "/audio/crystal-echo-cave.m4a",
    composer: "Santiago Agramont",
  },
  {
    id: "crystal-fracture-crystals",
    title: "Fracture Crystals",
    category: "Textures",
    duration: "1:17",
    src: "/audio/crystal-fracture-crystals.m4a",
    composer: "Santiago Agramont",
  },
  {
    id: "crystal-glass-tink",
    title: "Glass Tink",
    category: "Playable Instruments",
    duration: "1:44",
    src: "/audio/crystal-glass-tink.m4a",
    composer: "Santiago Agramont",
  },
];

export const products: Product[] = [
  {
    slug: "crystal-sounds",
    name: "Crystal Sounds",
    tagline: "The music hidden inside light and ice",
    price: 49,
    paddlePriceId: "pri_01m0kp5gt63pyfegf89nacjfqh",
    driveFileUrl: "https://drive.google.com/uc?export=download&id=1U5AAO01N_O8UVGZApRjNkqBxtiCDcUxD",
    image: "/images/crystal-sounds-background.png",
    heroImage: "/images/crystal-sounds-background.png",
    screenshot: "/images/crystal-sounds-daw.png",
    trailerUrl: "/videos/crystal-sounds-trailer.mp4",
    accent: "crystal",
    origin: "Recorded from crystal goblets struck, rubbed and shattered by hand, layered with natural elemental textures",
    description:
      "A cinematic collection crafted from real crystal goblets — struck, rubbed and shattered by hand — layered with natural elemental textures: falling rocks, cracking ice, wind, colliding crystals and running water.",
    longDescription: [
      "Crystal Sounds began with a single struck goblet that rang out and refused to fade. That resonance — thin, pure, endlessly sustaining — became the seed of this entire library.",
      "Every layer was captured from real crystal goblets — struck, rubbed and shattered by hand — and layered with natural elemental textures: falling rocks, cracking ice, wind, colliding crystals and running water. Nothing here is synthesized from nothing; every texture began as a vibration in the physical world.",
      "The result is an instrument for moments of clarity and wonder — for scenes where light seems to make a sound of its own.",
    ],
    features: [
      "12 deep-sampled instruments built from crystal goblets — struck, rubbed and shattered by hand",
      "Elemental texture layers: falling rocks, cracking ice, wind, colliding crystals and running water",
      "Custom Kontakt UI with Attack, Release, Sustain and Decay performance macros",
      "Built-in Texture, Delay and Reverb effects macros for instant sound design",
    ],
    requirements: [
      "Kontakt 7 or later — Full version required (runs in Demo mode on Kontakt Player)",
      "16 GB RAM recommended",
      "Free disk space for the full sample content",
      "macOS 12+ or Windows 10+",
    ],
    demos: crystalSoundsDemos,
    faq: [
      {
        q: "Do I need the full version of Kontakt?",
        a: "Yes. Crystal Sounds requires the full version of Kontakt 7 or later — it will run in Demo mode (time-limited, with audio interruptions) in the free Kontakt Player.",
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
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductByPriceId(priceId: string): Product | undefined {
  return products.find((p) => p.paddlePriceId === priceId);
}

export const comingSoon: ComingSoonLibrary[] = [
  {
    slug: "bronze-sounds",
    name: "Bronze Sounds",
    tagline:
      "Percussive metal — struck, scraped and bent by hand in an artisan metal workshop, layered with sparks, fire and blowtorch wind.",
    accent: "bronze",
    background: "/images/bronze-sounds-background.png",
    daw: "/images/bronze-sounds-daw.png",
  },
  {
    slug: "wood-and-wind-sounds",
    name: "Wood and Wind Sounds",
    tagline:
      "Ethnic flutes, pan pipes and wooden percussion, recorded in the forest to capture their natural, indigenous textures.",
    accent: "woodwinds",
    background: "/images/wood-and-wind-sounds-background.png",
    daw: "/images/wood-and-wind-sounds-daw.png",
  },
  {
    slug: "wings-and-whispers-sounds",
    name: "Wings & Whispers Sounds",
    tagline:
      "Costa Rican birdsong and organic bird sounds, recorded alongside the natural textures of their habitat.",
    accent: "wings",
    background: "/images/wings-and-whispers-sounds-background.png",
    daw: "/images/wings-and-whispers-sounds-daw.png",
  },
];
