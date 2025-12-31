import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "inverted";
  className?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-[var(--radius-md)] px-4 py-2 text-sm font-medium transition-colors duration-150";
  const variants = {
    primary:
      "bg-[color:var(--color-primary)] text-[color:var(--color-ink)] shadow-[0_6px_16px_rgba(0,0,0,0.08)] hover:bg-[color:var(--color-primary-strong)]",
    ghost:
      "border border-[color:var(--color-ink)] text-[color:var(--color-ink)] hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-background)]",
    inverted:
      "border border-black/20 bg-white text-[color:var(--color-ink)] shadow-none hover:bg-white/90",
  } as const;

  const variantClass = variants[variant] ?? variants.primary;

  const classes = [base, variantClass, className].filter(Boolean).join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
