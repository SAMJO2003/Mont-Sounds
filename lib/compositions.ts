// Santiago's original compositions (the "Compositions" section, separate
// from the sample libraries). A piece can optionally sell its sheet music in
// several formats (e.g. PDF only, or a bundle with MIDI + audio); each format
// is its own Paddle price and its own delivered file.
//
// Never put franchise or character names from other works in any of these
// fields (titles, copy, alt text, SEO) — only the official piece title.

export type SheetMusicOption = {
  id: string;
  label: string;
  price: number;
  // Leave empty until the Paddle price exists — the buy button stays
  // disabled ("Coming Soon") while this is blank.
  paddlePriceId: string;
  // Same direct-download format as library products:
  // https://drive.google.com/uc?export=download&id=FILE_ID
  driveFileUrl: string;
  includes: string[];
  bestValue?: boolean;
};

export type Composition = {
  slug: string;
  title: string;
  subtitle: string;
  composer: string;
  shortDescription: string;
  longDescription: string[];
  previewImage: string;
  previewWidth: number;
  previewHeight: number;
  previewAlt: string;
  youtubeId?: string;
  specs: { label: string; value: string }[];
  license: string;
  options: SheetMusicOption[];
  seo: { title: string; description: string; keywords: string[] };
};

export const compositions: Composition[] = [
  {
    slug: "a-heart-torn-between-two-worlds",
    title: "A Heart Torn Between Two Worlds",
    subtitle: "for solo piano — by Santiago Agramont",
    composer: "Santiago Agramont",
    shortDescription:
      "The original piano theme from Santiago Agramont's viral dark-fantasy reel, now arranged for solo piano. Melancholic, flowing and expressive — in C minor, 3/4.",
    longDescription: [
      "A Heart Torn Between Two Worlds is an original composition by Santiago Agramont, born from a dark-fantasy romance and heard by hundreds of thousands of people on Instagram and YouTube.",
      "This edition presents the piano part as a complete solo piece: a singing melody over a gentle, rocking left-hand pattern, a tender middle section, and a quiet ending that fades into silence.",
      "Clean, professionally engraved notation with dynamics, tempo markings and pedal indications. Ideal for intermediate pianists who love cinematic and emotional music.",
    ],
    previewImage: "/images/compositions/a-heart-torn-between-two-worlds-preview.jpg",
    previewWidth: 1487,
    previewHeight: 2105,
    previewAlt:
      "First page of the sheet music for A Heart Torn Between Two Worlds by Santiago Agramont",
    youtubeId: "hyZSgP_OX9A",
    specs: [
      { label: "Instrument", value: "Solo piano" },
      { label: "Key", value: "C minor" },
      { label: "Time signature", value: "3/4" },
      { label: "Tempo", value: "♩ = 130, Con moto, espressivo" },
      { label: "Length", value: "4 pages, 100 bars" },
      { label: "Level", value: "Easy–Intermediate" },
      { label: "Format", value: "Digital PDF, instant download" },
    ],
    license:
      "Personal use license. You may print this score for your own use, perform it, and post performance videos online, as long as you credit \"Santiago Agramont – A Heart Torn Between Two Worlds\" and link to montsounds.com. Redistributing, sharing or reselling the PDF or MIDI is not permitted. © 2026 Santiago Agramont. All rights reserved.",
    options: [
      {
        id: "pdf",
        label: "Sheet Music (PDF)",
        price: 3.99,
        paddlePriceId: "pri_01m71kjxd71nfdx6rkayjnx481",
        driveFileUrl: "https://drive.google.com/uc?export=download&id=1cXjtWQYmkS50MDW7NzX3WryamJkBNsuo",
        includes: ["4-page PDF score (100 bars)"],
      },
      {
        id: "bundle",
        label: "Bundle",
        price: 6.99,
        paddlePriceId: "pri_01m71kmgpfswwn0hqb5f26c12q",
        driveFileUrl: "https://drive.google.com/uc?export=download&id=1YGzAq6IDdd5FDFDjK2w-JTplciwTgEJy",
        includes: ["4-page PDF score (100 bars)", "Piano MIDI file", "Reference audio of the full piece"],
        bestValue: true,
      },
    ],
    seo: {
      title: "A Heart Torn Between Two Worlds – Piano Sheet Music | Mont Sounds",
      description:
        "Original cinematic piano sheet music by Santiago Agramont. Emotional dark-fantasy theme for solo piano in C minor. Instant PDF download.",
      keywords: [
        "piano sheet music",
        "cinematic piano",
        "emotional piano",
        "dark fantasy music",
        "original composition",
        "intermediate piano",
        "C minor",
        "film score piano",
        "Santiago Agramont",
      ],
    },
  },
];

export function getComposition(slug: string): Composition | undefined {
  return compositions.find((c) => c.slug === slug);
}
