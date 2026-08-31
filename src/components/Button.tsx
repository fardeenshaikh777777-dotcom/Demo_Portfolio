import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "ghost" | "line";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  iconAfter?: boolean;
  external?: boolean;
  ariaLabel?: string;
  className?: string;
  type?: "button" | "submit";
}

const base =
  "group/btn inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-md font-display font-semibold tracking-tight transition-all duration-300 select-none cursor-pointer";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  solid:
    "bg-mint text-ink hover:bg-mint-soft hover:-translate-y-0.5 active:translate-y-0 shadow-[0_10px_34px_-12px_rgba(63,217,164,0.55)]",
  ghost:
    "border border-line bg-coal/40 text-fog hover:border-mint/50 hover:text-mint-soft hover:-translate-y-0.5 active:translate-y-0",
  line: "px-0 rounded-none text-mint hover:text-mint-soft",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-[15px]",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  children,
  href,
  onClick,
  variant = "solid",
  size = "md",
  icon,
  iconAfter = false,
  external = false,
  ariaLabel,
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${variant === "line" ? "" : sizes[size]} ${className}`;
  const content = (
    <>
      {!iconAfter && icon && <span className="shrink-0 transition-transform duration-300 group-hover/btn:-translate-x-0.5 [&>svg]:transition-transform">{icon}</span>}
      <span>{children}</span>
      {iconAfter && (
        <span className="shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1 [&>svg]:transition-transform">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
