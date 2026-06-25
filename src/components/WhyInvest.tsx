import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function WhyInvest() {
  const { t } = useLanguage();

  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tag={t.why.tag}
          title={t.why.title}
          subtitle={t.why.subtitle}
        />

        {t.why.items && (
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.why.items.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-2xl border border-amber-500/10 bg-amber-500/5 p-6">
                  <h3 className="font-serif text-lg font-semibold text-amber-50">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-amber-100/60">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {t.why.stats && (
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {t.why.stats.map((stat, i) => (
              <Reveal key={i} delay={0.1 * i}>
                <div className="text-center">
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
      </div>
    </section>
  );
}