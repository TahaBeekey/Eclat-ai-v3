
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { Testimonials } from './components/Testimonials';
import { HowItWorks } from './components/HowItWorks';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyBottomMenu } from './components/StickyBottomMenu';
import { RevenueCalculator } from './components/RevenueCalculator';

// Removed global JSX declaration as it was shadowing standard HTML elements like div, span, etc.

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  
  const [colors, setColors] = useState({
    primary: '#050505',
    secondary: '#0a0a1a',
    accent: 'rgba(99, 102, 241, 0.15)'
  });
  
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    value: useRef<HTMLDivElement>(null),
    testimonials: useRef<HTMLDivElement>(null),
    how: useRef<HTMLDivElement>(null),
    calc: useRef<HTMLDivElement>(null),
    cta: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      setScrolled(scrollY > 40);
      setNavbarVisible(scrollY < 380);
      setShowStickyNav(scrollY > 450);

      const sections = [
        { ref: sectionRefs.home, primary: '#050505', secondary: '#0f172a', accent: 'rgba(99, 102, 241, 0.15)' },
        { ref: sectionRefs.value, primary: '#f8fafc', secondary: '#e2e8f0', accent: 'rgba(99, 102, 241, 0.05)' },
        { ref: sectionRefs.testimonials, primary: '#000000', secondary: '#1e1b4b', accent: 'rgba(99, 102, 241, 0.2)' },
        { ref: sectionRefs.how, primary: '#ffffff', secondary: '#f5f7ff', accent: 'rgba(99, 102, 241, 0.04)' },
        { ref: sectionRefs.calc, primary: '#020617', secondary: '#1e293b', accent: 'rgba(99, 102, 241, 0.15)' },
        { ref: sectionRefs.cta, primary: '#f8fafc', secondary: '#ffffff', accent: 'rgba(99, 102, 241, 0.03)' },
      ];

      let activeSection = sections[0];
      
      sections.forEach((section) => {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.5) {
            activeSection = section;
          }
        }
      });

      setColors({
        primary: activeSection.primary,
        secondary: activeSection.secondary,
        accent: activeSection.accent
      });

      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight - 100) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 20 + 25,
      delay: Math.random() * -40,
      opacity: Math.random() * 0.1 + 0.02
    }));
  }, []);

  const isDarkBg = useMemo(() => {
    const darkColors = ['#050505', '#000000', '#020617'];
    return darkColors.includes(colors.primary);
  }, [colors.primary]);

  return (
    <div 
      className="min-h-screen transition-all duration-[2500ms] ease-[cubic-bezier(0.23,1,0.32,1)] selection:bg-indigo-100 selection:text-indigo-900 relative"
      style={{ 
        backgroundColor: colors.primary,
        backgroundImage: `radial-gradient(at 0% 0%, ${colors.secondary} 0px, transparent 50%), 
                          radial-gradient(at 100% 100%, ${colors.primary} 0px, transparent 50%)`,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* High-End Mesh Gradient Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full blur-[140px] transition-all duration-[3500ms] animate-pulse"
          style={{ background: colors.accent }}
        ></div>
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[160px] transition-all duration-[3500ms]"
          style={{ background: isDarkBg ? 'rgba(79, 70, 229, 0.08)' : 'rgba(79, 70, 229, 0.02)' }}
        ></div>
        {/* Extra layer for depth */}
        <div 
          className="absolute top-[30%] right-[10%] w-[40%] h-[40%] rounded-full blur-[180px] transition-all duration-[4000ms]"
          style={{ background: isDarkBg ? 'rgba(99, 102, 241, 0.05)' : 'rgba(255, 255, 255, 0.1)' }}
        ></div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" 
             style={{ 
               backgroundImage: `radial-gradient(${isDarkBg ? '#fff' : '#000'} 1px, transparent 1px)`, 
               backgroundSize: '80px 80px' 
             }}>
        </div>
        
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full transition-colors duration-[2500ms]"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              top: `${p.top}%`,
              left: `${p.left}%`,
              opacity: p.opacity,
              backgroundColor: isDarkBg ? '#fff' : '#000',
              animation: `particle-drift ${p.duration}s infinite linear`,
              animationDelay: `${p.delay}s`
            }}
          />
        ))}
      </div>

      <Navbar scrolled={scrolled} visible={navbarVisible} />
      
      <main className="relative z-10">
        <div ref={sectionRefs.home} id="home">
          <Hero />
        </div>
        <div ref={sectionRefs.value} id="features">
          <ValueProposition />
        </div>
        <div ref={sectionRefs.testimonials} id="results">
          <Testimonials />
        </div>
        <div ref={sectionRefs.how} id="demo">
          <HowItWorks />
        </div>
        <div ref={sectionRefs.calc} id="calculator">
          <RevenueCalculator />
        </div>
        <div ref={sectionRefs.cta} id="audit">
          <FinalCTA />
        </div>
      </main>

      <StickyBottomMenu visible={showStickyNav} />
      
      {/* Fixed: Use React.createElement for custom element to avoid shadowing global JSX namespace with custom definitions */}
      {React.createElement('elevenlabs-convai', { 'agent-id': 'agent_9401kdzw262vf1e96wxknwchsxg3' } as any)}
      
      <Footer />
    </div>
  );
};

export default App;
