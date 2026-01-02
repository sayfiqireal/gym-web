import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/sections/home/HeroSection";
import { ProgramsSection } from "@/sections/home/ProgramsSection";
import { CommunitySection } from "@/sections/home/CommunitySection";
import { ValuePropositionSection } from "@/sections/home/ValuePropositionSection";
import { CallToActionSection } from "@/sections/home/CallToActionSection";

/**
 * Home page metadata
 * Optimized for search engines with targeted keywords
 */
export const metadata: Metadata = {
  title: "Home - Premium Fitness Center",
  description: "Welcome to SayGym PrimalTraining - Your premier fitness destination. Transform your body and mind with personal training, group classes, and state-of-the-art equipment in a supportive community.",
  keywords: [
    "gym near me",
    "fitness center",
    "personal training",
    "group fitness classes",
    "workout programs",
    "strength training",
    "cardio training",
    "SayGym",
    "PrimalTraining",
  ],
  openGraph: {
    title: "SayGym PrimalTraining - Premium Fitness Center",
    description: "Transform your body and mind at SayGym PrimalTraining. Join our community today!",
    url: "/",
    type: "website",
  },
};

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

