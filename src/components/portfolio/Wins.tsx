import { SectionHeading, Reveal } from "./Section";
import { achievements, certifications } from "./data";
import { Award, BadgeCheck, Trophy } from "lucide-react";

export function Wins() {
  return (
    <section id="wins" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Achievements & Certifications"
          title={
            <>
              Proud little <span className="text-gradient">wins</span> 🏆
            </>
          }
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 flex items-center gap-2 font-display text-xl font-bold">
              <Trophy className="h-5 w-5 text-primary" /> Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((a, i) => (
                <Reveal key={a.title} delay={i * 0.06}>
                  <div className="flex items-start gap-3 rounded-2xl glass p-4 shadow-soft">
                    <Award className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold">{a.title}</p>
                      <p className="text-sm text-muted-foreground">{a.detail}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 flex items-center gap-2 font-display text-xl font-bold">
              <BadgeCheck className="h-5 w-5 text-primary" /> Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.06}>
                  <div className="flex items-center gap-3 rounded-2xl glass p-4 shadow-soft">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                      <BadgeCheck className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold">{c.title}</p>
                      <p className="text-sm text-muted-foreground">{c.by}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
