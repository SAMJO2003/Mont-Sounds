"use client";

import { useRef, useState } from "react";

export default function TrailerPlayer({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group relative aspect-video overflow-hidden rounded-sm border border-crystal-white/10 bg-stone-black">
      <video
        ref={videoRef}
        src={src}
        controls={playing}
        playsInline
        className="h-full w-full object-contain"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <button
          type="button"
          aria-label="Play trailer"
          onClick={() => videoRef.current?.play()}
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-forest-black/40 transition-colors hover:bg-forest-black/55"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-crystal-white/30 text-crystal-white transition-all group-hover:scale-105 group-hover:border-crystal-cyan group-hover:text-crystal-cyan">
            <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="font-display text-lg italic text-crystal-white/70">
            {label}
          </span>
        </button>
      )}
    </div>
  );
}
