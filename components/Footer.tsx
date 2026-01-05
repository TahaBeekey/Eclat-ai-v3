
import React from 'react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-white/5 pt-24 pb-12 overflow-hidden bg-gradient-to-br from-[#050505] via-[#0a1229] to-[#050505]">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/20">
                <span className="text-white font-black text-sm">É</span>
              </div>
              <span className="font-black text-xl tracking-tight text-white uppercase">ÉCLAT AI</span>
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm mb-8 font-light">
              Le partenaire de confiance des cliniques d'exception. Nous fusionnons médecine esthétique et intelligence artificielle pour créer l'excellence opérationnelle.
            </p>
            <div className="flex gap-5">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-indigo-500 transition-all cursor-pointer group">
                   <div className="w-4 h-4 bg-current rounded-sm group-hover:scale-110 transition-transform"></div>
                 </div>
               ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-black mb-7 text-[10px] uppercase tracking-[0.25em] text-white">Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><button onClick={() => scrollTo('audit')} className="hover:text-indigo-400 transition-colors">Audit Stratégique</button></li>
              <li><button onClick={() => scrollTo('features')} className="hover:text-indigo-400 transition-colors">Systèmes de Leads</button></li>
              <li><button onClick={() => scrollTo('demo')} className="hover:text-indigo-400 transition-colors">Agents IA Conversationnels</button></li>
              <li><button onClick={() => scrollTo('calculator')} className="hover:text-indigo-400 transition-colors">Dashboard Analytique</button></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-black mb-7 text-[10px] uppercase tracking-[0.25em] text-white">Agence</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><button onClick={() => scrollTo('home')} className="hover:text-indigo-400 transition-colors">Notre Vision</button></li>
              <li><button onClick={() => scrollTo('results')} className="hover:text-indigo-400 transition-colors">Résultats Clients</button></li>
              <li><button onClick={() => scrollTo('features')} className="hover:text-indigo-400 transition-colors">Expertise Médicale</button></li>
              <li><button onClick={() => scrollTo('audit')} className="hover:text-indigo-400 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-black mb-7 text-[10px] uppercase tracking-[0.25em] text-white">Lettre d'Expertise</h4>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed font-light">Rejoignez 500+ directeurs de cliniques recevant nos analyses IA hebdomadaires.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Directeur Médical @..." 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-white text-black px-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-50 transition-colors">
                REJOINDRE
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-gray-500 text-[10px] font-bold tracking-[0.1em] uppercase">
            © 2024 ÉCLAT AI SAS. TOUS DROITS RÉSERVÉS.
          </div>
          <div className="flex gap-10 text-[10px] font-black text-gray-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
