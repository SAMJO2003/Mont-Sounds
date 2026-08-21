"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { products } from "@/lib/products";

const links = [
  { href: "/#philosophy", label: "Philosophy" },
  { href: "/#libraries", label: "Libraries" },
  { href: "/#about", label: "About" },
  { href: "/#coming-soon", label: "Coming Soon" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-forest-black/85 backdrop-blur-md border-b border-crystal-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="relative block h-10 w-10 shrink-0">
            <Image
              src="/images/mont-logo.png"
              alt="Mont Sounds"
              fill
              sizes="40px"
              className="mask-fade-radial object-contain opacity-90 transition-opacity group-hover:opacity-100"
              priority
            />
          </span>
          <span className="font-display text-xl tracking-[0.15em] text-crystal-white">
            MONT SOUNDS
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-[0.18em] text-crystal-white/75 transition-colors hover:text-crystal-cyan"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/#libraries" className="btn btn-outline !py-2">
            Explore Libraries
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-crystal-white transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-crystal-white transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-px w-6 bg-crystal-white transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-crystal-white/10 bg-forest-black/95 px-6 py-6 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base uppercase tracking-[0.18em] text-crystal-white/80"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-2 border-t border-crystal-white/10 pt-4">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/libraries/${p.slug}`}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-crystal-white/60"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
