import Image from "next/image";
import { SectionContainer } from "@/components/ui/SectionContainer";

const overheadPressImage =
  "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=1600&q=80";

export function PrimalSpaceSection() {
  return (
    <SectionContainer className="pb-10 sm:pb-12 lg:pb-14">
      <div className="relative overflow-hidden">
        <div className="relative h-[360px] w-full sm:h-[460px] lg:h-[540px]">
          <Image
            src={overheadPressImage}
            alt="Athlete lifting a barbell overhead"
            fill
            sizes="100vw"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-transparent" />
          <div className="absolute bottom-6 left-5 right-5 sm:bottom-10 sm:left-10 sm:right-10 md:max-w-2xl">
            <p className="display-font text-3xl uppercase leading-[0.95] text-white sm:text-4xl lg:text-5xl">
              We&apos;ve created a space where you can reconnect with your primal self.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
