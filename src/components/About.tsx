import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tag={t.about.tag}
          title={t.about.title}
          subtitle={t.about.lead}
        />

        <div className="mx-auto mt-16 max-w-3xl">
          <Reveal>
            <p className="text-center text-base leading-relaxed text-amber-100/60">
              {t.about.p1}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-center text-base leading-relaxed text-amber-100/60">
              {t.about.p2}
            </p>
          </Reveal>

          {t.about.stats && (
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {t.about.stats.map((stat, i) => (
                <Reveal key={i} delay={0.1 * i}>
                  <div className="rounded-2xl border border-amber-500/10 bg-amber-500/5 p-6 text-center">
                    <div className="text-3xl font-semibold text-amber-400">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="mt-2 text-xs text-amber-100/50">
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {t.about.points && (
            <Reveal delay={0.4}>
              <ul className="mt-12 space-y-3">
                {t.about.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-amber-100/70">
                    <div className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}