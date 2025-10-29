'use client';
import React, { useState, useEffect } from 'react';

export default function PortfolioLanding() {
  const [activeMenu, setActiveMenu] = useState('Sobre mi');
  const [isDark, setIsDark] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, width: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array de imágenes - RUTAS RELATIVAS desde la carpeta public/imagenes
  // Asegúrate de que los nombres de archivo coincidan exactamente.
  const images = [
    '/imagenes/Foto4.jpeg',
    '/imagenes/Foto5.jpeg',
    '/imagenes/Foto6.jpeg'
    // Puedes agregar más imágenes aquí, por ejemplo:
    // '/imagenes/dark.jpg',
    // '/imagenes/esta.jpg',
    // '/imagenes/Foto2.jpg',
    // '/imagenes/Foto3.jpg',
  ];

  const menuItems = ['Sobre mi', 'Educacion', 'Conocimientos', 'Proyectos', 'Testimonios', 'Contacto'];

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

  // Auto-rotate del carrusel cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Función para manejar el scroll a la sección
  const scrollToSection = (sectionId: string) => {
    if (!sectionId) return;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-[#F5F3FA]'} transition-colors duration-300`}>
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F3FA]/85 backdrop-blur-sm shadow-sm">
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Menu Items */}
            <div className="flex items-center gap-8 relative">
              {/* Animated oval background */}
              <div
                className="absolute h-10 bg-[#DFC3EF] rounded-full transition-all duration-300 ease-out shadow-inner"
                style={{
                  left: `${menuPosition.x}px`,
                  width: `${menuPosition.width + 32}px`,
                  transform: 'translateX(-16px)'
                }}
              />

              {menuItems.map((item) => (
                <button
                  key={item}
                  data-menu={item}
                  onClick={() => {
                    setActiveMenu(item);
                    // Scroll a la sección correspondiente
                    scrollToSection(item.toLowerCase().replace(/\s+/g, ''));
                  }}
                  className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeMenu === item
                      ? 'text-gray-800'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Right side icons */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </button>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
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

      {/* Hero Section - Modificado para usar imagen */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Fondo de imagen */}
        <div className="absolute inset-0">
          <img
            src={isDark ? '/imagenes/dark.jpg' : '/imagenes/esta.jpeg'}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          {/* Overlay para mejorar la legibilidad del texto */}
          <div className={`absolute inset-0 ${isDark ? 'bg-black/40' : 'bg-white/40'}`}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              &quot;Work hard silently, let success make the noise.&quot;
            </h1>
            <p className="text-2xl text-white/90 font-light">Evelin Pulsara</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobremi" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* Image Carousel */}
            <div className="lg:w-1/2 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[#DFC3EF] rounded-full blur-3xl opacity-30 transform scale-110" />

              <div className="relative w-full max-w-xs mx-auto h-[320px]">
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
                      style={{
                        transform,
                        zIndex,
                        opacity
                      }}
                    >
                      <div className="w-full h-full rounded-[20px] overflow-hidden shadow-2xl bg-gradient-to-br from-purple-200 to-blue-200">
                        <img
                          src={img}
                          alt={`Foto ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  );
                })}

                {/* Indicadores de puntos */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'bg-purple-400 w-6'
                          : 'bg-gray-300 hover:bg-purple-300'
                      }`}
                      aria-label={`Ir a imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#DFC3EF] rounded-full opacity-20 blur-2xl" />

              <div className="relative">
                <div className="inline-block mb-6 px-6 py-3 bg-[#DFC3EF] rounded-full">
                  <h2 className="text-2xl font-semibold text-gray-800">Sobre mi</h2>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Soy estudiante de Ingeniería de Software, con interés en el desarrollo de aplicaciones y videojuegos. Busco fortalecer mis conocimientos, aportar soluciones y crecer profesionalmente.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Me interesa el área de desarrollo frontend, con entusiasmo en la creación de interfaces dinámicas y en el diseño de videojuegos. Me definen la creatividad, la curiosidad y la perseverancia, cualidades que aplico en mis proyectos académicos y personales. Además de programar, disfruto pintar, leer, cocinar y jugar Roblox, actividades que alimentan mi imaginación y refuerzan mi capacidad de análisis. Aspiro a crecer profesionalmente y aportar soluciones innovadoras que integren técnica, arte y experiencias significativas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Educación */}
      <section id="educacion" className="py-20 bg-[#F5F3FA]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Educación</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#E9E2F7] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">Técnico en sistemas</h3>
                <p className="text-gray-600 mb-4">Terminado</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white p-1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKbc9YpxUwySM6rEAv_K3jfJgW6lZDtglGw&s" alt="Logo SistemPlus" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="font-medium">SistemPlus</p>
                    <p className="text-sm text-gray-500">Date</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E9E2F7] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">Técnico en electrónica</h3>
                <p className="text-gray-600 mb-4">Terminado</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white p-1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTULg_1QeoH6jdICwT-C1bj7VMJU9sXCg8g&s" alt="Logo Cinar Sistemas" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="font-medium">Cinar Sistemas</p>
                    <p className="text-sm text-gray-500">Date</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E9E2F7] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">Ingeniería de software</h3>
                <p className="text-gray-600 mb-4">Activo</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white p-1">
                    <img src="4de_Colombia_logo.svg." alt="Logo Universidad Cooperativa" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="font-medium">Universidad Cooperativa</p>
                    <p className="text-sm text-gray-500">----</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Conocimientos */}
      <section id="conocimientos" className="py-20 bg-[#F5F3FA]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Conocimientos</h2>
            <div className="space-y-8">
              <div className="bg-[#D6C8F0] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row items-start gap-6">
                <div className="w-20 h-20 rounded-lg bg-white p-2">
                  <img src="https://images.icon-icons.com/2108/PNG/512/java_icon_130901.png" alt="Java Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Java</h3>
                  <p className="text-gray-700">
                    Tengo conocimientos en programación orientada a objetos, creación de aplicaciones y estructuras de datos. He trabajado en proyectos académicos donde implementé sistemas de gestión y bases de datos, aplicando buenas prácticas de desarrollo.
                  </p>
                </div>
              </div>

              <div className="bg-[#C7D9F7] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row items-start gap-6">
                <div className="w-20 h-20 rounded-lg bg-white p-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="Python Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Python</h3>
                  <p className="text-gray-700">
                    Uso Python para resolver problemas, practicar algoritmos y trabajar con estructuras de datos. También lo empleo en proyectos de automatización y ejercicios que fortalecen mi lógica de programación.
                  </p>
                </div>
              </div>

              <div className="bg-[#A9B7F2] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row items-start gap-6">
                <div className="w-20 h-20 rounded-lg bg-white p-2">
                  <img src="https://cdn.worldvectorlogo.com/logos/unity-69.svg" alt="Unity Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Unity</h3>
                  <p className="text-gray-700">
                    Me interesa el desarrollo de videojuegos y la creación de experiencias interactivas. He practicado con Unity para aprender sobre diseño de entornos, animaciones y lógica de interacción dentro de juegos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Proyectos - MODIFICADA */}
      <section id="proyectos" className="py-20 bg-[#F5F3FA]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Proyecto 1: Boleto de avión */}
              <div className="bg-[#C7D9F7] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <a
                    href="https://boleto-tawny.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-32 rounded-lg overflow-hidden"
                  >
                    <img src="imagenes/boleto.png" alt="Vista previa de Boleto de avión" className="w-full h-full object-cover" />
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-2">Boleto de avión</h3>
                <p className="text-gray-600 mb-2">Link GitHub:</p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li><a href="https://github.com/evelinpulsara/Boleto.git" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Boleto</a></li>
                </ul>
              </div>

              {/* Proyecto 2: Invitacion */}
              <div className="bg-[#D6C8F0] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <a
                    href="https://invitacion-angely.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-32 rounded-lg overflow-hidden"
                  >
                    <img src="imagenes/xv.png" alt="Vista previa de invitacion" className="w-full h-full object-cover" />
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-2">Invitación XV</h3>
                <p className="text-gray-600 mb-2">Link GitHub:</p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li><a href="https://github.com/evelinpulsara/invitacion-Angely.git" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Invitación</a></li>
                </ul>
              </div>

              {/* Proyecto 3: Interfaz */}
              <div className="bg-[#B18BE8] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <a
                    href="https://taller-interfaz.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-32 rounded-lg overflow-hidden"
                  >
                    <img src="imagenes/interfaz.png" alt="Vista previa de Interfaz" className="w-full h-full object-cover" />
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-2">Formulario</h3>
                <p className="text-gray-600 mb-2">Link GitHub:</p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li><a href="https://github.com/evelinpulsara/Cuarto-Taller.git" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Cuarto Taller</a></li>
                </ul>
              </div>

              {/* Proyecto 4: Title 1 */}
              <div className="bg-[#E9E2F7] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4 flex justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Logo" className="w-20 h-20 object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-2">Title</h3>
                <p className="text-gray-600 mb-2">Link GitHub:</p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>-</li>
                </ul>
              </div>

              {/* Proyecto 5: Title 2 */}
              <div className="bg-[#EFD8F6] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4 flex justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Logo" className="w-20 h-20 object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-2">Title</h3>
                <p className="text-gray-600 mb-2">Link GitHub:</p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>-</li>
                </ul>
              </div>

              {/* Proyecto 6: Title 3 */}
              <div className="bg-[#A9B7F2] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4 flex justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Logo" className="w-20 h-20 object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-2">Title</h3>
                <p className="text-gray-600 mb-2">Link GitHub:</p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>-</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Testimonios - Diseño nuevo */}
      <section id="testimonios" className="py-20 bg-[#F5F3FA]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Testimonios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Cuadro 1 */}
              <div className="bg-[#D6C8F0] p-6 rounded-xl shadow-md border border-gray-300">
                <p className="text-gray-800 italic mb-4">
                  “Demuestra gran dedicación en cada proyecto, siempre busca soluciones creativas y bien estructuradas.”
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://img.wattpad.com/fc3990959c5ad87193d752998c6193fcd6ee6dab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f7a3031524e7747703436364f6f413d3d2d32332e313534303133313231666639643336623835373439393631333230342e6a7067"
                    alt="Andrea López"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-[#7A4FBF]">Andrea López, Docente</p>
                    <p className="text-sm text-[#5E5A72]">15/04/2025</p>
                  </div>
                </div>
              </div>

              {/* Cuadro 2 */}
              <div className="bg-[#C7D9F7] p-6 rounded-xl shadow-md border border-gray-300">
                <p className="text-gray-800 italic mb-4">
                  “Trabajar con ella en equipo es inspirador; aporta ideas claras y mantiene una actitud positiva y profesional.”
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Carlos Mendoza"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-[#7A4FBF]">Carlos Mendoza, Compañero</p>
                    <p className="text-sm text-[#5E5A72]">02/05/2025</p>
                  </div>
                </div>
              </div>

              {/* Cuadro 3 */}
              <div className="bg-[#E9E2F7] p-6 rounded-xl shadow-md border border-gray-300">
                <p className="text-gray-800 italic mb-4">
                  “Tiene la habilidad de unir lo técnico con lo humano, logrando resultados sólidos y con valor práctico.”
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Laura Jiménez"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-[#7A4FBF]">Laura Jiménez, Profesora</p>
                    <p className="text-sm text-[#5E5A72]">20/05/2025</p>
                  </div>
                </div>
              </div>

              {/* Cuadro 4 */}
              <div className="bg-[#F0EEF9] p-6 rounded-xl shadow-md border border-gray-300">
                <p className="text-gray-800 italic mb-4">
                  “Quote”
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/65.jpg"
                    alt="Title"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-[#7A4FBF]">Title</p>
                    <p className="text-sm text-[#5E5A72]">00/00/00</p>
                  </div>
                </div>
              </div>

              {/* Cuadro 5 */}
              <div className="bg-[#F0EEF9] p-6 rounded-xl shadow-md border border-gray-300">
                <p className="text-gray-800 italic mb-4">
                  “Quote”
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Title"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-[#7A4FBF]">Title</p>
                    <p className="text-sm text-[#5E5A72]">00/00/00</p>
                  </div>
                </div>
              </div>

              {/* Cuadro 6 */}
              <div className="bg-[#F0EEF9] p-6 rounded-xl shadow-md border border-gray-300">
                <p className="text-gray-800 italic mb-4">
                  “Quote”
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Title"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-[#7A4FBF]">Title</p>
                    <p className="text-sm text-[#5E5A72]">00/00/00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Contacto - Diseño nuevo */}
      <section id="contacto" className="py-20 bg-[#E9E2F7]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Contactos</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {/* GitHub */}
              <a
                href="https://github.com/evelinpulsara"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="GitHub"
                  className="w-12 h-12 object-contain"
                />
              </a>

              {/* Email */}
              <a
                href="https://outlook.office.com/mail/?deeplink=mail%2F0%2F%3Fnlp%3D0"
                className="block p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src="https://toppng.com/uploads/preview/outlook-logo-png-1764x1490-117357613016jetuonqfr.webp"
                  alt="Email"
                  className="w-12 h-12 object-contain"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/justevie_93/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="Instagram"
                  className="w-12 h-12 object-contain"
                />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61557542469129"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src="https://images.vexels.com/media/users/3/223136/isolated/preview/984f500cf9de4519b02b354346eb72e0-icono-de-facebook-redes-sociales.png"
                  alt="Facebook"
                  className="w-12 h-12 object-contain"
                />
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/JustEvie_93"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src="https://img.freepik.com/vector-gratis/nuevo-diseno-icono-x-logotipo-twitter-2023_1017-45418.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="X"
                  className="w-12 h-12 object-contain"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/evelin-pulsara-6790a3359/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="w-12 h-12 object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}