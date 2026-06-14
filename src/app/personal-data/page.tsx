import { PageLayout } from '@/components/layout/PageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Согласие на обработку персональных данных | CRM & Setup',
  description: 'Согласие на обработку персональных данных.',
};

export default function PersonalDataPage() {
  return (
    <PageLayout title="Согласие на обработку персональных данных">
      <div className="prose prose-sm md:prose-base max-w-none text-text-secondary">
        <p>Оставляя заявку на сайте, вы даете свое согласие оператору [ДАННЫЕ ОПЕРАТОРА], ИНН [ИНН] (далее - Оператор), на обработку своих персональных данных со следующими условиями:</p>
        <ol>
          <li>Данное Согласие дается на обработку персональных данных, как без использования средств автоматизации, так и с их использованием.</li>
          <li>Согласие дается на обработку следующих персональных данных: фамилия, имя, отчество; номер телефона; адрес электронной почты; пользовательские данные.</li>
        </ol>
      </div>
    </PageLayout>
  );
}
