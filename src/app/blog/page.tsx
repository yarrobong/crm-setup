import { PageLayout } from '@/components/layout/PageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Блог | CRM & Setup',
  description: 'Статьи о бизнесе, продажах, автоматизации и CRM.',
  robots: { index: false, follow: false },
};

export default function BlogPage() {
  return (
    <PageLayout 
      title="Блог" 
      description="Делимся опытом, рассказываем о частых ошибках внедрения и как их избежать."
    >
      <div className="text-text-secondary">
        <p>Раздел находится в разработке.</p>
      </div>
    </PageLayout>
  );
}
