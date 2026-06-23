import { SectionHeading, Reveal } from "./Section";
import { timeline } from "./data";
import { Briefcase, GraduationCap } from "lucide-react";

export function Journey() {
  return (
    <section id="journey" className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience & Education"
          title={
            <>
              My <span className="text-gradient">journey</span> so far
            </>
          }
        />
        <div className="relative space-y-6 before:absolute before:left-4 before:top-2 before:h-full before:w-0.5 before:bg-gradient-primary md:before:left-1/2">
          {timeline.map((item, i) => {
            const Icon = item.type === "Education" ? GraduationCap : Briefcase;
            const left = i % 2 === 0;
            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <div
                  className={`relative flex md:w-1/2 ${left ? "md:pr-8" : "md:ml-auto md:pl-8"}`}
                >
                  <span
                    className={`absolute left-4 top-5 z-10 -translate-x-1/2 ${
                      left ? "md:left-full" : "md:left-0"
                    } flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="ml-10 w-full rounded-3xl glass p-5 shadow-soft md:ml-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                        {item.type}
                      </span>
                      <span className="text-xs font-semibold text-primary">{item.period}</span>
                    </div>
                    <h3 className="mt-2 font-display text-lg font-bold">{item.title}</h3>
                    <p className="text-sm font-medium text-muted-foreground">{item.org}</p>
                    <ul className="mt-2 space-y-1">
                      {item.points.map((p) => (
                        <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-primary">♥</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
