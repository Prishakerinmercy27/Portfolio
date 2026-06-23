const sparkles = [
  { top: "12%", left: "18%", d: "0s", s: 8 },
  { top: "22%", left: "82%", d: "0.6s", s: 12 },
  { top: "48%", left: "8%", d: "1.1s", s: 10 },
  { top: "68%", left: "90%", d: "0.3s", s: 14 },
  { top: "82%", left: "26%", d: "1.6s", s: 9 },
  { top: "38%", left: "55%", d: "0.9s", s: 7 },
  { top: "60%", left: "44%", d: "1.3s", s: 11 },
];

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-soft" />
      <div className="absolute inset-0 bg-aurora opacity-80" />
      <div className="animate-blob absolute -left-32 top-10 h-96 w-96 rounded-full bg-pink/40 blur-3xl" />
      <div className="animate-blob absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-violet/30 blur-3xl [animation-delay:-6s]" />
      <div className="animate-blob absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-cyan/30 blur-3xl [animation-delay:-12s]" />
      {sparkles.map((sp, i) => (
        <span
          key={i}
          className="animate-sparkle absolute text-primary"
          style={{ top: sp.top, left: sp.left, animationDelay: sp.d, fontSize: sp.s }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}