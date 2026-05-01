import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/lib/services-data";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="relative min-h-screen pb-24">
      {/* Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-primary-container/20 blur-[150px] rounded-full mix-blend-multiply opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary-container/20 blur-[150px] rounded-full mix-blend-multiply opacity-60"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <div className={`inline-flex items-center gap-2 px-4 py-2 ${service.bgClass} ${service.colorClass} border border-white/40 backdrop-blur-md rounded-full text-xs font-bold mb-6 shadow-sm`}>
              <span className="material-symbols-outlined text-[18px]">{service.icon}</span>
              <span className="uppercase tracking-widest">Specialized Treatment</span>
            </div>
            
            <h1 className="font-headline-xl text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
              {service.title}
            </h1>
            
            <p className="font-body-lg text-xl text-slate-600 mb-10 leading-relaxed font-light">
              {service.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="bg-primary-container text-white px-8 py-4 rounded-xl font-bold shadow-[0_10px_20px_rgba(243,141,44,0.3)] hover:shadow-[0_15px_30px_rgba(243,141,44,0.5)] hover:-translate-y-1 active:scale-95 transition-all duration-300 text-center">
                Book this Service
              </Link>
              <a href="tel:0333133637" className="bg-white/80 backdrop-blur-md border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-white hover:shadow-lg hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-xl">call</span>
                Call 0333133637
              </a>
            </div>
          </div>
          
          <div className="relative group perspective-1000">
            <div className={`absolute -inset-4 bg-gradient-to-tr from-${service.colorClass.split('-')[1]}/40 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition duration-700 rounded-3xl`}></div>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-slate-200 relative z-10 transform group-hover:-translate-y-2 transition-transform duration-700">
              <img 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" 
                alt={service.title} 
                src={service.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* The Problem / Description */}
            <div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-white">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {service.description}
              </p>
              
              <div className="bg-red-50/50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-red-500">warning</span>
                  Why It Matters
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {service.whyItMatters}
                </p>
              </div>
            </div>

            {/* Our Process */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center md:text-left">Our Clinical Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.process.map((step) => (
                  <div key={step.step} className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-white hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group">
                    <div className="text-6xl font-black text-slate-100 absolute -top-4 -right-4 z-0 group-hover:scale-110 transition-transform duration-500">
                      0{step.step}
                    </div>
                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 font-bold text-xl ${service.bgClass} ${service.colorClass}`}>
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Benefits List */}
            <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                <span className="material-symbols-outlined text-9xl">verified</span>
              </div>
              <h3 className="text-2xl font-bold mb-8 relative z-10">Service Benefits</h3>
              <ul className="space-y-6 relative z-10">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${service.bgClass} ${service.colorClass}`}>
                      <span className="material-symbols-outlined text-[14px]">check</span>
                    </div>
                    <span className="text-slate-300 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact CTA */}
            <div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-lg border border-white text-center">
              <div className="w-16 h-16 bg-secondary-container/20 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-3xl">phone_in_talk</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Need Immediate Help?</h3>
              <p className="text-slate-500 mb-6 text-sm">Our emergency technicians are available 24/7.</p>
              <a href="tel:0333133637" className="block w-full py-4 border-2 border-secondary text-secondary font-bold rounded-xl hover:bg-secondary hover:text-white transition-all duration-300 active:scale-95">
                Call 0333133637
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}
