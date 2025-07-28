import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BurgerToggle from './BurgerToggle';
import logo from '../assets/logo.png';
import { SlPhone } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const navLinks = [
  { label: 'Головна', href: '/' },
  { label: 'Таунхауси', href: '/townhouse' },
  { label: 'Будинки', href: '/houses' },
  { label: 'Квартири', href: '/apartments' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full z-50 text-white"
      >
        <div
          className={`mx-auto px-6 pt-6 pb-6 flex justify-between items-center transition-colors duration-500 ease-in-out ${
            menuOpen
              ? 'bg-[#3a8278]'
              : 'bg-gradient-to-b from-[#3a8278] to-transparent'
          }`}
        >
          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-6 text-[18px] font-medium">
            {navLinks.map((link) => (
              <li key={link.href} className="transition-transform duration-300">
                <Link to={link.href} className="hover:text-yellow-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="w-[140px] md:w-[200px] transition-transform duration-300"
          />

          {/* Desktop Contacts */}
          <div className="hidden lg:flex items-center gap-6 justify-between">
            <button className="bg-transparent border border-white text-[18px] md:text-lg py-3 px-6 rounded-md  hover:bg-white/30  transition">
              <Link to="#contact">Зв’язатись з нами</Link>
            </button>
            <ul className="flex flex-col items-center gap-2 text-[18px] font-medium">
              <li className="transition-transform duration-300">
                <Link
                  to="tel:+380979748002"
                  className="flex items-center gap-2 hover:text-yellow-400"
                >
                  <SlPhone /> +38 (097) 974-80-02
                </Link>
              </li>
              <li>
                <Link
                  to="tel:+380992224158"
                  className="flex items-center gap-2 hover:text-yellow-400"
                >
                  <SlPhone /> +38 (099) 222-41-58
                </Link>
              </li>
              <li>
                <Link
                  to="tel:+380936221446"
                  className="flex items-center gap-2 hover:text-yellow-400"
                >
                  <SlPhone /> +38 (093) 622-14-46
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Burger */}
          <BurgerToggle
            toggle={() => setMenuOpen(!menuOpen)}
            isOpen={menuOpen}
          />
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <MobileMenu
              navLinks={navLinks}
              onClose={() => setMenuOpen(false)}
            />
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
};

export default Header;
