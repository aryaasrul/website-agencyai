// pages/index.js

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingChatWidget from "@/components/ui/FloatingChatWidget";
import BenefitsSection from "@/components/sections/BenefitsSection";
import CtaSection from "@/components/sections/CtaSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    // Body utama sekarang hanya memiliki warna latar belakang putih
    <div className="bg-light-background min-h-screen text-light-foreground">
      {/* Header tidak perlu diubah */}
      <Header /> 

      <main>
        <HeroSection />
        {/*
          Kita sembunyikan section lain untuk sementara agar fokus pada HeroSection.
          Hapus komentar di bawah ini jika ingin menampilkannya lagi.
        */}
        {/* <FeaturesSection /> */}
        {/* <ServicesSection /> */}
        {/* <BenefitsSection /> */}
        {/* <CtaSection /> */}
      </main>

      {/* <Footer /> */}
      {/* <FloatingChatWidget /> */}
    </div>
  );
}