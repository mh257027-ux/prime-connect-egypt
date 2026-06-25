import { motion } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex h-16 w-16 items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10"
      >
        <span className="font-serif text-2xl font-bold text-amber-400">P</span>
      </motion.div>
    </motion.div>
  );
}