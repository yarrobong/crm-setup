import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/Button';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Заявка отправлена | CRM & Setup',
  description: 'Спасибо за заявку. Мы скоро свяжемся с вами.',
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <PageLayout title="Спасибо за заявку!">
      <div className="flex flex-col items-center justify-center text-center py-12">
        <CheckCircle className="w-20 h-20 text-status-success mb-6" />
        <h2 className="text-2xl font-bold mb-4">Мы получили ваш запрос</h2>
        <p className="text-lg text-text-secondary max-w-lg mb-8">
          В ближайшее рабочее время мы изучим информацию и свяжемся с вами для проведения бесплатного разбора ваших процессов.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/">
            <Button size="lg">Вернуться на главную</Button>
          </Link>
          <Link href="/cases">
            <Button variant="outline" size="lg">Посмотреть наши кейсы</Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
