// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsTicker from './components/SkillsTicker';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Top Scroll progress */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <SkillsTicker />
        <About />
        <Stats />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
