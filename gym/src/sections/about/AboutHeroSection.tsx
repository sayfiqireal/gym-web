import { SectionContainer } from "@/components/ui/SectionContainer";

export function AboutHeroSection() {
  return (
    <SectionContainer className="pt-6 sm:pt-8">
      <div className="border-y-2 border-black bg-white px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="display-font text-5xl uppercase leading-[0.9] text-[color:var(--color-ink)] sm:text-6xl lg:text-7xl">
          About Us
        </h1>
      </div>
    </SectionContainer>
  );
}
