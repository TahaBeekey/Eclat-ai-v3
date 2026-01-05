
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
  visible: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled, visible }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] 
      ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
      ${scrolled ? 'py-4 glass-nav-premium border-b border-white/5 shadow-2xl shadow-black/30' : 'py-12'}`}>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 flex items-center justify-between">
        {/* Left Side: Premium Brand Identity */}
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative">
            <div className="w-11 h-11 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.4)] group-hover:rotate-[15deg] group-hover:scale-110 transition-all duration-500">
              <span className="text-white font-black text-lg">É</span>
            </div>
            <div className="absolute inset-0 bg-indigo-50/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="font-[950] text-2xl tracking-[-0.07em] text-white">ÉCLAT AI</span>
            <span className="text-[9px] font-black tracking-[0.4em] text-indigo-400/90 uppercase">Architectes IA</span>
          </div>
        </div>
        
        {/* Center: Refined Navigation Links */}
        <div className={`hidden lg:flex items-center gap-16 transition-opacity duration-500 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          {['Ecosystème', 'Résultats', 'Calculateur'].map((item, i) => (
            <a 
              key={item} 
              href={`#${['features', 'results', 'calculator'][i]}`} 
              className="nav-link text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Side: High-End Actions */}
        <div className="flex items-center gap-8">
          <div className="relative group p-0.5 rounded-xl bg-gradient-to-r from-indigo-500 via-white/20 to-indigo-500 transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            {/* Pulsing Aura for consistency */}
            <div className="absolute -inset-1 bg-indigo-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
            
            <button 
              onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative bg-zinc-950 text-white px-8 py-3.5 rounded-[11px] text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-black active:scale-95 shadow-2xl"
            >
              <span className="relative z-10">Diagnostic Expert</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
