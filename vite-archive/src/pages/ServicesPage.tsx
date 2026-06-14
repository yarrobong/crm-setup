import { PageLayout } from '../components/layout/PageLayout';
import { ServicesSection } from '../components/sections/ServicesSection';
import { CallToActionSection } from '../components/sections/CallToActionSection';

export function ServicesPage() {
  return (
    <>
      <PageLayout 
        title="Наши услуги" 
        description="Комплексный подход к автоматизации продаж и процессов в вашем бизнесе."
      >
        <div className="mb-24">
          <ServicesSection />
        </div>
      </PageLayout>
      <CallToActionSection />
    </>
  );
}
