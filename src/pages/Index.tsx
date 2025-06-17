
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import FeatureCards from '@/components/FeatureCards';
import IntegrationVisual from '@/components/IntegrationVisual';
import CompetitiveEdge from '@/components/CompetitiveEdge';
import BenefitIcons from '@/components/BenefitIcons';
import FinalCTA from '@/components/FinalCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeatureCards />
      <IntegrationVisual />
      <CompetitiveEdge />
      <BenefitIcons />
      <FinalCTA />
    </div>
  );
};

export default Index;
