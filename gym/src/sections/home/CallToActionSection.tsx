import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function CallToActionSection() {
  return (
    <SectionContainer
      id="cta"
      className="bg-[color:var(--color-primary)] py-14 text-center sm:py-16 lg:py-20"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.7px] text-[color:var(--color-ink)]">
          What we believe in
        </span>
        <h3 className="display-font text-4xl leading-[0.95] text-[color:var(--color-ink)] sm:text-5xl lg:text-6xl">
          Join the Primal Tribe Today!
        </h3>
        <Button
          href="/reserve"
          className="mt-4 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.7px] hover:bg-white/90"
        >
          Reserve your spot
        </Button>
      </div>
    </SectionContainer>
  );
}
