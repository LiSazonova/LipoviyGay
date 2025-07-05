const About = () => {
  return (
    <section id="about" className="w-full px-8 py-20 bg-[#CAC7BE]">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center md:flex-row gap-10">
        <div className="md:w-1/2 text-gray-800">
          <h2 className="text-3xl md:text-5xl mb-4 capitalize font-bold">
            Про нас
          </h2>
          <div
            className="mb-4 h-0.5"
            style={{
              background: 'linear-gradient(to right, #fbbf24, transparent)',
            }}
          ></div>
          <p className="text-[16px] mb-2">
            Котеджне містечко на березі Сухого Лиману є ідеальним місцем для
            тих, хто прагне поєднати комфорт сучасного життя з красою природи.
            Розташоване у мальовничій місцевості, це містечко пропонує затишні
            квартири, таунхауси та будинки, оточені зеленими насадженнями та
            мальовничими краєвидами.{' '}
          </p>
          <p className="text-[16px] mb-2">
            Зручне розташування дозволяє насолоджуватися спокоєм і тишею на
            березі лиману, далеко від міської метушні, водночас залишаючись у
            пішій досяжності від усіх необхідних сервісів і інфраструктури.
            Архітектура котеджів гармонійно вписується в природній ландшафт,
            створюючи атмосферу затишку та спокою.{' '}
          </p>
          {/* <p className="font-roboto text-[14px] mb-4">
            Липовий Гай - комфорт і затишок біля природи
          </p> */}
        </div>

        <div className="md:w-1/2 flex flex-col items-center gap-6">
          <img
            src="/about/2.jpg"
            alt="Липовий Гай"
            className="w-full h-[450px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
