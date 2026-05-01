import Link from "next/link";

// Reusable Component for Methodology Cards
function MethodologyCard({ 
  icon, 
  title, 
  description, 
  iconColorClass, 
  iconBgClass 
}: { 
  icon: string, 
  title: string, 
  description: string, 
  iconColorClass: string, 
  iconBgClass: string 
}) {
  return (
    <div className="group bg-white/70 backdrop-blur-xl p-6 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-white flex flex-col items-center text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500 ${iconBgClass}`}>
        <span className={`material-symbols-outlined text-4xl ${iconColorClass}`}>{icon}</span>
      </div>
      
      <h3 className="font-headline-md text-2xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="font-body-md text-slate-600 leading-relaxed z-10">
        {description}
      </p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="relative">
      {/* Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-container/20 blur-[150px] rounded-full mix-blend-multiply opacity-60"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-secondary-container/20 blur-[150px] rounded-full mix-blend-multiply opacity-60"></div>
      </div>

      {/* Hero Section: Scientific Excellence */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container/20 text-secondary border border-secondary-container/50 backdrop-blur-md rounded-full text-xs font-bold mb-8 shadow-sm">
              <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: '"FILL" 1'}}>biotech</span>
              <span className="uppercase tracking-widest">BIOTECHNOLOGY LEADERS</span>
            </div>
            
            <h1 className="font-headline-xl text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
              Scientific Excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-primary">Protection</span>
            </h1>
            
            <p className="font-body-lg text-xl text-slate-600 mb-12 max-w-xl leading-relaxed font-light">
              At efumes!, we don't just manage pests; we engineer environments where they cannot thrive. Our approach combines molecular biology with clinical precision to safeguard your family and business.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-4 p-5 bg-white/60 backdrop-blur-xl rounded-2xl border border-white shadow-lg shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-container text-2xl">verified_user</span>
                </div>
                <div>
                  <p className="font-headline-md text-slate-900 font-bold leading-none mb-1">100%</p>
                  <p className="font-caption text-xs text-slate-500 uppercase tracking-widest font-bold">Non-Toxic Formulas</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-5 bg-white/60 backdrop-blur-xl rounded-2xl border border-white shadow-lg shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-secondary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-2xl">science</span>
                </div>
                <div>
                  <p className="font-headline-md text-slate-900 font-bold leading-none mb-1">15+</p>
                  <p className="font-caption text-xs text-slate-500 uppercase tracking-widest font-bold">Patented Solutions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group perspective-1000">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-container/40 to-secondary-container/40 opacity-0 group-hover:opacity-100 blur-2xl transition duration-700 rounded-3xl"></div>
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-slate-200 relative z-10 transform group-hover:-translate-y-2 transition-transform duration-700">
              <img 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" 
                alt="A clean, modern laboratory setting where a scientist in a crisp white lab coat is examining a petri dish." 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw1GE7wEoExX80Vz3KY0LnSkFKMHQIlD64kGzyvymu69BCV6uxPRlZEg8N0c-ofk-sS9Mutr9_BFAKy3VSrGTEBPChnzVwGDjfEQ1ywlT9fNt5yALInK33ggIDuhyxiQypWcvdzvawGP86_azJsnOa6XvgZPSsOFY7zYj51NLlVn1c5300rJkuI6uZ1QXpt8oYpOPmub3YnozS4Z-s-CVINGW6vn488cugfR3H3YBSRLFlrr2iMgT16pvr-P_m-xcCDYiWRMqc6I73"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-primary-container to-primary p-8 rounded-2xl shadow-2xl max-w-xs hidden md:block z-20 border border-primary-container/50 transform group-hover:-rotate-2 group-hover:scale-105 transition-all duration-500">
              <p className="text-white font-bold text-xl mb-3">Our Mission</p>
              <p className="text-white/90 text-sm leading-relaxed italic">
                "To redefine urban sanitation through eco-intelligent molecular barriers."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Precision-Engineered Standards Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-20">
            <span className="text-primary-container font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Methodology</span>
            <h2 className="font-headline-lg text-4xl md:text-5xl font-bold text-slate-900 mb-6">Precision-Engineered Standards</h2>
            <p className="font-body-md text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Our methodology is built on three pillars of professional excellence, ensuring that every treatment is as safe as it is effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <MethodologyCard 
              icon="biotech"
              title="Clinical Research"
              description="Every chemical compound in our arsenal is vetted through rigorous double-blind studies to ensure maximum impact on pests with zero collateral residue."
              iconColorClass="text-primary-container"
              iconBgClass="bg-primary-container/10 border border-primary-container/20"
            />
            
            <MethodologyCard 
              icon="eco"
              title="Eco-Intelligence"
              description="We leverage biodegradable pheromone disruptors that target specific species' life cycles, preserving beneficial insect populations."
              iconColorClass="text-secondary"
              iconBgClass="bg-secondary-container/20 border border-secondary-container/30"
            />
            
            <MethodologyCard 
              icon="analytics"
              title="Smart Prediction"
              description="Using localized climate data and infestation heatmaps, we predict outbreaks before they reach your property line."
              iconColorClass="text-primary-container"
              iconBgClass="bg-primary-container/10 border border-primary-container/20"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative m-4 rounded-[3rem] shadow-2xl border-t border-slate-900 mb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 via-transparent to-secondary-container/10 mix-blend-screen"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none flex items-center justify-end">
          <span className="material-symbols-outlined text-[400px] -mr-20">shield</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <h2 className="font-headline-xl text-5xl font-bold mb-6">Ready for a permanent solution?</h2>
            <p className="font-body-lg text-xl text-slate-400 mb-12 leading-relaxed">
              Experience the difference that clinical precision makes. Secure your property with the science of efumes! today.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/book" className="bg-primary-container text-white px-10 py-5 rounded-xl font-bold text-lg shadow-[0_10px_30px_rgba(243,141,44,0.4)] hover:shadow-[0_15px_40px_rgba(243,141,44,0.6)] hover:-translate-y-1 active:scale-95 transition-all duration-300 border border-primary-container/50">
                Book Clinical Inspection
              </Link>
              <Link href="/contact" className="bg-white/5 backdrop-blur-xl text-white border border-white/10 px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-slate-900 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] active:scale-95 transition-all duration-300">
                Contact Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
