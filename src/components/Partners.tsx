import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Partners() {
  const { t } = useLanguage();

  return (
    <section id="partners" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tag={t.partners.tag}
          title={t.partners.title}
          subtitle={t.partners.subtitle}
        />

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {t.partners.logos.map((partner, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="flex h-24 items-center justify-center rounded-xl border border-amber-500/10 bg-amber-500/5 px-4">
                <span className="text-center text-sm font-medium text-amber-100/70">
                  {partner}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}