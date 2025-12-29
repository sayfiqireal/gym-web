import { ReactNode } from "react";

type CardProps = {
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
};

export function Card({ title, description, className, children }: CardProps) {
  const classes = [
    "flex flex-col gap-3 border border-[color:var(--color-border-soft)] bg-[color:var(--color-card)] p-5",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <h3 className="display-font text-xl uppercase text-[color:var(--color-ink)]">
        {title}
      </h3>
      {description ? (
        <p className="text-sm leading-relaxed text-[color:var(--color-ink-subtle)]">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
