const PARTICLES = [
  { left: "8%", top: "20%", size: 3, duration: "24s", delay: "0s" },
  { left: "18%", top: "70%", size: 2, duration: "30s", delay: "-4s" },
  { left: "27%", top: "35%", size: 4, duration: "26s", delay: "-9s" },
  { left: "41%", top: "80%", size: 2, duration: "22s", delay: "-2s" },
  { left: "53%", top: "15%", size: 3, duration: "28s", delay: "-13s" },
  { left: "64%", top: "55%", size: 2, duration: "25s", delay: "-6s" },
  { left: "72%", top: "25%", size: 4, duration: "32s", delay: "-16s" },
  { left: "81%", top: "68%", size: 3, duration: "27s", delay: "-8s" },
  { left: "90%", top: "40%", size: 2, duration: "23s", delay: "-11s" },
  { left: "35%", top: "10%", size: 2, duration: "29s", delay: "-19s" },
  { left: "60%", top: "85%", size: 3, duration: "26s", delay: "-3s" },
  { left: "12%", top: "50%", size: 2, duration: "31s", delay: "-14s" },
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
