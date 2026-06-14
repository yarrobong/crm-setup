import { MessageCircle, Mail, Phone, Globe, Database, Settings, Webhook, Monitor } from 'lucide-react';

const INTEGRATIONS = [
  { name: 'Bitrix24', icon: Database },
  { name: 'Telegram', icon: MessageCircle },
  { name: 'WhatsApp', icon: MessageCircle },
  { name: 'Телефония', icon: Phone },
  { name: 'Почта', icon: Mail },
  { name: 'Сайт', icon: Globe },
  { name: 'Таблицы', icon: Monitor },
  { name: 'API', icon: Webhook },
];

/**
 * Панель интеграций
 */
export function IntegrationsPanel() {
  return (
    <section className="py-12 border-y border-border-light bg-surface mt-10">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <p className="text-center text-sm font-medium text-text-secondary uppercase tracking-wider mb-8">
          Объединяем сервисы, которыми уже пользуется бизнес
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {INTEGRATIONS.map((app) => {
            const Icon = app.icon;
            return (
              <div key={app.name} className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                <Icon className="w-6 h-6 text-primary" />
                <span className="font-semibold text-text-primary">{app.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
