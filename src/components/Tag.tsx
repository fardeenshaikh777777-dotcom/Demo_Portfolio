import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  dot?: boolean;
  className?: string;
}

export function Tag({ children, dot = true, className = "" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded border border-line bg-coal px-2.5 py-1 font-mono text-[11px] font-medium tracking-wide text-mist transition-colors duration-300 hover:border-mint/40 hover:text-fog ${className}`}
    >
      {dot && <span className="h-1 w-1 rounded-full bg-mint/70" aria-hidden="true" />}
      {children}
    </span>
  );
}
