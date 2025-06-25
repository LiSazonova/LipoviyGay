// const ContactSection = () => {
//   return (
//     <section className="w-full px-4 py-16 bg-gray-100" id="contact">
//       <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12">
//         {/* Форма обратной связи */}
//         <div>
//           <h2 className="text-3xl font-bold mb-6 text-gray-800">
//             Зв'язатись з нами
//           </h2>
//           <form className="flex flex-col gap-4">
//             <input
//               type="text"
//               placeholder="Ваше ім’я"
//               className="border border-gray-300 p-3 rounded outline-none focus:ring-2 focus:ring-yellow-300"
//             />
//             <input
//               type="tel"
//               placeholder="Телефон"
//               className="border border-gray-300 p-3 rounded outline-none focus:ring-2 focus:ring-yellow-300"
//             />
//             <textarea
//               rows={5}
//               placeholder="Ваше повідомлення"
//               className="border border-gray-300 p-3 rounded outline-none resize-none focus:ring-2 focus:ring-yellow-300"
//             />
//             <button
//               type="submit"
//               className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded transition"
//             >
//               Надіслати
//             </button>
//           </form>
//         </div>

//         {/* Карта */}
//         <div className="w-full h-[400px] lg:h-auto rounded overflow-hidden shadow-md">
//           <iframe
//             title="Місцезнаходження"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2329.596634263222!2d30.618659728480996!3d46.410265352477836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c7cd00094cf967%3A0x556decd47d0c306e!2z0JrQvtGC0LXQtNC20L3QtSDQvNGW0YHRgtC10YfQutC-ICLQm9C40L_QvtCy0LjQuSDQk9Cw0Lki!5e0!3m2!1sru!2sua!4v1749213748405!5m2!1sru!2sua"
//             width="100%"
//             height="100%"
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             className="w-full h-full"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
const ContactSection = () => {
  return (
    <section
      data-theme="light"
      id="contact"
      className="bg-white text-black py-20 px-4"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold  mb-8">Зв'язатись з нами</h2>
          <form className="flex flex-col gap-4 text-black ">
            <input
              type="text"
              placeholder="Ваше ім’я"
              className="p-4 border border-black rounded-xl outline-none focus:border-[#3A8278]"
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="p-4 border border-black rounded-xl outline-none focus:border-[#3A8278]"
            />
            <textarea
              rows={4}
              placeholder="Ваше повідомлення"
              className="p-4 border border-black rounded-xl outline-none resize-none focus:border-[#3A8278]"
            />
            <button className="border border-white text-[18px] text-white py-3 px-6 rounded-md bg-[#3A8278] backdrop-blur-md hover:border-[#3A8278] hover:bg-transparent hover:text-black transition">
              <a href="#contact">Надіслати</a>
            </button>
          </form>
        </div>
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="Місцезнаходження"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2329.596634263222!2d30.618659728480996!3d46.410265352477836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c7cd00094cf967%3A0x556decd47d0c306e!2z0JrQvtGC0LXQtNC20L3QtSDQvNGW0YHRgtC10YfQutC-ICLQm9C40L_QvtCy0LjQuSDQk9Cw0Lki!5e0!3m2!1sru!2sua!4v1749213748405!5m2!1sru!2sua"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
