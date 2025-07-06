import { Link } from 'react-router-dom';

const houses = [
  {
    id: 1,
    title: 'Таунхауси',
    area: 'від 98 м² до 131 м²',
    price: 'від 60 760$',
    image: '/townhouses/townhouse.jpg',
    status: 'Побудований',
    downPayment: 'Розтермінування від забудовника',
    link: '/townhouse',
  },
  {
    id: 2,
    title: 'Будинки',
    area: 'від 152 м²',
    price: 'від 129 370 $',
    image: '/advantages/advantages5.jpg',
    status: 'Побудований',
    downPayment: 'Акредитовано по єОселя',
    link: '/houses',
  },
  {
    id: 3,
    title: 'Квартири',
    area: 'від 55 м² до 72 м²',
    price: 'від 41 625 $',
    image: '/townhouses/flat.jpg',
    status: 'Побудований',
    downPayment: 'Перший внесок від 30%',
    link: '/apartments',
  },
];

const TownhouseExamples = () => {
  return (
    <section className="w-full bg-[#3A8278] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Наша забудова
        </h2>

        <div className="mb-12 text-white max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-4">
            Якість будівництва на першому місці!
          </h3>
          <ul className="list-disc ">
            <li className="mb-2">
              ◼︎ Матеріал, використаний для будівництва – газоблок. Зовнішні
              стіни - 40 см, внутрішні - 30 см
            </li>
            <li className="mb-2">
              ◼︎ Утеплення – мінвата 5 см + пінопласт 5 см
            </li>
            <li className="mb-2">
              ◼︎ Фундамент – монолітна подушка (50 см), 2 фундаментні блоки
              (довжина 2 м, ширина 40 см, висота 60 см), заливається плита 20 см
              (як стяжка)
            </li>
            <li className="mb-2">
              ◼︎ Особливості виготовлення даху: дерев'яні балки, між балками
              мінвата 200 мм, армована плівка, рейки 2 см, дах - металопрофіль
            </li>
            <li className="mb-2">
              ◼︎ Перекриття – залізобетонні плити, підлога – цементна стяжка
            </li>
            <li className="mb-2">
              ◼︎ Система опалення – двоконтурний газовий котел, тепла водяна
              підлога
            </li>
            <li>
              ◼︎ Електрична система – виділена електрична потужність 10кВт
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {houses.map((house) => (
            <Link to={house.link} key={house.id}>
              <div className="relative overflow-hidden shadow hover:shadow-lg transition group">
                <img
                  src={house.image}
                  alt={house.title}
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Верхние бейджи */}
                <div className="absolute top-4 right-4 bg-[#3A8278] text-white text-sm font-semibold px-4 py-4 rounded">
                  {house.downPayment}
                </div>

                {/* Низ карточки */}
                <div className="bg-white p-5">
                  <h3 className="text-xl font-bold mb-1">{house.title}</h3>
                  <p className="text-[#3A8278] font-medium">{house.area}</p>
                  <p className="text-gray-500 text-sm mt-1">Вартість</p>
                  <p className="text-[#3A8278] text-lg font-semibold">
                    {house.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TownhouseExamples;
