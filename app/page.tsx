"use client";

import Hero from "@/components/Home/Hero";
import HeroProducts from "@/components/Home/HeroProducts";
import InfoSection from "@/components/Home/InfoSection";
import WhyFilterSection from "@/components/Home/WhyFilterSection";
import JourneySection from "@/components/Home/JourneySection";
import StatisticsSection from "@/components/Home/StatisticsSection";
import VideoSection from "@/components/Home/VideoSection";
import FAQSection from "@/components/Home/FAQSection";
import BlogSection from "@/components/Home/BlogSection";
import { useCart } from "@/context/CartContext";
import Cart from "@/components/Cart";

export default function Home() {
  const { isCartOpen, setIsCartOpen } = useCart();
  return (
    <div className="relative">
      <Hero />
      <HeroProducts />
      <InfoSection />
      <WhyFilterSection />
      <JourneySection />
      <StatisticsSection />
      <VideoSection />
      <FAQSection />
      <BlogSection />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
