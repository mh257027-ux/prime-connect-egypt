import Reveal from "./Reveal";

interface SectionHeadingProps {
  tag: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({
  tag,
  title,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${center ? "mx-auto text-center" : "text-start"}`}
    >
      <Reveal>
        <div
          className={`inline-flex items-center gap-3 ${
            center ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/70" />
          <span className="text-[0.7rem] font-semibold uppercase tracking-luxe text-gold">
            {tag}
          </span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/70" />
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 font-serif text-3xl font-semibold leading-[1.12] text-cream sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-cream-muted sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
