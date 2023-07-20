import {NextRequest, NextResponse} from 'next/server';

export async function POST(req: NextRequest) {
  const {text}: {text: string} = await req.json();

  if (!text) {
    throw new Error('Отсутствует текст сообщения');
  }

  const token = process.env.NEXT_TELEGRAM_TOKEN;
  const chatId = process.env.NEXT_TELEGRAM_CHATID;
  const telegramApi = `https://api.telegram.org/bot${token}`;

  if (!token || !chatId) {
    throw new Error('Ошибка авторизации TelegramAPI');
  }

  const body = {
    chat_id: chatId,
    parse_mode: 'html',
    text,
  };

  await fetch(`${telegramApi}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(body),
  });

  return NextResponse.json({message: 'Сообщение успешно отправлено'});
}
