import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SectionHeading from "./ui/SectionHeading";

const initial = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export default function Testimonials() {
  const { t } = useLanguage();
  const items = t.testimonials.items;
  const count = items.length;

  const [[page, dir], setPage] = useState<[number, number]>([0, 0]);

  const paginate = useCallback(
    (d: number) => {
      setPage(([p]) => [(p + d + count) % count, d]);
    },
    [count]
  );

  useEffect(() => {
    const id = setInterval(() => paginate(1), 6500);
    return () => clearInterval(id);
  }, [paginate, page]);

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d >= 0 ? 70 : -70 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d >= 0 ? -70 : 70 }),
  };

  const active = items[page];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-y border-gold/10 bg-ink-soft/40 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-gold/5 blur-[150px]" />
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          tag={t.testimonials.tag}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />

        <div className="relative mt-14 min-h-[340px] sm:min-h-[300px]">
          <Quote className="pointer-events-none absolute -top-6 left-1/2 h-20 w-20 -translate-x-1/2 text-gold/10" />

          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={page}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 0.7, 0.2, 1] }}
              className="relative"
            >
              <div className="mx-auto max-w-3xl text-center">
                <p className="font-serif text-xl font-light italic leading-relaxed text-cream/90 sm:text-2xl">
                  “{active.quote}”
                </p>

                <div className="mt-8 flex flex-col items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-gold/20 to-transparent font-serif text-lg font-semibold text-gold-light">
                    {initial(active.name)}
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-cream">{active.name}</p>
                    <p className="mt-0.5 text-sm text-gold/80">
                      {active.role} · {active.company}
                    </p>
                    <p className="mt-0.5 text-xs uppercase tracking-[0.2em] text-cream/40">
                      {active.country}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-white/5 text-cream transition-all hover:border-gold/70 hover:bg-gold/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage([i, i > page ? 1 : -1])}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === page
                    ? "w-7 bg-gradient-to-r from-gold-light to-gold"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            aria-label="Next"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-white/5 text-cream transition-all hover:border-gold/70 hover:bg-gold/10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
