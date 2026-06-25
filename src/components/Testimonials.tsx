import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tag={t.testimonials.tag}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {t.testimonials.items.map((testimonial, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="rounded-2xl border border-amber-500/10 bg-amber-500/5 p-8">
                <blockquote className="text-sm leading-relaxed text-amber-100/70">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-6">
                  <div className="font-medium text-amber-50">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-amber-100/50">
                    {testimonial.role}, {testimonial.company}
                  </div>
                  <div className="text-xs text-amber-400">
                    {testimonial.country}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}