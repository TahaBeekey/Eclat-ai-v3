
import React from 'react';

export const FinalCTA: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="audit" className="py-40 bg-transparent relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="bg-[#0a0a0a] rounded-[3rem] md:rounded-[3.5rem] p-10 md:p-24 text-center relative overflow-hidden shadow-2xl border border-white/5">
          {/* Intense gradient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_70%)] pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl lg:text-[72px] font-[900] text-white mb-10 leading-[0.95] tracking-[-0.05em]">
              Prenez une longueur d'avance <br className="hidden md:block" /> sur vos concurrents
            </h2>
            <p className="text-gray-400 text-base md:text-xl mb-14 max-w-2xl mx-auto leading-relaxed font-light">
              Ne laissez pas vos futurs patients sans réponse. Automatisez votre croissance dès aujourd'hui avec l'agence leader en IA esthétique.
            </p>
            
            <div className="flex flex-col items-center gap-8">
              <button 
                onClick={() => scrollTo('audit')}
                className="w-full sm:w-auto bg-white text-black px-12 py-6 rounded-2xl md:rounded-full text-lg md:text-xl font-black uppercase tracking-widest hover:bg-indigo-50 shadow-2xl transition-all hover:scale-105 active:scale-95 border-b-4 border-gray-200"
              >
                Réserver mon Audit Offert
              </button>
              
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-500 text-[10px] md:text-sm font-bold uppercase tracking-widest opacity-60">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  Sans engagement
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  Analyse de données
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  Expertise 100%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
