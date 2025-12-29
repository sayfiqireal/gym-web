import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { SectionContainer } from "@/components/ui/SectionContainer";

const supportImage =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80";

const programs = [
  {
    title: "Guided by Experts",
    description:
      "We believe in creating a positive environment where you can thrive. We're here to help you achieve your goals and unlock your full potential.",
  },
  {
    title: "Dynamic Open Gym",
    description:
      "Our facility is the optimal environment for strength training and performance, fully equipped with top-of-the-line tools, ample training areas, and a focus on functional movement.",
  },
];

export function ProgramsSection() {
  return (
    <SectionContainer id="about" className="py-8 sm:py-10">
      <div className="grid overflow-hidden border border-black/15 bg-white lg:grid-cols-[1fr_1fr_1.05fr]">
        <div className="grid grid-cols-1 divide-y divide-black/10 lg:col-span-2 lg:grid-cols-2 lg:divide-x">
          {programs.map((program) => (
            <Card
              key={program.title}
              title={program.title}
              description={program.description}
              className="h-full justify-between border-0 bg-[color:var(--color-card)]"
            />
          ))}
        </div>
        <div className="relative h-[340px] w-full overflow-hidden border-l border-black/10 bg-white sm:h-[420px] lg:h-full">
          <Image
            src={supportImage}
            alt="Coach guiding a member with battle ropes"
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </SectionContainer>
  );
}
