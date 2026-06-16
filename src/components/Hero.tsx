import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, ChevronDown } from "lucide-react";
import heroCairo from "../assets/hero-cairo.jpg";
import GoldParticles from "./effects/GoldParticles";
import { useLanguage } from "../context/LanguageContext";

const VIDEO = "https://videos.pexels.com/video-files/30070091/12897525_2732_1440_24fps.mp4";

export default function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "46%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const ease = [0.22, 0.7, 0.2, 1] as const;

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background video + image */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0"
      >
        <motion.video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={heroCairo}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        >
          <source src={VIDEO} type="video/mp4" />
        </motion.video>
        {/* fallback image layer (under video if it fails, poster covers) */}
        <img
          src={heroCairo}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-ink/85 via-ink/55 to-ink" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.16),transparent_55%)]" />

      <GoldParticles className="absolute inset-0 z-20" density={70} />

      {/* Floating gold light streaks */}
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        {[
          { top: "18%", left: "8%", w: "22%", d: 0 },
          { top: "62%", left: "62%", w: "26%", d: 1.4 },
          { top: "38%", left: "82%", w: "16%", d: 2.6 },
        ].map((s, i) => (
          <motion.span
            key={i}
            className="absolute h-px rounded-full bg-gradient-to-r from-transparent via-gold-light to-transparent blur-[1px]"
            style={{ top: s.top, left: s.left, width: s.w }}
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: [0, 0.9, 0], x: [-80, 160] }}
            transition={{
              duration: 6,
              delay: s.d,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating orbs */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <div className="animate-float absolute left-[6%] top-[28%] h-40 w-40 rounded-full bg-gold/15 blur-[90px]" />
        <div className="animate-float-slow absolute right-[10%] top-[60%] h-52 w-52 rounded-full bg-gold-deep/20 blur-[110px]" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-30 mx-auto w-full max-w-7xl px-5 pb-24 pt-28 sm:px-8"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-light" />
            </span>
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold-light">
              {t.hero.badge}
            </span>
          </motion.div>

          <h1 className="mt-7 font-serif text-[2.7rem] font-semibold leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.32, ease }}
            >
              {t.hero.title1}
            </motion.span>
            <motion.span
              className="animate-shimmer mt-1 block text-gold-gradient"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.46, ease }}
            >
              {t.hero.title2}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            className="mt-5 text-base font-medium uppercase tracking-[0.22em] text-gold/90 sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.72, ease }}
            className="mt-5 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg"
          >
            {t.hero.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.84, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#services" className="btn-gold h-13 px-7 py-3.5 text-sm">
              {t.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost h-13 px-7 py-3.5 text-sm">
              <Phone className="h-4 w-4" />
              {t.hero.ctaSecondary}
            </a>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease }}
            className="mt-12 flex max-w-lg items-stretch gap-6 rounded-2xl border border-gold/15 bg-white/[0.03] p-5 backdrop-blur-md"
          >
            {t.hero.stats.map((s, i) => (
              <div
                key={i}
                className={`flex-1 ${
                  i < t.hero.stats.length - 1
                    ? "border-e border-white/10 ps-0 pe-6"
                    : ""
                }`}
              >
                <div className="font-serif text-2xl font-semibold text-gold-gradient">
                  {s.v}
                </div>
                <div className="mt-1 text-[0.72rem] leading-tight text-cream/60">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/50 sm:flex"
      >
        <span className="text-[0.62rem] uppercase tracking-[0.3em]">
          {t.hero.scroll}
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-gold/70" />
        </motion.span>
      </motion.a>
    </section>
  );
}
