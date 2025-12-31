import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutCallToActionSection } from "@/sections/about/AboutCallToActionSection";
import { AboutHeroSection } from "@/sections/about/AboutHeroSection";
import { AboutHighlightsSection } from "@/sections/about/AboutHighlightsSection";
import { PrimalSpaceSection } from "@/sections/about/PrimalSpaceSection";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[color:var(--color-surface)]">
      <Navbar />
      <main className="flex flex-1 flex-col gap-6 pb-12 sm:gap-8 sm:pb-16">
        <AboutHeroSection />
        <AboutHighlightsSection />
        <PrimalSpaceSection />
        <AboutCallToActionSection />
      </main>
    </div>
  );
}
