import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SlPhone } from 'react-icons/sl';

type Props = {
  navLinks: { label: string; href: string }[];
  onClose: () => void;
};

const slideVariants = {
  hidden: { x: '100%' },
  visible: { x: 0 },
  exit: { x: '100%' },
};

const MobileMenu = ({ navLinks, onClose }: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={slideVariants}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-[126px] left-0 w-full h-full z-50 bg-[#3a8278] text-white px-6 py-6 overflow-y-auto"
    >
      {/* Навигационные ссылки */}
      <ul className="flex flex-col gap-6 text-xl font-medium">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className="block hover:text-yellow-400"
              onClick={onClose}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Контакты */}
      <div className="mt-10 space-y-4 text-base">
        <a
          href="tel:+380979748002"
          className="flex items-center gap-3 hover:text-yellow-400"
        >
          <SlPhone className="text-lg" /> +38 (097) 974-80-02
        </a>
        <a
          href="tel:+380992224158"
          className="flex items-center gap-3 hover:text-yellow-400"
        >
          <SlPhone className="text-lg" /> +38 (099) 222-41-58
        </a>
        <a
          href="tel:+380936221446"
          className="flex items-center gap-3 hover:text-yellow-400"
        >
          <SlPhone className="text-lg" /> +38 (093) 622-14-46
        </a>

        <a
          href="#contact"
          className="inline-block mt-6 border border-white text-white py-3 px-6 rounded hover:bg-white/30 transition"
        >
          Зв’язатись з нами
        </a>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
