import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import { SlPhone } from 'react-icons/sl';

const navLinks = [
  { label: 'Головна', href: '/' },
  { label: 'Таунхауси', href: '/townhouses' },
  { label: 'Будинки', href: '/houses' },
  { label: 'Контакти', href: '/contacts' },
];
const Header = () => {
  return (
    <div className="">
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="absolute top-0 left-0 w-full z-20"
      >
        <div className="max-w-[1600px] mx-auto px-6 pt-8 pb-8 flex justify-between items-center text-white">
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
              <button className="bg-transparent border border-white text-[18px] md:text-lg py-3 px-6 rounded-md  hover:bg-white/30  transition">
                <a href="#contact">Зв’язатись з нами</a>
              </button>
            </li>
          </ul>
        </div>
      </motion.header>
    </div>
  );
};

export default Header;
