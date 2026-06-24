
import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Contact() {
  const { t } = useLanguage();
  const v = t.contact.values;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const wa = v.whatsapp.replace(/\D/g, "");
  const waLink = `https://wa.me/${wa}?text=${encodeURIComponent(
    "Hello Prime Connect Egypt, I would like to discuss investment opportunities in Egypt."
  )}`;

  // الإيميلات التلاتة
  const emails = [
    { label: "Mo - Business Development", value: v.email },
    { label: "Hesham - Management", value: v.email2 },
    { label: "Khalifa - Operations", value: v.email3 },
  ];

  const info = [
    // الإيميلات التلاتة
    ...emails.map((em) => ({
      icon: Mail,
      label: em.label,
      value: em.value,
      href: `mailto:${em.value}`,
    })),
    // الرقم
    { icon: Phone, label: t.contact.info.phone, value: v.phone, href: `tel:${v.phone.replace(/\s/g, "")}` },
    // الواتساب
    { icon: MessageCircle, label: t.contact.info.whatsapp, value: v.whatsapp, href: waLink },
    // العنوان
    { icon: MapPin, label: t.contact.info.address, value: v.address },
    // ساعات العمل
    { icon: Clock, label: t.contact.info.hours, value: v.hours },
  ];

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-gold/15 bg-white/[0.04] px-4 py-3 text-sm text-cream placeholder-cream/35 outline-none transition-colors focus:border-gold/60 focus:bg-white/[0.06] focus:ring-1 focus:ring-gold/30";
  const label =
    "mb-1.5 block text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-gold/80";
=======
import React from 'react';
>>>>>>> abdf80f6347f44d1bcd13098b37c180f40bc7fef

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Begin Your Egypt Journey</h2>
        <p className="section-subtitle">
          Speak with our advisory team and discover the opportunities waiting for you.
        </p>

        <div className="contact-grid">
          {/* الإيميلات */}
          <div className="contact-info">
            <h3 className="info-title">Contact Our Team</h3>

            <div className="info-item">
              <span className="info-label">Mo - Business Development</span>
              <a href="mailto:mo@primeegypt" className="info-value">
                mo@primeegypt
              </a>
            </div>

            <div className="info-item">
              <span className="info-label">Khalifa - Operations</span>
              <a href="mailto:khalifa@primeegypt" className="info-value">
                khalifa@primeegypt
              </a>
            </div>

            <div className="info-item">
              <span className="info-label">Hesham - Management</span>
              <a href="mailto:hesham@primeegypt" className="info-value">
                hesham@primeegypt
              </a>
            </div>
          </div>

          {/* التليفون والواتساب */}
          <div className="contact-info">
            <div className="info-item">
              <span className="info-label">Phone</span>
              <a href="tel:+201000982441" className="info-value">
                +20 10 00982441
              </a>
            </div>

            <div className="info-item">
              <span className="info-label">WhatsApp</span>
              <a 
                href="https://wa.me/201000982441" 
                target="_blank" 
                rel="noopener noreferrer"
                className="info-value"
              >
                +20 10 00982441
              </a>
            </div>

            <div className="info-item">
              <span className="info-label">Headquarters</span>
              <p className="info-value">New Administrative Capital, Cairo, Egypt</p>
            </div>

            <div className="info-item">
              <span className="info-label">Working Hours</span>
              <p className="info-value">Sun - Thu: 9:00 - 18:00 EET</p>
            </div>
          </div>
        </div>

        {/* زر الواتساب */}
        <div className="whatsapp-button-container">
          <a 
            href="https://wa.me/201000982441?text=Hello%20Prime%20Connect%20Egypt%20Team%2C%0A%0AI%20hope%20this%20message%20finds%20you%20well.%20I%20am%20reaching%20out%20to%20explore%20potential%20collaboration%20opportunities%20and%20would%20appreciate%20learning%20more%20about%20your%20services.%0A%0ALooking%20forward%20to%20your%20kind%20response.%0A%0ABest%20regards%2C" 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="whatsapp-icon"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
};

export default Contact;
>>>>>>> abdf80f6347f44d1bcd13098b37c180f40bc7fef
