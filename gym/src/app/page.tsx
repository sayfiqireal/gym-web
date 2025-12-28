import { CommunitySection } from "@/components/sections/CommunitySection";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { CallToAction } from "@/components/sections/CallToAction";
import { ValuePropositionSection } from "@/components/sections/ValuePropositionSection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[color:var(--color-surface)]">
      <Navbar />
      <main className="flex flex-1 flex-col gap-4 pb-10">
        <Hero />
        <ProgramsSection />
        <CommunitySection />
        <ValuePropositionSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
