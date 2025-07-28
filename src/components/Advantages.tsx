import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const items = [
  {
    type: 'text',
    title: 'Закрита територія',
    desc: [
      '◼︎ Закрита територія з системою контролю доступу, відеоспостереженням та круглодобовою охороною.',
      '◼︎ Тихий приватний сектор',
      '◼︎ Паркомісце для 2 авто біля кожного будинку',
    ],
  },
  { type: 'image', img: '/advantages/advantages5.jpg', alt: 'Image 1' },
  {
    type: 'text',
    title: 'Розвинена інфраструктура',
    desc: [
      '◼︎ В 100 м знаходиться зупинка громадського транспорту',
      '◼︎ 500 м до центра с.Прилиманське, де розташовані: школа, дитячий садок, лікарня, аптека, спортклуб, торговий цент, кафе, перукарня тощо',
      '◼︎ Відстань до м.Одеса 10 км, до Промринка 7 км - 5 км',
    ],
  },
  { type: 'image', img: '/advantages/advantages.jpg', alt: 'Image 2' },
  {
    type: 'text',
    title: 'Комфорт та затишок',
    desc: [
      '◼︎ Котеджне містечко знаходиться в тихому приватному секторі на березі Сухого лиману, що знаходиться в 15 км від м.Одеса',
      '◼︎ Обладнана зона відпочинку та дитячий майданчик.',
      '◼︎ Прибудинковий ландшафтний дизайн',
      '◼︎ Власна територія з барбекю',
    ],
  },
  { type: 'image', img: '/advantages/advantages1.jpg', alt: 'Image 3' },
  {
    type: 'text',
    title: 'Вигідні та гнучкі цінові умови придбання нерухомості ',
    desc: [
      '◼︎ Вибір варіантів планувань будинків, оздоблення від будівельників та оздоблення під ключ',
      '◼︎ Безвідсоткове розтермінування платежу,',
      '◼︎ Є Оселя',
      '◼︎ Іпотечне кредитування',
      '◼︎ Державний акт на землю',
      '◼︎ Технічний паспорт',
    ],
  },
  { type: 'image', img: '/advantages/1.jpg', alt: 'Image 4' },
  {
    type: 'text',
    title: 'Автономність та енергоефективність',
    desc: [
      '◼︎ Кожен будинок обладнаний комунікаціями: підведено воду, газ та електроенергію',
      '◼︎ Виділена електрична потужність на будинок 10 кВт',
      '◼︎ Центральний водопровід на централізована каналізація',
      '◼︎ Газ заведений під котел та газову плиту з установкою редуктора',
      '◼︎ Генератор для загальний потреб',
    ],
  },
];

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export default function GridAdvantages() {
  return (
    <section
      id="advantages"
      data-theme="light"
      className="w-full bg-gray-100 py-20"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-widest text-gray-400 font-medium">
            Чому ми?
          </p>
          <h2 className="text-4xl font-semibold mt-2">
            Переваги проживання у{' '}
            <span className="text-yellow-500">КМ Липовий Гай</span>
          </h2>
        </div>

        {/* Сетка */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) =>
            item.type === 'text' ? (
              <motion.div
                key={i}
                custom={i}
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col items-center justify-center p-6 bg-white text-center transform transition duration-300 hover:scale-[1.02] hover:shadow-md"
              >
                <h3 className="text-[18px] font-semibold mb-2">{item.title}</h3>
                {Array.isArray(item.desc) ? (
                  <ul className="text-gray-600 text-[14px] list-disc list-inside text-left">
                    {item.desc.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                )}
              </motion.div>
            ) : (
              <motion.div
                key={i}
                custom={i}
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-md"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-80 object-cover"
                />
              </motion.div>
            )
          )}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-2">Потрібна консультація?</h3>
          <button className="border border-white text-[18px] text-white py-3 px-6 rounded-md bg-[#3A8278] backdrop-blur-md hover:border-[#3A8278] hover:bg-transparent hover:text-black transition">
            <Link to="#contact">Зв’язатись з нами</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
