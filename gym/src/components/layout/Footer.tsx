import { SectionContainer } from "@/components/ui/SectionContainer";

export function Footer() {
  return (
    <SectionContainer
      id="contact"
      className="border-t border-black/30 bg-[color:var(--color-surface)] py-12 sm:py-14 lg:py-16"
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-black/15 pb-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="h-4 w-4 rounded-full bg-[color:var(--color-ink)]" />
            <span className="h-8 w-8 rounded-full bg-[color:var(--color-ink)]" />
            <span className="h-14 w-14 rounded-full bg-[color:var(--color-ink)]" />
          </div>
          <span className="display-font text-3xl text-[color:var(--color-ink)] sm:text-4xl">
            PrimalTraining
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <h4 className="display-font text-base uppercase text-[color:var(--color-ink)]">
              Contact
            </h4>
            <div className="text-sm text-[color:var(--color-ink-subtle)]">
              <p>Email: hello@figma.com</p>
              <p>Phone: (203) 555-5555</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="display-font text-base uppercase text-[color:var(--color-ink)]">
              Opening Hours
            </h4>
            <div className="grid grid-cols-2 gap-x-6 text-sm text-[color:var(--color-ink-subtle)]">
              <p>Mon - Fri</p>
              <p>5:00 - 23:00</p>
              <p>Saturdays</p>
              <p>8:00 - 16:00</p>
              <p>Sundays</p>
              <p>8:00 - 13:00</p>
              <p>Holidays</p>
              <p>8:00 - 16:00</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="display-font text-base uppercase text-[color:var(--color-ink)]">
              Social
            </h4>
            <div className="flex flex-col gap-2 text-sm font-semibold text-[color:var(--color-ink)]">
              {["Instagram", "X", "LinkedIn", "Spotify"].map((network) => (
                <a
                  key={network}
                  href="#"
                  className="underline underline-offset-2 transition-colors hover:text-[color:var(--color-primary-strong)]"
                >
                  {network}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
