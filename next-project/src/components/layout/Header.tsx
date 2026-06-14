"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Settings2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils';

const NAVIGATION = [
  { name: 'Услуги', href: '/services' },
  { name: 'Решения', href: '/solutions' },
  { name: 'Кейсы', href: '/cases' },
  { name: 'Цены', href: '/pricing' },
  { name: 'О нас', href: '/about' },
  { name: 'Блог', href: '/blog' },
];

/**
 * Верхняя панель навигации (Header)
 */
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-md border-b border-border-light transition-all">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex h-20 items-center justify-between">
          
          {/* Логотип */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white">
              <Settings2 className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
            </div>
            <div className="font-semibold text-lg leading-tight">
              <span className="block text-text-primary">CRM & Setup</span>
              <span className="block text-xs text-text-secondary font-normal">Автоматизация процессов</span>
            </div>
          </Link>

          {/* Desktop Навигация */}
          <nav className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-text-secondary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Действия */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+70000000000" className="text-sm font-medium hover:text-primary transition-colors">
              +7 (000) 000-00-00
            </a>
            <Button size="sm">
              Получить аудит
            </Button>
          </div>

          {/* Mobile кнопка меню */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Открыть меню"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Меню */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-surface z-40 overflow-y-auto px-4 py-6 border-t border-border-light">
          <nav className="flex flex-col gap-6">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-border-light flex flex-col gap-4">
              <a href="tel:+70000000000" className="text-lg font-medium">
                +7 (000) 000-00-00
              </a>
              <Button className="w-full justify-between">
                Получить бесплатный аудит
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
