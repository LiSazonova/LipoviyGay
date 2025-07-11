import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo.png';
import { SlPhone } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Головна', href: '/' },
  { label: 'Таунхауси', href: '/townhouse' },
  { label: 'Будинки', href: '/houses' },
  { label: 'Квартири', href: '/apartments' },
  { label: 'Контакти', href: '/contacts' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="absolute top-0 left-0 w-full z-20"
      >
        <div
          className="mx-auto px-6 pt-6 pb-6 flex justify-between items-center text-white"
          style={{
            background:
              'linear-gradient(to bottom, #3a8278 0%, rgba(58,130,120,0) 100%)',
          }}
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
          <button
            className="lg:hidden w-10 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <HiX className="text-[24px]" />
            ) : (
              <HiMenu className="text-[24px]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#3a8278] text-white px-6 py-4 space-y-4 z-30">
            <ul className="flex flex-col gap-4 text-lg">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="block hover:text-yellow-400"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 text-sm">
              <Link
                to="tel:+380979748002"
                className="flex items-center gap-2 hover:text-yellow-400"
              >
                <SlPhone /> +38 (097) 974-80-02
              </Link>
              <Link
                to="tel:+380992224158"
                className="flex items-center gap-2 hover:text-yellow-400"
              >
                <SlPhone /> +38 (099) 222-41-58
              </Link>
              <Link
                to="tel:+380936221446"
                className="flex items-center gap-2 hover:text-yellow-400"
              >
                <SlPhone /> +38 (093) 622-14-46
              </Link>
              <Link
                to="#contact"
                className="inline-block mt-4 border border-white text-white py-2 px-4 rounded hover:bg-white/30"
              >
                Зв’язатись з нами
              </Link>
            </div>
          </div>
        )}
      </motion.header>
    </div>
  );
};

export default Header;
