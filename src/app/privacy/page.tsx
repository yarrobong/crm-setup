import { PageLayout } from '@/components/layout/PageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | CRM & Setup',
  description: 'Политика обработки персональных данных.',
};

export default function PrivacyPage() {
  return (
    <PageLayout title="Политика конфиденциальности">
      <div className="prose prose-sm md:prose-base max-w-none text-text-secondary">
        <h2>1. Общие положения</h2>
        <p>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые Оператором (далее — Оператор).</p>
        <h2>2. Данные оператора</h2>
        <p>ИП/ООО: [ДАННЫЕ ОПЕРАТОРА]<br/>ИНН: [ИНН]</p>
        <p>Контактный email: [EMAIL]</p>
      </div>
    </PageLayout>
  );
}
