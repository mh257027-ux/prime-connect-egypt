import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Workforce() {
  const { t } = useLanguage();

  return (
    <section id="workforce" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tag={t.workforce.tag}
          title={t.workforce.title}
          subtitle={t.workforce.subtitle}
        />

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {t.workforce.items.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-xl border border-amber-500/10 bg-amber-500/5 p-4 text-center">
                  <div className="text-sm font-medium text-amber-50">
                    {item}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <p className="mt-12 text-center text-sm text-amber-100/60">
              {t.workforce.note}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}