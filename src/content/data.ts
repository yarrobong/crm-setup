import { ServiceType, CaseType, SolutionType } from '@/types';

export const servicesData: ServiceType[] = [
  {
    slug: 'bitrix24',
    title: 'Внедрение Битрикс24',
    description: 'Полная настройка портала под ваши бизнес-процессы.',
    shortDescription: 'Настройка Bitrix24',
    metadata: { title: 'Внедрение Битрикс24 | CRM & Setup', description: 'Полный цикл настройки Битрикс24.' },
  },
  {
    slug: 'crm-audit',
    title: 'Аудит текущей CRM',
    description: 'Найдем ошибки и предложим варианты улучшений.',
    shortDescription: 'Аудит CRM',
    metadata: { title: 'Аудит CRM | CRM & Setup', description: 'Бесплатный аудит вашей системы.' },
  },
  {
    slug: 'sales-automation',
    title: 'Автоматизация продаж',
    description: 'Ускорьте цикл сделки и сократите издержки.',
    shortDescription: 'Автоматизация отдела продаж',
    metadata: { title: 'Автоматизация продаж | CRM & Setup', description: 'Построение автоматизированных воронок.' },
  },
  {
    slug: 'integrations',
    title: 'Интеграции сервисов',
    description: 'Связываем маркетинг, продажи и учетные системы.',
    shortDescription: 'Интеграция по API',
    metadata: { title: 'Интеграции сервисов | CRM & Setup', description: 'Надежные интеграции по API.' },
  }
];

export const casesData: CaseType[] = [
  {
    slug: 'vr-club',
    title: 'Автоматизация бронирования для VR-клуба',
    industry: 'Развлечения, Офлайн-услуги',
    description: 'Настроена логика приёма заявок на бронирование времени. Менеджеры моментально получают задачу обработать лид.',
    metadata: { title: 'Кейс: VR-клуб | CRM & Setup', description: 'Автоматизация бронирования.' },
  }
];

export const solutionsData: SolutionType[] = [
  {
    slug: 'lead-control',
    title: 'Контроль лидов',
    description: 'Единая система учета без потерь.',
    metadata: { title: 'Контроль лидов | CRM & Setup', description: 'Решения для маркетинга.' },
  },
  {
    slug: 'automatic-tasks',
    title: 'Автоматические задачи',
    description: 'Маршрутизация бизнес-процессов.',
    metadata: { title: 'Автоматические задачи | CRM & Setup', description: 'Решения для отдела продаж.' },
  }
];
