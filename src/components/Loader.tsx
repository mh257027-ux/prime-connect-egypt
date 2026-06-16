import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let raf = 0;
    let start: number | undefined;
    const dur = 1900;
    const step = (t: number) => {
      if (start === undefined) start = t;
      const p = Math.min((t - start) / dur, 1);
      setPct(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(step);
      else setTimeout(onComplete, 380);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
      exit={{ opacity: 0, filter: "blur(8px)" }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" />
      </div>

      <div className="relative flex flex-col items-center">
        {/* emblem with rotating ring */}
        <div className="relative flex h-24 w-24 items-center justify-center">
          <span className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-gold/40" />
          <span className="absolute inset-2 rounded-full border border-gold/20" />
          <motion.svg
            viewBox="0 0 48 48"
            className="h-12 w-12"
            fill="none"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <path
              d="M16 32 L24 16 L32 32 Z"
              stroke="url(#lg)"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <path
              d="M13 36 Q18 33 24 36 T35 36"
              stroke="url(#lg)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="lg" x1="0" y1="0" x2="48" y2="48">
                <stop stopColor="#f7e7a8" />
                <stop offset="1" stopColor="#9a7b1f" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>

        <motion.div
          className="mt-7 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          <p className="font-serif text-2xl font-semibold tracking-wide text-cream">
            PRIME <span className="text-gold-gradient">CONNECT</span>
          </p>
          <p className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.5em] text-gold/70">
            Egypt
          </p>
        </motion.div>

        {/* progress */}
        <div className="mt-8 w-56">
          <div className="h-px w-full overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-deep via-gold to-gold-light"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-[0.6rem] uppercase tracking-[0.3em] text-cream/40">
            <span>Loading</span>
            <span className="tabular-nums text-gold/80">{pct}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
