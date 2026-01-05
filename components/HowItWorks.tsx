
import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      badge: "PHASE 01",
      title: "Audit & Diagnostic",
      description: "Analyse exhaustive de vos processus pour identifier vos leviers d'automatisation prioritaires.",
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
      )
    },
    {
      badge: "PHASE 02",
      title: "Déploiement Système",
      description: "Intégration d'une infrastructure IA sur-mesure agnostique de vos outils existants.",
      icon: (
        <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      )
    },
    {
      badge: "PHASE 03",
      title: "Optimisation & Scale",
      description: "Suivi continu et ajustement des algorithmes pour une croissance prédictive et maîtrisée.",
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>
      )
    }
  ];

  return (
    <section id="demo" className="py-48 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-28 reveal">
          <span className="text-indigo-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block">MÉTHODOLOGIE OPÉRATIONNELLE</span>
          <h2 className="text-4xl md:text-6xl lg:text-[75px] font-[900] text-gray-900 mb-8 tracking-[-0.05em] leading-[0.95]">
            Un déploiement fluide en <br /> trois phases stratégiques.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className={`reveal stagger-${idx + 1}`}>
              <div className="premium-card p-12 rounded-[3rem] h-full flex flex-col bg-zinc-950 backdrop-blur-xl border border-white/10 transition-all duration-700 hover:border-indigo-500/30 group shadow-2xl">
                <div className="flex justify-between items-center mb-10">
                  <span className="text-[10px] font-black tracking-[0.4em] text-indigo-400 uppercase">{step.badge}</span>
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-6 tracking-tight text-white leading-tight group-hover:text-indigo-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 font-light text-lg leading-relaxed mb-4">
                  {step.description}
                </p>
                
                {/* Visual Connector Logic (Subtle) */}
                <div className="mt-auto pt-8 flex items-center gap-2 opacity-20 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="h-[1px] flex-grow bg-indigo-500/30"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
