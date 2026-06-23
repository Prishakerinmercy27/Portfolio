import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import prisha from "@/assets/prisha-photo.jpeg";
import { profile, stats } from "./data";

function TaglineRotator() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % profile.taglines.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-block h-[1.4em] overflow-hidden align-bottom">
      <motion.span
        key={i}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="shimmer-text font-display font-extrabold"
      >
        {profile.taglines[i]}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative px-4 pb-12 pt-32 md:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm font-medium text-primary shadow-soft">
            <Sparkles className="h-4 w-4 animate-sparkle" /> Available for IT & Technical Support
            roles
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
            Hi, I'm <span className="text-gradient">Prisha Kerin Mercy D</span> ✨
          </h1>
          <p className="mt-4 text-xl font-semibold text-foreground/80 md:text-2xl">
            <TaglineRotator />
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {profile.summary}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Let's connect
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3 font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              View my work
            </a>
          </div>
          <div className="mt-5 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" /> {profile.location}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="animate-float-slow relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-primary opacity-70 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border-4 border-card shadow-glow">
              <img
                src={prisha}
                alt="Portrait of Prisha Kerin Mercy D"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-5 top-8 rounded-2xl glass px-4 py-2 text-sm font-semibold shadow-soft"
            >
              🤖 AI & Prompting
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -right-4 bottom-10 rounded-2xl glass px-4 py-2 text-sm font-semibold shadow-soft"
            >
              ⚙️ UiPath RPA
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl glass p-4 text-center shadow-soft"
          >
            <div className="font-display text-2xl font-extrabold text-gradient">{s.value}</div>
            <div className="mt-1 text-xs font-medium text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
