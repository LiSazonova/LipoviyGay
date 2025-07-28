import { SlPhone } from 'react-icons/sl';
import { CiMail } from 'react-icons/ci';
import { BsGeoAltFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      id="contact"
      data-theme="dark"
      className="text-black pt-16 pb-8 px-4"
      style={{
        background: 'linear-gradient(to bottom, #f3f4f6 5%, #3A8278 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 text-center md:text-left">
        {/* Блок описания */}
        <div className="max-w-[450px] mx-auto md:mx-0">
          <h3 className="text-2xl font-bold mb-4">
            Південний Центр Нерухомості
          </h3>
          <p className="text-sm leading-relaxed">
            Надійна нерухомість в кращих районах Півдня України. Таунхауси,
            новобудови, ділянки — ми знайдемо найкращий варіант саме для вас.
          </p>
        </div>

        {/* Контакты */}
        <div className="mx-auto md:mx-0">
          <h4 className="text-lg font-semibold mb-4">Контакти</h4>
          <ul className="text-sm space-y-2">
            <li className="flex justify-center md:justify-start items-center gap-2">
              <SlPhone className="text-[18px]" />
              <Link to="tel:+380979748002" className="hover:text-yellow-400">
                +38 (097) 974-80-02
              </Link>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <SlPhone className="text-[18px]" />
              <Link to="tel:+380992224158" className="hover:text-yellow-400">
                +38 (099) 222-41-58
              </Link>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <SlPhone className="text-[18px]" />
              <Link to="tel:+380936221446" className="hover:text-yellow-400">
                +38 (093) 622-14-46
              </Link>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <CiMail className="text-[18px]" />
              <Link to="mailto:lipovijgay@ukr.net" className="hover:underline">
                lipovijgay@ukr.net
              </Link>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <BsGeoAltFill className="text-[18px]" />
              <Link
                to="https://maps.app.goo.gl/LjKHZD3eFEiphnfX7"
                target="_blank"
                rel="noopener noreferrer"
              >
                м.Одеса, вул. Космонавтів, 36, каб.701
              </Link>
            </li>
          </ul>
        </div>

        {/* Быстрые ссылки */}
        <div className="mx-auto md:mx-0">
          <h4 className="text-lg font-semibold mb-4">Швидкі посилання</h4>
          <ul className="text-sm space-y-2">
            <li>
              <Link to="/#advantages" className="hover:underline">
                Переваги
              </Link>
            </li>
            <li>
              <Link to="/townhouse" className="hover:underline">
                Таунхауси
              </Link>
            </li>
            <li>
              <Link to="/houses" className="hover:underline">
                Будинки
              </Link>
            </li>
            <li>
              <Link to="/apartments" className="hover:underline">
                Квартири
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="hover:underline">
                Звʼязатись
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
