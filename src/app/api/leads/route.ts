import { NextResponse } from 'next/server';
import { leadFormSchema } from '@/lib/validation';

// Rate limiting in memory (basic implementation for a single instance)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_POINTS = 5; // max 5 requests
const RATE_LIMIT_DURATION = 60 * 1000; // per minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.lastReset > RATE_LIMIT_DURATION) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (record.count >= RATE_LIMIT_POINTS) {
    return false;
  }

  record.count += 1;
  return true;
}

async function sendToBitrix(data: any): Promise<boolean> {
  const webhookUrl = process.env.BITRIX_WEBHOOK_URL;
  if (!webhookUrl) return false;

  try {
    const response = await fetch(`${webhookUrl}crm.lead.add.json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: {
          TITLE: `Заявка с сайта от ${data.name}`,
          NAME: data.name,
          COMMENTS: `${data.description || ''}\nОтрасль: ${data.industry || ''}\n\nUTM Source: ${data.utm_source || ''}\nUTM Medium: ${data.utm_medium || ''}\nUTM Campaign: ${data.utm_campaign || ''}\nReferrer: ${data.referrer || ''}\nLanding Page: ${data.landing_page || ''}\nService: ${data.service_slug || ''}`,
          SOURCE_ID: 'WEB',
          // Assuming the contact could be a phone number or tg username
          PHONE: [{ VALUE: data.contact, VALUE_TYPE: 'WORK' }],
        },
        params: { REGISTER_SONET_EVENT: 'Y' }
      }),
    });
    return response.ok;
  } catch (error) {
    console.error('Error sending to Bitrix24');
    return false;
  }
}

async function sendToTelegram(data: any): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;

  const text = `
🔥 Новая заявка с сайта!
Имя: ${data.name}
Контакт: ${data.contact}
Отрасль: ${data.industry || 'Не указана'}
Описание: ${data.description || 'Нет'}
---
UTM Source: ${data.utm_source || '-'}
UTM Medium: ${data.utm_medium || '-'}
UTM Campaign: ${data.utm_campaign || '-'}
Referrer: ${data.referrer || '-'}
Landing Page: ${data.landing_page || '-'}
Услуга: ${data.service_slug || '-'}
  `.trim();

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
    return response.ok;
  } catch (error) {
    console.error('Error sending to Telegram');
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    
    // Rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ success: false, message: 'Слишком много запросов. Попробуйте позже.' }, { status: 429 });
    }

    const body = await req.json();
    const data = leadFormSchema.parse(body);

    // Honeypot check
    if (data.phone_number) {
      // It's a bot
      return NextResponse.json({ success: true, message: 'Заявка успешно отправлена' }, { status: 200 });
    }

    const isTestMode = process.env.NODE_ENV === 'development';
    
    const bitrixSuccess = await sendToBitrix(data);
    const telegramSuccess = await sendToTelegram(data);
    
    // We consider it a success if AT LEAST one integration succeeded, or if we are in dev mode
    if (bitrixSuccess || telegramSuccess || isTestMode) {
      if (isTestMode) {
        console.log('Dev mode: lead processed', data);
      }
      return NextResponse.json({ success: true, message: 'Заявка успешно отправлена' }, { status: 200 });
    }

    console.error('All lead delivery channels failed');
    return NextResponse.json({ success: false, message: 'Ошибка при отправке. Пожалуйста, попробуйте еще раз.' }, { status: 500 });

  } catch (error) {
    return NextResponse.json({ success: false, message: 'Ошибка валидации данных' }, { status: 400 });
  }
}
