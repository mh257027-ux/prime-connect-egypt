import {
  Building2,
  Factory,
  Ship,
  Briefcase,
  Landmark,
  Users,
  Warehouse,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const ICONS: LucideIcon[] = [
  Building2,
  Factory,
  Ship,
  Briefcase,
  Landmark,
  Users,
  Warehouse,
  TrendingUp,
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="relative overflow-hidden border-y border-gold/10 bg-ink-soft/40 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-gold/5 blur-[150px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tag={t.services.tag}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={i} delay={(i % 4) * 0.08} y={40}>
                <article className="card-gold group relative h-full overflow-hidden rounded-2xl p-7">
                  <span className="absolute right-5 top-4 font-serif text-5xl font-bold text-white/[0.04] transition-colors group-hover:text-gold/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-gold/25 bg-gradient-to-br from-gold/15 to-transparent transition-all duration-500 group-hover:border-gold/60 group-hover:shadow-[0_0_28px_-6px_rgba(212,175,55,0.7)]">
                    <Icon className="h-6 w-6 text-gold-light" strokeWidth={1.4} />
                  </div>

                  <h3 className="relative mt-6 font-serif text-xl font-semibold text-cream">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-cream/65">
                    {item.desc}
                  </p>

                  <span className="relative mt-6 inline-block h-px w-10 bg-gradient-to-r from-gold/60 to-transparent transition-all duration-500 group-hover:w-20" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
