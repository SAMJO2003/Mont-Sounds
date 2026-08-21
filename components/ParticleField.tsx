const PARTICLES = [
  { left: "6%", top: "18%", size: 2, duration: "21s", delay: "-1s" },
  { left: "17%", top: "73%", size: 4, duration: "38s", delay: "-4s" },
  { left: "26%", top: "31%", size: 2, duration: "19s", delay: "-14s" },
  { left: "39%", top: "84%", size: 3, duration: "27s", delay: "-2s" },
  { left: "51%", top: "9%", size: 2, duration: "44s", delay: "-21s" },
  { left: "63%", top: "58%", size: 4, duration: "23s", delay: "-7s" },
  { left: "74%", top: "22%", size: 2, duration: "33s", delay: "-16s" },
  { left: "83%", top: "71%", size: 3, duration: "20s", delay: "-9s" },
  { left: "92%", top: "37%", size: 2, duration: "41s", delay: "-27s" },
  { left: "33%", top: "6%", size: 3, duration: "25s", delay: "-19s" },
  { left: "58%", top: "89%", size: 2, duration: "36s", delay: "-3s" },
  { left: "10%", top: "47%", size: 3, duration: "29s", delay: "-24s" },
];

export default function ParticleField({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="god-rays absolute inset-0 animate-shimmer" />
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle animate-drift"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
