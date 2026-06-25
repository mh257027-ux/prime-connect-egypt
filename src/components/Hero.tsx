import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./ui/Reveal";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-400">
              {t.hero.badge}
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-tight text-amber-50 sm:text-6xl md:text-7xl">
              {t.hero.title1}
              <br />
              <span className="text-amber-400">{t.hero.title2}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-amber-100/60 sm:text-xl">
              {t.hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mx-auto mt-4 max-w-2xl text-base text-amber-100/50">
              {t.hero.desc}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-8 py-3.5 text-sm font-medium text-amber-400 transition-all hover:bg-amber-500/20"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#about"
                className="rounded-full border border-amber-500/20 px-8 py-3.5 text-sm font-medium text-amber-100/70 transition-all hover:border-amber-500/40 hover:text-amber-400"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-amber-500/10 pt-8">
              {t.hero.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-semibold text-amber-400 sm:text-3xl">
                    {stat.v}
                  </div>
                  <div className="mt-1 text-xs text-amber-100/50">{stat.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}