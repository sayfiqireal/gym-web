import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/sections/home/HeroSection";
import { ProgramsSection } from "@/sections/home/ProgramsSection";
import { CommunitySection } from "@/sections/home/CommunitySection";
import { ValuePropositionSection } from "@/sections/home/ValuePropositionSection";
import { CallToActionSection } from "@/sections/home/CallToActionSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[color:var(--color-surface)]">
      <Navbar />
      <main className="flex flex-1 flex-col gap-4 pb-10">
        <HeroSection />
        <ProgramsSection />
        <CommunitySection />
        <ValuePropositionSection />
        <CallToActionSection />
      </main>
    </div>
  );
}
