import HeroSection from "@/components/HeroSection";
import StepsSection from "@/components/StepsSection";
import DeliverablesSection from "@/components/DeliverablesSection";
import InterviewSection from "@/components/InterviewSection";
import ToolsSection from "@/components/ToolsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ToolsSection />
      <StepsSection />
      <DeliverablesSection />
      <InterviewSection />
      <Footer />
    </div>
  );
};

export default Index;
