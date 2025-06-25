import { FaTelegramPlane } from 'react-icons/fa';

const SubscribeTelegram = () => {
  return (
    <section className="bg-[#F7F7F7] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Підпишіться на оновлення <br />{' '}
          <span className="text-[#3A8278]">КМ Липовий гай</span>
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Будьте в курсі всіх важливих новин:
        </p>
        <ul className="text-gray-600 text-md space-y-1 mb-6">
          <li>— Хід будівництва</li>
          <li>— Актуалізація ціни</li>
          <li>— Нові пропозиції планувань</li>
          <li>— Акції та спецпропозиції</li>
        </ul>
        <a
          href="https://t.me/dimria_subscribe_bot/?start=newbuildId=12417"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white bg-[#3A8278] hover:bg-[#30695f] transition px-6 py-3 rounded-full text-lg"
        >
          <FaTelegramPlane className="w-6 h-6" />
          Підписатись в Telegram
        </a>
      </div>
    </section>
  );
};

export default SubscribeTelegram;
