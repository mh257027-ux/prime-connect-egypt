import { motion } from "framer-motion";
import {
  HardHat,
  Users,
  Briefcase,
  Laptop,
  Wrench,
  Languages,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const ICONS: LucideIcon[] = [HardHat, Wrench, Briefcase, Laptop, Users, Languages];

const RADIUS = 40; // % of container

export default function Workforce() {
  const { t } = useLanguage();

  const nodes = t.workforce.items.map((label, i) => {
    const angle = (-90 + i * (360 / 6)) * (Math.PI / 180);
    return {
      label,
      Icon: ICONS[i % ICONS.length],
      left: 50 + RADIUS * Math.cos(angle),
      top: 50 + RADIUS * Math.sin(angle),
    };
  });

  return (
    <section
      id="workforce"
      className="relative overflow-hidden border-y border-gold/10 bg-ink-soft/40 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-gold/5 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tag={t.workforce.tag}
          title={t.workforce.title}
          subtitle={t.workforce.subtitle}
        />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">
          {/* Orbital infographic */}
          <Reveal y={50}>
            <div className="relative mx-auto aspect-square w-full max-w-md">
              {/* concentric rings */}
              <div className="absolute inset-[8%] rounded-full border border-gold/15" />
              <div className="absolute inset-[24%] rounded-full border border-dashed border-gold/20" />
              <div className="absolute inset-[40%] rounded-full border border-gold/10" />
              <div className="absolute inset-[42%] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_70%)] blur-md" />

              {/* rotating orbit with nodes */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                {nodes.map((n, i) => (
                  <div
                    key={i}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${n.left}%`, top: `${n.top}%` }}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="flex w-24 flex-col items-center gap-1.5 text-center"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-ink/80 backdrop-blur-md transition-shadow hover:shadow-[0_0_26px_-6px_rgba(212,175,55,0.9)]">
                        <n.Icon
                          className="h-5 w-5 text-gold-light"
                          strokeWidth={1.5}
                        />
                      </div>
                      <span className="text-[0.66rem] font-medium leading-tight text-cream/75">
                        {n.label}
                      </span>
                    </motion.div>
                  </div>
                ))}
              </motion.div>

              {/* center hub */}
              <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-ink-card to-ink text-center shadow-[0_0_50px_-12px_rgba(212,175,55,0.7)]">
                <span className="font-serif text-xl font-semibold text-gold-gradient">
                  Talent
                </span>
                <span className="mt-0.5 text-[0.55rem] uppercase tracking-[0.2em] text-cream/50">
                  On Demand
                </span>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal>
              <p className="text-lg leading-relaxed text-cream/75">
                {t.workforce.note}
              </p>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {t.workforce.items.map((label, i) => {
                const Icon = ICONS[i % ICONS.length];
                return (
                  <Reveal key={i} delay={i * 0.07}>
                    <div className="flex items-center gap-3 rounded-xl border border-gold/15 bg-white/[0.03] px-4 py-3.5 backdrop-blur transition-colors hover:border-gold/40">
                      <Icon className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                      <span className="text-sm font-medium text-cream/85">
                        {label}
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-gold/20 bg-gold/[0.05] p-5">
                <span className="font-serif text-4xl font-semibold text-gold-gradient">
                  100%
                </span>
                <p className="text-sm text-cream/70">
                  {t.meta.brand} · {t.workforce.tag}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
