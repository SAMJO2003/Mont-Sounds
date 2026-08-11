"use client";

export default function NewsletterForm() {
  return (
    <form
      className="mt-5 flex max-w-xs gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Newsletter email"
        className="w-full rounded-full border border-crystal-white/15 bg-transparent px-4 py-2 text-xs text-crystal-white placeholder:text-crystal-white/35 focus:border-crystal-cyan focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full border border-ancient-bronze/60 px-4 py-2 text-xs uppercase tracking-wider hover:border-crystal-cyan hover:text-crystal-cyan"
      >
        Join
      </button>
    </form>
  );
}
