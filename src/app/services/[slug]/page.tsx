import { PageLayout } from '@/components/layout/PageLayout';
import { CallToActionSection } from '@/components/sections/CallToActionSection';
import { servicesData } from '@/content/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params: rawParams }: { params: Promise<{ slug: string }> }) {
  const params = await rawParams;
  const service = servicesData.find((s) => s.slug === params?.slug);
  if (!service) return {};
  return {
    title: service.metadata.title,
    description: service.metadata.description,
    robots: { index: false, follow: false }
  };
}

export default async function ServicePage({ params: rawParams }: { params: Promise<{ slug: string }> }) {
  const params = await rawParams;
  const service = servicesData.find((s) => s.slug === params?.slug);
  
  if (!service) {
    notFound();
  }

  return (
    <>
      <PageLayout 
        title={service.title} 
        description={service.description}
      >
        <div className="prose prose-lg max-w-none text-text-secondary mb-24">
          <p>Детальная страница услуги: {service.title}. Раздел находится в разработке, скоро здесь появится подробная информация.</p>
        </div>
      </PageLayout>
      <CallToActionSection />
    </>
  );
}
