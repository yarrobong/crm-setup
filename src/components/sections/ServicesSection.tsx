import Link from 'next/link';
import { Briefcase, Key, RefreshCcw, LayoutGrid, Plug, BrainCircuit, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';

const SERVICES = [
  {
    icon: Briefcase,
    title: 'Внедрение Bitrix24',
    problem: 'Нет единого пространства для работы, данные разбросаны.',
    result: 'Настроенный портал под архитектуру вашего бизнеса.',
    link: '/services/bitrix24'
  },
  {
    icon: Key,
    title: 'Аудит CRM',
    problem: 'CRM куплена, но менеджеры ей не пользуются.',
    result: 'Карта текущего процесса и пошаговый план улучшений.',
    link: '/services/crm-audit'
  },
  {
    icon: RefreshCcw,
    title: 'Автоматизация продаж',
    problem: 'Менеджеры тратят время на рутину, забывают перезванивать.',
    result: 'Система сама ставит задачи и контролирует просрочки.',
    link: '/services/sales-automation'
  },
  {
    icon: LayoutGrid,
    title: 'Роботы и бизнес-процессы',
    problem: 'Многократное повторение одних и тех же действий.',
    result: 'Автоматическое создание документов, счетов и уведомлений.',
    link: '/services/processes'
  },
  {
    icon: Plug,
    title: 'Интеграции',
    problem: 'Сайт, телефония и мессенджеры живут отдельно.',
    result: 'Все коммуникации сохраняются в карточке клиента.',
    link: '/services/integrations'
  },
  {
    icon: BrainCircuit,
    title: 'AI-автоматизация',
    problem: 'Сотрудники долго обрабатывают типовые запросы.',
    result: 'Умные помощники классифицируют обращения и готовят ответы.',
    link: '/services/ai'
  },
  {
    icon: Users,
    title: 'Сопровождение',
    problem: 'После настройки нет человека для внесения изменений.',
    result: 'Техническая поддержка и развитие системы по запросу.',
    link: '/services/support'
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
            Направления работы
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="flex flex-col h-full hover:shadow-md transition-shadow group overflow-hidden">
                <Link href={item.link} className="flex flex-col h-full grow outline-none">
                  <CardHeader className="pb-4">
                     <div className="w-12 h-12 rounded bg-surface border border-border-light flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                     </div>
                     <CardTitle className="text-lg group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col grow justify-between">
                     <div className="space-y-4">
                        <div>
                           <p className="text-xs uppercase tracking-wider text-text-secondary font-medium mb-1">Проблема</p>
                           <p className="text-sm text-text-primary leading-relaxed">{item.problem}</p>
                        </div>
                        <div>
                           <p className="text-xs uppercase tracking-wider text-primary font-medium mb-1">Результат</p>
                           <p className="text-sm text-text-primary leading-relaxed">{item.result}</p>
                        </div>
                     </div>
                  </CardContent>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
