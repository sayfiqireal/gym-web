import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function PersonalTrainingSection() {
  return (
    <SectionContainer className="pb-10 pt-6 sm:pb-12 sm:pt-8 lg:pb-14">
      <div className="flex flex-col items-center gap-5 border border-black/15 bg-[color:var(--color-primary)] px-6 py-12 text-center sm:gap-6 sm:px-8 sm:py-16">
        <h2 className="display-font text-4xl uppercase leading-[0.9] text-[color:var(--color-ink)] sm:text-5xl lg:text-6xl">
          Primal Personal Training
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-[color:var(--color-ink)] sm:text-base">
          Receive personalized guidance and tailored programs designed to unlock your individual primal
          potential. Our expert coaches will guide you every step of the way.
        </p>
        <Button
          href="#contact"
          variant="inverted"
          className="mt-2 px-5 py-3 text-xs font-semibold uppercase tracking-[0.8px]"
        >
          Reserve your spot
        </Button>
      </div>
    </SectionContainer>
  );
}
