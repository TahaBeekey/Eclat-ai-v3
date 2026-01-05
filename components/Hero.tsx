
import React, { useState, useEffect, useRef } from 'react';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [smoothMouse, setSmoothMouse] = useState({ x: 0.5, y: 0.5 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(null);

  useEffect(() => {
    const animate = () => {
      setSmoothMouse((prev) => {
        const dx = mousePos.x - prev.x;
        const dy = mousePos.y - prev.y;
        return {
          x: prev.x + dx * 0.06,
          y: prev.y + dy * 0.06,
        };
      });
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [mousePos]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePos({ x, y });
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      setScrollProgress(Math.min(scrollY / height, 1));
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getParallaxStyle = (factor: number) => ({
    transform: `translate3d(${(smoothMouse.x - 0.5) * factor}px, ${(smoothMouse.y - 0.5) * factor}px, 0)`,
  });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-32 pb-44 overflow-hidden bg-[#050505]"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div 
            className="absolute inset-[-10%] opacity-30 blur-[120px] transition-transform duration-[4000ms] ease-in-out"
            style={{
              background: 'radial-gradient(circle at 20% 30%, #1e1b4b 0%, transparent 50%), radial-gradient(circle at 80% 70%, #0f172a 0%, transparent 50%)',
              transform: `scale(${1 + scrollProgress * 0.1}) rotate(${scrollProgress * 5}deg)`,
            }}
          />
          <div className="absolute top-1/4 -left-1/4 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm rotate-[-15deg] animate-ambient-beam-1" />
          <div className="absolute top-3/4 -left-1/4 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent blur-sm rotate-[12deg] animate-ambient-beam-2" />
        </div>

        <div 
          className="hidden md:block absolute w-[140vw] h-[140vw] rounded-full blur-[140px] pointer-events-none mix-blend-screen"
          style={{
            background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0.03) 25%, transparent 60%)',
            left: `${smoothMouse.x * 100}%`,
            top: `${smoothMouse.y * 100}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 1s ease',
            opacity: 1 - scrollProgress
          }}
        />

        <div 
          className="absolute inset-0 z-10 transition-colors duration-1000"
          style={{
            background: `radial-gradient(circle at center, transparent 20%, rgba(5, 5, 5, ${0.2 + scrollProgress * 0.6}) 100%)`
          }}
        />

        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#050505] to-transparent z-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#050505] to-transparent z-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-30 w-full text-center">
        <div 
          className="fade-up inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-12 shadow-2xl mx-auto"
          style={{ ...getParallaxStyle(8), animationDelay: '100ms' }}
        >
          <div className="w-1 h-1 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8] animate-pulse"></div>
          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-indigo-100/60">Élite Médicale & IA</span>
        </div>

        <div className="max-w-5xl mx-auto">
          <h1 
            id="hero-heading"
            className="fade-up text-5xl sm:text-7xl md:text-8xl lg:text-[105px] font-black tracking-[-0.06em] text-white mb-8 leading-[1.02] sm:leading-[0.92] select-none"
            style={{ 
              ...getParallaxStyle(20),
              animationDelay: '300ms',
              fontFamily: "'Inter', sans-serif"
            }}
          >
            Maîtrisez Votre Flux <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/40 inline-block">
              de Nouveaux Patients.
            </span>
          </h1>

          <p 
            className="fade-up text-base md:text-xl text-gray-400/80 max-w-2xl mx-auto mb-16 leading-relaxed font-light px-4"
            style={{ ...getParallaxStyle(12), animationDelay: '500ms' }}
          >
            Déployez une infrastructure IA souveraine pour automatiser la capture, <br className="hidden md:block" />
            la qualification et la conversion de vos leads en patients confirmés.
          </p>

          <div 
            className="fade-up flex flex-col sm:flex-row items-center justify-center gap-6"
            style={{ animationDelay: '700ms' }}
          >
            <button 
              onClick={() => scrollTo('audit')}
              className="w-full sm:w-auto bg-indigo-600 text-white px-14 py-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.25em] hover:bg-indigo-500 transition-all shadow-[0_20px_40px_rgba(99,102,241,0.2)] border border-indigo-400/20 active:scale-95"
            >
              Réserver un Audit
            </button>
            <button 
              onClick={() => scrollTo('demo')}
              className="w-full sm:w-auto bg-white/5 text-white px-14 py-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.25em] border border-white/10 hover:bg-white/10 transition-all backdrop-blur-md"
            >
              Voir Démo IA
            </button>
          </div>

          <div 
            className="fade-up mt-28 pt-12 border-t border-white/5 max-w-4xl mx-auto opacity-40 hover:opacity-60 transition-opacity duration-1000"
            style={{ animationDelay: '900ms' }}
          >
            <span className="text-[8px] font-black uppercase tracking-[0.6em] text-gray-500 mb-10 block">ARCHITECTURE APPROUVÉE PAR L'ÉLITE</span>
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 grayscale">
               {['MEDCORE', 'ESTHÉTIQUE PRO', 'LUXE CLINICS', 'SANTE ANALYTICS'].map(brand => (
                 <span key={brand} className="text-white font-black text-[10px] tracking-tighter opacity-40">{brand}</span>
               ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20 z-40 cursor-pointer" onClick={() => scrollTo('features')}>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        <span className="text-[7px] font-black uppercase tracking-[0.4em] text-white vertical-text">Scroll</span>
      </div>
    </section>
  );
};
