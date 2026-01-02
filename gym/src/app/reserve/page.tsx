import { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PersonalTrainingSection } from "@/sections/reserve/PersonalTrainingSection";
import { ReserveBrandSection } from "@/sections/reserve/ReserveBrandSection";
import { ReserveHeroSection } from "@/sections/reserve/ReserveHeroSection";
import { ReserveSessionsSection } from "@/sections/reserve/ReserveSessionsSection";

/**
 * Reserve page metadata
 * Optimized for conversion and local search
 */
export const metadata: Metadata = {
  title: "Reserve Your Session - Book Now",
  description: "Book your personal training session or group class at SayGym PrimalTraining. Flexible scheduling, expert trainers, and customized workout programs. Start your fitness journey today!",
  keywords: [
    "book gym session",
    "reserve personal training",
    "gym booking",
    "fitness class reservation",
    "personal trainer booking",
    "gym membership",
    "workout session",
    "fitness appointment",
  ],
  openGraph: {
    title: "Reserve Your Training Session - SayGym PrimalTraining",
    description: "Start your fitness journey today. Book your session with our expert trainers.",
    url: "/reserve",
    type: "website",
  },
};

export default function ReservePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[color:var(--color-surface)]">
      <Navbar />
      <main className="flex flex-1 flex-col gap-4 pb-12 sm:gap-6 sm:pb-14">
        <ReserveHeroSection />
        <ReserveSessionsSection />
        <PersonalTrainingSection />
      </main>
    </div>
  );
}

