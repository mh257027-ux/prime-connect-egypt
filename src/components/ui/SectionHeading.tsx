import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ tag, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-amber-400"
      >
        {tag}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-5 font-serif text-3xl font-semibold text-amber-50 sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base text-amber-100/60 sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}