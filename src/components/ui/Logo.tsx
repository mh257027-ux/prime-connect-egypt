interface LogoProps {
  className?: string;
  withText?: boolean;
  textClass?: string;
}

export default function Logo({
  className = "h-10 w-10",
  withText = true,
  textClass = "",
}: LogoProps) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className={`relative inline-block ${className}`}>
        <svg
          viewBox="0 0 48 48"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="lgGold" x1="0" y1="0" x2="48" y2="48">
              <stop stopColor="#f7e7a8" />
              <stop offset="0.5" stopColor="#d4af37" />
              <stop offset="1" stopColor="#9a7b1f" />
            </linearGradient>
            <radialGradient id="lgCore" cx="0.5" cy="0.4" r="0.7">
              <stop stopColor="#241d0e" />
              <stop offset="1" stopColor="#0b0b0d" />
            </radialGradient>
          </defs>
          <circle cx="24" cy="24" r="22.5" fill="url(#lgCore)" />
          <circle
            cx="24"
            cy="24"
            r="22.5"
            stroke="url(#lgGold)"
            strokeWidth="1.3"
          />
          <circle
            cx="24"
            cy="24"
            r="18.5"
            stroke="url(#lgGold)"
            strokeWidth="0.5"
            opacity="0.4"
          />
          {/* pyramid */}
          <path
            d="M16 32 L24 16 L32 32 Z"
            stroke="url(#lgGold)"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
          <path
            d="M24 16 L24 32"
            stroke="url(#lgGold)"
            strokeWidth="0.6"
            opacity="0.6"
          />
          {/* nile wave / arch (gateway) */}
          <path
            d="M13 36 Q18 33 24 36 T35 36"
            stroke="url(#lgGold)"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <circle cx="24" cy="11" r="1.6" fill="url(#lgGold)" />
        </svg>
      </span>
      {withText && (
        <span className={`flex flex-col leading-none ${textClass}`}>
          <span className="font-serif text-[1.05rem] font-semibold tracking-wide text-cream">
            PRIME <span className="text-gold-gradient">CONNECT</span>
          </span>
          <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.42em] text-gold/80">
            Egypt
          </span>
        </span>
      )}
    </span>
  );
}
