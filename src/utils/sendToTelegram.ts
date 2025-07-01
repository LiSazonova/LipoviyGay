export const sendToTelegram = async ({
    name,
    phone,
    message,
  }: {
    name: string;
    phone: string;
    message: string;
  }) => {
    const TOKEN = '7794741181:AAEElfuQrX9D_sxVmnFI3r8Fb9eywOsdsfM';
  
    const CHAT_IDS = [
      '1263617603',     // ← твой Telegram ID
      '144775962',      // ← сюда вставь ID заказчика
    ];
  
    const text = `
  📬 <b>Нова заявка з сайту</b>
  👤 <b>Ім’я:</b> ${name}
  📞 <b>Телефон:</b> ${phone}
  📝 <b>Повідомлення:</b> ${message || '—'}
  `;
  
    // Отправим сообщение всем чатам по очереди
    try {
      const results = await Promise.all(
        CHAT_IDS.map((chatId) =>
          fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              chat_id: chatId,
              text,
              parse_mode: 'HTML',
            }),
          })
        )
      );
  
      return results.every((res) => res.ok);
    } catch (error) {
      console.error('Помилка при надсиланні Telegram:', error);
      return false;
    }
  };
  