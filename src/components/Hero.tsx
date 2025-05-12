import heroImage from '../assets/hero.jpg';

const Hero = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center flex items-end justify-end"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className=" bg-[#004358c5] p-6 rounded-lg text-right text-white max-w-xl">
        <h1 className="text-[42px] md:text-6xl font-caveat font-bold mb-4 text-[#FBDE89]">
          Липовий Гай
        </h1>
        <p className="text-lg md:text-3xl mb-6">
          Комфорт. Якість. Спокій поруч з природою.
        </p>
        <button className="bg-[#ffffff59] hover:bg-[#004358] text-white hover:text-[#FBDE89] text-lg md:text-2xl font-semibold py-2 px-6 rounded transition">
          Дізнатись більше
        </button>
      </div>
    </section>
  );
};

export default Hero;
