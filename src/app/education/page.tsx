// app/education/page.tsx
import React from 'react';

interface EducationProps {
  isDark: boolean;
  language: 'es' | 'en';
}

export default function EducationSection({ isDark, language }: EducationProps) {
  const t = {
    es: {
      title: 'Educación',
      items: [
        { title: 'Técnico en sistemas', status: 'Terminado', org: 'SistemPlus', date: 'Date' },
        { title: 'Técnico en electrónica', status: 'Terminado', org: 'Cinar Sistemas', date: 'Date' },
        { title: 'Ingeniería de software', status: 'Activo', org: 'Universidad Cooperativa', date: '----' },
      ]
    },
    en: {
      title: 'Education',
      items: [
        { title: 'Systems Technician', status: 'Completed', org: 'SistemPlus', date: 'Date' },
        { title: 'Electronics Technician', status: 'Completed', org: 'Cinar Sistemas', date: 'Date' },
        { title: 'Software Engineering', status: 'Active', org: 'Universidad Cooperativa', date: '----' },
      ]
    }
  }[language];

  return (
    <section id="educacion" className={`py-20 ${isDark ? 'bg-[#0F1029]' : 'bg-[#F5F3FA]'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : ''}`}>{t.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.items.map((item, idx) => (
              <div
                key={idx}
                className={`${isDark ? 'bg-[#1C1B2E]' : 'bg-[#E9E2F7]'} p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow`}
              >
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : ''}`}>{item.title}</h3>
                <p className={`${isDark ? 'text-[#FF8989]' : 'text-gray-600'} mb-4`}>{item.status}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white p-1">
                    <img
                      src={
                        idx === 0
                          ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKbc9YpxUwySM6rEAv_K3jfJgW6lZDtglGw&s"
                          : idx === 1
                            ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTULg_1QeoH6jdICwT-C1bj7VMJU9sXCg8g&s"
                            : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/U._Cooperativa_de_Colombia_logo.svg/2276px-U._Cooperativa_de_Colombia_logo.svg.png"
                      }
                      alt={`Logo ${item.org}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className={`font-medium ${isDark ? 'text-white' : ''}`}>{item.org}</p>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}