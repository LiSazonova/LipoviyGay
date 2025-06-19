import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import MainLayout from '../layouts/MainLayout';
import Townhouses from '../pages/Townhouses';
import Houses from '../pages/Houses';
import TownhousePage from '../pages/TownhousePage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/townhouses" element={<Townhouses />} />
          <Route path="/townhouses/:id" element={<TownhousePage />} />
          <Route path="/houses" element={<Houses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
