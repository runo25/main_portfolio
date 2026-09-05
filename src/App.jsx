import { useState, useCallback } from 'react';

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
import RecruiterDossierModal from './components/RecruiterDossierModal';
import Toast from './components/Toast';

export default function App() {
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  }, []);

  return (
    <div className="portfolio-app">
      {/* Top Scroll progress */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar onOpenDossier={() => setIsDossierOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenDossier={() => setIsDossierOpen(true)}
          onShowToast={showToast}
        />
        <SkillsTicker />
        <About />
        <Stats />
        <Services />
        <Projects onShowToast={showToast} />
        <Experience />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Recruiter Fast-Track Dossier Modal */}
      <RecruiterDossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />

      {/* Global Tactile Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
