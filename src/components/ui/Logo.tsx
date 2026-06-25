export default function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10">
        <span className="font-serif text-lg font-bold text-amber-400">P</span>
      </div>
      <div className="flex flex-col">
        <span className="font-serif text-sm font-semibold tracking-wider text-amber-100">PRIME CONNECT</span>
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-amber-400/70">EGYPT</span>
      </div>
    </div>
  );
}