import { PageLayout } from '@/components/layout/PageLayout';
import { CallToActionSection } from '@/components/sections/CallToActionSection';
import { casesData } from '@/content/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return casesData.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params: rawParams }: { params: Promise<{ slug: string }> }) {
  const params = await rawParams;
  const caseItem = casesData.find((c) => c.slug === params?.slug);
  if (!caseItem) return {};
  return {
    title: caseItem.metadata.title,
    description: caseItem.metadata.description,
  };
}

export default async function CasePage({ params: rawParams }: { params: Promise<{ slug: string }> }) {
  const params = await rawParams;
  const caseItem = casesData.find((c) => c.slug === params?.slug);
  
  if (!caseItem) {
    notFound();
  }

  return (
    <>
      <PageLayout 
        title={caseItem.title} 
        description={caseItem.industry}
      >
        <div className="prose prose-lg max-w-none text-text-secondary mb-24">
          <p>{caseItem.description}</p>
          <p>Подробный разбор кейса находится в стадии подготовки.</p>
        </div>
      </PageLayout>
      <CallToActionSection />
    </>
  );
}
