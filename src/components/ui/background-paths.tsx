import type { ReactNode } from "react";

// Lightweight version: fewer paths animated with CSS (stroke-dashoffset)
// instead of per-frame JS updates, to keep the hero smooth on phones.
const COUNT = 14;

function FloatingPaths({
  position,
  className,
}: {
  position: number;
  className?: string;
}) {
  const paths = Array.from({ length: COUNT }, (_, idx) => {
    const i = idx * 2.5;
    return {
      id: idx,
      d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
        380 - i * 5 * position
      } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
        152 - i * 5 * position
      } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
        684 - i * 5 * position
      } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
      width: 0.5 + i * 0.03,
      opacity: 0.1 + idx * 0.045,
      duration: 18 + ((idx * 7) % 10),
    };
  });

  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className ?? "text-secondary"}`}
      viewBox="0 0 696 316"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {paths.map((path) => (
        <path
          key={path.id}
          d={path.d}
          pathLength={1}
          stroke="currentColor"
          strokeWidth={path.width}
          strokeOpacity={path.opacity}
          className="bg-path"
          style={{ animationDuration: `${path.duration}s` }}
        />
      ))}
    </svg>
  );
}

export function BackgroundPaths({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden ${className ?? ""}`}
    >
      <div className="absolute inset-0 [contain:strict]">
        <FloatingPaths position={1} className="text-secondary" />
        <FloatingPaths position={-1} className="text-primary" />
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
