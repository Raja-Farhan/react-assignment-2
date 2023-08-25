import './App.css';
import About from './components/About/About';
import CardContainer from './components/CardContainer/CardContainer';
import Consultations from './components/Consultations/Consultations';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import NewsLetter from './components/NewsLetter/NewsLetter';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import WhoWeAre from './components/WhoWeAre/WhoWeAre';


function App() {
  return (
      <>
        <Header />
        <HeroSection />
        <Features />
        <CardContainer />
        <About />
        <Services />
        <WhoWeAre />
        <Projects />
        <Consultations />
        <Team />
        <NewsLetter />
        <Footer />
      </>
  );
}

export default App;
