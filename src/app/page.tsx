'use client';
import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import AboutSection from './about/page';
import EducationSection from './education/page';
import SkillsSection from './skills/page';
import ProjectsSection from './projects/page';
import TestimonialsSection from './testimonials/page';
import ContactSection from './contact/page';

export default function PortfolioLanding() {
  const [activeMenu, setActiveMenu] = useState('Sobre mi');
  const [isDark, setIsDark] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, width: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [language, setLanguage] = useState<'es' | 'en'>('es'); // Estado para el idioma

  // Función para cambiar el idioma
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
    <div className={`min-h-screen ${isDark ? 'bg-[#0F1029]' : 'bg-[#F5F3FA]'} transition-colors duration-300`}>
      <Header
        activeMenu={activeMenu}
        isDark={isDark}
        menuPosition={menuPosition}
        setActiveMenu={setActiveMenu}
        setIsDark={setIsDark}
        toggleLanguage={toggleLanguage}
        language={language}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={isDark ? '/imagenes/dark.jpg' : '/imagenes/esta.jpeg'}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${isDark ? 'bg-black/40' : 'bg-white/40'}`}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              {"Work hard silently, let success make the noise."}
            </h1>
            <p className="text-2xl text-white/90 font-light">Evelin Pulsara</p>
          </div>
        </div>
      </section>

      {/* Renderizar las secciones */}
      <AboutSection
        isDark={isDark}
        language={language}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
      <EducationSection isDark={isDark} language={language} />
      <SkillsSection isDark={isDark} language={language} />
      <ProjectsSection isDark={isDark} language={language} />
      <TestimonialsSection isDark={isDark} language={language} />
      <ContactSection isDark={isDark} language={language} />
    </div>
  );
}