import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";

const heroImage =
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80";

export function HeroSection() {
  return (
    <SectionContainer id="home" className="py-10 sm:py-12">
      <div className="flex flex-col gap-6 border border-black/15 bg-white">
        <div className="border-b border-black/10 px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="display-font text-5xl leading-[0.95] text-[color:var(--color-ink)] sm:text-6xl lg:text-7xl">
            TRAIN HARD.{" "}
            <span className="text-[color:var(--color-primary)]">LIVE BETTER</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
          <div className="relative h-[320px] w-full overflow-hidden border-t border-black/10 sm:h-[380px] lg:h-full">
            <Image
              src={heroImage}
              alt="Athletes training in the gym"
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex h-full flex-col justify-between gap-4 border-t border-black/10 bg-[color:var(--color-surface)] px-5 py-6 sm:px-7">
            <div className="space-y-3">
              <h2 className="display-font text-2xl uppercase text-[color:var(--color-ink)] sm:text-3xl">
                For the Committed
              </h2>
              <p className="text-sm leading-relaxed text-[color:var(--color-ink-subtle)]">
                Train like an athlete with top-tier equipment and expert programming.
                Whether you&apos;re building muscle or breaking PRs, we help you push
                past limits.
              </p>
            </div>
            <div className="flex items-center gap-5 text-xs font-semibold uppercase tracking-[0.6px]">
              <a
                href="/about"
                className="transition-colors hover:text-[color:var(--color-primary-strong)]"
              >
                About
              </a>
              <a
                href="/about"
                className="transition-colors hover:text-[color:var(--color-primary-strong)]"
              >
                Us
              </a>
            </div>
            <div className="flex gap-3 sm:hidden">
              <Button
                href="/about#reserve"
                className="w-full text-xs font-semibold uppercase"
              >
                Reserve your spot
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
