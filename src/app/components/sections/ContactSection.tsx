import React from 'react';

interface ContactProps {
  isDark: boolean;
  language: 'es' | 'en';
  activeMenu: string;
}

export default function ContactSection({ isDark = false, language = 'es', activeMenu = '' }: ContactProps) {
  const t = {
    es: {
      title: 'Contactos',
      subtitle: 'Conectemos y construyamos algo increíble juntos',
      footer: {
        madeWith: 'Hecho con',
        by: 'por',
        allRights: 'Todos los derechos reservados',
        quickLinks: 'Enlaces rápidos',
        aboutMe: 'Sobre mí',
        education: 'Educación',
        skills: 'Conocimientos',
        projects: 'Proyectos',
        testimonials: 'Testimonios'
      }
    },
    en: {
      title: 'Contacts',
      subtitle: 'Let\'s connect and build something amazing together',
      footer: {
        madeWith: 'Made with',
        by: 'by',
        allRights: 'All rights reserved',
        quickLinks: 'Quick links',
        aboutMe: 'About me',
        education: 'Education',
        skills: 'Skills',
        projects: 'Projects',
        testimonials: 'Testimonials'
      }
    }
  }[language];

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/evelinpulsara', 
      img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
      color: 'from-gray-700 to-gray-900',
      hoverColor: 'hover:from-gray-800 hover:to-black'
    },
    { 
      name: 'Email', 
      url: 'mailto:evelinpulsara@example.com', 
      img: 'https://toppng.com/uploads/preview/outlook-logo-png-1764x1490-117357613016jetuonqfr.webp',
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'hover:from-blue-600 hover:to-blue-800'
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/justevie_93/', 
      img: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
      color: 'from-pink-500 via-purple-500 to-orange-500',
      hoverColor: 'hover:from-pink-600 hover:via-purple-600 hover:to-orange-600'
    },
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/profile.php?id=61557542469129', 
      img: 'https://images.vexels.com/media/users/3/223136/isolated/preview/984f500cf9de4519b02b354346eb72e0-icono-de-facebook-redes-sociales.png',
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:from-blue-700 hover:to-blue-900'
    },
    { 
      name: 'X', 
      url: 'https://x.com/JustEvie_93', 
      img: 'https://img.freepik.com/vector-gratis/nuevo-diseno-icono-x-logotipo-twitter-2023_1017-45418.jpg',
      color: 'from-gray-900 to-black',
      hoverColor: 'hover:from-black hover:to-gray-900'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/evelin-pulsara-6790a3359/', 
      img: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:from-blue-700 hover:to-blue-900'
    },
  ];

  return (
    <>
      {/* Sección de Contacto */}
      <section id="contacto" className={`py-20 ${isDark ? 'bg-gradient-to-b from-[#0F1029] to-[#1a1642]' : 'bg-gradient-to-b from-[#F5F3FA] to-white'} scroll-mt-24`}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Título mejorado */}
            <div className="text-center mb-8">
              {activeMenu === 'Contacto' ? (
                <div className="inline-block">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 blur-xl opacity-30 rounded-full"></div>
                    <div className="relative px-8 py-4 rounded-full font-bold text-2xl bg-gradient-to-r from-[#DFC3EF] to-[#E9D5F5] text-gray-800 shadow-lg">
                      {t.title}
                    </div>
                  </div>
                </div>
              ) : (
                <h2 className={`text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t.title}
                </h2>
              )}
              <div className={`w-20 h-1 mx-auto mt-4 rounded-full ${isDark ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-purple-400 to-pink-400'}`}></div>
              <p className={`mt-4 text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.subtitle}
              </p>
            </div>

            {/* Grid de redes sociales */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 ${
                    isDark 
                      ? 'bg-gradient-to-br from-[#1C1B2E] to-[#252341] hover:from-[#252341] hover:to-[#2D255A] shadow-xl hover:shadow-2xl' 
                      : 'bg-white hover:bg-gradient-to-br hover:from-white hover:to-purple-50 shadow-lg hover:shadow-xl'
                  } border ${isDark ? 'border-purple-500/20 hover:border-purple-500/40' : 'border-purple-100 hover:border-purple-300'}`}
                >
                  {/* Fondo gradiente animado */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Contenedor del icono */}
                  <div className="relative p-6 flex flex-col items-center gap-3">
                    <div className={`w-16 h-16 rounded-xl ${isDark ? 'bg-white/10' : 'bg-purple-50'} p-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                      <img 
                        src={social.img} 
                        alt={social.name} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-800'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${social.color} group-hover:bg-clip-text transition-all duration-300`}>
                      {social.name}
                    </p>
                  </div>

                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%]"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDark ? 'bg-gradient-to-b from-[#1a1642] to-[#0F1029]' : 'bg-gradient-to-b from-white to-purple-100'} border-t ${isDark ? 'border-purple-500/20' : 'border-purple-200'}`}>
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Grid del footer */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Columna 1: Info personal */}
              <div>
                <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent`}>
                  Evelin Pulsara
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                  {language === 'es' 
                    ? 'Desarrolladora de software apasionada por crear experiencias digitales excepcionales.'
                    : 'Software developer passionate about creating exceptional digital experiences.'}
                </p>
                <div className="flex gap-3">
                  {socialLinks.slice(0, 4).map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-lg ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-purple-100 hover:bg-purple-200'} flex items-center justify-center transition-all duration-300 hover:scale-110`}
                    >
                      <img src={social.img} alt={social.name} className="w-5 h-5 object-contain" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Columna 2: Enlaces rápidos */}
              <div>
                <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t.footer.quickLinks}
                </h3>
                <ul className="space-y-2">
                  {[
                    { name: t.footer.aboutMe, href: '#sobre-mi' },
                    { name: t.footer.education, href: '#educacion' },
                    { name: t.footer.skills, href: '#conocimientos' },
                    { name: t.footer.projects, href: '#proyectos' },
                    { name: t.footer.testimonials, href: '#testimonios' }
                  ].map((link, idx) => (
                    <li key={idx}>
                      <a 
                        href={link.href}
                        className={`text-sm ${isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors duration-200 hover:translate-x-1 inline-block`}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Columna 3: Newsletter o contacto directo */}
              <div>
                <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {language === 'es' ? 'Contacto directo' : 'Direct contact'}
                </h3>
                <div className="space-y-3">
                  <a 
                    href="mailto:evelinpulsara@example.com"
                    className={`flex items-center gap-3 text-sm ${isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors duration-200`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    evelinpulsara@example.com
                  </a>
                  <a 
                    href="https://github.com/evelinpulsara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-sm ${isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors duration-200`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    github.com/evelinpulsara
                  </a>
                </div>
              </div>
            </div>

            {/* Línea divisoria */}
            <div className={`border-t ${isDark ? 'border-purple-500/20' : 'border-purple-200'} pt-8`}>
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Copyright */}
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} text-center md:text-left`}>
                  © {new Date().getFullYear()} Evelin Pulsara. {t.footer.allRights}.
                </p>

                {/* Hecho con amor */}
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} flex items-center gap-2`}>
                  {t.footer.madeWith}
                  <span className="text-red-500 animate-pulse">❤️</span>
                  {t.footer.by} Evelin
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}