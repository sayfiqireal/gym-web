import Image from "next/image";
import { SectionContainer } from "../SectionContainer";

const communityImage =
  "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?auto=format&fit=crop&w=1400&q=80";

const features = [
  {
    title: "Expert Coaching",
    description: "Trainers who are passionate about your progress.",
  },
  {
    title: "Results-Driven Programs",
    description: "Workouts that deliver tangible, measurable results.",
  },
  {
    title: "A Supportive Tribe",
    description: "A community that pushes you to be your best.",
  },
];

export function ValuePropositionSection() {
  return (
    <SectionContainer className="pb-8 pt-2 sm:pb-10">
      <div className="grid grid-cols-1 overflow-hidden border border-black/15 bg-white lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col">
          <div className="border-b border-black/10 px-5 py-6 sm:px-7">
            <h3 className="display-font text-3xl uppercase text-[color:var(--color-ink)] sm:text-4xl">
              Discover Your Potential
            </h3>
          </div>
          <div className="divide-y divide-black/10 border-b border-black/10">
            {features.map((feature) => (
              <div key={feature.title} className="px-5 py-5 sm:px-7">
                <h4 className="display-font text-xl uppercase text-[color:var(--color-ink)]">
                  {feature.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink-subtle)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="px-5 py-5 sm:px-7">
            <a
              href="#cta"
              className="text-xs font-semibold uppercase tracking-[0.6px] text-[color:var(--color-ink)] transition-colors hover:text-[color:var(--color-primary-strong)]"
            >
              View classes
            </a>
          </div>
        </div>
        <div className="relative min-h-[360px] overflow-hidden bg-[color:var(--color-surface)] sm:min-h-[420px]">
          <Image
            src={communityImage}
            alt="Athletes lifting together"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-full w-full object-cover grayscale"
          />
        </div>
      </div>
    </SectionContainer>
  );
}
