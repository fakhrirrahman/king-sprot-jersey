import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { BrandIntroSection } from "./components/sections/BrandIntroSection";
import { ProductShowcaseSection } from "./components/sections/ProductShowcaseSection";
import { PerformanceSection } from "./components/sections/PerformanceSection";
import { CustomBuilderSection } from "./components/sections/CustomBuilderSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { CtaSection } from "./components/sections/CtaSection";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <HeroSection />
          <BrandIntroSection />
          <ProductShowcaseSection />
          <PerformanceSection />
          <CustomBuilderSection />
          <TestimonialsSection />
          <CtaSection />
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
