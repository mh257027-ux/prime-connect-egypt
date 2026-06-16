import { useLanguage } from "../context/LanguageContext";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const IMAGES = [
  "https://images.pexels.com/photos/34221997/pexels-photo-34221997.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=1000",
  "https://images.pexels.com/photos/4487363/pexels-photo-4487363.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=700",
  "https://images.pexels.com/photos/36286291/pexels-photo-36286291.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=700",
  "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=700",
  "https://images.pexels.com/photos/34718922/pexels-photo-34718922.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=700",
  "https://images.pexels.com/photos/24244234/pexels-photo-24244234.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=1000",
];

const SPANS = [
  "sm:col-span-2 lg:row-span-2",
  "",
  "",
  "",
  "",
  "",
];

export default function Expansion() {
  const { t } = useLanguage();

  return (
    <section id="expansion" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-gold/5 blur-[150px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tag={t.expansion.tag}
          title={t.expansion.title}
          subtitle={t.expansion.subtitle}
        />

        <div className="mt-16 grid auto-rows-[210px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[230px]">
          {t.expansion.items.map((item, i) => (
            <Reveal
              key={i}
              delay={(i % 3) * 0.08}
              y={40}
              className={`h-full ${SPANS[i]}`}
            >
              <article className="card-gold group relative h-full overflow-hidden rounded-2xl">
                <img
                  src={IMAGES[i]}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent transition-opacity duration-500 group-hover:from-ink/95" />
                <div className="absolute inset-0 bg-gradient-to-t from-gold/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-gold/15" />

                <span className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 bg-ink/60 font-serif text-sm text-gold-light backdrop-blur">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-serif text-xl font-semibold text-cream drop-shadow-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-cream/75 opacity-0 transition-all duration-500 ease-out group-hover:max-h-28 group-hover:opacity-100">
                    {item.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
