// import { motion } from 'framer-motion';
// import heroImage from '../assets/townhouse.jpg';
// import Header from './Header';

// const Hero = () => {
//   return (
//     <section
//       data-theme="dark"
//       className="w-full relative h-[1000px] overflow-hidden"
//     >
//       {/* Фон */}
//       <div
//         className="absolute inset-0 bg-cover bg-bottom"
//         style={{
//           backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1)), url(${heroImage})`,
//         }}
//       />

//       {/* Хедер */}
//       <Header />

//       {/* Текст */}
//       <div className="relative z-10 flex items-end justify-start bottom-40 h-full px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: 'easeOut' }}
//           className="text-white max-w-[700px]"
//         >
//           <h1 className="text-4xl md:text-[60px] uppercase font-bold mb-6 leading-tight text-yellow-400">
//             КМ Липовий Гай
//           </h1>
//           <p className="text-lg md:text-3xl mb-6">
//             Комфорт. Якість. Спокій поруч з природою.
//           </p>
//           <div className="flex flex-wrap gap-4">
//             <button className="border border-white text-[18px] py-3 px-6 rounded-md bg-[#3A8278] backdrop-blur-md hover:bg-white/30  transition">
//               <a href="#contact">Зв’язатись з нами</a>
//             </button>
//           </div>
//         </motion.div>
//       </div>

//       {/* Нижний список */}
//       <motion.ul
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.3 }}
//         className="absolute bottom-50 right-6 text-white text-lg md:text-xl space-y-2 z-10"
//       >
//         <li>◼︎ Територія котеджного містечка — 2 га</li>
//         <li>◼︎ Вибір планувань і оздоблення будинків</li>
//         {/* <li>◼︎ Сонячна електроенергія</li> */}
//       </motion.ul>
//     </section>
//   );
// };

// export default Hero;

import { motion } from 'framer-motion';
import heroImage from '../assets/townhouse.jpg';
import Header from './Header';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      data-theme="dark"
      className="w-full relative md:min-h-screen md:h-[600px] overflow-hidden"
    >
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
      <div className="relative z-10 flex flex-col gap-40 items-center justify-end md:h-full px-4 md:px-6 pt-40 md:pt-0 pb-10 md:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-white text-center"
        >
          <h1 className="text-3xl md:text-[60px] uppercase font-bold mb-4 md:mb-6 leading-tight text-yellow-400">
            КМ Липовий Гай
          </h1>
          <p className="text-base md:text-3xl mb-4 md:mb-6">
            Комфорт. Якість. Спокій поруч з природою.
          </p>
          <div className="flex justify-center">
            <Link
              to="#contact"
              className="border border-white text-sm md:text-[18px] py-2 md:py-3 px-4 md:px-6 rounded-md bg-[#3A8278] backdrop-blur-md hover:bg-white/30 transition"
            >
              Зв’язатись з нами
            </Link>
          </div>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white text-center text-sm md:text-xl space-y-1 md:space-y-2 z-10"
        >
          <li>◼︎ Територія котеджного містечка — 2 га</li>
          <li>◼︎ Вибір планувань і оздоблення будинків</li>
          <li>◼︎ Електрична потужність 10кВт</li>
        </motion.ul>
      </div>
    </section>
  );
};

export default Hero;
