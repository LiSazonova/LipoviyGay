// import { SlPhone } from 'react-icons/sl';
// import { CiMail } from 'react-icons/ci';
// import { BsGeoAltFill } from 'react-icons/bs';
// const Footer = () => {
//   return (
//     <footer
//       data-theme="dark"
//       className="text-black pt-16 pb-8 px-4"
//       style={{
//         background: 'linear-gradient(to bottom, #f3f4f6 5%, #3A8278 100%)',
//       }}
//     >
//       <div className="max-w-6xl mx-auto flex flex-row justify-between gap-10">
//         <div className="max-w-[450px]">
//           <h3 className="text-2xl font-bold mb-4">
//             Південний Центр Нерухомості
//           </h3>
//           <p className="text-sm leading-relaxed">
//             Надійна нерухомість в кращих районах Півдня України. Таунхауси,
//             новобудови, ділянки — ми знайдемо найкращий варіант саме для вас.
//           </p>
//         </div>

//         <div>
//           <h4 className="text-lg font-semibold mb-4">Контакти</h4>
//           <ul className="text-sm space-y-2">
//             <li className="flex items-center gap-2 transition-transform duration-300">
//               <a
//                 href="tel:+380979748002"
//                 className="flex items-center gap-2 hover:text-yellow-400"
//               >
//                 <SlPhone /> +38 (097) 974-80-02
//               </a>
//             </li>
//             <li className="flex items-center gap-2 transition-transform duration-300">
//               <SlPhone />
//               <a
//                 href="tel:+380992224158"
//                 className="flex items-center gap-2 hover:text-yellow-400"
//               >
//                 +38 (099) 222-41-58
//               </a>
//             </li>
//             <li className="flex items-center gap-2 transition-transform duration-300">
//               <a
//                 href="tel:+380936221446"
//                 className="flex items-center gap-2 hover:text-yellow-400"
//               >
//                 <SlPhone /> +38 (093) 622-14-46
//               </a>
//             </li>
//             <li className="flex items-center gap-2 transition-transform duration-300">
//               <CiMail />
//               <a href="mailto:info@realty.com" className="hover:underline">
//                 lipovijgay@ukr.net
//               </a>
//             </li>
//             <li className="flex items-center gap-2 transition-transform duration-300">
//               <BsGeoAltFill />
//               <a
//                 href="https://maps.app.goo.gl/LjKHZD3eFEiphnfX7"
//                 target="_blank"
//               >
//                 м.Одеса, вул. Космонавтів, 36, каб.701
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-lg font-semibold mb-4">Швидкі посилання</h4>
//           <ul className="text-sm space-y-2">
//             {/* <li>
//               <a href="/#about" className="hover:underline">
//                 Про нас
//               </a>
//             </li> */}
//             <li>
//               <a href="/#advantages" className="hover:underline">
//                 Переваги
//               </a>
//             </li>
//             <li>
//               <a href="/townhouse" className="hover:underline">
//                 Таунхауси
//               </a>
//             </li>
//             <li>
//               <a href="/houses" className="hover:underline">
//                 Будинки
//               </a>
//             </li>
//             <li>
//               <a href="/apartments" className="hover:underline">
//                 Квартири
//               </a>
//             </li>
//             <li>
//               <a href="/#contact" className="hover:underline">
//                 Звʼязатись
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       {/* <div className="mt-12 border-t pt-4 text-center text-xs text-white">
//         © {new Date().getFullYear()} RunFox. Усі права захищені.
//       </div> */}
//     </footer>
//   );
// };

// export default Footer;

import { SlPhone } from 'react-icons/sl';
import { CiMail } from 'react-icons/ci';
import { BsGeoAltFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer
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
              <a href="tel:+380979748002" className="hover:text-yellow-400">
                +38 (097) 974-80-02
              </a>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <SlPhone className="text-[18px]" />
              <a href="tel:+380992224158" className="hover:text-yellow-400">
                +38 (099) 222-41-58
              </a>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <SlPhone className="text-[18px]" />
              <a href="tel:+380936221446" className="hover:text-yellow-400">
                +38 (093) 622-14-46
              </a>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <CiMail className="text-[18px]" />
              <a href="mailto:lipovijgay@ukr.net" className="hover:underline">
                lipovijgay@ukr.net
              </a>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <BsGeoAltFill className="text-[18px]" />
              <a
                href="https://maps.app.goo.gl/LjKHZD3eFEiphnfX7"
                target="_blank"
                rel="noopener noreferrer"
              >
                м.Одеса, вул. Космонавтів, 36, каб.701
              </a>
            </li>
          </ul>
        </div>

        {/* Быстрые ссылки */}
        <div className="mx-auto md:mx-0">
          <h4 className="text-lg font-semibold mb-4">Швидкі посилання</h4>
          <ul className="text-sm space-y-2">
            <li>
              <a href="/#advantages" className="hover:underline">
                Переваги
              </a>
            </li>
            <li>
              <a href="/townhouse" className="hover:underline">
                Таунхауси
              </a>
            </li>
            <li>
              <a href="/houses" className="hover:underline">
                Будинки
              </a>
            </li>
            <li>
              <a href="/apartments" className="hover:underline">
                Квартири
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:underline">
                Звʼязатись
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
