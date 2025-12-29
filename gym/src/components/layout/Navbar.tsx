import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  return (
    <div className="border-b border-black/10 bg-[color:var(--color-surface)]">
      <SectionContainer className="py-4">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="h-3 w-3 rounded-full bg-[color:var(--color-ink)]" />
              <span className="h-4 w-4 rounded-full bg-[color:var(--color-ink)]" />
              <span className="h-6 w-6 rounded-full bg-[color:var(--color-ink)]" />
            </div>
            <span className="display-font text-lg uppercase tracking-[0.5px] text-[color:var(--color-ink)]">
              PrimalTraining
            </span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.6px] text-[color:var(--color-ink)]">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-[color:var(--color-primary-strong)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Button href="/about#reserve" className="text-xs font-semibold uppercase">
              Reserve your spot
            </Button>
          </div>

          <div className="flex items-center md:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-black/50 text-xl font-semibold text-[color:var(--color-ink)]">
              +
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
