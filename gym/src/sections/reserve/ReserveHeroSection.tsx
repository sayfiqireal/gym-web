import { SectionContainer } from "@/components/ui/SectionContainer";

export function ReserveHeroSection() {
  return (
    <SectionContainer id="reserve" className="pt-6 sm:pt-8">
      <div className="border-b border-black/15 bg-[color:var(--color-surface)] px-2 pb-6 sm:px-4 lg:px-6">
        <h1 className="display-font text-5xl leading-[0.9] text-[color:var(--color-ink)] sm:text-6xl lg:text-7xl">
          BOOK A <span className="text-[color:var(--color-primary)]">SESSION</span>
        </h1>
      </div>
    </SectionContainer>
  );
}
