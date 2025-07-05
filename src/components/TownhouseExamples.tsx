// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/swiper-bundle.css';
// import { Link } from 'react-router-dom';

// const TownhouseExamples = () => {
//   const houses = [
//     {
//       id: 1,
//       title: 'Таунхауси',
//       desc: 'від 98 м² до 130 м²',
//       image: '/townhouses/townhouse.jpg',
//     },
//     {
//       id: 2,
//       title: 'Будинки',
//       desc: 'від 80 м² до 150 м²',
//       image: '/advantages/advantages5.jpg',
//     },
//     {
//       id: 3,
//       title: 'Квартири',
//       desc: 'від 50 м² до 72 м²',
//       image: '/townhouses/flat.jpg',
//     },
//   ];

//   return (
//     <section
//       data-theme="dark"
//       id="townhouses"
//       className="w-full bg-[#3A8278] py-20 px-4"
//     >
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-white mb-8 text-center">
//           Наша забудова
//         </h2>

//         <div className="flex justify-end gap-4 mb-4">
//           <button className="swiper-btn custom-button-prev bg-white p-2 rounded-full shadow">
//             {/* <svg width="24" height="24">
//               <use href="/icons.svg#icon-arrow-left"></use>
//             </svg> */}
//             <span>&larr;</span>
//           </button>
//           <button className="swiper-btn custom-button-next bg-white p-2 rounded-full shadow">
//             {/* <svg width="24" height="24">
//               <use href="/icons.svg#icon-arrow-right"></use>
//             </svg> */}
//             <span>&rarr;</span>
//           </button>
//         </div>

//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={24}
//           slidesPerView={1}
//           loop={true}
//           navigation={{
//             nextEl: '.custom-button-next',
//             prevEl: '.custom-button-prev',
//           }}
//           breakpoints={{
//             768: {
//               slidesPerView: 2,
//               spaceBetween: 24,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 32,
//             },
//           }}
//         >
//           {houses.map((house) => (
//             <SwiperSlide key={house.id}>
//               <Link to={`/townhouses/${house.id}`}>
//                 <div className="rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden bg-white">
//                   <img
//                     src={house.image}
//                     alt={house.title}
//                     className="h-60 w-full object-cover"
//                   />
//                   <div className="p-6 text-left">
//                     <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                       {house.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm">{house.desc}</p>
//                   </div>
//                 </div>
//               </Link>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default TownhouseExamples;

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
    area: 'від 80 м² до 150 м²',
    price: 'від 106 540$',
    image: '/advantages/advantages5.jpg',
    status: 'Побудований',
    downPayment: 'Акредитовано по єОселя',
    link: '/houses',
  },
  {
    id: 3,
    title: 'Квартири',
    area: 'від 55 м² до 72 м²',
    price: 'ід 34 410$',
    image: '/townhouses/flat.jpg',
    status: 'Побудований',
    downPayment: 'Перший внесок від 50%',
    link: '/apartments',
  },
];

const TownhouseExamples = () => {
  return (
    <section id="development" className="w-full bg-[#3A8278] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#1e1e1e]">
          Наша забудова
        </h2>

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
