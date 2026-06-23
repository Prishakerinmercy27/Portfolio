import { SectionHeading, Reveal } from "./Section";
import { skillGroups } from "./data";

export function Skills() {
  return (
    <section id="skills" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Toolkit"
          title={
            <>
              Skills that make me <span className="text-gradient">job-ready</span>
            </>
          }
        />
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl glass p-6 shadow-soft">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-2xl">{g.emoji}</span>
                  <h3 className="font-display text-xl font-bold">{g.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-gradient-primary hover:text-primary-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
