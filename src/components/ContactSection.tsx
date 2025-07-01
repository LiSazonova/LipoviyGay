import { useState } from 'react';
import { sendToTelegram } from '../utils/sendToTelegram'; // путь к функции

const ContactSection = () => {
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
    <section
      data-theme="light"
      id="contact"
      className="bg-white text-black py-20 px-4"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-8">Зв'язатись з нами</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 text-black "
          >
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
              <p className="text-green-600 text-sm mt-2">
                ✅ Заявка надіслана!
              </p>
            )}
          </form>
        </div>

        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="Місцезнаходження"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2329.596634263222!2d30.618659728480996!3d46.410265352477836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c7cd00094cf967%3A0x556decd47d0c306e!2z0JrQvtGC0LXQtNC20L3QtSDQvNGW0YHRgtC10YfQutC-ICLQm9C40L_QvtCy0LjQuSDQk9Cw0Lki!5e0!3m2!1sru!2sua!4v1749213748405!5m2!1sru!2sua"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
