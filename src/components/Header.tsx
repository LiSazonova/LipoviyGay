import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="w-full bg-[#004358c5] fixed top-0 left-0 z-50 text-white flex justify-between items-center px-8 py-4">
      <img src={logo} alt="Logo" width={180} />
      <nav>
        <ul className="flex gap-4">
          <li>
            <a
              href="/about"
              className="hover:text-[#FBDE89] duration-400 ease-in text-[18px]"
            >
              Про нас
            </a>
          </li>
          <li>
            <a
              href="/townhouses"
              className="hover:text-[#FBDE89] duration-300 ease-out text-[18px]"
            >
              Таунхауси
            </a>
          </li>
          <li>
            <a
              href="/landplots"
              className="hover:text-[#FBDE89] duration-300 ease-out text-[18px]"
            >
              Земельні ділянки
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#FBDE89] duration-500 ease-out text-[18px]"
            >
              Контакти
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
