import { PageLayout } from '@/components/layout/PageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О компании | CRM & Setup',
  description: 'Информация о нашей компании, подходе к работе и экспертах по внедрению CRM.',
};

export default function AboutPage() {
  return (
    <PageLayout 
      title="О нас" 
      description="Мы помогаем бизнесу становиться системным, а сотрудникам — продуктивными."
    >
      <div className="prose prose-lg max-w-none text-text-secondary">
        <p>Мы — команда специалистов по автоматизации бизнес-процессов.</p>
        <p>Наша цель — заставить CRM-систему работать на вас, а не вас — на CRM-систему.</p>
      </div>
    </PageLayout>
  );
}
