import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";

const sessions = [
  {
    title: "Strength",
    schedule: ["Weekdays at 6AM", "Weekends and Holidays at 8AM"],
    description:
      "Build a foundation of raw power with our comprehensive weightlifting and strength training programs.",
  },
  {
    title: "Conditioning",
    schedule: ["Weekdays at 8AM", "Weekends and Holidays at 10AM"],
    description:
      "Push your limits with high-intensity workouts that challenge your cardiovascular endurance and build functional fitness.",
  },
  {
    title: "Community Classes",
    schedule: ["Every day on the hour"],
    description:
      "Experience the power of collective effort with our custom Workout of the Day. Push your limits alongside like-minded individuals.",
  },
];

export function ReserveSessionsSection() {
  return (
    <SectionContainer id="sessions" className="py-8 sm:py-10">
      <div className="grid overflow-hidden border border-black/25 bg-[color:var(--color-surface)] md:grid-cols-3">
        {sessions.map((session) => (
          <div
            key={session.title}
            className="flex h-full flex-col gap-6 border-b border-black/20 bg-[color:var(--color-card)] px-6 py-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
          >
            <h3 className="display-font text-2xl uppercase text-[color:var(--color-ink)] sm:text-3xl">
              {session.title}
            </h3>

            <div className="space-y-3 text-[color:var(--color-ink)]">
              {session.schedule.map((slot, index) => (
                <div key={`${session.title}-${slot}`} className="space-y-2">
                  <p className="text-sm font-semibold">{slot}</p>
                  {index !== session.schedule.length - 1 ? (
                    <div className="h-px w-full bg-black/40" />
                  ) : null}
                </div>
              ))}
            </div>

            <p className="text-sm leading-relaxed text-[color:var(--color-ink-subtle)]">
              {session.description}
            </p>

            <Button
              href="#contact"
              className="mt-auto w-full text-xs font-semibold uppercase tracking-[0.7px]"
            >
              Reserve your spot
            </Button>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
