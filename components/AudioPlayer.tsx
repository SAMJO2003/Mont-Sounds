"use client";

import { useRef, useState } from "react";
import type { DemoTrack } from "@/lib/products";

function Waveform({ playing }: { playing: boolean }) {
  const bars = [4, 9, 6, 13, 8, 15, 7, 11, 5, 10, 6, 14, 8, 12, 5, 9];
  return (
    <div className="flex h-6 items-center gap-[3px]">
      {bars.map((h, i) => (
        <span
          key={i}
          className="waveform-bar w-[2.5px] rounded-full bg-crystal-cyan/70"
          style={{
            height: `${h}px`,
            transform: playing ? `scaleY(${0.6 + (i % 3) * 0.25})` : "scaleY(0.45)",
            opacity: playing ? 1 : 0.4,
            transitionDelay: `${i * 25}ms`,
          }}
        />
      ))}
    </div>
  );
}

export default function AudioPlayer({ demos }: { demos: DemoTrack[] }) {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const categories = Array.from(new Set(demos.map((d) => d.category)));

  const handleToggle = (track: DemoTrack) => {
    const isPlaying = playingId === track.id;

    if (isPlaying) {
      audioRef.current?.pause();
      setPlayingId(null);
      return;
    }

    if (track.src) {
      if (audioRef.current) {
        audioRef.current.src = track.src;
        audioRef.current.play();
      }
    } else {
      audioRef.current?.pause();
    }
    setPlayingId(track.id);
  };

  return (
    <div className="card-glass rounded-sm p-6 md:p-8">
      <audio
        ref={audioRef}
        onEnded={() => setPlayingId(null)}
        className="hidden"
      />
      <p className="mb-6 text-xs uppercase tracking-[0.25em] text-crystal-white/40">
        Demo tracks · preview mode — full audio available after purchase
      </p>
      <div className="divide-y divide-crystal-white/8">
        {categories.map((category) => (
          <div key={category} className="py-4 first:pt-0 last:pb-0">
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-ancient-bronze">
              {category}
            </p>
            {demos
              .filter((d) => d.category === category)
              .map((track) => {
                const isPlaying = playingId === track.id;
                return (
                  <button
                    key={track.id}
                    onClick={() => handleToggle(track)}
                    className="flex w-full items-center gap-4 rounded-sm px-2 py-3 text-left transition-colors hover:bg-crystal-white/5"
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isPlaying
                          ? "border-crystal-cyan text-crystal-cyan"
                          : "border-crystal-white/25 text-crystal-white/70"
                      }`}
                    >
                      {isPlaying ? (
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                          <rect x="6" y="5" width="4" height="14" />
                          <rect x="14" y="5" width="4" height="14" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </span>

                    <span className="flex-1 truncate text-sm text-crystal-white/85">
                      {track.title}
                    </span>

                    <Waveform playing={isPlaying} />

                    <span className="w-10 shrink-0 text-right text-xs tabular-nums text-crystal-white/40">
                      {track.duration}
                    </span>
                  </button>
                );
              })}
          </div>
        ))}
      </div>
    </div>
  );
}
