// app/skills/page.tsx
import React from 'react';

interface SkillsProps {
  isDark: boolean;
  language: 'es' | 'en';
}

export default function SkillsSection({ isDark, language }: SkillsProps) {
  const t = {
    es: {
      title: 'Conocimientos',
      items: [
        {
          title: 'Java',
          desc: 'Tengo conocimientos en programación orientada a objetos, creación de aplicaciones y estructuras de datos. He trabajado en proyectos académicos donde implementé sistemas de gestión y bases de datos, aplicando buenas prácticas de desarrollo.'
        },
        {
          title: 'Python',
          desc: 'Uso Python para resolver problemas, practicar algoritmos y trabajar con estructuras de datos. También lo empleo en proyectos de automatización y ejercicios que fortalecen mi lógica de programación.'
        },
        {
          title: 'Unity',
          desc: 'Me interesa el desarrollo de videojuegos y la creación de experiencias interactivas. He practicado con Unity para aprender sobre diseño de entornos, animaciones y lógica de interacción dentro de juegos.'
        },
      ]
    },
    en: {
      title: 'Skills',
      items: [
        {
          title: 'Java',
          desc: 'I have knowledge in object-oriented programming, application development, and data structures. I have worked on academic projects implementing management systems and databases, applying good development practices.'
        },
        {
          title: 'Python',
          desc: 'I use Python to solve problems, practice algorithms, and work with data structures. I also use it for automation projects and exercises that strengthen my programming logic.'
        },
        {
          title: 'Unity',
          desc: 'I am interested in video game development and creating interactive experiences. I have practiced with Unity to learn about environment design, animations, and interaction logic within games.'
        },
      ]
    }
  }[language];

  return (
    <section id="conocimientos" className={`py-20 ${isDark ? 'bg-[#0F1029]' : 'bg-[#F5F3FA]'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : ''}`}>{t.title}</h2>
          <div className="space-y-8">
            {t.items.map((item, idx) => (
              <div
                key={idx}
                className={`${isDark ? 'bg-[#2D255A]' : idx === 0 ? 'bg-[#D6C8F0]' : idx === 1 ? 'bg-[#C7D9F7]' : 'bg-[#A9B7F2]'} p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row items-start gap-6`}
              >
                <div className="w-20 h-20 rounded-lg bg-white p-2">
                  <img
                    src={
                      idx === 0
                        ? "https://images.icon-icons.com/2108/PNG/512/java_icon_130901.png"
                        : idx === 1
                          ? "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                          : "https://cdn.worldvectorlogo.com/logos/unity-69.svg"
                    }
                    alt={`${item.title} Logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : ''}`}>{item.title}</h3>
                  <p className={isDark ? 'text-[#C7C7DB]' : 'text-gray-700'}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}