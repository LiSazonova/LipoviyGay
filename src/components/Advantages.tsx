// const Advantages = () => {
//   // const items = [
//   //   {
//   //     title: 'Сучасна архітектура',
//   //     text: 'Продумане планування та естетичний вигляд, який надихає.',
//   //     icon: '/icons/architecture.svg', // заменишь на свои
//   //   },
//   //   {
//   //     title: 'Якісне будівництво',
//   //     text: 'Надійні матеріали та високі стандарти виконання.',
//   //     icon: '/icons/quality.svg',
//   //   },
//   //   {
//   //     title: 'Зелена зона',
//   //     text: 'Свіже повітря, природа поруч і місце для відпочинку.',
//   //     icon: '/icons/nature.svg',
//   //   },
//   //   {
//   //     title: 'Розвинена інфраструктура',
//   //     text: 'Школи, магазини, зупинки — все поруч.',
//   //     icon: '/icons/infrastructure.svg',
//   //   },
//   // ];

//   return (
//     <section className="w-full bg-white py-20">
//       {/* контейнер */}
//       <div className="max-w-[1600px] mx-auto px-6">
//         {/* заголовок */}
//         <div className="mb-12">
//           <p className="text-sm uppercase tracking-widest text-gray-400 font-medium">
//             Чому ми?
//           </p>
//           <h2 className="text-4xl font-semibold mt-2">
//             Переваги проживання у{' '}
//             <span className="text-yellow-500">"Липовому Гаї"</span>
//           </h2>
//         </div>

//         {/* грид – адаптив */}
//         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto">
//           {/* 1 */}
//           <div className="col-span-1">
//             <img
//               src="/advantages/advantages.jpg"
//               alt="Closed territory"
//               className="w-full h-64 sm:h-56 lg:h-48 object-cover rounded-lg mb-4"
//             />
//             <h3 className="text-lg font-semibold mb-2">Закрита територія</h3>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               Територія з контролем доступу, охороною та цілодобовим
//               відеоспостереженням
//             </p>
//           </div>

//           {/* 2 */}
//           <div className="col-span-1">
//             <img
//               src="/advantages/advantages2.jpg"
//               alt="Crystal clear water and air"
//               className="w-full h-64 sm:h-56 lg:h-48 object-cover rounded-lg mb-4"
//             />
//             <h3 className="text-lg font-semibold mb-2">
//               Чисте повітря та спокій
//             </h3>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               Зручне розташування дозволяє насолоджуватися спокоєм і тишею на
//               березі лиману, далеко від міської метушні, водночас залишаючись у
//               пішій досяжності від усіх необхідних сервісів і інфраструктури.
//             </p>
//           </div>

//           {/* 3 */}
//           <div className="col-span-1">
//             <img
//               src="/advantages/advantages3.jpg"
//               alt="Sports & playgrounds"
//               className="w-full h-64 sm:h-56 lg:h-48 object-cover rounded-lg mb-4"
//             />
//             <h3 className="text-lg font-semibold mb-2">
//               Зона відпочинку та дитячий майданчик
//             </h3>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               Це місце стане ідеальним вибором для сімей, які прагнуть поєднати
//               затишок заміського життя з усіма перевагами цивілізації.
//             </p>
//           </div>

//           {/* 4 – большое изображение: span-2 на lg, span-2 на sm*/}
//           <div className="col-span-1 sm:col-span-2 lg:col-span-2">
//             <img
//               src="/images/advantage4.jpg"
//               alt="Modern architecture"
//               className="w-full h-64 sm:h-72 lg:h-[380px] object-cover rounded-lg"
//             />
//           </div>

//           {/* CTA */}
//           <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex items-end justify-center">
//             <div className="text-center">
//               <h3 className="text-xl font-semibold mb-2">Get a consultation</h3>
//               <a
//                 href="#contact"
//                 className="inline-flex items-center gap-1 text-black font-medium hover:text-yellow-500 transition"
//               >
//                 <span className="underline underline-offset-4">Contact us</span>
//                 <span aria-hidden className="inline-block translate-x-0.5">
//                   →
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     // <section className="w-full px-8 py-20 bg-[#281F18] text-white">
//     //   <div className="max-w-[1200px] mx-auto text-center">
//     //     <h2 className="text-3xl md:text-5xl text-right uppercase font-bold mb-4 text-white">
//     //       Наші переваги
//     //     </h2>
//     //     <div
//     //       className="mb-8 h-0.5"
//     //       style={{
//     //         background: 'linear-gradient(to left, #fbbf24, transparent)',
//     //       }}
//     //     ></div>
//     //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//     //       {items.map((item, index) => (
//     //         <div
//     //           key={index}
//     //           className="bg-white/30 backdrop-blur border border-white p-6 rounded-3xl shadow-md hover:shadow-lg transition"
//     //         >
//     //           <img
//     //             src={item.icon}
//     //             alt={item.title}
//     //             className="w-12 h-12 mb-4 mx-auto"
//     //           />
//     //           <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//     //           <p className="text-white text-sm">{item.text}</p>
//     //         </div>
//     //       ))}
//     //     </div>
//     //   </div>
//     // </section>
//   );
// };

// export default Advantages;

import { motion } from 'framer-motion';

const items = [
  {
    type: 'text',
    title: 'Закрита територія',
    desc: 'Територія з контролем доступу, охороною та цілодобовим відеоспостереженням',
  },
  { type: 'image', img: '/advantages/2.jpg', alt: 'Image 1' },
  {
    type: 'text',
    title: 'Розвинена інфраструктура',
    desc: 'Близькість до Прилиманського дозволяє швидко дістатися до необхідної інфраструктури , такої як магазини, школа, дитячий садок, медичні заклади та інших важливих об’єктів. ',
  },
  { type: 'image', img: '/advantages/advantages.jpg', alt: 'Image 2' },
  {
    type: 'text',
    title: 'Чисте повітря та спокій',
    desc: 'Зручне розташування дозволяє насолоджуватися спокоєм і тишею на березі лиману, далеко від міської метушні, водночас залишаючись у пішій досяжності від усіх необхідних сервісів і інфраструктури.',
  },
  { type: 'image', img: '/advantages/advantages1.jpg', alt: 'Image 3' },
  {
    type: 'text',
    title: 'Сучасна архітектура',
    desc: 'Архітектура котеджів гармонійно вписується в природній ландшафт, створюючи атмосферу затишку та спокою.',
  },
  { type: 'image', img: '/advantages/1.jpg', alt: 'Image 4' },
  {
    type: 'text',
    title: 'Автономність',
    desc: 'Генератор для загальних потреб. Накопичувачі води. Індивідуальне газове опалення.',
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
    <section data-theme="light" className="w-full bg-gray-100 py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Заголовок */}
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
                className="flex flex-col items-center justify-center p-4 bg-white text-center transform transition duration-300 hover:scale-[1.02] hover:shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
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

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-2">Потрібна консультація?</h3>
          <button className="border border-white text-[18px] text-white py-3 px-6 rounded-md bg-[#3A8278] backdrop-blur-md hover:border-[#3A8278] hover:bg-transparent hover:text-black transition">
            <a href="#contact">Зв’язатись з нами</a>
          </button>
          {/* <a
            href="#contact"
            className="inline-flex items-center gap-1 text-black font-medium hover:text-yellow-500 transition"
          >
            <span className="underline underline-offset-4">
              Зв’язатися з нами
            </span>
            <span aria-hidden className="inline-block translate-x-0.5">
              →
            </span>
          </a> */}
        </div>
      </div>
    </section>
  );
}
