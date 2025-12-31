import { SectionContainer } from "@/components/ui/SectionContainer";

export function ReserveBrandSection() {
  return (
    <SectionContainer className="pb-10 pt-4 sm:pb-12">
      <div className="flex flex-col items-center justify-between gap-10 border-y border-black/15 bg-[color:var(--color-surface)] px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="h-8 w-8 rounded-full bg-[color:var(--color-ink)] sm:h-9 sm:w-9" />
          <span className="h-14 w-14 rounded-full bg-[color:var(--color-ink)] sm:h-16 sm:w-16" />
          <span className="h-24 w-24 rounded-full bg-[color:var(--color-ink)] sm:h-28 sm:w-28" />
        </div>
        <span className="display-font text-4xl text-[color:var(--color-ink)] sm:text-5xl">
          PrimalTraining
        </span>
      </div>
    </SectionContainer>
  );
}
