import { SectionHeading, Reveal } from "./Section";
import { projects } from "./data";

export function Projects() {
  return (
    <section id="projects" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title={<>Things I've <span className="text-gradient">built</span></>}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-3xl glass p-7 shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-glow">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-20 blur-2xl transition-opacity group-hover:opacity-40" />
                <div className="text-4xl">{p.emoji}</div>
                <span className="mt-3 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {p.tag}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-foreground/70">
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