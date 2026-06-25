import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Logo from "./ui/Logo";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "why", label: t.nav.why },
    { id: "workforce", label: t.nav.workforce },
    { id: "expansion", label: t.nav.expansion },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 z-40 w-full border-b border-amber-500/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />
        
        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-amber-100/70 transition-colors hover:text-amber-400"
            >
              {item.label}
            </a>
          ))}
          <LanguageSwitcher />
          <a
            href="#contact"
            className="rounded-full border border-amber-500/30 bg-amber-500/10 px-6 py-2.5 text-sm font-medium text-amber-400 transition-all hover:bg-amber-500/20"
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center text-amber-100/70 lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-amber-500/10 bg-black/95 px-5 py-6 lg:hidden"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="text-sm text-amber-100/70 transition-colors hover:text-amber-400"
              >
                {item.label}
              </a>
            ))}
            <LanguageSwitcher variant="mobile" />
          </div>
        </motion.div>
      )}
    </nav>
  );
}