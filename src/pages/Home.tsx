import Advantages from '../components/Advantages';
import ContactSection from '../components/ContactSection';
import Hero from '../components/Hero';
import TelegramModal from '../components/Modal';
import TownhouseExamples from '../components/TownhouseExamples';
import '../index.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);
  return (
    <div>
      <Hero />
      <Advantages />
      <TownhouseExamples />
      <TelegramModal />
      <ContactSection />
    </div>
  );
};

export default Home;
