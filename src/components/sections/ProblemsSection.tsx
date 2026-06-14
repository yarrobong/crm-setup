import Link from 'next/link';
import { ShieldAlert, UserX, Clock, BarChart3, Bot, LayoutTemplate, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';

const PROBLEMS = [
  {
    icon: ShieldAlert,
    title: 'Заявки теряются',
    description: 'Обращения из разных мессенджеров, почты и форм на сайте не попадают в единую базу.',
    link: '/solutions/lead-control'
  },
  {
    icon: UserX,
    title: 'Менеджеры забывают о клиентах',
    description: 'Без автоматических напоминаний и задач сделки останавливаются или проигрываются.',
    link: '/solutions/automatic-tasks'
  },
  {
    icon: Clock,
    title: 'Сделки без движения',
    description: 'Клиенты "думают" неделями, потому что нет прозрачной системы фоллоу-апов.',
    link: '/services/sales-automation'
  },
  {
    icon: BarChart3,
    title: 'Нет аналитики',
    description: 'Руководитель опирается на слова сотрудников, а не на реальные показатели воронки.',
    link: '/services/crm-audit'
  },
  {
    icon: Bot,
    title: 'Сотрудники выполняют рутину',
    description: 'Вместо продаж менеджеры переносят данные руками из таблиц в мессенджеры и обратно.',
    link: '/services/integrations'
  },
  {
    icon: LayoutTemplate,
    title: 'CRM есть, но не работает',
    description: 'Система заполнена неправильно, этапы воронки не соответствуют реальному процессу.',
    link: '/services/bitrix24'
  }
];

export function ProblemsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
            Где бизнес теряет заявки и время
          </h2>
          <p className="text-xl text-text-secondary">
            Типичные проблемы процессов, которые можно решить грамотной настройкой.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="flex flex-col h-full hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-surface border border-border-light flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-status-warning" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-text-secondary mb-6 flex-grow">
                    {item.description}
                  </p>
                  <Link 
                    href={item.link}
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors group text-sm"
                  >
                    Подходящее решение
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
