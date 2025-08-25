'use client';

import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Navbar from './components/sections/navbar';
import HeroSection from './components/sections/herosection';
import AboutSection from './components/sections/aboutsection';
import ProjectsSection from './components/sections/projectsection';
import JourneySection from './components/sections/journeysection';
import SkillsSection from './components/sections/skillssection';
import ContactSection from './components/sections/contactsection';
import Footer from './components/sections/footer';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const lenisRef = useRef<Lenis | null>(null); // Use useRef to hold the Lenis instance

  // Effect for initializing and managing the Lenis instance
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();
    lenisRef.current = lenis;

    // Animation frame loop
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Effect for handling scroll-based active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'journey', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated scrollToSection to use the Lenis API
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element && lenisRef.current) {
      // Use the Lenis instance to scroll
      lenisRef.current.scrollTo(element, { offset: -80 });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-black/60 via-black/30 to-transparent">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <JourneySection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}