import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import FeatureCards from "@/components/FeatureCards";
import ProcessFlow from "@/components/ProcessFlow";
import ImpactSection from "@/components/ImpactSection";
import Acknowledgments from "@/components/Acknowledgments";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <StatsSection />
      <FeatureCards />
      <ProcessFlow />
      <ImpactSection />
      <Acknowledgments />
      <FinalCTA />
    </div>
  );
};

export default Index;
