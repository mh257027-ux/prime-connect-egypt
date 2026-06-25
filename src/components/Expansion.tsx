import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Expansion() {
  const { t } = useLanguage();

  return (
    <section id="expansion" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tag={t.expansion.tag}
          title={t.expansion.title}
          subtitle={t.expansion.subtitle}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.expansion.items.map((item, i) => (
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
      </div>
    </section>
  );
}