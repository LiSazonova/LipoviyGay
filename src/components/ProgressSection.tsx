// const ProgressSection = () => {
//   return (
//     <section id="progress" className="py-20 px-6 bg-white">
//       <div className="max-w-[1200px] mx-auto text-center">
//         <h2 className="text-3xl font-bold text-gray-900 mb-12">
//           Хід будівництва
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Пример карточки */}
//           <div className="bg-[#F8F8F8] p-4 rounded-xl shadow-sm">
//             <img
//               src="/progress/june2025.jpg"
//               alt="Червень 2025"
//               className="w-full h-48 object-cover rounded-lg mb-4"
//             />
//             <h4 className="text-xl font-semibold mb-2">Червень 2025</h4>
//             <p className="text-sm text-gray-700">
//               Завершено зведення другого поверху. Встановлено вікна та проведено
//               електрику.
//             </p>
//           </div>

//           <div className="bg-[#F8F8F8] p-4 rounded-xl shadow-sm">
//             <img
//               src="/progress/may2025.jpg"
//               alt="Травень 2025"
//               className="w-full h-48 object-cover rounded-lg mb-4"
//             />
//             <h4 className="text-xl font-semibold mb-2">Травень 2025</h4>
//             <p className="text-sm text-gray-700">
//               Завершено перший поверх. Змонтовано перекриття. Стартує кладка
//               другого поверху.
//             </p>
//           </div>

//           <div className="bg-[#F8F8F8] p-4 rounded-xl shadow-sm">
//             <img
//               src="/progress/april2025.jpg"
//               alt="Квітень 2025"
//               className="w-full h-48 object-cover rounded-lg mb-4"
//             />
//             <h4 className="text-xl font-semibold mb-2">Квітень 2025</h4>
//             <p className="text-sm text-gray-700">
//               Підготовлено фундамент, завершено армування та бетонування.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProgressSection;
// const ProgressSection = () => {
//   const stages = [
//     {
//       title: 'Червень 2025',
//       image: '/progress/progress1.png',
//       text: 'Завершено зведення другого поверху. Встановлено вікна та проведено електрику.',
//     },
//     {
//       title: 'Травень 2025',
//       image: '/progress/progress2.png',
//       text: 'Завершено перший поверх. Змонтовано перекриття. Стартує кладка другого поверху.',
//     },
//     {
//       title: 'Квітень 2025',
//       image: '/progress/progress3.webp',
//       text: 'Підготовлено фундамент, завершено армування та бетонування.',
//     },
//   ];

//   return (
//     <section id="progress" className="w-full bg-gray-100 py-20 px-4">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-gray-900 mb-12">
//           Хід будівництва
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {stages.map((stage, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 text-left"
//             >
//               <img
//                 src={stage.image}
//                 alt={stage.title}
//                 className="w-full h-48 object-cover rounded-xl mb-4"
//               />
//               <h4 className="text-lg font-semibold text-gray-800 mb-2">
//                 {stage.title}
//               </h4>
//               <p className="text-sm text-gray-600">{stage.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProgressSection;

const ProgressTimeline = () => {
  const stages = [
    {
      date: 'Квітень 2025',
      title: 'Фундамент',
      description:
        'Підготовлено фундамент, завершено армування та бетонування.',
      image: '/progress/progress3.webp',
    },
    {
      date: 'Травень 2025',
      title: 'Перший поверх',
      description:
        'Завершено перший поверх. Змонтовано перекриття. Стартує кладка другого поверху.',
      image: '/progress/progress2.png',
    },
    {
      date: 'Червень 2025',
      title: 'Другий поверх',
      description:
        'Завершено зведення другого поверху. Встановлено вікна та проведено електрику.',
      image: '/progress/progress1.png',
    },
  ];

  return (
    <section id="progress" className="w-full bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Хід будівництва
        </h2>
        <div className="relative border-l-4 border-[#3A8278] pl-6 space-y-12">
          {stages.map((stage, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[38px] top-1 w-6 h-6 rounded-full bg-[#3A8278] border-3 border-white"></div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <p className="text-sm text-gray-500 mb-1">{stage.date}</p>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {stage.title}
                </h4>
                <p className="text-gray-600 mb-4">{stage.description}</p>
                <img
                  src={stage.image}
                  alt={stage.title}
                  className="w-full h-52 object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressTimeline;
