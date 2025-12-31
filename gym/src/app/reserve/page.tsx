import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PersonalTrainingSection } from "@/sections/reserve/PersonalTrainingSection";
import { ReserveBrandSection } from "@/sections/reserve/ReserveBrandSection";
import { ReserveHeroSection } from "@/sections/reserve/ReserveHeroSection";
import { ReserveSessionsSection } from "@/sections/reserve/ReserveSessionsSection";

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
