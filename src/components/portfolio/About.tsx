import { SectionHeading, Reveal } from "./Section";
import { Heart, Cpu, MessageCircleHeart, Wand2 } from "lucide-react";

const highlights = [
  {
    icon: Wand2,
    title: "AI & Prompting",
    text: "Crafting precise prompts and using AI tools to ship smart, AI-driven features fast.",
  },
  {
    icon: Cpu,
    title: "RPA Automation",
    text: "UiPath-certified — automating repetitive workflows so teams focus on what matters.",
  },
  {
    icon: Heart,
    title: "UI/UX & Front-end",
    text: "Designing pretty, accessible interfaces and building them with React & Figma.",
  },
  {
    icon: MessageCircleHeart,
    title: "Technical Support",
    text: "Clear, friendly communicator who loves solving problems and helping users succeed.",
  },
];

export function About() {
  return (
    <section id="about" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About me" title={<>A little about <span className="text-gradient">me</span></>} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.08}>
              <div className="group h-full rounded-3xl glass p-6 shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-glow">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow transition-transform group-hover:scale-110">
                  <h.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}