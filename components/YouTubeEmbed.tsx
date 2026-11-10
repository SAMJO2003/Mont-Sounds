"use client";

import { useState } from "react";

// Click-to-load YouTube player: nothing from YouTube (and none of its cookies)
// loads until the visitor presses play, and then only via the
// privacy-enhanced youtube-nocookie.com domain.
export default function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  const [active, setActive] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-crystal-white/10 bg-stone-black">
      {active ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            // Full-HD thumbnail; older/low-res uploads don't have one, so fall
            // back to the 480px version if it 404s.
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            onError={(e) => {
              const img = e.currentTarget;
              if (!img.src.includes("hqdefault")) img.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
            }}
            alt=""
            className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-crystal-white/40 bg-forest-black/60 text-crystal-white transition-all group-hover:scale-105 group-hover:border-crystal-cyan group-hover:text-crystal-cyan">
              <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-black/90 to-transparent p-4 text-left font-display text-lg italic text-crystal-white/85">
            {title}
          </span>
        </button>
      )}
    </div>
  );
}
