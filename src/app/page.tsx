'use client';
import React, { useState, useEffect } from 'react';

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

  // Textos en ambos idiomas
  const texts = {
    es: {
      menu: ['Sobre mi', 'Educacion', 'Conocimientos', 'Proyectos', 'Testimonios', 'Contacto'],
      hero: { quote: '"Work hard silently, let success make the noise."', name: 'Evelin Pulsara' },
      about: { title: 'Sobre mi', p1: 'Soy estudiante de Ingeniería de Software, con interés en el desarrollo de aplicaciones y videojuegos. Busco fortalecer mis conocimientos, aportar soluciones y crecer profesionalmente.', p2: 'Me interesa el área de desarrollo frontend, con entusiasmo en la creación de interfaces dinámicas y en el diseño de videojuegos. Me definen la creatividad, la curiosidad y la perseverancia, cualidades que aplico en mis proyectos académicos y personales. Además de programar, disfruto pintar, leer, cocinar y jugar Roblox, actividades que alimentan mi imaginación y refuerzan mi capacidad de análisis. Aspiro a crecer profesionalmente y aportar soluciones innovadoras que integren técnica, arte y experiencias significativas.' },
      education: 'Educación',
      educationItems: [
        { title: 'Técnico en sistemas', status: 'Terminado', org: 'SistemPlus', date: 'Date' },
        { title: 'Técnico en electrónica', status: 'Terminado', org: 'Cinar Sistemas', date: 'Date' },
        { title: 'Ingeniería de software', status: 'Activo', org: 'Universidad Cooperativa', date: '----' },
      ],
      skills: 'Conocimientos',
      skillsItems: [
        { title: 'Java', desc: 'Tengo conocimientos en programación orientada a objetos, creación de aplicaciones y estructuras de datos. He trabajado en proyectos académicos donde implementé sistemas de gestión y bases de datos, aplicando buenas prácticas de desarrollo.' },
        { title: 'Python', desc: 'Uso Python para resolver problemas, practicar algoritmos y trabajar con estructuras de datos. También lo empleo en proyectos de automatización y ejercicios que fortalecen mi lógica de programación.' },
        { title: 'Unity', desc: 'Me interesa el desarrollo de videojuegos y la creación de experiencias interactivas. He practicado con Unity para aprender sobre diseño de entornos, animaciones y lógica de interacción dentro de juegos.' },
      ],
      projects: 'Proyectos',
      projectsItems: [
        { title: 'Boleto de avión', github: 'https://github.com/evelinpulsara/Boleto.git  ', vercel: 'https://boleto-tawny.vercel.app  ', img: '/imagenes/boleto.png' },
        { title: 'Invitación XV', github: 'https://github.com/evelinpulsara/invitacion-Angely.git  ', vercel: 'https://invitacion-angely.vercel.app  ', img: '/imagenes/xv.png' },
        { title: 'Formulario', github: 'https://github.com/evelinpulsara/Cuarto-Taller.git  ', vercel: 'https://taller-interfaz.vercel.app  ', img: '/imagenes/interfaz.png' },
        { title: 'Interfaz', github: 'https://github.com/evelinpulsara/responsive-design.git  ', vercel: 'https://responsive-design-indol.vercel.app  ', img: '/imagenes/netflix.png' },
        { title: 'Title', github: '-', vercel: '#', img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png  ' },
        { title: 'Title', github: '-', vercel: '#', img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png  ' },
      ],
      testimonials: 'Testimonios',
      testimonialsItems: [
        { text: 'Demuestra gran dedicación en cada proyecto, siempre busca soluciones creativas y bien estructuradas.', name: 'Andrea López, Docente', date: '15/04/2025' },
        { text: 'Trabajar con ella en equipo es inspirador; aporta ideas claras y mantiene una actitud positiva y profesional.', name: 'Carlos Mendoza, Compañero', date: '02/05/2025' },
        { text: 'Tiene la habilidad de unir lo técnico con lo humano, logrando resultados sólidos y con valor práctico.', name: 'Laura Jiménez, Profesora', date: '20/05/2025' },
        { text: 'Quote', name: 'Title', date: '00/00/00' },
        { text: 'Quote', name: 'Title', date: '00/00/00' },
        { text: 'Quote', name: 'Title', date: '00/00/00' },
      ],
      contact: 'Contactos',
    },
    en: {
      menu: ['About me', 'Education', 'Skills', 'Projects', 'Testimonials', 'Contact'],
      hero: { quote: '"Work hard silently, let success make the noise."', name: 'Evelin Pulsara' },
      about: { title: 'About me', p1: 'I am a Software Engineering student, interested in application and video game development. I seek to strengthen my knowledge, provide solutions, and grow professionally.', p2: 'I am interested in frontend development, with enthusiasm for creating dynamic interfaces and video game design. I am defined by creativity, curiosity, and perseverance—qualities I apply in my academic and personal projects. Besides programming, I enjoy painting, reading, cooking, and playing Roblox, activities that fuel my imagination and reinforce my analytical skills. I aspire to grow professionally and contribute innovative solutions that integrate technology, art, and meaningful experiences.' },
      education: 'Education',
      educationItems: [
        { title: 'Systems Technician', status: 'Completed', org: 'SistemPlus', date: 'Date' },
        { title: 'Electronics Technician', status: 'Completed', org: 'Cinar Sistemas', date: 'Date' },
        { title: 'Software Engineering', status: 'Active', org: 'Universidad Cooperativa', date: '----' },
      ],
      skills: 'Skills',
      skillsItems: [
        { title: 'Java', desc: 'I have knowledge in object-oriented programming, application development, and data structures. I have worked on academic projects implementing management systems and databases, applying good development practices.' },
        { title: 'Python', desc: 'I use Python to solve problems, practice algorithms, and work with data structures. I also use it for automation projects and exercises that strengthen my programming logic.' },
        { title: 'Unity', desc: 'I am interested in video game development and creating interactive experiences. I have practiced with Unity to learn about environment design, animations, and interaction logic within games.' },
      ],
      projects: 'Projects',
      projectsItems: [
        { title: 'Flight Ticket', github: 'https://github.com/evelinpulsara/Boleto.git  ', vercel: 'https://boleto-tawny.vercel.app  ', img: '/imagenes/boleto.png' },
        { title: 'XV Invitation', github: 'https://github.com/evelinpulsara/invitacion-Angely.git  ', vercel: 'https://invitacion-angely.vercel.app  ', img: '/imagenes/xv.png' },
        { title: 'Form', github: 'https://github.com/evelinpulsara/Cuarto-Taller.git  ', vercel: 'https://taller-interfaz.vercel.app  ', img: '/imagenes/interfaz.png' },
        { title: 'Interface', github: 'https://github.com/evelinpulsara/responsive-design.git  ', vercel: 'https://responsive-design-indol.vercel.app  ', img: '/imagenes/netflix.png' },
        { title: 'Title', github: '-', vercel: '#', img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png  ' },
        { title: 'Title', github: '-', vercel: '#', img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png  ' },
      ],
      testimonials: 'Testimonials',
      testimonialsItems: [
        { text: 'She shows great dedication in every project, always seeking creative and well-structured solutions.', name: 'Andrea López, Teacher', date: '15/04/2025' },
        { text: 'Working with her on a team is inspiring; she brings clear ideas and maintains a positive and professional attitude.', name: 'Carlos Mendoza, Teammate', date: '02/05/2025' },
        { text: 'She has the ability to blend technical and human aspects, achieving solid and practical results.', name: 'Laura Jiménez, Professor', date: '20/05/2025' },
        { text: 'Quote', name: 'Title', date: '00/00/00' },
        { text: 'Quote', name: 'Title', date: '00/00/00' },
        { text: 'Quote', name: 'Title', date: '00/00/00' },
      ],
      contact: 'Contacts',
    }
  };

  const t = texts[language];

  // Array de imágenes
  const images = [
    '/imagenes/Foto4.jpeg',
    '/imagenes/Foto5.jpeg',
    '/imagenes/Foto6.jpeg'
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToSection = (sectionId: string) => {
    if (!sectionId) return;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#0F1029]' : 'bg-[#F5F3FA]'} transition-colors duration-300`}>
      {/* Header/Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${isDark ? 'bg-[#0F1029]/85' : 'bg-[#F5F3FA]/85'} backdrop-blur-sm shadow-sm`}>
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8 relative">
              <div
                className="absolute h-10 bg-[#DFC3EF] rounded-full transition-all duration-300 ease-out shadow-inner"
                style={{
                  left: `${menuPosition.x}px`,
                  width: `${menuPosition.width + 32}px`,
                  transform: 'translateX(-16px)'
                }}
              />
              {t.menu.map((item, idx) => (
                <button
                  key={item}
                  data-menu={item}
                  onClick={() => {
                    setActiveMenu(item);
                    scrollToSection(['sobremi', 'educacion', 'conocimientos', 'proyectos', 'testimonios', 'contacto'][idx]);
                  }}
                  className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeMenu === item
                      ? isDark ? 'text-white' : 'text-gray-800'
                      : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800 hover:bg-[#e3d3ed] rounded-full shadow-inner'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {/* Botón de traducción */}
              <button
                onClick={toggleLanguage}
                className={`p-2 rounded-lg transition-colors ${isDark ? 'text-white hover:bg-[#1C1B2E]' : 'text-gray-700 hover:bg-gray-200'}`}
                aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </button>
              {/* Botón de modo oscuro */}
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg transition-colors ${isDark ? 'text-white hover:bg-[#1C1B2E]' : 'text-gray-700 hover:bg-gray-200'}`}
              >
                {isDark ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

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
              {t.hero.quote}
            </h1>
            <p className="text-2xl text-white/90 font-light">{t.hero.name}</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobremi" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="lg:w-1/2 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[#DFC3EF] rounded-full blur-3xl opacity-30 transform scale-110" />
              <div className="relative w-full max-w-xs mx-auto">
                {/* Carrusel responsivo */}
                <div className="aspect-square w-full max-w-[320px] h-auto relative">
                  {images.map((img, index) => {
                    const offset = (index - currentImageIndex + images.length) % images.length;
                    let transform = '';
                    let zIndex = 0;
                    let opacity = 0;
                    if (offset === 0) {
                      transform = 'translateX(0) translateY(0) scale(1)';
                      zIndex = 30;
                      opacity = 1;
                    } else if (offset === 1) {
                      transform = 'translateX(50%) translateY(-8%) scale(0.88)';
                      zIndex = 20;
                      opacity = 0.6;
                    } else if (offset === images.length - 1) {
                      transform = 'translateX(-50%) translateY(-8%) scale(0.88)';
                      zIndex = 10;
                      opacity = 0.6;
                    } else {
                      transform = 'translateX(0) translateY(0) scale(0.5)';
                      zIndex = 0;
                      opacity = 0;
                    }
                    return (
                      <div
                        key={index}
                        className="absolute inset-0 transition-all duration-700 ease-in-out"
                        style={{ transform, zIndex, opacity }}
                      >
                        <div className="w-full h-full rounded-[20px] overflow-hidden shadow-2xl bg-gradient-to-br from-purple-200 to-blue-200">
                          <img src={img} alt={`Foto ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    );
                  })}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex ? 'bg-purple-400 w-6' : 'bg-gray-300 hover:bg-purple-300'
                        }`}
                        aria-label={`Ir a imagen ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#DFC3EF] rounded-full opacity-20 blur-2xl" />
              <div className="relative">
                <div className="inline-block mb-6 px-6 py-3 bg-[#DFC3EF] rounded-full">
                  <h2 className="text-2xl font-semibold text-gray-800">{t.about.title}</h2>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {t.about.p1}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t.about.p2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Educación */}
      <section id="educacion" className={`py-20 ${isDark ? 'bg-[#0F1029]' : 'bg-[#F5F3FA]'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : ''}`}>{t.education}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`${isDark ? 'bg-[#1C1B2E]' : 'bg-[#E9E2F7]'} p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow`}>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : ''}`}>{t.educationItems[0].title}</h3>
                <p className={`${isDark ? 'text-[#FF8989]' : 'text-gray-600'} mb-4`}>{t.educationItems[0].status}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white p-1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKbc9YpxUwySM6rEAv_K3jfJgW6lZDtglGw&s" alt="Logo SistemPlus" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className={`font-medium ${isDark ? 'text-white' : ''}`}>{t.educationItems[0].org}</p>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{t.educationItems[0].date}</p>
                  </div>
                </div>
              </div>
              <div className={`${isDark ? 'bg-[#322F56]' : 'bg-[#E9E2F7]'} p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow`}>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : ''}`}>{t.educationItems[1].title}</h3>
                <p className={`${isDark ? 'text-[#FF8989]' : 'text-gray-600'} mb-4`}>{t.educationItems[1].status}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white p-1">
                    <img src="  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTULg_1QeoH6jdICwT-C1bj7VMJU9sXCg8g&s" alt="Logo Cinar Sistemas" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className={`font-medium ${isDark ? 'text-white' : ''}`}>{t.educationItems[1].org}</p>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{t.educationItems[1].date}</p>
                  </div>
                </div>
              </div>
              <div className={`${isDark ? 'bg-[#2D255A]' : 'bg-[#E9E2F7]'} p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow`}>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : ''}`}>{t.educationItems[2].title}</h3>
                <p className={`${isDark ? 'text-[#4CAF50]' : 'text-gray-600'} mb-4`}>{t.educationItems[2].status}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white p-1">
                    <img src="  https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/U._Cooperativa_de_Colombia_logo.svg/2276px-U._Cooperativa_de_Colombia_logo.svg.png  " alt="Logo Universidad Cooperativa" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className={`font-medium ${isDark ? 'text-white' : ''}`}>{t.educationItems[2].org}</p>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{t.educationItems[2].date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Conocimientos */}
      <section id="conocimientos" className={`py-20 ${isDark ? 'bg-[#0F1029]' : 'bg-[#F5F3FA]'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : ''}`}>{t.skills}</h2>
            <div className="space-y-8">
              <div className={`${isDark ? 'bg-[#2D255A]' : 'bg-[#D6C8F0]'} p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row items-start gap-6`}>
                <div className="w-20 h-20 rounded-lg bg-white p-2">
                  <img src="https://images.icon-icons.com/2108/PNG/512/java_icon_130901.png  " alt="Java Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : ''}`}>{t.skillsItems[0].title}</h3>
                  <p className={isDark ? 'text-[#C7C7DB]' : 'text-gray-700'}>
                    {t.skillsItems[0].desc}
                  </p>
                </div>
              </div>
              <div className={`${isDark ? 'bg-[#1C1B2E]' : 'bg-[#C7D9F7]'} p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row items-start gap-6`}>
                <div className="w-20 h-20 rounded-lg bg-white p-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png  " alt="Python Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : ''}`}>{t.skillsItems[1].title}</h3>
                  <p className={isDark ? 'text-[#C7C7DB]' : 'text-gray-700'}>
                    {t.skillsItems[1].desc}
                  </p>
                </div>
              </div>
              <div className={`${isDark ? 'bg-[#322F56]' : 'bg-[#A9B7F2]'} p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row items-start gap-6`}>
                <div className="w-20 h-20 rounded-lg bg-white p-2">
                  <img src="https://cdn.worldvectorlogo.com/logos/unity-69.svg  " alt="Unity Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : ''}`}>{t.skillsItems[2].title}</h3>
                  <p className={isDark ? 'text-[#C7C7DB]' : 'text-gray-700'}>
                    {t.skillsItems[2].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Proyectos */}
      <section id="proyectos" className={`py-20 ${isDark ? 'bg-[#0F1029]' : 'bg-[#F5F3FA]'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : ''}`}>{t.projects}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.projectsItems.map((project, idx) => (
                <div
                  key={idx}
                  className={`${isDark ? 'bg-[#1C1B2E]' : idx === 0 ? 'bg-[#C7D9F7]' : idx === 1 ? 'bg-[#D6C8F0]' : idx === 2 ? 'bg-[#B18BE8]' : idx === 3 ? 'bg-[#E9E2F7]' : idx === 4 ? 'bg-[#EFD8F6]' : 'bg-[#A9B7F2]'} p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="mb-4">
                    <a href={project.vercel} target="_blank" rel="noopener noreferrer" className="block w-full h-32 rounded-lg overflow-hidden">
                      <img src={project.img} alt={`Vista previa de ${project.title}`} className="w-full h-full object-cover" />
                    </a>
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : ''}`}>{project.title}</h3>
                  <p className={isDark ? 'text-[#B18BE8] mb-2' : 'text-gray-600 mb-2'}>Link GitHub:</p>
                  <ul className="list-disc pl-5">
                    <li>
                      {project.github === '-' ? (
                        <span className={isDark ? 'text-[#B18BE8]' : 'text-gray-700'}>-</span>
                      ) : (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-[#B18BE8] hover:text-[#D6C8F0] transition-colors ${isDark ? '' : 'hover:underline'}`}
                        >
                          {project.github}
                        </a>
                      )}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección Testimonios */}
      <section id="testimonios" className={`py-20 ${isDark ? 'bg-[#0F1029]' : 'bg-[#F5F3FA]'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : ''}`}>{t.testimonials}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.testimonialsItems.map((testimonial, idx) => (
                <div
                  key={idx}
                  className={`${isDark ? 'bg-[#1C1B2E] border-[#333]' : 'bg-[#D6C8F0] border-gray-300'} p-6 rounded-xl shadow-md border hover:shadow-lg transition-shadow`}
                >
                  <p className={`${isDark ? 'text-white' : 'text-gray-800'} italic mb-4`}>
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://randomuser.me/api/portraits/  ${idx % 2 === 0 ? 'women' : 'men'}/${30 + idx}.jpg`}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className={`font-medium ${isDark ? 'text-[#B18BE8]' : 'text-[#7A4FBF]'}`}>{testimonial.name}</p>
                      <p className={`text-sm ${isDark ? 'text-[#C7C7DB]' : 'text-[#5E5A72]'}`}>{testimonial.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className={`py-20 ${isDark ? 'bg-[#1C1B2E]' : 'bg-[#E9E2F7]'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : ''}`}>{t.contact}</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { name: 'GitHub', url: 'https://github.com/evelinpulsara  ', img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png  ' },
                { name: 'Email', url: 'mailto:evelinpulsara@example.com', img: 'https://toppng.com/uploads/preview/outlook-logo-png-1764x1490-117357613016jetuonqfr.webp  ' },
                { name: 'Instagram', url: 'https://www.instagram.com/justevie_93/  ', img: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png  ' },
                { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61557542469129', img: '  https://images.vexels.com/media/users/3/223136/isolated/preview/984f500cf9de4519b02b354346eb72e0-icono-de-facebook-redes-sociales.png  ' },
                { name: 'X', url: 'https://x.com/JustEvie_93  ', img: 'https://img.freepik.com/vector-gratis/nuevo-diseno-icono-x-logotipo-twitter-2023_1017-45418.jpg?semt=ais_hybrid&w=740&q=80' },
                { name: 'LinkedIn', url: '  https://www.linkedin.com/in/evelin-pulsara-6790a3359/  ', img: 'https://cdn-icons-png.flaticon.com/512/174/174857.png  ' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-4 ${isDark ? 'bg-[#2D255A]' : 'bg-white'} rounded-xl shadow-md hover:shadow-lg transition-shadow`}
                >
                  <img src={social.img} alt={social.name} className="w-12 h-12 object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}