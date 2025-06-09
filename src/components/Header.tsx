// import logo from '../assets/logo.png';
// import { SlPhone } from 'react-icons/sl';

// const Header = () => {
//   return (
//     <header className="w-full max-w-[1440px] mx-auto px-8 py-6 flex justify-between items-center text-black">
//       <img
//         src={logo}
//         alt="Logo"
//         className="w-[180px] md:w-[220px] hover:scale-105 transition duration-300 ease-in-out"
//       />
//       <nav>
//         <ul className="flex items-center gap-6 text-[18px] font-medium">
//           <li className="hover:scale-110 transition duration-300 ease-in-out">
//             <a
//               href="/about"
//               className="hover:scale-110 transition duration-300 ease-in-out"
//             >
//               Про нас
//             </a>
//           </li>
//           <li className="hover:scale-110 transition duration-300 ease-in-out">
//             <a href="/townhouses">Таунхауси</a>
//           </li>
//           <li className="hover:scale-110 transition duration-300 ease-in-out">
//             <a href="/landplots">Земельні ділянки</a>
//           </li>
//           <li className="hover:scale-110 transition duration-300 ease-in-out">
//             <a href="/contacts">Контакти</a>
//           </li>
//           <li className="hover:scale-110 transition duration-300 ease-in-out">
//             <a
//               href="tel:+380660000000"
//               className="flex items-center gap-2 font-medium hover:text-[#FBDE89]  transition duration-300 ease-in-out"
//             >
//               <SlPhone /> +38 (066) 000-00-00
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import logo from '../assets/logo.png';
// import { SlPhone } from 'react-icons/sl';

// const Header = () => {
//   return (
//     <header className="absolute top-0 left-0 w-full z-20 bg-black/20 shadow-md backdrop-blur-xs">
//       <div className="max-w-[1600px] mx-auto px-8 py-6 flex justify-between items-center text-white">
//         <nav className="flex items-center gap-6 text-[18px] font-medium">
//           <li className="hover:scale-110 transition duration-300 ease-in-out">
//             <a
//               href="/"
//               className="hover:scale-110 transition duration-300 ease-in-out"
//             >
//               Головна
//             </a>
//           </li>
//           <li className="hover:scale-110 transition duration-300 ease-in-out">
//             <a href="/townhouses">Таунхауси</a>
//           </li>
//           <li className="hover:scale-110 transition duration-300 ease-in-out">
//             <a href="/landplots">Земельні ділянки</a>
//           </li>
//           <li className="hover:scale-110 transition duration-300 ease-in-out">
//             <a href="/contacts">Контакти</a>
//           </li>
//         </nav>

//         <img
//           src={logo}
//           alt="Logo"
//           className="w-[180px] md:w-[220px] hover:scale-105 transition duration-300 ease-in-out"
//         />
//         <ul className="flex items-center gap-6 text-[18px] font-medium">
//           <li className="hover:scale-110 transition duration-300 ease-in-out">
//             <a
//               href="tel:+380660000000"
//               className="flex items-center gap-2 font-medium hover:text-[#FBDE89]  transition duration-300 ease-in-out"
//             >
//               <SlPhone /> +38 (097) 974-80-02
//             </a>
//           </li>
//           <li>
//             <button className="bg-white/30 text-[18px] backdrop-blur uppercase py-2 px-4 rounded-md hover:text-[#FBDE89] hover:border hover:border-white hover:backdrop-blur hover:bg-transparent transition duration-300 ease-in-out">
//               ЗВ'ЯЗАТИСЬ З НАМИ
//             </button>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import { SlPhone } from 'react-icons/sl';

const navLinks = [
  { label: 'Головна', href: '/' },
  { label: 'Таунхауси', href: '/townhouses' },
  { label: 'Земельні ділянки', href: '/landplots' },
  { label: 'Контакти', href: '/contacts' },
];
// bg-black/30 shadow-sm backdrop-blur-md
const Header = () => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="absolute top-0 left-0 w-full z-20"
    >
      <div className="max-w-[1600px] mx-auto px-6 py-4 flex justify-between items-center text-black ">
        {/* Навигация */}
        <ul className="hidden md:flex items-center gap-6 text-[18px] font-medium">
          {navLinks.map((link) => (
            <li key={link.href} className="transition-transform duration-300">
              <a href={link.href} className="hover:text-yellow-400">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Лого */}
        <img
          src={logo}
          alt="Logo"
          className="w-[160px] md:w-[200px] transition-transform duration-300"
        />

        {/* Контакты */}
        <ul className="hidden md:flex items-center gap-6 text-[18px] font-medium">
          <li className="transition-transform duration-300">
            <a
              href="tel:+380660000000"
              className="flex items-center gap-2 hover:text-yellow-400"
            >
              <SlPhone /> +38 (097) 974-80-02
            </a>
          </li>
          <li>
            <button className="bg-transparent border border-black backdrop-blur-md text-sm uppercase py-2 px-4 rounded-md hover:text-yellow-400 transition">
              Зв’язатись з нами
            </button>
          </li>
        </ul>
      </div>
    </motion.header>
  );
};

export default Header;
