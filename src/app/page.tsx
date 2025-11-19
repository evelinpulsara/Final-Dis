// app/page.tsx
'use client';
import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import MobileMenu from './components/MobileMenu'; 
import HeadSection from './components/sections/HeadSection';
import AboutSection from './components/sections/AboutSection';
import EducationSection from './components/sections/EducationSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';

export default function PortfolioLanding() {
  const [activeMenu, setActiveMenu] = useState('Sobre mi');
  const [isDark, setIsDark] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, width: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
    setIsDark(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
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

      {/* ✅ Header */}
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

      {/* ✅ MobileMenu: debe estar aquí */}
      <MobileMenu
        isDark={isDark}
        language={language}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        setIsDark={setIsDark}
        setLanguage={setLanguage}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* ✅ HeadSection: solo sus props */}
      <HeadSection
        isDark={isDark}
        language={language}
        scrollToSection={scrollToSection}
        // Añade más props SOLO si HeadSection las requiere
      />

      {/* Secciones */}
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