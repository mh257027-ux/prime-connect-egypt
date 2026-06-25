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

  const emails = [
    { label: "Mo - Business Development", value: v.email },
    { label: "Hesham - Management", value: v.email2 },
    { label: "Khalifa - Operations", value: v.email3 },
  ];

  const info = [
    ...emails.map((em) => ({
      icon: Mail,
      label: em.label,
      value: em.value,
      href: `mailto:${em.value}`,
    })),
    { icon: Phone, label: t.contact.info.phone, value: v.phone, href: `tel:${v.phone.replace(/\s/g, "")}` },
    { icon: MessageCircle, label: t.contact.info.whatsapp, value: v.whatsapp, href: waLink },
    { icon: MapPin, label: t.contact.info.address, value: v.address },
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

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div
        data-parallax="0.25"
        className="pointer-events-none absolute -right-40 top-10 h-[30rem] w-[30rem] rounded-full bg-gold/5 blur-[150px]"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tag={t.contact.tag}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <div className="grid gap-3">
              {info.map((it, i) => {
                const inner = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10">
                      <it.icon className="h-5 w-5 text-gold-light" strokeWidth={1.5} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.66rem] uppercase tracking-[0.18em] text-cream/45">
                        {it.label}
                      </span>
                      <span className="mt-0.5 block truncate text-sm text-cream/85">
                        {it.value}
                      </span>
                    </span>
                  </>
                );
                return (
                  <Reveal key={i} delay={i * 0.06}>
                    {it.href ? (
                      <a
                        href={it.href}
                        target={it.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="flex items-center gap-4 rounded-2xl border border-gold/12 bg-white/[0.02] p-4 transition-colors hover:border-gold/35 hover:bg-white/[0.04]"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-2xl border border-gold/12 bg-white/[0.02] p-4">
                        {inner}
                      </div>
                    )}
                  </Reveal>
                );
              })}
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="btn-gold h-13 w-full px-6 text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              {t.contact.whatsappCta}
            </a>

            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-gold/20">
                <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-gold/30 bg-ink/80 px-3.5 py-1.5 backdrop-blur">
                  <MapPin className="h-3.5 w-3.5 text-gold-light" />
                  <span className="text-[0.68rem] font-medium text-cream/85">
                    {t.contact.mapTitle}
                  </span>
                </div>
                <iframe
                  title="Prime Connect Egypt location"
                  src="https://www.google.com/maps?q=New%20Administrative%20Capital%2C%20Cairo%2C%20Egypt&output=embed"
                  className="h-[300px] w-full"
                  style={{
                    filter:
                      "invert(0.9) hue-rotate(180deg) brightness(0.92) contrast(0.92) saturate(0.8)",
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_100%,rgba(212,175,55,0.18),transparent_55%)]" />
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="glass-strong h-full rounded-3xl p-7 sm:p-9">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex h-full min-h-[420px] flex-col items-center justify-center text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                      className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-gold/10"
                    >
                      <CheckCircle2 className="h-10 w-10 text-gold-light" strokeWidth={1.3} />
                    </motion.div>
                    <p className="mt-6 max-w-sm font-serif text-xl text-cream">
                      {t.contact.success}
                    </p>
                    <button
                      onClick={() => {
                        setSent(false);
                        setForm({
                          name: "",
                          email: "",
                          phone: "",
                          company: "",
                          interest: "",
                          message: "",
                        });
                      }}
                      className="btn-ghost mt-7 h-11 px-6 text-sm"
                    >
                      {t.contact.form.submit}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={submit}
                    className="grid gap-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className={label} htmlFor="cf-name">
                          {t.contact.form.name}
                        </label>
                        <input
                          id="cf-name"
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          className={field}
                          placeholder={t.contact.form.name}
                        />
                      </div>
                      <div>
                        <label className={label} htmlFor="cf-email">
                          {t.contact.form.email}
                        </label>
                        <input
                          id="cf-email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          className={field}
                          placeholder={t.contact.form.email}
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className={label} htmlFor="cf-phone">
                          {t.contact.form.phone}
                        </label>
                        <input
                          id="cf-phone"
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          className={field}
                          placeholder={t.contact.form.phone}
                        />
                      </div>
                      <div>
                        <label className={label} htmlFor="cf-company">
                          {t.contact.form.company}
                        </label>
                        <input
                          id="cf-company"
                          value={form.company}
                          onChange={(e) =>
                            setForm({ ...form, company: e.target.value })
                          }
                          className={field}
                          placeholder={t.contact.form.company}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={label} htmlFor="cf-interest">
                        {t.contact.form.interest}
                      </label>
                      <select
                        id="cf-interest"
                        value={form.interest}
                        onChange={(e) =>
                          setForm({ ...form, interest: e.target.value })
                        }
                        className={`${field} appearance-none`}
                      >
                        <option value="" className="bg-ink-soft">
                          {t.contact.form.interest}
                        </option>
                        {t.services.items.map((s, i) => (
                          <option key={i} value={s.title} className="bg-ink-soft">
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={label} htmlFor="cf-message">
                        {t.contact.form.message}
                      </label>
                      <textarea
                        id="cf-message"
                        rows={4}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className={`${field} resize-none`}
                        placeholder={t.contact.form.message}
                      />
                    </div>

                    <button type="submit" className="btn-gold mt-1 h-13 w-full text-sm">
                      <Send className="h-4 w-4" />
                      {t.contact.form.submit}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}