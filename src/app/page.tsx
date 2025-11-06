// app/page.tsx
'use client';
import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import AboutSection from './components/sections/AboutSection';
import EducationSection from './components/sections/EducationSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';

export default function PortfolioLanding() {
  const [activeMenu, setActiveMenu] = useState('Sobre mi');
  const [isDark, setIsDark] = useState(false); // 👈 Lo cambiaremos por el modo sistema
  const [menuPosition, setMenuPosition] = useState({ x: 0, width: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ Detectar modo del sistema
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      setIsDark(event.matches);
    });
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    const activeElement = document.querySelector(`[data-menu="${activeMenu}"]`);
    if (activeElement && activeElement.parentElement) {
      const rect = activeElement.getBoundingClientRect();
      const container = activeElement.parentElement.getBoundingClientRect();
      setMenuPosition({
        x: rect.left - container.left,
        width: rect.width
      });
    }
  }, [activeMenu]);

  const scrollToSection = (sectionId: string) => {
    if (!sectionId) return;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#0F1029]' : 'bg-[#F5F3FA]'} transition-colors duration-300 overflow-x-hidden`}>
      <Header
        activeMenu={activeMenu}
        isDark={isDark}
        menuPosition={menuPosition}
        setActiveMenu={setActiveMenu}
        setIsDark={setIsDark}
        setLanguage={setLanguage} 
        language={language}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={isDark ? '/imagenes/dark.jpg' : '/imagenes/esta.jpeg'}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${isDark ? 'bg-black/20' : 'bg-white/20'}`}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
              Work hard silently, let success make the noise.
            </h1>
            <div className="inline-block mt-4 px-6 py-2 rounded-full bg-[#D6C8F0]/80 shadow-inner">
              <p className="text-2xl md:text-3xl font-medium text-[#6D5F8B]">Evelin Pulsara</p>
            </div>
          </div>
        </div>
      </section>

      <AboutSection
        isDark={isDark}
        language={language}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        activeMenu={activeMenu}
      />
      <EducationSection isDark={isDark} language={language} activeMenu={activeMenu} />
      <SkillsSection isDark={isDark} language={language} activeMenu={activeMenu} />
      <ProjectsSection isDark={isDark} language={language} activeMenu={activeMenu} />
      <TestimonialsSection isDark={isDark} language={language} activeMenu={activeMenu} />
      <ContactSection isDark={isDark} language={language} activeMenu={activeMenu} />
    </div>
  );
}