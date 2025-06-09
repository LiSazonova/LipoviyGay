// const Footer = () => {
//   return (
//     <footer className="bg-[#F8F8F8] text-gray-700 pt-12 pb-6 px-8">
//       <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
//         {/* Logo + Description */}
//         <div>
//           <h3 className="text-2xl font-bold mb-4 text-gray-900">
//             Південний центр
//           </h3>
//           <p className="text-sm leading-relaxed">
//             Надійна нерухомість в кращих районах Півдня України. Таунхауси,
//             новобудови, ділянки — ми знайдемо найкращий варіант саме для вас.
//           </p>
//         </div>

//         {/* Контакти */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4 text-gray-900">Контакти</h4>
//           <ul className="text-sm space-y-2">
//             <li>
//               📞{' '}
//               <a href="tel:+380123456789" className="hover:underline">
//                 +38 (012) 345-67-89
//               </a>
//             </li>
//             <li>
//               📧{' '}
//               <a href="mailto:info@realty.com" className="hover:underline">
//                 info@realty.com
//               </a>
//             </li>
//             <li>📍 Одеса, вул. Приморська, 12</li>
//           </ul>
//         </div>

//         {/* Навігація */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4 text-gray-900">
//             Швидкі посилання
//           </h4>
//           <ul className="text-sm space-y-2">
//             <li>
//               <a href="#about" className="hover:underline">
//                 Про нас
//               </a>
//             </li>
//             <li>
//               <a href="#advantages" className="hover:underline">
//                 Переваги
//               </a>
//             </li>
//             <li>
//               <a href="#townhouses" className="hover:underline">
//                 Таунхауси
//               </a>
//             </li>
//             <li>
//               <a href="#contacts" className="hover:underline">
//                 Звʼязатись
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom line */}
//       <div className="mt-12 border-t pt-4 text-center text-xs text-gray-500">
//         © {new Date().getFullYear()} Південний центр нерухомості. Усі права
//         захищені.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Південний центр нерухомості
          </h3>
          <p className="text-sm leading-relaxed">
            Надійна нерухомість в кращих районах Півдня України. Таунхауси,
            новобудови, ділянки — ми знайдемо найкращий варіант саме для вас.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Контакти</h4>
          <ul className="text-sm space-y-2">
            <li>
              📞{' '}
              <a href="tel:+380123456789" className="hover:underline">
                +38 (012) 345-67-89
              </a>
            </li>
            <li>
              📧{' '}
              <a href="mailto:info@realty.com" className="hover:underline">
                info@realty.com
              </a>
            </li>
            <li>📍 Одеса, вул. Приморська, 12</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Швидкі посилання
          </h4>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#about" className="hover:underline">
                Про нас
              </a>
            </li>
            <li>
              <a href="#advantages" className="hover:underline">
                Переваги
              </a>
            </li>
            <li>
              <a href="#townhouses" className="hover:underline">
                Таунхауси
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Звʼязатись
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 border-t pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} RunFox. Усі права захищені.
      </div>
    </footer>
  );
};

export default Footer;
