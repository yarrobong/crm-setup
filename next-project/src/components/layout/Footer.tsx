import Link from 'next/link';
import { Settings2, Send } from 'lucide-react';

const FOOTER_LINKS = {
  services: [
    { name: 'Внедрение Bitrix24', href: '/services/bitrix24' },
    { name: 'Аудит CRM', href: '/services/crm-audit' },
    { name: 'Автоматизация продаж', href: '/services/sales-automation' },
    { name: 'Интеграции', href: '/services/integrations' },
  ],
  company: [
    { name: 'О нас', href: '/about' },
    { name: 'Кейсы', href: '/cases' },
    { name: 'Цены', href: '/pricing' },
    { name: 'Блог', href: '/blog' },
  ],
  documents: [
    { name: 'Политика конфиденциальности', href: '/privacy' },
    { name: 'Согласие на обработку данных', href: '/personal-data' },
  ]
};

/**
 * Подвал сайта (Footer)
 */
export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white">
                <Settings2 className="w-5 h-5" />
              </div>
              <span className="font-semibold text-lg text-white">CRM & Setup</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Настраиваем CRM и автоматизируем продажи под реальные процессы бизнеса. Собираем систему, в которой заявки не теряются.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://t.me/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white tracking-wide">Услуги</h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              {FOOTER_LINKS.services.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white tracking-wide">Компания</h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              {FOOTER_LINKS.company.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white tracking-wide">Контакты</h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              <li>
                <a href="tel:+70000000000" className="text-lg font-medium text-white hover:text-primary transition-colors">
                  +7 (000) 000-00-00
                </a>
              </li>
              <li>
                <a href="mailto:hello@example.com" className="hover:text-white transition-colors">
                  hello@example.com
                </a>
              </li>
              <li className="pt-4">
                <p>Работаем онлайн по всему миру.</p>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium tracking-widest uppercase">
          <p>© {new Date().getFullYear()} CRM & Setup. Все права защищены.</p>
          <div className="flex items-center gap-6">
            {FOOTER_LINKS.documents.map(link => (
              <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
