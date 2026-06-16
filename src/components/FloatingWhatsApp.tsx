import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function FloatingWhatsApp() {
  const { t } = useLanguage();
  const wa = t.contact.values.whatsapp.replace(/\D/g, "");
  const link = `https://wa.me/${wa}?text=${encodeURIComponent(
    "Hello Prime Connect Egypt"
  )}`;

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={t.contact.whatsappCta}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 260, damping: 18 }}
      className="group fixed bottom-5 end-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold shadow-[0_12px_34px_-10px_rgba(212,175,55,0.8)]"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-gold/40" />
      <MessageCircle className="relative h-6 w-6 text-ink" strokeWidth={1.8} />
      <span className="pointer-events-none absolute end-16 hidden whitespace-nowrap rounded-full border border-gold/20 bg-ink/90 px-3 py-1.5 text-xs text-cream opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 sm:block">
        {t.contact.whatsappCta}
      </span>
    </motion.a>
  );
}
