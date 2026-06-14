"use client";

import { useForm } from 'react-hook-form';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { ShieldCheck } from 'lucide-react';

import { useRouter } from 'next/navigation';

export function CallToActionSection() {
  const router = useRouter();
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();

  const onSubmit = async (data: any) => {
    // Здесь должна быть логика отправки на сервер
    console.log(data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    router.push('/thanks');
  };

  return (
    <section className="py-24 bg-surface border-t border-border-light">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-6 leading-tight">
              Покажите текущий процесс — предложим понятную схему
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Разберём, откуда приходят заявки, где возникают задержки и какие действия можно передать системе, чтобы освободить время сотрудников.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-text-primary font-medium">
                <ShieldCheck className="w-6 h-6 text-primary" />
                Никакого спама, только конструктивный разбор
              </div>
              <div className="flex items-center gap-3 text-text-primary font-medium">
                <ShieldCheck className="w-6 h-6 text-primary" />
                Гарантия конфиденциальности ваших данных
              </div>
            </div>
          </div>

          <div className="bg-background rounded-2xl p-8 border border-border-light shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-text-primary">Имя</label>
                <Input 
                  id="name" 
                  placeholder="Как к вам обращаться?" 
                  {...register("name", { required: true })} 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact" className="text-sm font-medium text-text-primary">Telegram или телефон</label>
                <Input 
                  id="contact" 
                  placeholder="@username или +7..." 
                  {...register("contact", { required: true })} 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="industry" className="text-sm font-medium text-text-primary">Сфера бизнеса</label>
                <Input 
                  id="industry" 
                  placeholder="Например: строительство, e-commerce" 
                  {...register("industry", { required: true })} 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium text-text-primary">Краткое описание задачи</label>
                <Textarea 
                  id="description" 
                  placeholder="Что нужно улучшить или автоматизировать?" 
                  {...register("description")} 
                  className="min-h-[100px]"
                />
              </div>

              <Button type="submit" size="lg" className="w-full text-lg" disabled={isSubmitting}>
                {isSubmitting ? 'Отправка...' : 'Получить разбор'}
              </Button>

              <p className="text-xs text-text-secondary text-center">
                Отправляя форму, вы соглашаетесь с <a href="/privacy" className="underline hover:text-primary transition-colors">политикой обработки данных</a>.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
