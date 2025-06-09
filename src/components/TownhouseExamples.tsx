// const TownhouseExamples = () => {
//   const houses = [
//     {
//       title: 'Таунхаус №1',
//       desc: '130 м² · 2 поверхи · 3 спальні · тераса',
//       image: '/townhouses/town1.jpg',
//     },
//     {
//       title: 'Таунхаус №2',
//       desc: '145 м² · гараж · панорамні вікна',
//       image: '/townhouses/town2.jpg',
//     },
//     {
//       title: 'Таунхаус №3',
//       desc: '120 м² · власний дворик · кухня-студія',
//       image: '/townhouses/town3.jpg',
//     },
//   ];

//   return (
//     <section className="w-full px-8 py-20 bg-[#F8F8F8]">
//       <div className="max-w-[1200px] mx-auto">
//         <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
//           Таунхауси
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {houses.map((house, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition"
//             >
//               <img
//                 src={house.image}
//                 alt={house.title}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2">{house.title}</h3>
//                 <p className="text-gray-600">{house.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TownhouseExamples;
const TownhouseExamples = () => {
  const houses = [
    {
      title: 'Таунхаус №1',
      desc: '130 м² · 2 поверхи · 3 спальні · тераса',
      image: '/townhouses/town1.jpg',
    },
    {
      title: 'Таунхаус №2',
      desc: '145 м² · гараж · панорамні вікна',
      image: '/townhouses/town2.jpg',
    },
    {
      title: 'Таунхаус №3',
      desc: '120 м² · власний дворик · кухня-студія',
      image: '/townhouses/town3.jpg',
    },
  ];

  return (
    <section id="townhouses" className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Таунхауси</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {houses.map((house, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <img
                src={house.image}
                alt={house.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {house.title}
                </h3>
                <p className="text-gray-600 text-sm">{house.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TownhouseExamples;
