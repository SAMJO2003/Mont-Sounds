import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="relative bg-forest-black pt-36 pb-28 md:pt-44 md:pb-36">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-crystal-cyan/80">
            Legal
          </p>
          <h1 className="mt-4 font-display text-4xl italic text-crystal-white md:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-crystal-white/40">
            Última actualización: {updated}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 space-y-8 text-sm leading-relaxed text-crystal-white/70 [&_h2]:font-display [&_h2]:text-xl [&_h2]:italic [&_h2]:text-crystal-white [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
            {children}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
