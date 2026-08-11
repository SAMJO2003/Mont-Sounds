import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-crystal-white/10 bg-stone-black">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative block h-9 w-9 shrink-0">
                <Image
                  src="/images/mont-logo.png"
                  alt="Mont Sounds"
                  fill
                  sizes="36px"
                  className="mask-fade-radial object-contain opacity-80"
                />
              </span>
              <span className="font-display text-lg tracking-[0.15em]">MONT SOUNDS</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-crystal-white/55">
              Boutique cinematic sample libraries recorded across the landscapes
              of Costa Rica.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-crystal-white/70">
              About
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-crystal-white/55">
              <li>
                <Link href="/#about" className="hover:text-crystal-cyan">
                  The Founder
                </Link>
              </li>
              <li>
                <Link href="/#philosophy" className="hover:text-crystal-cyan">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link href="/#coming-soon" className="hover:text-crystal-cyan">
                  Coming Soon
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-crystal-white/70">
              Libraries
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-crystal-white/55">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/libraries/${p.slug}`} className="hover:text-crystal-cyan">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-crystal-white/70">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-crystal-white/55">
              <li>
                <a href="mailto:hello@montsounds.com" className="hover:text-crystal-cyan">
                  hello@montsounds.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-crystal-cyan">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-crystal-cyan">
                  YouTube
                </a>
              </li>
            </ul>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-crystal-white/10 pt-6 text-xs text-crystal-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} Mont Sounds. All rights reserved.</p>
          <p>Recorded &amp; crafted in Costa Rica.</p>
        </div>
      </div>
    </footer>
  );
}
