// import heroImage from '../assets/hero_bg.jpg';
// // import { ImFacebook } from 'react-icons/im';
// // import { FaTelegramPlane, FaInstagram } from 'react-icons/fa';

// const Hero = () => {
//   return (
//     <section className="w-full px-8 py-4">
//       <div
//         className="relative max-w-[1440px] mx-auto h-[800px] md:h-[900px] rounded-3xl overflow-hidden bg-cover bg-center shadow-lg"
//         style={{
//           backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1)), url(${heroImage})`,
//         }}
//       >
//         {/* Основной текст */}
//         <div className="flex items-center justify-center h-full">
//           <div className="text-white text-center px-4 max-w-[700px]">
//             <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
//               Липовий Гай
//             </h1>
//             <p className="text-lg md:text-3xl mb-6">
//               Комфорт. Якість. Спокій поруч з природою.
//             </p>
//             <div className="flex gap-4 items-center justify-center">
//               <button className="border border-white hover:text-[#FBDE89] text-white text-lg backdrop-blur uppercase py-2 px-6 rounded-md transition duration-300 ease-in-out">
//                 Дізнатись більше
//               </button>
//               <button className="bg-white/30 hover:text-[#FBDE89] text-white text-lg backdrop-blur uppercase py-2 px-6 rounded-md transition duration-300 ease-in-out">
//                 Зв'язатись з нами
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Социальные иконки */}
//         {/* <ul className="absolute bottom-6 left-6 flex flex-col gap-4">
//           <li className="bg-white/30 p-2 rounded-full">
//             <a href="#">
//               <ImFacebook className="w-[24px] h-[24px] text-white hover:text-[#FBDE89]" />
//             </a>
//           </li>
//           <li className="bg-white/30 p-2 rounded-full">
//             <a href="#">
//               <FaInstagram className="w-[24px] h-[24px] text-white hover:text-[#FBDE89]" />
//             </a>
//           </li>
//           <li className="bg-white/30 p-2 rounded-full">
//             <a href="#">
//               <FaTelegramPlane className="w-[24px] h-[24px] text-white hover:text-[#FBDE89]" />
//             </a>
//           </li>
//         </ul> */}
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import heroImage from '../assets/hero_bg.jpg';
// import Header from './Header';

// const Hero = () => {
//   return (
//     <section className="w-full relative h-[1000px] md:h-[1000px] overflow-hidden">
//       {/* Фоновое изображение */}
//       <div
//         className="absolute inset-0 bg-cover bg-bottom"
//         style={{
//           backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1)), url(${heroImage})`,
//         }}
//       ></div>

//       {/* Хедер поверх изображения */}
//       <Header />

//       {/* Текст на фоне */}
//       <div className="relative z-10 flex items-end justify-start bottom-40 h-full">
//         <div className="text-white text-left px-4 max-w-[700px]">
//           <h1 className="text-4xl md:text-[60px] uppercase font-bold mb-6 leading-tight text-[#FBDE89]">
//             Липовий Гай
//           </h1>
//           <p className="text-lg md:text-3xl mb-6">
//             Комфорт. Якість. Спокій поруч з природою.
//           </p>
//           <div className="inline-flex gap-4 items-center justify-center">
//             <button className="border border-white text-lg backdrop-blur py-4 px-8 rounded-md hover:text-[#FBDE89] hover:border-none hover:bg-white/30 transition duration-300 ease-in-out ">
//               ДІЗНАТИСЬ БІЛЬШЕ
//             </button>
//             <button className="bg-white/30 text-lg backdrop-blur uppercase py-4 px-8 rounded-md hover:text-[#FBDE89] hover:border hover:border-white hover:backdrop-blur hover:bg-transparent transition duration-300 ease-in-out">
//               ЗВ'ЯЗАТИСЬ З НАМИ
//             </button>
//           </div>
//         </div>
//       </div>
//       <div>
//         <ul className="absolute bottom-50 right-6 flex flex-col gap-4 text-white text-lg md:text-2xl">
//           <li>◼︎ Територія котеджного містечка - 6 га</li>
//           <li>◼︎ Вибір планувань і оздоблення будинків </li>
//           <li>◼︎ Сонячна електроенергія</li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { motion } from 'framer-motion';
import heroImage from '../assets/hero_testing.png';
import Header from './Header';

const Hero = () => {
  return (
    <section className="w-full relative h-[1000px] overflow-hidden">
      {/* Фон */}
      <div
        className="absolute inset-0 bg-cover bg-bottom"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1)), url(${heroImage})`,
        }}
      />

      {/* Хедер */}
      <Header />

      {/* Текст */}
      <div className="relative z-10 flex items-end justify-start bottom-40 h-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-white max-w-[700px]"
        >
          <h1 className="text-4xl md:text-[60px] uppercase font-bold mb-6 leading-tight text-yellow-400">
            КМ Липовий Гай
          </h1>
          <p className="text-lg md:text-3xl mb-6">
            Комфорт. Якість. Спокій поруч з природою.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="border border-white text-[18px] py-3 px-6 rounded-md bg-[#3A8278] backdrop-blur-md hover:bg-white/30  transition">
              <a href="#contact">Зв’язатись з нами</a>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Нижний список */}
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-50 right-6 text-white text-lg md:text-xl space-y-2 z-10"
      >
        <li>◼︎ Територія котеджного містечка — 6 га</li>
        <li>◼︎ Вибір планувань і оздоблення будинків</li>
        <li>◼︎ Сонячна електроенергія</li>
      </motion.ul>
    </section>
  );
};

export default Hero;
