import { useLanguage } from "../context/LanguageContext";
import SectionHeading from "./ui/SectionHeading";
import Logo from "./ui/Logo";

function Row({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="flex w-max">
      <div
        className={`flex shrink-0 items-center gap-4 pe-4 ${
          reverse ? "animate-marquee-rev" : "animate-marquee"
        }`}
      >
        {doubled.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap rounded-full border border-gold/15 bg-white/[0.03] px-7 py-4 backdrop-blur transition-colors hover:border-gold/40"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-sm font-medium tracking-wide text-cream/75">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Partners() {
  const { t } = useLanguage();

  return (
    <section id="partners" className="relative overflow-hidden py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tag={t.partners.tag}
          title={t.partners.title}
          subtitle={t.partners.subtitle}
        />
      </div>

      <div className="marquee-paused relative mt-14">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent sm:w-40" />

        <div className="flex flex-col gap-4">
          <Row items={t.partners.logos} />
          <Row items={[...t.partners.logos].reverse()} reverse />
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl items-center justify-center px-5 sm:px-8">
        <div className="flex items-center gap-4 rounded-2xl border border-gold/15 bg-white/[0.02] px-7 py-5">
          <Logo className="h-10 w-10" withText={false} />
          <p className="text-sm text-cream/60">
            {t.partners.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
