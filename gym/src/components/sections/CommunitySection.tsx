import { SectionContainer } from "../SectionContainer";

export function CommunitySection() {
  return (
    <SectionContainer id="community" className="py-8 sm:py-10">
      <div className="border border-black/15 bg-white px-4 py-6 sm:px-6 lg:px-8">
        <h2 className="display-font text-4xl leading-[0.95] text-[color:var(--color-ink)] sm:text-5xl lg:text-6xl">
          JOIN THE{" "}
          <span className="text-[color:var(--color-primary)]">COMMUNITY</span>
        </h2>
      </div>
    </SectionContainer>
  );
}
