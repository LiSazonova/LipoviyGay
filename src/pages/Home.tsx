// import About from '../components/About';
import Advantages from '../components/Advantages';
import ContactSection from '../components/ContactSection';
import Hero from '../components/Hero';
import TelegramModal from '../components/Modal';
// import SubscribeTelegram from '../components/Subscribe';
// import ProgressSection from '../components/ProgressSection';
import TownhouseExamples from '../components/TownhouseExamples';
import '../index.css';

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <About /> */}
      <Advantages />
      <TownhouseExamples />
      {/* <ProgressSection /> */}
      <TelegramModal />
      <ContactSection />
    </div>
  );
};

export default Home;
