import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Journey } from "@/components/portfolio/Journey";
import { Projects } from "@/components/portfolio/Projects";
import { Wins } from "@/components/portfolio/Wins";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prisha Kerin Mercy D | AI & Technical Support Engineer" },
      {
        name: "description",
        content:
          "Animated portfolio of Prisha Kerin Mercy D — AI prompting specialist, Ui/UX & front-end developer and UiPath RPA explorer seeking technical support and IT communication roles.",
      },
      { property: "og:title", content: "Prisha Kerin Mercy D | AI & Technical Support Engineer" },
      {
        property: "og:description",
        content: "AI-driven web apps, RPA automation, UI/UX and technical support — see my work.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Journey />
        <Projects />
        <Wins />
        <Contact />
      </main>
    </div>
  );
}
