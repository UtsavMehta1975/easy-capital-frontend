'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';

// Dynamically import components with SSR disabled
const HeroSection = dynamic(() => import('@/components/HomeComponents/HeroSection'), { ssr: false });
const HowItWorks = dynamic(() => import('@/components/HomeComponents/HowItWorks'), { ssr: false });
const LoanCalculator = dynamic(() => import('@/components/LoanCalculator'), { ssr: false });
const OfferingsSection = dynamic(() => import('@/components/HomeComponents/OfferingsSection'), { ssr: false });
const Partners = dynamic(() => import('@/components/Partners'), { ssr: false });
const WhyEasyCapital = dynamic(() => import('@/components/HomeComponents/WhyEasyCapital'), { ssr: false });
const FAQSection = dynamic(() => import('@/components/FAQSection'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/HomeComponents/Testimonials'), { ssr: false });

export default function Home() {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      // Client-side only code here
    }
  }, []);

  return (
    <main className="min-h-screen max-w-[100vw] overflow-x-hidden">
      <HeroSection className="hero-section" />
      <div className="offerings-section">
        <OfferingsSection />
      </div>
      <div className="mt-0 mb-0">
        <LoanCalculator />
      </div>
      <div className="mt-0 mb-0">
        <HowItWorks />
      </div>
      <div className="mt-0 mb-0">
        <WhyEasyCapital />
      </div>
      <div className="mt-0 mb-0">
        <Partners />
      </div>
      <div className="mt-0 mb-0">
        <Testimonials />
      </div>
      <div className="mt-0 mb-0">
        <FAQSection />
      </div>
    </main>
  );
}
