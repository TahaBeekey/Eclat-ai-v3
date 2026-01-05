
import React, { useState, useRef } from 'react';

const Card3D: React.FC<{ 
  children: React.ReactNode; 
  className?: string; 
  featured?: boolean;
}> = ({ children, className = "", featured = false }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize -1 to 1
    const xPos = (x / rect.width) - 0.5;
    const yPos = (y / rect.height) - 0.5;
    
    setRotate({
      x: -yPos * 8, // rotation around X axis (up/down)
      y: xPos * 8   // rotation around Y axis (left/right)
    });

    setSpotlight({ x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`premium-card ${className} group`}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
    >
      {/* Internal Spotlight Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${spotlight.x}px ${spotlight.y}px, ${featured ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.08)'}, transparent 40%)`
        }}
      />
      {children}
    </div>
  );
};

export const ValueProposition: React.FC = () => {
  const cards = [
    {
      badge: "ANALYTIQUE",
      title: "Performance Prédictive",
      description: "Identifiez vos leviers de croissance grâce à une analyse chirurgicale de votre tunnel de conversion.",
      visual: (
        <div className="w-full h-32 bg-slate-800/20 rounded-xl border border-white/5 mt-6 relative overflow-hidden group-hover:border-indigo-500/20 transition-colors">
          <div className="absolute top-4 left-6 right-6 h-1.5 bg-white/5 rounded-full overflow-hidden">
             <div className="h-full w-3/4 bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-1000 group-hover:w-[85%]"></div>
          </div>
          <div className="absolute top-10 left-6 right-16 h-1.5 bg-white/5 rounded-full"></div>
          <div className="absolute top-16 left-6 right-24 h-1.5 bg-white/5 rounded-full"></div>
          <div className="absolute bottom-4 left-6 flex gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"></div>
            </div>
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10"></div>
          </div>
        </div>
      )
    },
    {
      badge: "IA CONVERSATIONNELLE",
      title: "Orchestration Omnicanale",
      description: "Automatisez vos échanges sur Instagram, WhatsApp et Web avec une IA qui capture l'ADN de votre clinique.",
      featured: true,
      visual: (
        <div className="w-full h-44 bg-indigo-950/10 rounded-2xl border border-indigo-500/10 mt-8 relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-16 bg-slate-900/40 backdrop-blur-2xl rounded-2xl border border-white/10 flex items-center px-6 shadow-2xl transition-transform group-hover:scale-105 duration-700">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center shadow-lg shadow-indigo-500/40 animate-pulse">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
              </div>
              <div className="ml-5 space-y-2 flex-grow">
                <div className="h-2 w-3/4 bg-white/20 rounded-full overflow-hidden">
                   <div className="h-full w-0 bg-indigo-400 group-hover:w-full transition-all duration-1000 delay-300"></div>
                </div>
                <div className="h-1.5 w-1/2 bg-white/5 rounded-full"></div>
              </div>
           </div>
           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[9px] font-black text-indigo-400 uppercase tracking-[0.4em] opacity-80">Agent Actif 24/7</div>
        </div>
      )
    },
    {
      badge: "RELATIONNEL",
      title: "Excellence Continue",
      description: "Réduisez drastiquement vos no-shows avec un système de relance ultra-personnalisé et humain.",
      visual: (
        <div className="w-full h-32 bg-slate-800/20 rounded-xl border border-white/5 mt-6 p-5 flex flex-col justify-center overflow-hidden">
          <div className="flex justify-between items-center mb-4">
             <div className="h-2 w-20 bg-indigo-400/20 rounded-full"></div>
             <div className="h-4 w-12 bg-emerald-500/20 rounded-full flex items-center justify-center overflow-hidden">
               <span className="text-[8px] font-bold text-emerald-400 uppercase animate-bounce mt-1">98%</span>
             </div>
          </div>
          <div className="grid grid-cols-6 gap-2">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className={`h-8 rounded transition-all duration-700 ${i < 4 ? 'bg-indigo-500/40 border border-indigo-500/50' : 'bg-white/5 border border-white/10'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              ></div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="features" className="relative py-48 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-36 reveal">
          <span className="text-indigo-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block">NOTRE EXPERTISE</span>
          <h2 className="text-5xl md:text-7xl lg:text-[85px] font-[900] text-gray-900 leading-[0.9] tracking-[-0.05em] transition-colors duration-1000">
            L'IA de pointe au service <br /> 
            <span className="text-indigo-600">de l'excellence médicale.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {/* Card 01 */}
          <div className="reveal stagger-1 h-full">
            <Card3D className="p-10 md:p-12 rounded-[3rem] h-full flex flex-col bg-zinc-950 backdrop-blur-xl border border-white/10 shadow-2xl">
              <span className="text-[10px] font-black tracking-[0.3em] text-indigo-400/80 mb-8 block uppercase">{cards[0].badge}</span>
              <h3 className="text-2xl md:text-3xl font-black mb-6 tracking-tight leading-tight text-white">{cards[0].title}</h3>
              <p className="text-gray-400 font-light text-lg leading-relaxed mb-8">{cards[0].description}</p>
              <div className="mt-auto card-content-z">
                {cards[0].visual}
              </div>
            </Card3D>
          </div>

          {/* Card 02 (Featured) */}
          <div className="reveal stagger-2 h-full lg:scale-105">
            <Card3D featured className="p-12 md:p-14 rounded-[3.5rem] h-full flex flex-col shadow-2xl shadow-indigo-500/10 border-indigo-500/30 bg-[#0a0a0c]">
              <div className="flex justify-between items-start mb-10">
                <span className="text-[11px] font-black tracking-[0.4em] text-indigo-400 block uppercase">{cards[1].badge}</span>
                <div className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30">
                  <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest">PRO</span>
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter leading-[0.95] text-white">{cards[1].title}</h3>
              <p className="text-gray-300 font-light text-xl leading-relaxed mb-10">{cards[1].description}</p>
              <div className="mt-auto card-content-z">
                {cards[1].visual}
              </div>
            </Card3D>
          </div>

          {/* Card 03 */}
          <div className="reveal stagger-3 h-full">
            <Card3D className="p-10 md:p-12 rounded-[3rem] h-full flex flex-col bg-zinc-950 backdrop-blur-xl border border-white/10 shadow-2xl">
              <span className="text-[10px] font-black tracking-[0.3em] text-indigo-400/80 mb-8 block uppercase">{cards[2].badge}</span>
              <h3 className="text-2xl md:text-3xl font-black mb-6 tracking-tight leading-tight text-white">{cards[2].title}</h3>
              <p className="text-gray-400 font-light text-lg leading-relaxed mb-8">{cards[2].description}</p>
              <div className="mt-auto card-content-z">
                {cards[2].visual}
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
};
