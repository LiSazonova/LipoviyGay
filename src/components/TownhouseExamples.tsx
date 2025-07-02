import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Link } from 'react-router-dom';

const TownhouseExamples = () => {
  const houses = [
    {
      id: 1,
      title: 'Таунхауси',
      desc: 'від 98 м² до 130 м²',
      image: '/townhouses/townhouse.jpg',
    },
    {
      id: 2,
      title: 'Будинки',
      desc: 'від 80 м² до 150 м²',
      image: '/advantages/advantages5.jpg',
    },
    {
      id: 3,
      title: 'Квартири',
      desc: 'від 50 м² до 72 м²',
      image: '/townhouses/flat.jpg',
    },
  ];

  return (
    <section
      data-theme="dark"
      id="townhouses"
      className="w-full bg-[#3A8278] py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          Наша забудова
        </h2>

        <div className="flex justify-end gap-4 mb-4">
          <button className="swiper-btn custom-button-prev bg-white p-2 rounded-full shadow">
            {/* <svg width="24" height="24">
              <use href="/icons.svg#icon-arrow-left"></use>
            </svg> */}
            <span>&larr;</span>
          </button>
          <button className="swiper-btn custom-button-next bg-white p-2 rounded-full shadow">
            {/* <svg width="24" height="24">
              <use href="/icons.svg#icon-arrow-right"></use>
            </svg> */}
            <span>&rarr;</span>
          </button>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: '.custom-button-next',
            prevEl: '.custom-button-prev',
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
        >
          {houses.map((house) => (
            <SwiperSlide key={house.id}>
              <Link to={`/townhouses/${house.id}`}>
                <div className="rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden bg-white">
                  <img
                    src={house.image}
                    alt={house.title}
                    className="h-60 w-full object-cover"
                  />
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {house.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{house.desc}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TownhouseExamples;
