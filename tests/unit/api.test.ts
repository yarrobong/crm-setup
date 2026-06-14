import { expect, test, describe, vi, beforeEach } from 'vitest';
import { POST } from '@/app/api/leads/route';

// Mock the global fetch
global.fetch = vi.fn();

describe('API Route /api/leads', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  const validPayload = {
    name: 'Иван',
    contact: '+79998887766',
    consent: true,
    utm_source: 'test'
  };

  const createRequest = (body: any, ip: string = '127.0.0.1') => {
    return new Request('http://localhost:3000/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': ip
      },
      body: JSON.stringify(body)
    });
  };

  test('1. Valid request fails if no integrations are configured in production', async () => {
    process.env.NODE_ENV = 'production';
    process.env.BITRIX_WEBHOOK_URL = '';
    process.env.TELEGRAM_BOT_TOKEN = '';
    
    const req = createRequest(validPayload);
    const res = await POST(req);
    expect(res.status).toBe(500);
    
    const json = await res.json();
    expect(json.success).toBe(false);
  });

  test('2. Invalid request returns 400', async () => {
    const req = createRequest({ name: 'I' }); 
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  test('3. No consent returns 400', async () => {
    const req = createRequest({ ...validPayload, consent: undefined });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  test('4. Honeypot triggers success without processing', async () => {
    const req = createRequest({ ...validPayload, phone_number: 'bot-filled-this' });
    const res = await POST(req);
    expect(res.status).toBe(200);
    expect(fetch).not.toHaveBeenCalled();
  });

  test('5. Rate limit is enforced', async () => {
    const ip = '192.168.1.100';
    for (let i = 0; i < 5; i++) {
      await POST(createRequest(validPayload, ip));
    }
    const resLimited = await POST(createRequest(validPayload, ip));
    expect(resLimited.status).toBe(429);
  });

  test('6. Bitrix success, Telegram fails', async () => {
    process.env.NODE_ENV = 'production';
    process.env.BITRIX_WEBHOOK_URL = 'https://bitrix.url/';
    process.env.TELEGRAM_BOT_TOKEN = '123';
    process.env.TELEGRAM_CHAT_ID = '321';

    (fetch as any).mockImplementation((url: string) => {
      if (url.includes('bitrix.url')) {
        return Promise.resolve({ ok: true });
      }
      return Promise.resolve({ ok: false });
    });

    const req = createRequest(validPayload, 'ip-6');
    const res = await POST(req);
    expect(res.status).toBe(200);
  });

  test('7. Telegram success, Bitrix fails', async () => {
    process.env.NODE_ENV = 'production';
    process.env.BITRIX_WEBHOOK_URL = 'https://bitrix.url/';
    process.env.TELEGRAM_BOT_TOKEN = '123';
    process.env.TELEGRAM_CHAT_ID = '321';

    (fetch as any).mockImplementation((url: string) => {
      if (url.includes('api.telegram.org')) {
        return Promise.resolve({ ok: true });
      }
      return Promise.resolve({ ok: false });
    });

    const req = createRequest(validPayload, 'ip-7');
    const res = await POST(req);
    expect(res.status).toBe(200);
  });

  test('8. Both fail', async () => {
    process.env.NODE_ENV = 'production';
    process.env.BITRIX_WEBHOOK_URL = 'https://bitrix.url/';
    process.env.TELEGRAM_BOT_TOKEN = '123';
    process.env.TELEGRAM_CHAT_ID = '321';

    (fetch as any).mockResolvedValue({ ok: false });

    const req = createRequest(validPayload, 'ip-8');
    const res = await POST(req);
    expect(res.status).toBe(500);
  });

  test('9. No integration configured', async () => {
    process.env.NODE_ENV = 'production';
    process.env.BITRIX_WEBHOOK_URL = '';
    process.env.TELEGRAM_BOT_TOKEN = '';
    
    const req = createRequest(validPayload, 'ip-9');
    const res = await POST(req);
    expect(res.status).toBe(500);
  });

  test('10. Timeout of external service', async () => {
    process.env.NODE_ENV = 'production';
    process.env.BITRIX_WEBHOOK_URL = 'https://bitrix.url/';
    process.env.TELEGRAM_BOT_TOKEN = '123';
    process.env.TELEGRAM_CHAT_ID = '321';

    (fetch as any).mockRejectedValue(new Error('Network error')); // Simulate timeout

    const req = createRequest(validPayload, 'ip-10');
    const res = await POST(req);
    expect(res.status).toBe(500);
  });

  test('11. UTM passed correctly', async () => {
    process.env.NODE_ENV = 'production';
    process.env.TELEGRAM_BOT_TOKEN = '123';
    process.env.TELEGRAM_CHAT_ID = '321';
    
    (fetch as any).mockResolvedValue({ ok: true });

    const req = createRequest({ ...validPayload, utm_source: 'yandex' }, 'ip-11');
    await POST(req);
    
    const calls = (fetch as any).mock.calls;
    const tgCall = calls.find((call: any[]) => call[0].includes('api.telegram.org'));
    
    expect(tgCall).toBeDefined();
    const tgBody = JSON.parse(tgCall[1].body);
    expect(tgBody.text).toContain('UTM Source: yandex');
  });

});
