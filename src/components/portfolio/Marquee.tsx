import { profile } from "./data";

export function Marquee() {
  const items = [...profile.taglines, ...profile.taglines];
  return (
    <div className="relative overflow-hidden border-y border-border bg-gradient-primary py-3">
      <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
        {items.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground"
          >
            {t} <span className="opacity-70">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}