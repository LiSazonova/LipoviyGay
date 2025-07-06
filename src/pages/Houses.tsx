import { useState } from 'react';
import ContactForm from '../components/ContactForm';
import HouseCard from '../components/HouseCard';

const Houses = () => {
  const [activePlan, setActivePlan] = useState<string | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const houseData = {
    image: '/advantages/advantages4.jpg',
    title: 'Будинки на березі Сухого Лиману',
    price: 'від 129 370 $',
    description: [
      'Будинок на березі Сухого Лиману — це чудова можливість поєднати комфорт сучасного життя з природною красою. Цей регіон відомий своїми мальовничими краєвидами, спокоєм та можливістю відпочинку на природі. Житло біля води дарує безліч переваг: свіже повітря, можливість насолоджуватись водними видами спорту чи просто прогулянками вздовж узбережжя.',
      'Крім того, будинок на березі Сухого Лиману може стати чудовим інвестиційним проектом, адже така нерухомість завжди буде привабливою для покупців та туристів. Це місце пропонує ідеальний баланс між усамітненням та близькістю до міської інфраструктури, що робить його привабливим вибором для тих, хто шукає спокійне та комфортне життя.',
    ],
    buttonText: 'Записатися на перегляд',
    priceLabel: 'Ціна від $750 за м²',
    status: 'В наявності',
    link: '/#contact',
  };

  const plans = [
    { title: 'Планування будинку 152 м²', image: '/plans/house-100.jpg' },
  ];

  const advantages = [
    { label: 'Розмір', value: 'від 152 м²' },
    { label: 'Паркомісць', value: 'гараж' },
    { label: 'Поверхи', value: '2' },
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

      {activePlan && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg max-w-2xl w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setActivePlan(null)}
            >
              ✕
            </button>
            <img
              src={activePlan}
              alt="Планування"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      )}

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

export default Houses;
