import { PageLayout } from '@/components/layout/PageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Решения для бизнеса | CRM & Setup',
  description: 'Готовые решения по автоматизации для разных отраслей и задач бизнеса.',
  robots: { index: false, follow: false },
};

export default function SolutionsPage() {
  return (
    <PageLayout 
      title="Готовые решения" 
      description="Типовые настройки и интеграции под конкретные задачи бизнеса."
    >
      <div className="text-text-secondary">
        <p>Раздел находится в разработке. Скоро здесь появятся детальные разборы решений для отдела продаж, производства и сферы услуг.</p>
      </div>
    </PageLayout>
  );
}
