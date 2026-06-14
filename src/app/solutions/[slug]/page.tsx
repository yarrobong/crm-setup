import { PageLayout } from '@/components/layout/PageLayout';
import { CallToActionSection } from '@/components/sections/CallToActionSection';
import { solutionsData } from '@/content/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return solutionsData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params: rawParams }: { params: Promise<{ slug: string }> }) {
  const params = await rawParams;
  const solution = solutionsData.find((s) => s.slug === params?.slug);
  if (!solution) return {};
  return {
    title: solution.metadata.title,
    description: solution.metadata.description,
    robots: { index: false, follow: false }
  };
}

export default async function SolutionPage({ params: rawParams }: { params: Promise<{ slug: string }> }) {
  const params = await rawParams;
  const solution = solutionsData.find((s) => s.slug === params?.slug);
  
  if (!solution) {
    notFound();
  }

  return (
    <>
      <PageLayout 
        title={solution.title} 
        description={solution.description}
      >
        <div className="prose prose-lg max-w-none text-text-secondary mb-24">
          <p>Детальная страница решения: {solution.title}. Раздел находится в разработке.</p>
        </div>
      </PageLayout>
      <CallToActionSection />
    </>
  );
}
