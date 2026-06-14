import { PageLayout } from '@/components/layout/PageLayout';
import { CallToActionSection } from '@/components/sections/CallToActionSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакты | CRM & Setup',
  description: 'Свяжитесь с нами для обсуждения вашего проекта или заказа бесплатного аудита.',
};

export default function ContactsPage() {
  return (
    <>
      <PageLayout 
        title="Контакты" 
        description="Обсудим ваш процесс и покажем, как его ускорить."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Написать нам</h3>
            <p className="text-text-secondary mb-2">Telegram: <a href="https://t.me/" className="text-primary">@username</a></p>
            <p className="text-text-secondary">Email: <a href="mailto:hello@example.com" className="text-primary">hello@example.com</a></p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Позвонить</h3>
            <p className="text-text-secondary"><a href="tel:+70000000000" className="text-primary">+7 (000) 000-00-00</a></p>
          </div>
        </div>
      </PageLayout>
      <CallToActionSection />
    </>
  );
}
