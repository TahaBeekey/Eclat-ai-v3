
import React, { useState, useEffect } from 'react';

interface StickyBottomMenuProps {
  visible: boolean;
}

export const StickyBottomMenu: React.FC<StickyBottomMenuProps> = ({ visible }) => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const calculatorSection = document.getElementById('calculator');
      const auditSection = document.getElementById('audit');

      const sections = [
        { id: 'home', top: 0 },
        { id: 'calculator', top: calculatorSection?.offsetTop || 0 },
        { id: 'audit', top: auditSection?.offsetTop || 0 },
      ];

      // Find current active section
      let current = 'home';
      for (const section of sections) {
        if (scrollY >= section.top - 250) {
          current = section.id;
        }
      }
      
      setActiveTab(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: id === 'home' ? 0 : el.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`pill-nav-container ${visible ? 'visible' : ''}`}>
      <nav className="pill-nav-glass p-1.5 flex items-center gap-1">
        {/* Home Button */}
        <button 
          onClick={() => scrollTo('home')}
          className={`pill-btn flex items-center justify-center w-12 h-12 !p-0 ${activeTab === 'home' ? 'active' : ''}`}
          aria-label="Accueil"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </button>
        
        {/* Calculator Button */}
        <button 
          onClick={() => scrollTo('calculator')}
          className={`pill-btn flex items-center justify-center w-12 h-12 !p-0 ${activeTab === 'calculator' ? 'active' : ''}`}
          aria-label="Calculateur ROI"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </button>

        {/* Audit Button (Primary Action) */}
        <button 
          onClick={() => scrollTo('audit')}
          className={`pill-btn group flex items-center justify-center w-12 h-12 !p-0 ${activeTab === 'audit' ? 'active' : 'bg-indigo-600/20 text-indigo-300'}`}
          aria-label="Lancer l'Audit"
        >
          <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </button>
      </nav>
    </div>
  );
};
