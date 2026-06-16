import {
  Globe2,
  ScrollText,
  TrendingUp,
  Network,
  Factory,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Counter from "./ui/Counter";

const ICONS: LucideIcon[] = [
  Globe2,
  ScrollText,
  TrendingUp,
  Network,
  Factory,
  GraduationCap,
];

export default function WhyInvest() {
  const { t } = useLanguage();

  return (
    <section id="why" className="relative overflow-hidden py-24 sm:py-32">
      <div data-parallax="0.3" className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-gold/5 blur-[150px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tag={t.why.tag}
          title={t.why.title}
          subtitle={t.why.subtitle}
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={i} delay={(i % 3) * 0.1} y={40}>
                <article className="card-gold group relative h-full overflow-hidden rounded-2xl p-7">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/10 transition-all duration-500 group-hover:shadow-[0_0_24px_-6px_rgba(212,175,55,0.8)]">
                      <Icon
                        className="h-5 w-5 text-gold-light"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-cream">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-cream/65">
                    {item.desc}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Highlighted stats band */}
        <Reveal delay={0.1}>
          <div className="relative mt-16 overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-gold/[0.08] via-ink-soft/60 to-ink-soft/60 p-8 sm:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.12),transparent_55%)]" />
            <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
              {t.why.stats.map((s, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="text-center">
                    <div className="font-serif text-4xl font-semibold text-gold-gradient sm:text-5xl">
                      <Counter value={s.value} decimals={s.decimals ?? 0} />
                      <span>{s.suffix}</span>
                    </div>
                    <p className="mx-auto mt-3 max-w-[11rem] text-xs leading-snug text-cream/60">
                      {s.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
