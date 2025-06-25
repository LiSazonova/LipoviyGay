import { useEffect, useState, useRef } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const TelegramModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [wasDismissed, setWasDismissed] = useState(false);
  const [buttonTheme, setButtonTheme] = useState<'dark' | 'light'>('dark');
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Появление модалки один раз при скролле вниз
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.offsetHeight;

      if (
        scrollY + windowHeight >= fullHeight - 200 &&
        !showModal &&
        !wasDismissed
      ) {
        setShowModal(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showModal, wasDismissed]);

  const handleClose = () => {
    setShowModal(false);
    setWasDismissed(true);
  };

  const handleOpen = () => {
    setShowModal(true);
  };

  // Отслеживание текущей секции под кнопкой
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (!visibleEntry) return;

        const theme = visibleEntry.target.getAttribute('data-theme');
        if (theme === 'dark') {
          setButtonTheme('light');
        } else {
          setButtonTheme('dark');
        }
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    const sections = document.querySelectorAll('[data-theme]');
    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Модальное окно */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-7 rounded-xl shadow-xl max-w-sm w-full text-center relative"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-lg"
              >
                ✕
              </button>
              <div>
                <h2 className="text-xl font-bold mb-4">
                  Підпишіться на Telegram-бот, щоб отримувати актуальну
                  інформацію про:
                </h2>
                <ul>
                  <li>• Хід будівництва</li>
                  <li>• Нові планування</li>
                  <li>• Актуальні ціни</li>
                  <li>• Акції та спецпропозиції</li>
                </ul>

                <a
                  href="https://t.me/dimria_subscribe_bot/?start=newbuildId=12417"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#3A8278] text-white px-4 py-2 rounded-md mt-4 hover:bg-[#2e685e]"
                >
                  <FaTelegramPlane className="inline-block mr-2" />
                  Підписатися
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Плавающая кнопка */}
      {!showModal && wasDismissed && (
        <motion.button
          ref={buttonRef}
          onClick={handleOpen}
          initial={false}
          animate={
            buttonTheme === 'light'
              ? {
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  border: '1px solid #ccc',
                }
              : {
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  border: '1px solid transparent',
                }
          }
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 z-40 px-5 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm md:text-base"
        >
          <FaTelegramPlane />
          Оновлення
        </motion.button>
      )}
    </>
  );
};

export default TelegramModal;
