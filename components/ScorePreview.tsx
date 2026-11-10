"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ScorePreview({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Enlarge sheet music preview"
        className="group relative block w-full overflow-hidden rounded-sm border border-crystal-white/10 bg-[#f7f5f0] transition-colors hover:border-crystal-cyan/40"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(min-width: 768px) 420px, 100vw"
          className="h-auto w-full"
          priority
        />
        <span className="absolute bottom-3 right-3 rounded-full bg-forest-black/80 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-crystal-white/80">
          Tap to enlarge
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-forest-black/95 p-4 md:p-10"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close preview"
            className="fixed right-4 top-4 z-[61] flex h-10 w-10 items-center justify-center rounded-full border border-crystal-white/30 text-crystal-white hover:border-crystal-cyan hover:text-crystal-cyan"
          >
            ✕
          </button>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(min-width: 1024px) 900px, 100vw"
            className="h-auto w-full max-w-3xl bg-[#f7f5f0]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
