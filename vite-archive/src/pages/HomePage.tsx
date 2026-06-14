import { HeroSection } from '../components/sections/HeroSection';
import { IntegrationsPanel } from '../components/sections/IntegrationsPanel';
import { ProblemsSection } from '../components/sections/ProblemsSection';
import { ResultSection } from '../components/sections/ResultSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { CallToActionSection } from '../components/sections/CallToActionSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <IntegrationsPanel />
      <ProblemsSection />
      <ResultSection />
      <ServicesSection />
      <CallToActionSection />
    </>
  );
}
