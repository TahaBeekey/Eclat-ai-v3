
import React from 'react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Dr. Sophie Martin",
      role: "Clinique Épure (Paris)",
      content: "L'IA d'Éclat a radicalement transformé notre gestion des leads. Nous ne perdons plus aucun contact, et notre taux de remplissage a bondi de 35% dès le premier trimestre.",
      results: "+35% Occupation"
    },
    {
      name: "Marc Lefebvre",
      role: "DermaLuxe Group",
      content: "Le niveau de sophistication des automates est impressionnant. Ils capturent l'ADN de notre marque et répondent avec une précision chirurgicale.",
      results: "ROI 14.5x"
    },
    {
      name: "Dra. Elena Gomez",
      role: "Directrice Médicale",
      content: "Un gain de temps inestimable pour mon secrétariat. L'expérience patient est fluide, moderne et hautement professionnelle.",
      results: "-40% Temps Admin"
    }
  ];

  return (
    <section id="results" className="py-40 bg-transparent text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 reveal">
          <span className="text-indigo-400 font-black text-[10px] tracking-[0.5em] uppercase mb-8 block">RÉSULTATS PROUVÉS</span>
          <h2 className="text-4xl md:text-6xl lg:text-[70px] font-[900] mb-6 tracking-[-0.05em] leading-[0.95]">La référence des <br /> cliniques de pointe.</h2>
          <div className="h-1.5 w-24 bg-indigo-500 mx-auto rounded-full mt-10 transition-all duration-1000 hover:w-48"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <div key={idx} className={`reveal stagger-${idx + 1}`}>
              <div className="premium-card p-12 rounded-[3rem] h-full flex flex-col group hover:bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-700 backdrop-blur-sm">
                <div className="flex gap-1 mb-8 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-indigo-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl text-gray-200 leading-relaxed font-light italic mb-12 flex-grow transition-colors group-hover:text-white">
                  "{t.content}"
                </p>
                <div className="border-t border-white/5 pt-8">
                  <div className="text-indigo-400 font-black mb-3 text-[10px] uppercase tracking-[0.2em] transform transition-transform group-hover:translate-x-1">{t.results}</div>
                  <div className="font-bold text-xl text-white mb-1">{t.name}</div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
