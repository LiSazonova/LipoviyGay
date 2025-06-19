import { useParams } from 'react-router-dom';

const TownhousePage = () => {
  const { id } = useParams();

  return (
    <div className="p-50 h-screen">
      <h1 className="text-3xl font-bold">Таунхаус №{id}</h1>
      <p className="mt-4 text-gray-700">Тут будет описание таунхауса {id}...</p>
    </div>
  );
};

export default TownhousePage;
