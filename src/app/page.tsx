import { Header } from "@/components/layout/header";
import { AboutSection } from "@/components/sections/about-section";
import { HeroSection } from "@/components/sections/hero-section";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-body">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
      </main>
    </div>
  );
}
