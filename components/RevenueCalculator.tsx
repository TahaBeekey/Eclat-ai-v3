
import React, { useState, useEffect, useMemo } from 'react';

export const RevenueCalculator: React.FC = () => {
  // Inputs
  const [delay, setDelay] = useState(30); // minutes
  const [leadsPerDay, setLeadsPerDay] = useState(15);
  const [avgRevenue, setAvgRevenue] = useState(12000);
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [conversionRate, setConversionRate] = useState(0.12);

  // Results state for animation
  const [displayMonthly, setDisplayMonthly] = useState(0);

  // Logic calculation
  const calculatedResults = useMemo(() => {
    const responseEfficiency = delay <= 5 ? 1.0 : delay <= 30 ? 0.7 : delay <= 120 ? 0.4 : 0.15;
    const lossFromDelayFactor = 1 - responseEfficiency;

    const weeklyHours = hoursPerDay * daysPerWeek;
    const totalWeeklyHours = 168; 
    const coverageGap = 1 - (weeklyHours / totalWeeklyHours);
    
    const monthlyLeads = leadsPerDay * 30.44;
    const theoreticalMaxRevenue = monthlyLeads * conversionRate * avgRevenue;
    
    const delayLoss = theoreticalMaxRevenue * (1 - coverageGap) * lossFromDelayFactor;
    const offHoursLoss = theoreticalMaxRevenue * coverageGap * 0.65;
    
    const totalMonthly = Math.round(delayLoss + offHoursLoss);
    return {
      monthly: totalMonthly,
      annual: totalMonthly * 12
    };
  }, [delay, leadsPerDay, avgRevenue, hoursPerDay, daysPerWeek, conversionRate]);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const startValue = displayMonthly;
    const endValue = calculatedResults.monthly;
    const duration = 1500; 

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutExpo = (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      const current = Math.floor(easeOutExpo(progress) * (endValue - startValue) + startValue);
      setDisplayMonthly(current);
      if (progress < 1) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  }, [calculatedResults.monthly]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('fr-MA', { 
      style: 'currency', 
      currency: 'MAD', 
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="calculator" className="py-24 md:py-48 bg-transparent relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] aspect-square bg-indigo-600/5 blur-[250px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8 backdrop-blur-md">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400">ANALYSE DE RENTABILITÉ IA</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-[80px] font-[950] text-gray-900 dark:text-white tracking-[-0.05em] leading-[0.9] mb-8">
            Mesurez l'impact <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-600">de chaque seconde.</span>
          </h2>
        </div>

        {/* Master Calculator Card */}
        <div className="reveal">
          <div className="bg-zinc-950/95 border border-white/10 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)] backdrop-blur-3xl">
            
            {/* Horizontal Input Row System */}
            <div className="p-6 md:p-16 border-b border-white/5 space-y-10 md:space-y-12">
              
              {/* Reactivity (Full Width Row) */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8 pb-10 md:pb-12 border-b border-white/5">
                <div className="lg:max-w-md">
                  <h3 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-indigo-400 mb-2">Réactivité Actuelle</h3>
                  <p className="text-gray-500 text-xs md:text-sm font-medium">Temps moyen entre le lead et le premier contact humain.</p>
                </div>
                <div className="flex-grow max-w-2xl px-2 lg:px-12 order-3 lg:order-2">
                  <input 
                    type="range" min="1" max="720" value={delay} 
                    onChange={(e) => setDelay(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/5 rounded-full appearance-none cursor-pointer accent-indigo-500 hover:bg-white/10 transition-all"
                  />
                  <div className="flex justify-between mt-4 text-[8px] md:text-[9px] font-black text-gray-600 uppercase tracking-widest">
                    <span className="text-indigo-500">Instantané</span>
                    <span>Standard</span>
                    <span>Critique</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-2 min-w-[100px] justify-start lg:justify-end order-2 lg:order-3">
                  <span className="text-4xl md:text-5xl font-black text-white tabular-nums tracking-tighter">
                    {delay < 60 ? `${delay}` : Math.floor(delay/60)}
                  </span>
                  <span className="text-sm md:text-lg font-black text-gray-700 uppercase">
                    {delay < 60 ? 'min' : 'h'}
                  </span>
                </div>
              </div>

              {/* Secondary Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                <div className="space-y-3 md:space-y-4">
                  <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Leads / Jour</label>
                  <input 
                    type="number" value={leadsPerDay} 
                    onChange={(e) => setLeadsPerDay(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-4 md:py-5 font-black text-white text-xl md:text-2xl focus:outline-none focus:border-indigo-500/50 transition-all tabular-nums"
                  />
                </div>

                <div className="space-y-3 md:space-y-4">
                  <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Panier Moyen</label>
                  <input 
                    type="number" value={avgRevenue} 
                    onChange={(e) => setAvgRevenue(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-4 md:py-5 font-black text-white text-xl md:text-2xl focus:outline-none focus:border-indigo-500/50 transition-all tabular-nums"
                  />
                </div>

                <div className="space-y-3 md:space-y-4">
                  <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Disponibilité</label>
                  <div className="relative group">
                    <select 
                      value={hoursPerDay} 
                      onChange={(e) => setHoursPerDay(parseInt(e.target.value))}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-4 md:py-5 font-black text-white text-base md:text-lg focus:outline-none focus:border-indigo-500/50 transition-all appearance-none cursor-pointer"
                    >
                      <option value={8} className="bg-zinc-950">8h / Jour</option>
                      <option value={12} className="bg-zinc-950">12h / Jour</option>
                      <option value={24} className="bg-zinc-950">Non-stop (IA)</option>
                    </select>
                    <div className="absolute right-5 md:right-6 top-1/2 -translate-y-1/2 pointer-events-none text-indigo-500 group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Taux Conv.</label>
                  <div className="relative group">
                    <select 
                      value={conversionRate} 
                      onChange={(e) => setConversionRate(parseFloat(e.target.value))}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-4 md:py-5 font-black text-white text-base md:text-lg focus:outline-none focus:border-indigo-500/50 transition-all appearance-none cursor-pointer"
                    >
                      <option value={0.05} className="bg-zinc-950">5% (Bas)</option>
                      <option value={0.12} className="bg-zinc-950">12% (Moy.)</option>
                      <option value={0.25} className="bg-zinc-950">25% (Opt.)</option>
                    </select>
                    <div className="absolute right-5 md:right-6 top-1/2 -translate-y-1/2 pointer-events-none text-indigo-500 group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Section - Redesigned for Vertical Stack & Centering */}
            <div className="bg-zinc-900/40 p-8 md:p-20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-12 md:space-y-16">
                
                {/* 1. Results Narrative */}
                <div className="space-y-6 w-full">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mx-auto">
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-red-400">Pertes Annuelles Estimées</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-[1000] text-white tracking-[-0.06em] tabular-nums leading-none">
                      {formatCurrency(displayMonthly * 12)}
                    </div>
                    <p className="text-indigo-300 font-black text-[10px] md:text-[12px] uppercase tracking-[0.5em] opacity-40">Impact Financier sur 12 mois</p>
                  </div>
                </div>

                {/* 2. Recovery Insight Card (Requested Position) */}
                <div className="w-full max-w-2xl bg-white/[0.03] border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 space-y-4 backdrop-blur-xl shadow-inner">
                  <div className="flex items-center justify-center gap-4 text-emerald-500 mb-2">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]">Potentiel de Récupération</span>
                  </div>
                  <p className="text-gray-300 font-light text-base md:text-xl leading-relaxed">
                    <span className="text-white font-black underline decoration-indigo-500/50 underline-offset-4">90% de ce montant</span> est récupérable immédiatement avec une infrastructure IA opérationnelle <span className="text-indigo-400 font-black">24h/24 et 7j/7</span>.
                  </p>
                </div>

                {/* 3. Ultimate CTA Button */}
                <div className="w-full flex flex-col items-center justify-center pt-4">
                  <div className="relative w-full max-w-xl group">
                    {/* Synchronized Pulsing Aura with Navbar CTA */}
                    <div className="absolute -inset-1.5 bg-indigo-500/30 rounded-[2.3rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-pulse"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-600 rounded-[2.4rem] opacity-20 group-hover:opacity-100 transition duration-700"></div>
                    
                    <button 
                      onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}
                      className="relative w-full bg-zinc-950 text-white py-10 md:py-14 rounded-[2.3rem] font-black text-sm md:text-xl uppercase tracking-[0.4em] transition-all hover:bg-white hover:text-black active:scale-95 flex flex-col items-center justify-center gap-4 border border-white/10 shadow-3xl overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-white/5 to-indigo-500/0 -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
                      <span className="group-hover:scale-110 transition-transform duration-500 relative z-10">Récupérer ces Revenus</span>
                      <svg className="w-6 h-6 md:w-8 md:h-8 transform group-hover:translate-x-3 transition-transform duration-500 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                  </div>
                  
                  <div className="mt-10 md:mt-12 flex items-center gap-6 md:gap-12 opacity-30">
                     <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white">Analyse Privée Offerte</span>
                     <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                     <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white">Zéro Frais Initiaux</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center opacity-20 reveal stagger-1">
           <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.8em]">Audit Algorithmique V2.5 — Éclat AI Systems</p>
        </div>
      </div>
    </section>
  );
};
