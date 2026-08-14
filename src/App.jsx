import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Gallery from './components/Gallery';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HireMeModal from './components/HireMeModal';
import AdminModal from './components/AdminModal';
import confetti from 'canvas-confetti';
import { personalDetails } from './data/portfolioData';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('vivek_portfolio_theme');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const [hireMeOpen, setHireMeOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('vivek_portfolio_theme', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Download Real Resume Handler
  const handleDownloadResume = () => {
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    const resumeUrl = personalDetails.resumeUrl || '/resume/Vivek-Kumar-Resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Sticky Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenHireMe={() => setHireMeOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <Hero
          darkMode={darkMode}
          onOpenHireMe={() => setHireMeOpen(true)}
          onDownloadResume={handleDownloadResume}
        />

        <About darkMode={darkMode} />

        <Skills darkMode={darkMode} />

        <Projects darkMode={darkMode} />

        <Experience darkMode={darkMode} />

        <Education darkMode={darkMode} />

        <Certifications darkMode={darkMode} />

        <Gallery darkMode={darkMode} />

        <Resume
          darkMode={darkMode}
          onDownloadResume={handleDownloadResume}
        />

        <Contact darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} onOpenAdmin={() => setAdminOpen(true)} />

      {/* Quick Recruiter "Hire Me" Modal */}
      <HireMeModal
        isOpen={hireMeOpen}
        onClose={() => setHireMeOpen(false)}
        darkMode={darkMode}
      />

      {/* Protected Admin Messages Dashboard Modal */}
      <AdminModal
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
}
