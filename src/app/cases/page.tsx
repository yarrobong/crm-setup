import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { CallToActionSection } from '@/components/sections/CallToActionSection';
import { Card, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кейсы внедрения CRM | CRM & Setup',
  description: 'Практические кейсы внедрения CRM. Пример настроек, логики процессов и результатов внедрения систем автоматизации продаж.',
};

export default function CasesPage() {
  return (
    <>
      <PageLayout 
        title="Практические кейсы" 
        description="Примеры настроек, логики процессов и результатов внедрения."
      >
        <div className="mb-24">
          <Card className="flex flex-col md:flex-row overflow-hidden hover:shadow-lg transition-shadow border-primary/20">
            <div className="w-full md:w-5/12 bg-surface border-b md:border-b-0 md:border-r border-border-light relative min-h-[250px] md:min-h-auto">
                <div className="absolute top-4 left-4 z-10">
                    <span className="bg-text-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    Демо-кейс
                    </span>
                </div>
                <div className="absolute inset-0 bg-primary/5 flex items-center justify-center p-8">
                    {/* Визуальная заглушка процесса */}
                    <div className="w-full max-w-[280px] space-y-3 opacity-80">
                        <div className="h-10 bg-white rounded-md shadow-sm border border-border-light flex items-center px-4">
                            <div className="w-3 h-3 rounded-full bg-status-success mr-3" />
                            <div className="h-3 w-24 bg-border-light rounded" />
                        </div>
                        <div className="flex justify-center">
                            <div className="w-px h-6 bg-border-light" />
                        </div>
                        <div className="h-10 bg-white rounded-md shadow-sm border border-border-light flex items-center px-4">
                            <div className="w-3 h-3 rounded-full justify-center text-[10px] items-center bg-primary text-white mr-3" />
                            <div className="h-3 w-32 bg-border-light rounded" />
                        </div>
                        <div className="flex justify-center">
                            <div className="w-px h-6 bg-border-light" />
                        </div>
                        <div className="h-10 bg-primary-light rounded-md shadow-sm border border-primary/20 flex items-center px-4">
                            <div className="w-3 h-3 rounded-full bg-primary mr-3 animate-pulse" />
                            <div className="h-3 w-20 bg-primary/30 rounded" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="w-full md:w-7/12 p-8 flex flex-col justify-between">
                <div>
                    <div className="text-sm text-primary font-medium mb-2 uppercase tracking-wide">Развлечения, Офлайн-услуги</div>
                    <CardTitle className="text-2xl mb-4 text-text-primary">
                        Автоматизация бронирования для VR-клуба
                    </CardTitle>
                    <p className="text-text-secondary mb-6 leading-relaxed">
                        Настроена логика приёма заявок на бронирование времени. Менеджеры моментально получают задачу обработать лид, а система автоматически контролирует факты оплаты и напоминает клиентам о визите за сутки.
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-status-success shrink-0 mt-0.5" />
                            <span className="text-sm font-medium">Меньше необработанных заявок в пиковые часы</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-status-success shrink-0 mt-0.5" />
                            <span className="text-sm font-medium">Единая история и контроль предоплат</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <Link href="/cases/vr-club" className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors group">
                        Подробный разбор
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
          </Card>
        </div>
      </PageLayout>
      <CallToActionSection />
    </>
  );
}
