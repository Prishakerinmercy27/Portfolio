import { motion } from "framer-motion";
import { SectionHeading } from "./Section";
import { contactLinks, profile } from "./data";

export function Contact() {
  return (
    <section id="contact" className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's build something <span className="text-gradient">together</span>
            </>
          }
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-primary p-8 text-center shadow-glow sm:p-12"
        >
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-pink-glow/40 blur-3xl" />
          <p className="relative mx-auto max-w-xl text-lg font-medium text-primary-foreground">
            I'm actively looking for <strong>Technical Support Engineer</strong> & IT communication
            roles where I can blend AI, automation and a friendly, problem-solving mindset. Let's
            chat! ♥
          </p>
          <div className="relative mt-8 grid gap-3 sm:grid-cols-2">
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-card/90 p-4 text-left transition-transform hover:scale-[1.03]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-medium text-muted-foreground">{c.label}</span>
                  <span className="block text-sm font-semibold text-foreground">{c.value}</span>
                </span>
              </a>
            ))}
          </div>
        </motion.div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} · Made with ♥, AI & a lot of coffee
        </p>
      </div>
    </section>
  );
}
