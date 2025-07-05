import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import MainLayout from '../layouts/MainLayout';
import Houses from '../pages/Houses';
import Apartments from '../pages/Apartments';
import Townhouse from '../pages/Townhouse';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/townhouse" element={<Townhouse />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/apartments" element={<Apartments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
