"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { leadFormSchema, LeadFormData } from '@/lib/validation';
import { useState, useEffect } from 'react';

export function CallToActionSection() {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
  });

  const [utmParams, setUtmParams] = useState<Record<string, string>>({});

  useEffect(() => {
    // Collect UTM parameters when the component mounts
    const params = new URLSearchParams(window.location.search);
    setUtmParams({
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      referrer: document.referrer || '',
      landing_page: window.location.pathname || '',
    });
  }, []);

  const onSubmit = async (data: LeadFormData) => {
    setErrorMsg("");
    try {
      const payload = {
        ...data,
        ...utmParams
      };
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        router.push('/thanks');
      } else {
        setErrorMsg("Ошибка при отправке. Пожалуйста, попробуйте еще раз.");
      }
    } catch (e) {
      setErrorMsg("Ошибка сети. Проверьте соединение.");
    }
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
              
              {/* Honeypot field */}
              <div className="hidden" aria-hidden="true">
                <input type="text" tabIndex={-1} autoComplete="off" {...register("phone_number")} />
              </div>

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-text-primary">Имя</label>
                <Input 
                  id="name" 
                  autoComplete="name"
                  placeholder="Как к вам обращаться?" 
                  {...register("name")} 
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="contact" className="text-sm font-medium text-text-primary">Telegram или телефон</label>
                <Input 
                  id="contact" 
                  type="text"
                  autoComplete="tel"
                  placeholder="@username или +7..." 
                  {...register("contact")} 
                  className={errors.contact ? "border-red-500" : ""}
                />
                {errors.contact && <p className="text-red-500 text-xs">{errors.contact.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="industry" className="text-sm font-medium text-text-primary">Сфера бизнеса</label>
                <Input 
                  id="industry" 
                  placeholder="Например: строительство, e-commerce" 
                  {...register("industry")} 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium text-text-primary">Краткое описание задачи</label>
                <Textarea 
                  id="description" 
                  placeholder="Что нужно улучшить или автоматизировать?" 
                  {...register("description")} 
                  className={`min-h-[100px] ${errors.description ? "border-red-500" : ""}`}
                />
                {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
              </div>

              <div className="flex items-start gap-3">
                <div className="flex flex-col">
                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="consent"
                      {...register("consent")}
                      className="mt-1 flex-shrink-0"
                    />
                    <label htmlFor="consent" className="text-xs text-text-secondary leading-relaxed cursor-pointer">
                      Отправляя форму, вы соглашаетесь с <a href="/privacy" className="underline hover:text-primary transition-colors">политикой обработки данных</a> и <a href="/personal-data" className="underline hover:text-primary transition-colors">согласием на обработку</a>.
                    </label>
                  </div>
                  {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent.message}</p>}
                </div>
              </div>

              {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

              <Button type="submit" size="lg" className="w-full text-lg" disabled={isSubmitting}>
                {isSubmitting ? 'Отправка...' : 'Получить разбор'}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
