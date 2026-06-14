import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <PageLayout title="Страница не найдена">
      <div className="flex flex-col items-center justify-center text-center py-12">
        <h2 className="text-2xl font-bold mb-4">404</h2>
        <p className="text-lg text-text-secondary max-w-lg mb-8">
          Кажется, вы перешли по неверной ссылке или страница была удалена.
        </p>
        <Link href="/">
          <Button size="lg">Вернуться на главную</Button>
        </Link>
      </div>
    </PageLayout>
  );
}
