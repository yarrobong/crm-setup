import { CheckCircle2 } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const PRICING = [
  {
    title: 'CRM-Старт',
    price: 'от 9 900 ₽',
    description: 'Идеально для первого запуска и знакомства с системой.',
    features: [
      'Одна воронка продаж',
      'Базовые пользовательские поля',
      'Задачи и напоминания менеджеру',
      'Один источник заявок (сайт или мессенджер)',
      'Инструкция для сотрудников',
      'Техническая поддержка'
    ]
  },
  {
    title: 'Автоматизация продаж',
    price: 'от 19 900 ₽',
    description: 'Для отделов продаж, которым нужен порядок и контроль.',
    features: [
      'Аудит текущего процесса',
      '1–2 воронки продаж',
      'Роботы и автоматические триггеры',
      'Автоматические задачи',
      'Уведомления для руководителя',
      'До 3 интеграций',
      'Обучение команды',
      'Расширенная поддержка'
    ],
    popular: true
  },
  {
    title: 'Индивидуальная система',
    price: 'после аудита',
    description: 'Для сложных бизнесов с нестандартными процессами.',
    features: [
      'Многоуровневые сложные процессы',
      'Несколько взаимосвязанных отделов',
      'Сложная интеграция по API',
      'AI-помощники и шаблоны',
      'Индивидуальная сквозная аналитика',
      'Собственные дашборды и отчёты'
    ]
  }
];

export function PricingPage() {
  return (
    <PageLayout 
      title="Стоимость решений" 
      description="Точный объём, стоимость и сроки фиксируются после бесплатного аудита вашего текущего процесса."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRICING.map((plan, index) => (
          <Card key={index} className={plan.popular ? 'border-primary shadow-lg scale-105 z-10 relative' : ''}>
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-3.5">
                <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  Частый выбор
                </span>
              </div>
            )}
            <CardHeader className="text-center pb-8 border-b border-border-light">
              <CardTitle className="text-2xl mb-4 text-text-secondary">{plan.title}</CardTitle>
              <div className="text-4xl font-bold text-text-primary mb-4">{plan.price}</div>
              <p className="text-sm text-text-secondary h-10">{plan.description}</p>
            </CardHeader>
            <CardContent className="pt-8">
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-status-success shrink-0 mt-0.5" />
                    <span className="text-sm text-text-primary font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant={plan.popular ? 'primary' : 'outline'} 
                className="w-full h-12"
              >
                Обсудить проект
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
}
