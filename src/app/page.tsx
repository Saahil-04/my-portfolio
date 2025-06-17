'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white overflow-x-hidden">
      <Head>
        <title>My Portfolio | Senior Developer</title>
        <meta name="description" content="Professional portfolio showcasing my skills and projects" />
      </Head>
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