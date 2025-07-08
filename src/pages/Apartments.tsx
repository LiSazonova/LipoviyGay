import { useState } from 'react';
import ContactForm from '../components/ContactForm';
import HouseCard from '../components/HouseCard';
import { motion, AnimatePresence } from 'framer-motion';

const Apartments = () => {
  const [activePlan, setActivePlan] = useState<string | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const houseData = {
    image: '/townhouses/flat.jpg',
    title: 'Квартири в котеджному містечку',
    price: 'від 41 625$',
    description: [
      'Котеджне містечко на березі Сухого Лиману є ідеальним місцем для тих, хто прагне поєднати комфорт сучасного життя з красою природи. Розташоване у мальовничій місцевості, це містечко пропонує затишні квартири, таунхауси та будинки, оточені зеленими насадженнями та мальовничими краєвидами.',
      'Зручне розташування дозволяє насолоджуватися спокоєм і тишею на березі лиману, далеко від міської метушні, водночас залишаючись у пішій досяжності від усіх необхідних сервісів і інфраструктури.',
      'Сухий Лиман, зі своєю унікальною екосистемою, є чудовим місцем для прогулянок, риболовлі та активного відпочинку на природі. Це ідеальний вибір для сімей, які прагнуть створити затишний приватний простір у мальовничій місцевості.',
    ],
    buttonText: 'Записатися на перегляд',
    priceLabel: 'Ціна від $620 за м²',
    status: 'В наявності',
    link: '/#contact',
  };

  const plans = [
    {
      title: 'Планування квартири 55.5 м²',
      image: '/plans/apartment-55.5.png',
    },
    {
      title: 'Планування квартири 56.5 м²',
      image: '/plans/apartment-56.5.png',
    },
    {
      title: 'Планування квартири 65.1 м²',
      image: '/plans/apartment-65.1.png',
    },
    {
      title: 'Планування квартири 69.9 м²',
      image: '/plans/apartment-69.9.jpg',
    },
    {
      title: 'Планування квартири 66.2 м²',
      image: '/plans/apartment-66.2.png',
    },
    {
      title: 'Планування квартири 71.7 м²',
      image: '/plans/apartment-71.7.jpg',
    },
  ];

  const advantages = [
    { label: 'Розмір', value: 'від 55 м²' },
    { label: 'Кімнат', value: '2-3' },
    { label: 'Поверхи', value: '1' },
    { label: 'Паркомісць', value: '1' },
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

export default Apartments;
