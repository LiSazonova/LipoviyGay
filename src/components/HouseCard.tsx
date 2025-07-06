import { Link } from 'react-router-dom';

interface HouseCardProps {
  title: string;
  price: string;
  image: string;
  link: string;
}

const HouseCard = ({ title, price, image, link }: HouseCardProps) => {
  return (
    <Link to={link} className="group relative block overflow-hidden shadow-lg">
      <img
        src={image}
        alt={title}
        className="h-[400px] w-full object-cover transition-transform group-hover:scale-105"
      />

      <div className="absolute top-4 left-4 bg-white text-[#3A8278] font-semibold text-sm px-4 py-2 rounded shadow">
        Побудований
      </div>
      <div className="absolute top-4 right-4 bg-[#3A8278] text-white text-center font-semibold text-sm px-4 py-2 rounded shadow">
        Перший внесок <br /> від 30%
      </div>

      <div className="bg-white p-4">
        <h3 className="text-xl font-bold text-black mb-1">{title}</h3>
        <p className="text-gray-500 text-sm">Вартість</p>
        <p className="text-[#3A8278] font-semibold text-lg">{price}</p>
      </div>
    </Link>
  );
};

export default HouseCard;
