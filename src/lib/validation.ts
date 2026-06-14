import { z } from 'zod';

export const leadFormSchema = z.object({
  name: z.string().min(2, { message: 'Имя должно содержать минимум 2 символа' }).max(50),
  contact: z.string().min(5, { message: 'Введите корректный номер или Telegram' }).max(100),
  industry: z.string().optional(),
  description: z.string().max(500, { message: 'Описание не может превышать 500 символов' }).optional(),
  
  // Honeypot field (hidden from users, bots might fill it)
  phone_number: z.string().optional(),
  
  // Metadata
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  referrer: z.string().optional(),
  landing_page: z.string().optional(),
  service_slug: z.string().optional(),
  
  // Consent
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Вы должны дать согласие на обработку персональных данных' })
  }),
}).passthrough(); // Allow passthrough for other arbitrary URL params if needed

export type LeadFormData = z.infer<typeof leadFormSchema>;

