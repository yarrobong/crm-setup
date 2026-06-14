import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

/**
 * Первый экран главной страницы (Hero)
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary font-bold text-xs border border-primary/20 mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Внедрение CRM и автоматизация процессов
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-text-primary mb-8 leading-[1.1]">
            Настраиваем CRM <br className="hidden md:block" /> под ваш бизнес и автоматизируем продажи
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-12 max-w-2xl mx-auto">
            Собираем систему, в которой заявки не теряются, менеджеры вовремя получают задачи, а руководитель видит реальную картину по каждой сделке.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-medium group">
              Получить бесплатный разбор
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-medium">
              <Play className="w-5 h-5 mr-2" />
              Посмотреть демонстрацию
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4 text-sm text-text-secondary font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-status-success" />
              Фиксируем объём до старта
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-status-success" />
              Показываем на тестовых данных
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-status-success" />
              Обучаем и поддерживаем
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Декоративный фон */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50 block" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />
      </div>
    </section>
  );
}
