import { Globe, MessageCircle, Send, Mail, ArrowUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Logo from "./ui/Logo";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const nav = [
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "why", label: t.nav.why },
    { id: "workforce", label: t.nav.workforce },
    { id: "expansion", label: t.nav.expansion },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-amber-500/15 bg-amber-950/20">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-amber-100/60">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Globe, MessageCircle, Send, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-100/70 transition-all hover:border-amber-500/60 hover:text-amber-400"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-amber-400">
              {t.footer.explore}
            </h4>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="text-sm text-amber-100/60 transition-colors hover:text-amber-400"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-amber-400">
              {t.footer.servicesCol}
            </h4>
            <ul className="mt-5 space-y-3">
              {t.services.items.slice(0, 6).map((s, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="text-sm text-amber-100/60 transition-colors hover:text-amber-400"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-amber-400">
              {t.footer.contactCol}
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-amber-100/60">
              <li><a href="mailto:mo@primeegypt" className="hover:text-amber-400">mo@primeegypt</a></li>
              <li><a href="mailto:hesham@primeegypt" className="hover:text-amber-400">hesham@primeegypt</a></li>
              <li><a href="mailto:khalifa@primeegypt" className="hover:text-amber-400">khalifa@primeegypt</a></li>
              <li><a href="tel:+201000982441" className="hover:text-amber-400">+20 10 00982441</a></li>
              <li className="leading-relaxed">{t.contact.values.address}</li>
            </ul>
            <div className="mt-5">
              <LanguageSwitcher variant="mobile" />
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-amber-500/15" />

        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-amber-100/45">
            © {year} {t.meta.brand}. {t.footer.rights}
          </p>
          <p className="text-xs text-amber-100/45">{t.footer.built}</p>
          <a
            href="#home"
            className="flex items-center gap-2 rounded-full border border-amber-500/20 px-4 py-2 text-xs text-amber-100/70 transition-colors hover:border-amber-500/60 hover:text-amber-400"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            {t.nav.cta}
          </a>
        </div>
      </div>
    </footer>
  );
}