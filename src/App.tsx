import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const STORAGE_KEY = 'portfolio-theme-inverted';

export default function App() {
  // false = default mix (white / black / green sections)
  // true  = inverted (white sections become black, black become white)
  // Hero, Navbar and Footer always stay dark.
  const [inverted, setInverted] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle('flipped', inverted);
    try {
      localStorage.setItem(STORAGE_KEY, inverted ? '1' : '0');
    } catch {
      /* ignore */
    }
  }, [inverted]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar inverted={inverted} setInverted={setInverted} />

      <main className="flex-1">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Services />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
