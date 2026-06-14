"use client";

import { useEffect } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageLayout title="Что-то пошло не так...">
      <div className="flex flex-col items-center justify-center text-center py-12">
        <p className="text-lg text-text-secondary max-w-lg mb-8">
          Мы уже знаем о проблеме и работаем над ее устранением. Попробуйте еще раз.
        </p>
        <Button onClick={() => reset()} size="lg">
          Попробовать снова
        </Button>
      </div>
    </PageLayout>
  );
}
