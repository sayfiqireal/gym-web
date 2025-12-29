import Image from "next/image";
import { SectionContainer } from "@/components/ui/SectionContainer";

const partnerLiftImage =
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80";

const focusedLifterImage =
  "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?auto=format&fit=crop&w=1600&q=80";

export function AboutHighlightsSection() {
  return (
    <SectionContainer className="space-y-6 pb-10 sm:pb-12">
      <div className="grid overflow-hidden border border-black/10 bg-white md:grid-cols-2">
        <div className="order-2 flex flex-col gap-5 bg-[color:var(--color-primary)] px-6 py-8 text-[color:var(--color-ink)] sm:px-8 md:order-1">
          <h2 className="display-font text-3xl uppercase leading-[0.9] sm:text-4xl lg:text-5xl">
            Tap into your primal power. Forge a stronger you.
          </h2>
          <div className="space-y-3 text-[color:var(--color-ink)]">
            <h3 className="display-font text-lg uppercase tracking-[0.5px]">
              Our Vision
            </h3>
            <p className="text-sm leading-relaxed text-[color:var(--color-ink-subtle)]">
              Primal Training is committed to delivering a training experience rooted in raw strength,
              functional fitness, and unwavering community support. We empower our members to tap into
              their primal power, achieve their goals, and live a life of strength, resilience, and
              unwavering determination.
            </p>
          </div>
        </div>
        <div className="relative order-1 h-[260px] w-full md:order-2 md:h-full">
          <Image
            src={partnerLiftImage}
            alt="Athletes working together in a lifting session"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover grayscale"
            priority
          />
        </div>
      </div>

      <div
        id="dynamic"
        className="grid overflow-hidden border border-black/10 bg-white md:grid-cols-2"
      >
        <div className="relative h-[280px] w-full md:h-full">
          <Image
            src={focusedLifterImage}
            alt="Athlete preparing a barbell lift"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 bg-[color:var(--color-surface)] px-6 py-8 sm:px-8">
          <h3 className="display-font text-3xl uppercase leading-[0.95] text-[color:var(--color-ink)] sm:text-4xl">
            Dynamic open gym
          </h3>
          <p className="text-sm leading-relaxed text-[color:var(--color-ink-subtle)]">
            At Primal Training, we strip away the fluff and focus on the fundamentals. Our expert coaches
            guide you through intense, functional workouts designed to build raw strength, resilience, and
            a body capable of anything.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
