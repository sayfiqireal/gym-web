import { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutCallToActionSection } from "@/sections/about/AboutCallToActionSection";
import { AboutHeroSection } from "@/sections/about/AboutHeroSection";
import { AboutHighlightsSection } from "@/sections/about/AboutHighlightsSection";
import { PrimalSpaceSection } from "@/sections/about/PrimalSpaceSection";

/**
 * About page metadata
 * Highlights the gym's mission, values, and unique offerings
 */
export const metadata: Metadata = {
  title: "About Us - Our Story & Mission",
  description: "Learn about SayGym PrimalTraining's mission, values, and commitment to transforming lives through fitness. Discover our state-of-the-art facilities, expert trainers, and supportive community.",
  keywords: [
    "about SayGym",
    "gym mission",
    "fitness philosophy",
    "gym facilities",
    "certified trainers",
    "fitness community",
    "gym values",
  ],
  openGraph: {
    title: "About SayGym PrimalTraining",
    description: "Discover our story and what makes us different. Join a community dedicated to your fitness success.",
    url: "/about",
    type: "website",
  },
};

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

