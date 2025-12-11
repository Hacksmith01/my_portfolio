import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollUp from './components/ScrollUp';

// 🔹 NEW IMPORT
import LiquidEther from './components/background/LiquidEther';

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);

  // Load initial theme from localStorage (same as old JS)
  useEffect(() => {
    const selectedTheme = localStorage.getItem('selected-theme');
    if (selectedTheme) {
      const isDark = selectedTheme === 'dark';
      setIsDarkTheme(isDark);
      document.body.classList[isDark ? 'add' : 'remove']('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => {
      const next = !prev;
      document.body.classList[next ? 'add' : 'remove']('dark-theme');
      localStorage.setItem('selected-theme', next ? 'dark' : 'light');
      localStorage.setItem('selected-icon', next ? 'fa-moon' : 'fa-sun');
      return next;
    });
  };

  // Scroll behaviour: header bg, scroll-up button, active nav link
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setHeaderScrolled(scrollY >= 80);
      setShowScrollUp(scrollY >= 560);

      const sectionIds = ['home', 'about', 'skills', 'qualification', 'experience', 'portfolio', 'contact'];
      let current = 'home';

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 50;
          const sectionHeight = section.offsetHeight;
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run once
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 🔹 NEW: full-screen LiquidEther background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={8}
          iterationsPoisson={8}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <Header
        isDarkTheme={isDarkTheme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        headerScrolled={headerScrolled}
      />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Experience />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
      <ScrollUp show={showScrollUp} />
    </>
  );
};

export default App;
