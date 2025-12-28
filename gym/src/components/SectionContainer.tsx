import { ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SectionContainer({
  children,
  className,
  id,
}: SectionContainerProps) {
  const classes = ["w-full px-4 sm:px-6 lg:px-8", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes} id={id}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
