// // // TownhousePage.tsx

// // import HouseCard from '../components/HouseCard';

// // const TownhousePage = () => {
// //   const houseData = {
// //     image: '/townhouses/townhouse.jpg',
// //     title: 'Таунхауси від 80.7 м² до 101.6 м²',
// //     price: 'від 68 600$',
// //     description: [
// //       'Ласкаво просимо до нашого містечка “Тепло”, де Ви можете придбати для себе та родини сучасний таунхаус під Києвом – в 15 хвилинах їзди на авто. Наша пропозиція надає вам неперевершену можливість стати власником комфортного таунхаусу зі зручним плануванням, зведеного з червоної цегли, в затишному містечку, що переповнене спокоєм та гармонією.',
// //       'Ми пропонуємо вигідні умови розтермінування від забудовника. Це дає вам можливість планувати свої фінанси більш зручно та відповідно до вашої потреби. Ми розуміємо, що придбання власного житла – це важлива подія, тому для нас в пріоритеті зробити цей процес якомога легшим та доступним для вас.',
// //       'Не упустіть свій шанс стати власником стильного таунхаусу, що поєднує в собі зручне розташування, якість будівництва та вигідні фінансові умови.',
// //     ],
// //     buttonText: 'Записатися на перегляд',
// //     priceLabel: 'Ціна від $850 за м²',
// //     area: '80.7–101.6 м²',
// //     status: 'В наявності',
// //     downPayment: 'від 30%',
// //     link: '/townhouse',
// //   };

// //   const plans = [
// //     'Планування таунхаусу 80.7 м²',
// //     'Планування таунхаусу 89.7 м²',
// //     'Планування таунхаусу 94.4 м²',
// //     'Планування таунхаусу 101.6 м²',
// //   ];

// //   return (
// //     <section className="py-70 max-w-7xl mx-auto">
// //       <div className="flex justify-center gap-12">
// //         <HouseCard {...houseData} />

// //         <p className="max-w-xl text-black text-lg">
// //           Продається 3-кімнатна квартира в КМ Липовий гай. Продаж безпосередньо
// //           від забудовника - ЛИПОВИЙ ГАЙ. Площа житла даного планування 66.2 м².
// //           Квартира розташована на 2 поверсі 2-х поверхового будинку. КМ Липовий
// //           гай розташований за адресою: Прилиманське, Масив, 24. КМ Липовий гай
// //           відрізняється зручним розташуванням, оскільки в безпосередній
// //           близькості від нього є: школа, дитячий садок, тц, ринок, магазини,
// //           транспортна розв'язка, кафе, кав'ярня, ресторан, наземний паркінг.
// //           Здача об'єкту заявлена в 3 кварталі 2025 року. На даний момент в цьому
// //           об'єкті вже побудовано - 1 черга. Характеристика приміщення: висота
// //           стелі, м: 2.8 Опалення: індивідуальне газове
// //         </p>
// //       </div>

// //       <div className="mt-12">
// //         <h2 className="text-2xl font-bold mb-4">Доступні планування:</h2>
// //         <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 list-disc pl-5 text-[#3A8278]">
// //           {plans.map((plan, index) => (
// //             <li key={index}>{plan}</li>
// //           ))}
// //         </ul>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TownhousePage;

// // TownhousePage.tsx
// // TownhousePage.tsx
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import ContactSection from '../components/ContactSection';

// const TownhousePage = () => {
//   const [activePlan, setActivePlan] = useState<string | null>(null);

//   const houseData = {
//     image: '/townhouses/townhouse.jpg',
//     title: 'Таунхауси від 80.7 м² до 101.6 м²',
//     price: 'від 68 600$',
//     description: [
//       'Ласкаво просимо до нашого містечка “Тепло”, де Ви можете придбати для себе та родини сучасний таунхаус під Києвом – в 15 хвилинах їзди на авто. Наша пропозиція надає вам неперевершену можливість стати власником комфортного таунхаусу зі зручним плануванням, зведеного з червоної цегли, в затишному містечку, що переповнене спокоєм та гармонією.',
//       'Ми пропонуємо вигідні умови розтермінування від забудовника. Це дає вам можливість планувати свої фінанси більш зручно та відповідно до вашої потреби. Ми розуміємо, що придбання власного житла – це важлива подія, тому для нас в пріоритеті зробити цей процес якомога легшим та доступним для вас.',
//       'Не упустіть свій шанс стати власником стильного таунхаусу, що поєднує в собі зручне розташування, якість будівництва та вигідні фінансові умови.',
//     ],
//     buttonText: 'Записатися на перегляд',
//     priceLabel: 'Ціна від $850 за м²',
//     area: '80.7–101.6 м²',
//     status: 'Побудований',
//     downPayment: 'від 20%',
//     link: '#contact',
//   };

//   const plans = [
//     { title: 'Планування таунхаусу 80.7 м²', image: '/plans/80.7.jpg' },
//     { title: 'Планування таунхаусу 89.7 м²', image: '/plans/89.7.jpg' },
//     { title: 'Планування таунхаусу 94.4 м²', image: '/plans/94.4.jpg' },
//     { title: 'Планування таунхаусу 101.6 м²', image: '/plans/101.6.jpg' },
//   ];

//   const advantages = [
//     { label: 'Розмір', value: 'від 80.7 м²' },
//     { label: 'Паркомісць', value: '1' },
//   ];

//   return (
//     <section className="py-16 px-4 max-w-7xl mx-auto">
//       <div className="flex flex-col lg:flex-row gap-10">
//         <div className="w-full lg:w-1/2 relative">
//           <img
//             src={houseData.image}
//             alt={houseData.title}
//             className="rounded-xl shadow-md w-full object-cover"
//           />
//           <div className="grid grid-cols-2 gap-4 mt-6">
//             {advantages.map((adv, index) => (
//               <div key={index} className="text-gray-700">
//                 <div className="text-sm font-medium text-gray-500">
//                   {adv.label}:
//                 </div>
//                 <div className="font-semibold text-lg">{adv.value}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="w-full lg:w-1/2 flex flex-col justify-between gap-6">
//           <div>
//             <h1 className="text-3xl sm:text-4xl font-bold mb-2">
//               {houseData.title}
//             </h1>
//             <div className="text-[#3A8278] text-xl font-semibold mb-4">
//               {houseData.price}
//             </div>
//             <div className="space-y-4 text-gray-800">
//               {houseData.description.map((p, idx) => (
//                 <p key={idx}>{p}</p>
//               ))}
//             </div>

//             <h2 className="text-xl font-semibold mt-6 mb-2">
//               Доступні планування:
//             </h2>
//             <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-[#3A8278] list-disc pl-5">
//               {plans.map((plan, index) => (
//                 <li
//                   key={index}
//                   className="cursor-pointer underline"
//                   onClick={() => setActivePlan(plan.image)}
//                 >
//                   {plan.title}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4 mt-6">
//             <Link
//               to={houseData.link}
//               className="bg-[#3A8278] text-white text-center px-6 py-3 rounded-md font-semibold hover:bg-opacity-90"
//             >
//               {houseData.buttonText}
//             </Link>
//             <button className="border border-[#3A8278] text-[#3A8278] px-6 py-3 rounded-md font-semibold">
//               {houseData.priceLabel}
//             </button>
//           </div>
//         </div>
//       </div>

//       {activePlan && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
//           <div className="bg-white p-4 rounded-lg max-w-2xl w-full relative">
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-black"
//               onClick={() => setActivePlan(null)}
//             >
//               ✕
//             </button>
//             <img
//               src={activePlan}
//               alt="Планування"
//               className="w-full h-auto rounded-md"
//             />
//           </div>
//         </div>
//       )}
//       <ContactSection />
//     </section>
//   );
// };

// export default TownhousePage;

// TownhousePage.tsx
import { useState } from 'react';
import ContactForm from '../components/ContactForm';
import HouseCard from '../components/HouseCard';
import { motion, AnimatePresence } from 'framer-motion';

const Townhouse = () => {
  const [activePlan, setActivePlan] = useState<string | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const houseData = {
    image: '/townhouses/townhouse.jpg',
    title: 'Таунхауси від 98 м² до 131 м²',
    price: 'від 60 760$',
    description: [
      'Ласкаво просимо до нашого котеджного містечка “Липовий Гай”, де Ви можете придбати для себе та родини сучасний таунхаус поблизу Одеси – в 15 хвилинах їзди на авто. Наша пропозиція надає вам неперевершену можливість стати власником комфортного таунхаусу зі зручним плануванням, зведеного з червоної цегли, в затишному містечку, що переповнене спокоєм та гармонією.',
      'Ми пропонуємо вигідні умови розтермінування від забудовника. Це дає вам можливість планувати свої фінанси більш зручно та відповідно до вашої потреби. Ми розуміємо, що придбання власного житла – це важлива подія, тому для нас в пріоритеті зробити цей процес якомога легшим та доступним для вас.',
      'Не упустіть свій шанс стати власником стильного таунхаусу, що поєднує в собі зручне розташування, якість будівництва та вигідні фінансові умови.',
    ],
    buttonText: 'Записатися на перегляд',
    priceLabel: 'Ціна від $620 за м²',
    status: 'Побудований',
    link: '/#contact',
  };

  const plans = [
    {
      title: 'Планування таунхаусу 108.2 м²',
      image: '/plans/townhouse-108.2.png',
    },
    {
      title: 'Планування таунхаусу 131.3 м²',
      image: '/plans/townhouse-131.3.png',
    },
  ];

  const advantages = [
    { label: 'Розмір', value: 'від 98 м²' },
    { label: 'Кімнат', value: '3' },
    { label: 'Поверхи', value: '2' },
    { label: 'Паркомісць', value: '2' },
    { label: 'Стіни', value: 'газобетон' },
    { label: 'ЄОселя', value: 'доступна' },
    { label: 'Утеплення', value: 'мінеральна вата, пінопласт' },
  ];

  return (
    <section className="pt-60 pb-30 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2 relative">
          <HouseCard {...houseData} />
          <div className="grid grid-cols-2 gap-4 mt-6">
            {advantages.map((adv, index) => (
              <div key={index} className="text-gray-700">
                <div className="text-sm font-medium text-gray-500">
                  {adv.label}:
                </div>
                <div className="font-semibold text-lg">{adv.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-between gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              {houseData.title}
            </h1>
            <div className="text-[#3A8278] text-xl font-semibold mb-4">
              {houseData.price}
            </div>
            <div className="space-y-4 text-gray-800">
              {houseData.description.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              Доступні планування:
            </h2>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-[#3A8278] list-disc pl-5">
              {plans.map((plan, index) => (
                <li
                  key={index}
                  className="cursor-pointer underline"
                  onClick={() => setActivePlan(plan.image)}
                >
                  {plan.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-[#3A8278] text-white text-center px-6 py-3 rounded-md font-semibold hover:bg-opacity-90"
            >
              {houseData.buttonText}
            </button>
            <button className="border border-[#3A8278] text-[#3A8278] px-6 py-3 rounded-md font-semibold">
              {houseData.priceLabel}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activePlan && (
          <motion.div
            key="plan-modal"
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
              className="bg-white p-4 rounded-lg max-w-2xl w-full relative"
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg"
                onClick={() => setActivePlan(null)}
              >
                ✕
              </button>
              <img
                src={activePlan}
                alt="Планування"
                className="w-full h-auto rounded-md"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {isContactOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setIsContactOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Зв'язатись з нами
            </h2>
            <ContactForm />
          </div>
        </div>
      )}
    </section>
  );
};

export default Townhouse;
