import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { BrandIntroSection } from "./components/sections/BrandIntroSection";
import { ProductShowcaseSection } from "./components/sections/ProductShowcaseSection";
import { PerformanceSection } from "./components/sections/PerformanceSection";
import { CustomBuilderSection } from "./components/sections/CustomBuilderSection";
import { HowToOrderSection } from "./components/sections/HowToOrderSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { CtaSection } from "./components/sections/CtaSection";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-md mx-auto px-3.5 pb-20 pt-2 space-y-6">
        <HeroSection />
        <BrandIntroSection />
        <ProductShowcaseSection />
        <PerformanceSection />
        <CustomBuilderSection />
        <HowToOrderSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
