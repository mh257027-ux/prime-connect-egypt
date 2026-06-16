import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Logo from "./ui/Logo";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const items = [
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "why", label: t.nav.why },
    { id: "workforce", label: t.nav.workforce },
    { id: "expansion", label: t.nav.expansion },
    { id: "testimonials", label: t.nav.testimonials },
    { id: "partners", label: t.nav.partners },
    { id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", ...items.map((i) => i.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 0.7, 0.2, 1], delay: 0.1 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? "border-b border-gold/15 bg-ink/70 backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
          }`}
        >
          <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
            <a href="#home" aria-label="Prime Connect Egypt" className="shrink-0">
              <Logo className="h-10 w-10" />
            </a>

            <ul className="hidden items-center gap-7 xl:flex">
              {items.map((it) => (
                <li key={it.id}>
                  <a
                    href={`#${it.id}`}
                    className={`nav-link text-[0.82rem] font-medium tracking-wide ${
                      active === it.id ? "text-gold-light" : ""
                    }`}
                  >
                    {it.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>
              <a
                href="#contact"
                className="btn-gold hidden h-10 px-5 text-sm md:inline-flex"
              >
                {t.nav.cta}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <button
                onClick={() => setOpen(true)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 bg-white/5 text-cream xl:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[70] xl:hidden"
          >
            <div
              className="absolute inset-0 bg-ink/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.22, 0.7, 0.2, 1] }}
              className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col border-s border-gold/15 bg-ink-soft/95 p-7"
            >
              <div className="flex items-center justify-between">
                <Logo className="h-9 w-9" />
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 bg-white/5 text-cream"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-7">
                <LanguageSwitcher variant="mobile" />
              </div>

              <ul className="mt-8 flex flex-col gap-1">
                {items.map((it, i) => (
                  <motion.li
                    key={it.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <a
                      href={`#${it.id}`}
                      onClick={() => setOpen(false)}
                      className="block border-b border-white/5 py-3.5 font-serif text-lg text-cream/90 transition-colors hover:text-gold-light"
                    >
                      {it.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-gold mt-auto h-12 w-full text-sm"
              >
                {t.nav.cta}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
