import Advantages from '../components/Advantages';
import ContactSection from '../components/ContactSection';
import Hero from '../components/Hero';
import TelegramModal from '../components/Modal';
import TownhouseExamples from '../components/TownhouseExamples';
import '../index.css';

const Home = () => {
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
