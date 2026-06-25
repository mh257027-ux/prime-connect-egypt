import { MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function FloatingWhatsApp() {
  const { t } = useLanguage();
  const wa = t.contact.values.whatsapp.replace(/\D/g, "");
  const waLink = `https://wa.me/${wa}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-transform hover:scale-110 hover:shadow-green-500/50"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}