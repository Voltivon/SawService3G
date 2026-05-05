import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  showWordmark?: boolean;
};

export function Logo({ className, showWordmark = true }: Props) {
  return (
    <span
      className={cn("inline-flex items-center gap-2.5", className)}
      aria-label="Saw Service 3G"
    >
      <Mark className="h-8 w-8 shrink-0" />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[15px] font-extrabold tracking-tight text-ink-50">
            SAW SERVICE
          </span>
          <span className="font-mono text-[10px] tracking-[0.32em] text-spark-500">
            THREE&middot;G
          </span>
        </span>
      )}
    </span>
  );
}

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ssg-blade" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e7e5e4" />
          <stop offset="60%" stopColor="#a8a29e" />
          <stop offset="100%" stopColor="#57534e" />
        </linearGradient>
        <radialGradient id="ssg-spark" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#ea580c" />
        </radialGradient>
      </defs>

      {/* Saw blade — circular with teeth */}
      <g transform="translate(32 32)">
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          return (
            <rect
              key={i}
              x="-1.4"
              y="-30"
              width="2.8"
              height="6.5"
              fill="url(#ssg-blade)"
              transform={`rotate(${angle})`}
            />
          );
        })}
        <circle r="22" fill="url(#ssg-blade)" />
        <circle r="22" fill="none" stroke="#0c0a09" strokeWidth="1.5" opacity="0.35" />
        <circle r="6" fill="#0c0a09" />
        <circle r="3" fill="url(#ssg-spark)" />
      </g>

      {/* Spark */}
      <g transform="translate(50 14)">
        <circle r="2.4" fill="url(#ssg-spark)" opacity="0.95" />
        <circle r="5" fill="url(#ssg-spark)" opacity="0.18" />
      </g>
    </svg>
  );
}
