import { useLanguage } from "../context/LanguageContext";

interface LanguageSwitcherProps {
  variant?: "desktop" | "mobile";
}

export default function LanguageSwitcher({ variant = "desktop" }: LanguageSwitcherProps) {
  const { lang, setLang } = useLanguage();

  const languages = [
    { code: "en", label: "EN" },
    { code: "ar", label: "عربي" },
    { code: "zh", label: "中文" },
  ] as const;

  if (variant === "mobile") {
    return (
      <div className="flex gap-2">
        {languages.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`rounded px-3 py-1.5 text-sm transition-colors ${
              lang === l.code
                ? "bg-amber-500/20 text-amber-400"
                : "text-amber-100/70 hover:text-amber-400"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-amber-500/20 bg-amber-500/5 p-1">
      {languages.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
            lang === l.code
              ? "bg-amber-500/20 text-amber-400"
              : "text-amber-100/60 hover:text-amber-400"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}