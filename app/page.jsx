import HeroSection from "@/components/HomeComponents/HeroSection";
import HowItWorks from "@/components/HomeComponents/HowItWorks";
import LoanCalculator from "@/components/LoanCalculator";
import OfferingsSection from "@/components/HomeComponents/OfferingsSection";
import Partners from "@/components/HomeComponents/Partners";
import WhyEasyCapital from "@/components/HomeComponents/WhyEasyCapital";
import Image from "next/image";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <main className="min-h-screen max-w-[100vw] overflow-x-hidden ">
      <HeroSection />
      <OfferingsSection />
      <LoanCalculator />
      <HowItWorks />
      <WhyEasyCapital />
      <Partners />
      <FAQSection />
    </main>
  );
}
