import Link from "next/link";

export default function SafetyPage() {
  const protocols = [
    {
      icon: "verified_user",
      title: "EPA Approved Formulas",
      description: "We use only environmentally responsible, hospital-grade solutions that are certified safe for families and pets."
    },
    {
      icon: "clinical_notes",
      title: "Clinical Precision",
      description: "Our application methods are scientifically designed to target pests while minimizing environmental impact."
    },
    {
      icon: "shield_moon",
      title: "Post-Treatment Safety",
      description: "We provide detailed guidelines for safe reentry and maintenance after every professional treatment."
    }
  ];

  return (
    <main className="relative min-h-screen py-24">
      {/* Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary-container/20 blur-[150px] rounded-full mix-blend-multiply opacity-60"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-primary-container/20 blur-[150px] rounded-full mix-blend-multiply opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-white/70 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container/20 text-secondary border border-secondary-container/50 backdrop-blur-md rounded-full text-xs font-bold mb-8 shadow-sm">
              <span className="material-symbols-outlined text-[18px]">security</span>
              <span className="uppercase tracking-widest">Safety First</span>
            </div>
            
            <h1 className="font-headline-xl text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
              Clinical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-primary">Safety</span> Protocols
            </h1>
            
            <p className="font-body-lg text-xl text-slate-600 mb-12 leading-relaxed font-light">
              At efumes!, safety is not just a policy; it's our foundational principle. We merge biotechnology with rigorous safety standards to protect your home without compromise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {protocols.map((protocol, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white shadow-lg hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 bg-primary-container/10 text-primary-container rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors duration-500">
                  <span className="material-symbols-outlined text-3xl">{protocol.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{protocol.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {protocol.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 bg-slate-950 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-white mb-2">Safety Guidelines PDF</h2>
                <p className="text-slate-400">Download our comprehensive clinical safety handbook.</p>
              </div>
              <button className="bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-primary-container hover:text-white active:scale-95 transition-all flex items-center gap-3">
                <span className="material-symbols-outlined">download</span>
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
