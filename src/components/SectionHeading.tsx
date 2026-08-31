import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <Reveal>
        <p className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.22em] text-mist">
          <span className="text-mint">[ {index} ]</span>
          <span>{eyebrow}</span>
          <span className="hidden h-px flex-1 max-w-24 bg-line sm:block" aria-hidden="true" />
        </p>
      </Reveal>
      <Reveal delay={90}>
        <h2 className="mt-5 font-display text-3xl font-bold leading-[1.06] tracking-tight text-fog sm:text-4xl lg:text-[2.75rem]">
          <span className="mask-line">
            <span>{title}</span>
          </span>
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={170}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
