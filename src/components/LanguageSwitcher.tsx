import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import type { Lang } from "../i18n/translations";

const OPTIONS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
  { code: "zh", label: "中文" },
];

export default function LanguageSwitcher({
  variant = "desktop",
}: {
  variant?: "desktop" | "mobile";
}) {
  const { lang, setLang } = useLanguage();
  const layoutId = `lang-pill-${variant}`;

  return (
    <div className="relative flex items-center gap-0.5 rounded-full border border-gold/25 bg-white/[0.04] p-1 backdrop-blur-md">
      {OPTIONS.map((o) => {
        const active = lang === o.code;
        return (
          <button
            key={o.code}
            type="button"
            onClick={() => setLang(o.code)}
            className="relative rounded-full px-3 py-1.5 text-xs font-semibold transition-colors"
            aria-pressed={active}
          >
            {active && (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-light to-gold shadow-[0_6px_18px_-6px_rgba(212,175,55,0.8)]"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span
              className={`relative z-10 transition-colors ${
                active ? "text-ink" : "text-cream/60 hover:text-cream"
              }`}
            >
              {o.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
