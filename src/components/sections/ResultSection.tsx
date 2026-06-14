import { XCircle, CheckCircle2 } from 'lucide-react';

const BEFORE = [
  'Заявки в разных каналах и почтах',
  'Ручные напоминания в блокнотах',
  'Неизвестный текущий статус клиента',
  'Отдельные таблицы для учёта и оплат',
  'Полное отсутствие контроля сроков',
];

const AFTER = [
  'Единая карточка сделки в системе',
  'Автоматические задачи исполнителям',
  'Понятная и структурированная воронка',
  'Контроль сроков и уведомления',
  'Прозрачный отчёт руководителю',
  'Полная история взаимодействий',
];

export function ResultSection() {
  return (
    <section className="py-24 bg-surface border-y border-border-light">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary text-center mb-16">
          Как выглядит работа после автоматизации
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* До */}
          <div className="bg-background rounded-2xl p-8 lg:p-12 border border-border-light">
            <div className="text-status-warning font-semibold text-lg mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-status-warning/10 flex items-center justify-center">
                <XCircle className="w-5 h-5" />
              </span>
              До автоматизации
            </div>
            <ul className="space-y-6">
              {BEFORE.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-text-secondary">
                  <XCircle className="w-5 h-5 shrink-0 mt-0.5 text-status-warning/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* После */}
          <div className="bg-primary/5 rounded-2xl p-8 lg:p-12 border border-primary/20 relative overflow-hidden">
            <div className="text-primary font-semibold text-lg mb-8 flex items-center gap-3 relative z-10">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </span>
              Управляемый процесс
            </div>
            <ul className="space-y-6 relative z-10">
              {AFTER.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-text-primary font-medium">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-status-success" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            {/* Градиент на фоне */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
