import { expect, test, describe } from 'vitest';
import { leadFormSchema } from '@/lib/validation';

describe('Lead Form Validation', () => {
  test('validates correct data', () => {
    const data = {
      name: 'Иван',
      contact: '+79998887766',
      industry: 'IT',
      description: 'Need CRM',
      consent: true
    };
    
    const result = leadFormSchema.safeParse(data);
    expect(result.success).toBe(true);
  });

  test('fails on short name', () => {
    const data = {
      name: 'I',
      contact: '+79998887766',
      consent: true
    };
    
    const result = leadFormSchema.safeParse(data);
    expect(result.success).toBe(false);
  });

  test('fails on missing consent', () => {
    const data = {
      name: 'Иван',
      contact: '+79998887766',
    };
    
    const result = leadFormSchema.safeParse(data);
    expect(result.success).toBe(false);
  });

  test('fails on false consent', () => {
    const data = {
      name: 'Иван',
      contact: '+79998887766',
      consent: false,
    };
    
    const result = leadFormSchema.safeParse(data);
    expect(result.success).toBe(false);
  });
});
