import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tag={t.services.tag}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-amber-500/10 bg-amber-500/5 p-6 transition-all hover:border-amber-500/30 hover:bg-amber-500/10">
                <h3 className="font-serif text-lg font-semibold text-amber-50">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-amber-100/60">
                  {service.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}