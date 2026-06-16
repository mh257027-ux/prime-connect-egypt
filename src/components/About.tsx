import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./ui/Reveal";
import Counter from "./ui/Counter";

const ABOUT_IMG =
  "https://images.pexels.com/photos/6918529/pexels-photo-6918529.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1100&h=1320";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div data-parallax="0.3" className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-gold/5 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Text */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/70" />
                <span className="text-[0.7rem] font-semibold uppercase tracking-luxe text-gold">
                  {t.about.tag}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-serif text-3xl font-semibold leading-[1.14] text-cream sm:text-4xl lg:text-[2.9rem]">
                {t.about.title}
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 text-lg font-light leading-relaxed text-gold-light/90">
                {t.about.lead}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-base leading-relaxed text-cream/70">
                {t.about.p1}
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <p className="mt-4 text-base leading-relaxed text-cream/70">
                {t.about.p2}
              </p>
            </Reveal>

            <div className="mt-8 grid gap-3 sm:grid-cols-1">
              {t.about.points.map((p, i) => (
                <Reveal key={i} delay={0.3 + i * 0.08}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                      <Check className="h-3.5 w-3.5 text-gold-light" />
                    </span>
                    <span className="text-sm text-cream/85">{p}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Image */}
          <Reveal delay={0.2} y={50}>
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-gold/20 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.6rem] border border-gold/20">
                <img
                  src={ABOUT_IMG}
                  alt="Prime Connect Egypt advisory partnership"
                  className="h-[460px] w-full object-cover sm:h-[540px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/40 to-transparent" />

                {/* Floating credential card */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="absolute bottom-5 left-5 right-5 rounded-2xl border border-gold/20 bg-ink/70 p-5 backdrop-blur-xl"
                >
                  <p className="font-serif text-lg text-cream">
                    {t.meta.brand}
                  </p>
                  <p className="mt-1 text-xs text-gold/80">
                    {t.meta.brandSub} · Cairo · 中國 · العربية
                  </p>
                </motion.div>
              </div>

              {/* Rotating gold ring accent */}
              <div className="animate-spin-slow absolute -right-6 -top-6 h-20 w-20 rounded-full border border-dashed border-gold/30" />
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-gold/15 bg-gold/10 lg:grid-cols-4">
          {t.about.stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="h-full bg-ink-soft/80 px-6 py-9 text-center backdrop-blur">
                <div className="font-serif text-4xl font-semibold text-gold-gradient sm:text-5xl">
                  <Counter
                    value={s.value}
                    decimals={s.decimals ?? 0}
                  />
                  <span>{s.suffix}</span>
                </div>
                <p className="mx-auto mt-3 max-w-[12rem] text-xs leading-snug text-cream/60">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
