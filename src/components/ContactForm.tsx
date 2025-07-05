import { useState } from 'react';
import { sendToTelegram } from '../utils/sendToTelegram';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const ok = await sendToTelegram(form);
      if (ok) {
        setSuccess(true);
        setForm({ name: '', phone: '', message: '' });
      } else {
        alert('Помилка при відправці. Спробуйте ще раз.');
      }
    } catch (err) {
      console.error(err);
      alert('Щось пішло не так. Перевірте зʼєднання.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black">
      <input
        type="text"
        name="name"
        placeholder="Ваше ім’я"
        required
        value={form.name}
        onChange={handleChange}
        className="p-4 border border-black rounded-xl outline-none focus:border-[#3A8278]"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Телефон"
        required
        value={form.phone}
        onChange={handleChange}
        className="p-4 border border-black rounded-xl outline-none focus:border-[#3A8278]"
      />
      <textarea
        name="message"
        rows={4}
        placeholder="Ваше повідомлення"
        value={form.message}
        onChange={handleChange}
        className="p-4 border border-black rounded-xl outline-none resize-none focus:border-[#3A8278]"
      />
      <button
        type="submit"
        disabled={isSending}
        className="border border-white text-[18px] text-white py-3 px-6 rounded-md bg-[#3A8278] backdrop-blur-md hover:border-[#3A8278] hover:bg-transparent hover:text-black transition"
      >
        {isSending ? 'Надсилаємо...' : 'Надіслати'}
      </button>
      {success && (
        <p className="text-green-600 text-sm mt-2">✅ Заявка надіслана!</p>
      )}
    </form>
  );
};

export default ContactForm;
