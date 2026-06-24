import { Globe, MessageCircle, Send, Mail, ArrowUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Logo from "./ui/Logo";
import LanguageSwitcher from "./LanguageSwitcher";

const SOCIALS = [
  { icon: Globe, href: "#" },
  { icon: MessageCircle, href: "#" },
  { icon: Send, href: "#" },
<<<<<<< HEAD
  { icon: Mail, href: "mailto:mo@primeegypt" }, // ربطنا أيقونة الإيميل بأول إيميل
=======
  { icon: Mail, href: "mailto:mo@primeegypt" }, // تم ربط أيقونة الإيميل بأول إيميل
>>>>>>> abdf80f6347f44d1bcd13098b37c180f40bc7fef
];

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
    <footer className="relative overflow-hidden border-t border-gold/15 bg-ink-soft/60">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-gold/5 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo className="h-11 w-11" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label="social"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 bg-white/[0.03] text-cream/70 transition-all hover:border-gold/60 hover:text-gold-light"
                >
                  <s.icon className="h-4 w-4" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold/80">
              {t.footer.explore}
            </h4>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="text-sm text-cream/60 transition-colors hover:text-gold-light"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold/80">
              {t.footer.servicesCol}
            </h4>
            <ul className="mt-5 space-y-3">
              {t.services.items.slice(0, 6).map((s, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="text-sm text-cream/60 transition-colors hover:text-gold-light"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold/80">
              {t.footer.contactCol}
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-cream/60">
              {/* الإيميلات الجديدة */}
              <li>
<<<<<<< HEAD
                <a href="mailto:mo@primeegypt" className="transition-colors hover:text-gold-light">
=======
                <a
                  href="mailto:mo@primeegypt"
                  className="transition-colors hover:text-gold-light"
                >
>>>>>>> abdf80f6347f44d1bcd13098b37c180f40bc7fef
                  mo@primeegypt
                </a>
              </li>
              <li>
<<<<<<< HEAD
                <a href="mailto:hesham@primeegypt" className="transition-colors hover:text-gold-light">
=======
                <a
                  href="mailto:hesham@primeegypt"
                  className="transition-colors hover:text-gold-light"
                >
>>>>>>> abdf80f6347f44d1bcd13098b37c180f40bc7fef
                  hesham@primeegypt
                </a>
              </li>
              <li>
<<<<<<< HEAD
                <a href="mailto:khalifa@primeegypt" className="transition-colors hover:text-gold-light">
                  khalifa@primeegypt
                </a>
              </li>

              {/* الرقم الجديد */}
              <li>
                <a href="tel:+201000982441" className="transition-colors hover:text-gold-light">
                  +20 10 00982441
                </a>
              </li>

              {/* العنوان (بيتنقل من ملف الترجمة) */}
=======
                <a
                  href="mailto:khalifa@primeegypt"
                  className="transition-colors hover:text-gold-light"
                >
                  khalifa@primeegypt
                </a>
              </li>
              
              {/* الرقم الجديد */}
              <li>
                <a
                  href="tel:+201000982441"
                  className="transition-colors hover:text-gold-light"
                >
                  +20 10 00982441
                </a>
              </li>
              
              {/* العنوان (تم تركه يسحب من ملف الترجمة) */}
>>>>>>> abdf80f6347f44d1bcd13098b37c180f40bc7fef
              <li className="leading-relaxed">{t.contact.values.address}</li>
            </ul>
            <div className="mt-5">
              <LanguageSwitcher variant="mobile" />
            </div>
          </div>
        </div>

        <div className="mt-14 gold-divider" />

        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-cream/45">
            © {year} {t.meta.brand}. {t.footer.rights}
          </p>
          <p className="text-xs text-cream/45">{t.footer.built}</p>
          <a
            href="#home"
            className="flex items-center gap-2 rounded-full border border-gold/20 px-4 py-2 text-xs text-cream/70 transition-colors hover:border-gold/60 hover:text-gold-light"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            {t.nav.cta}
          </a>
        </div>
      </div>
    </footer>
  );
}