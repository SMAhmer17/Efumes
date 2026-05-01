import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-20 pb-12">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-container/30 blur-[120px] rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-secondary-container/30 blur-[120px] rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-blue-200/30 blur-[120px] rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-white/60 backdrop-blur-md border border-white/40 text-primary-container font-bold text-xs mb-6 uppercase tracking-widest shadow-sm">
              Clinical Precision in Pest Control
            </span>
            <h1 className="font-headline-xl text-headline-xl text-slate-900 mb-6 leading-tight">
              Protecting Your Home with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-primary font-black">Scientific Precision</span>
            </h1>
            <p className="font-body-lg text-body-lg text-slate-600 mb-12 max-w-xl leading-relaxed">
              Expert-led fumigation and pest management tailored for safety, speed, and total eradication. Our certified technicians use eco-friendly clinical methods to restore your peace of mind.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/book" className="bg-primary-container text-white font-bold px-12 py-5 rounded-xl shadow-[0_10px_25px_rgba(243,141,44,0.3)] hover:shadow-[0_15px_35px_rgba(243,141,44,0.4)] hover:-translate-y-1 active:scale-95 transition-all duration-300">
                Get a Free Quote
              </Link>
              <Link href="/about" className="bg-white/80 backdrop-blur-md border border-slate-200 text-slate-700 px-10 py-4 rounded-xl font-bold hover:bg-white hover:shadow-lg hover:-translate-y-1 active:scale-95 transition-all duration-300 inline-block">
                Our Method
              </Link>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-container to-secondary-container opacity-20 group-hover:opacity-40 blur-2xl transition duration-700 rounded-3xl"></div>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-slate-200 relative z-10 transform group-hover:-translate-y-2 transition-transform duration-700">
              <img 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" 
                alt="A professional pest control technician wearing high-grade protective clinical gear." 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKElyii6d9RfzVc28o_E3Uebt1wBUv7GIJ4m8Y-tCnduu12Br-onDB0FMaZ0opK0KhK2ipTYk3qVs7UH1DNhaJ80QrVHRAWsYptEIXjbA_9jbjC2H0dixqyRckyq6rDQCM-CymckvS5P9pLIUATTNX7_N9JFEyQJTfVasAZXBd0cRkRvoNMZznU2vttZOAFxfjiCVCU0hAQC4Jw2lnGqT_2lW4KxYy2xYz9jJz0alVvEnbN7QGtyWvgV2cn_6wcMt5KKL9yrOyxrbk"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/50 max-w-xs transform hover:-rotate-2 hover:scale-105 transition-all duration-300 z-20">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary-container" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                <span className="font-bold text-xs uppercase tracking-wider text-slate-900">Certified Safe</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">100% satisfaction guarantee with our signature clinical eradication protocol.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Services */}
      <section className="py-24 bg-slate-50 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="font-headline-lg text-headline-lg text-slate-900 mb-4 font-bold">Our Core Services</h2>
            <p className="text-slate-600 max-w-2xl text-lg leading-relaxed">Targeted solutions designed for maximum efficiency and minimal disruption to your daily life.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-white shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary-container/20 hover:-translate-y-2 transition-all duration-500 p-10">
              <div className="w-16 h-16 rounded-2xl bg-primary-container/10 flex items-center justify-center mb-8 group-hover:bg-primary-container group-hover:text-white transition-all duration-500 group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">pest_control</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 font-bold text-slate-900">Termite Eradication</h3>
              <p className="text-slate-600 mb-12 leading-relaxed">Deep-soil clinical treatment and structural shielding to eliminate colonies at their source.</p>
              <Link className="text-primary-container font-bold flex items-center gap-2 group-hover:gap-4 transition-all" href="/services/termite">
                Learn more <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            {/* Card 2 */}
            <div className="group bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-white shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-secondary-container/20 hover:-translate-y-2 transition-all duration-500 p-10">
              <div className="w-16 h-16 rounded-2xl bg-secondary-container/20 flex items-center justify-center mb-8 group-hover:bg-secondary-container group-hover:text-secondary transition-all duration-500 group-hover:scale-110 text-secondary">
                <span className="material-symbols-outlined text-3xl">thermostat</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 font-bold text-slate-900">Bed Bug Thermal</h3>
              <p className="text-slate-600 mb-12 leading-relaxed">Chemical-free heat remediation technology that penetrates every crack and crevice.</p>
              <Link className="text-secondary font-bold flex items-center gap-2 group-hover:gap-4 transition-all" href="/services/bed-bug">
                Learn more <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            {/* Card 3 */}
            <div className="group bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-white shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary-container/20 hover:-translate-y-2 transition-all duration-500 p-10">
              <div className="w-16 h-16 rounded-2xl bg-primary-container/10 flex items-center justify-center mb-8 group-hover:bg-primary-container group-hover:text-white transition-all duration-500 group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">block</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 font-bold text-slate-900">Rodent Exclusion</h3>
              <p className="text-slate-600 mb-12 leading-relaxed">Strategic structural sealing and humane management systems for long-term protection.</p>
              <Link className="text-primary-container font-bold flex items-center gap-2 group-hover:gap-4 transition-all" href="/services/rodent">
                Learn more <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg mb-4 font-bold text-slate-900">Why Choose efumes!</h2>
            <p className="text-slate-600 text-lg">The standard for professional-grade pest management.</p>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8 bg-slate-50/50 backdrop-blur-xl rounded-3xl p-12 flex flex-col md:flex-row items-center gap-10 border border-slate-100 shadow-xl shadow-slate-200/30 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="md:w-1/2">
                <h3 className="font-headline-md text-headline-md mb-4 font-bold text-slate-900">Industrial Power, Household Safety</h3>
                <p className="text-slate-600 leading-relaxed">Our formulas are rigorously tested to ensure they are lethal to pests while remaining completely safe for children and pets once treatment is completed.</p>
              </div>
              <div className="md:w-1/2 h-64 rounded-2xl overflow-hidden shadow-inner bg-slate-200 group-hover:shadow-lg transition-all duration-500 relative">
                <div className="absolute inset-0 bg-primary-container/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt="A bright, minimalist interior of a modern family living room" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQfHQOrR1V-0cSRbM_IHh8nfZkXWPMasZHX2snMwZXXPokmRSWNKAwXSxmv0vtcwUQJXYHc6qRB8XrK2COi77_kaP4zfsci4MmV2AVKbW2LRGEN-_UBtJj24UiyhFQmV7GEAB8Y8MzvSaWxtT3QVcnvbIlf4_0GAVyhim2NPkp9NLCCG5GQ3zYQYHh6lviVPL0-m35dxBdk73RYsd8MX1aAo5C5RcnO-As7-XS_JuD_rDIC4fXAtCSTaHQJfTe_3zzjKvJ9BszceCG"
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 bg-gradient-to-br from-primary-container to-primary text-white rounded-3xl p-12 flex flex-col justify-center shadow-[0_15px_40px_rgba(243,141,44,0.3)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-500">
              <div className="absolute -right-8 -top-8 bg-white/10 w-40 h-40 rounded-full transform group-hover:scale-150 transition-transform duration-700 backdrop-blur-md border border-white/10"></div>
              <div className="absolute -left-12 -bottom-12 bg-black/10 w-40 h-40 rounded-full transform group-hover:scale-150 transition-transform duration-700 blur-2xl"></div>
              <span className="material-symbols-outlined text-5xl mb-6 relative z-10">history</span>
              <h3 className="font-headline-md text-headline-md mb-4 font-bold relative z-10">24-Hour Response</h3>
              <p className="opacity-90 leading-relaxed relative z-10">Emergencies don't wait. Neither do we. Our team is deployed within 24 hours of your initial contact.</p>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-secondary-container/20 rounded-3xl p-12 border border-secondary-container/40 backdrop-blur-xl hover:shadow-xl hover:shadow-secondary-container/20 hover:-translate-y-1 transition-all duration-500">
              <h3 className="font-headline-md text-headline-md text-secondary mb-4 font-bold">Eco-Clinical Focus</h3>
              <p className="text-secondary/80 leading-relaxed">Using biology-first approaches to reduce environmental footprint without compromising on results.</p>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-8 bg-white rounded-3xl p-12 flex items-center justify-between border border-slate-100 shadow-xl shadow-slate-200/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div>
                <h3 className="font-headline-md text-headline-md mb-2 font-bold text-slate-900">Licensed &amp; Insured</h3>
                <p className="text-slate-600">Fully compliant with state health and safety standards.</p>
              </div>
              <div className="hidden sm:flex gap-6">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 shadow-inner flex items-center justify-center transform hover:scale-110 hover:shadow-lg hover:bg-white transition-all duration-300">
                  <span className="material-symbols-outlined text-primary-container text-3xl">verified_user</span>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 shadow-inner flex items-center justify-center transform hover:scale-110 hover:shadow-lg hover:bg-white transition-all duration-300">
                  <span className="material-symbols-outlined text-primary-container text-3xl">shield</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 relative bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] right-[-5%] w-[40%] h-[50%] bg-primary-container/10 blur-[120px] rounded-full mix-blend-multiply"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[50%] bg-secondary-container/10 blur-[120px] rounded-full mix-blend-multiply"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <h2 className="font-headline-lg text-headline-lg text-center mb-16 font-bold text-slate-900">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white/60 backdrop-blur-2xl border border-white shadow-xl shadow-slate-200/50 p-12 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-200 border-4 border-white shadow-md group-hover:scale-110 transition-transform duration-500">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="David Richardson" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuBPmcyw0a-Ayc1TvS26Sk2dm8mr1i7xs7FOX97JxLYdNdmQ3PZ2mzKaV_uUTCM4zFl2lWEI-Y4rn3au6j6Xml1g4MIu_GNlURBf_p0p9BTaUCXn_MGTeARQpExbH1p4ggMfdiXUdF52w452yvJZSa4O3wozRrBktVkrqD43NWd8TYt1VD3YYSKkQvLSdWZN6iydRtjU35bNBnF_W9ueR4xnelaA4m_AjjsgDnvbK4P4_YZ_CcPbR4yJj5Cwx5Iz97l2vRmQNpg9Ja"
                  />
                </div>
                <div>
                  <p className="font-bold text-xl text-slate-900">David Richardson</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Residential Client</p>
                </div>
              </div>
              <div className="flex text-amber-400 mb-6 drop-shadow-sm">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              </div>
              <p className="text-slate-700 text-lg leading-relaxed font-light">"The level of professionalism from efumes! was outstanding. They handled our termite issue with surgical precision and explained every step of the clinical process. Highly recommended."</p>
            </div>
            <div className="bg-white/60 backdrop-blur-2xl border border-white shadow-xl shadow-slate-200/50 p-12 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-200 border-4 border-white shadow-md group-hover:scale-110 transition-transform duration-500">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Sarah Chen" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC881153VQdzxFjUx6y3bkmdsZQRQReLOF1Ra6yKesSMPHUbleFSalErcBZYRRN8bYBJ-kmohCJ4Xfr3pVc4UthOXNSU4mlpj6BhbnRVSiR62kz5_oBRe83RdBbd_PlE0yPhwYgGWvj2F-9A0_RxcreMG1YDtODbhU0GjFQNUczQWoGTYUdwOmQ5uKmNGtj0eG3xU64afxL8BvFxsjPj7BseoHqcXml9rx4Ru-BHQ2OBPNf3NYe6CLlxNJ7jBr8Imw4L_7Q2S7SI1Lp"
                  />
                </div>
                <div>
                  <p className="font-bold text-xl text-slate-900">Sarah Chen</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Commercial Manager</p>
                </div>
              </div>
              <div className="flex text-amber-400 mb-6 drop-shadow-sm">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              </div>
              <p className="text-slate-700 text-lg leading-relaxed font-light">"Maintaining our restaurant's hygiene standards is paramount. efumes!'s rodent exclusion plan was efficient and thorough. They are our go-to partner for facility sanitation."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950 text-white text-center relative overflow-hidden border-t border-slate-900 m-4 rounded-[3rem] shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 via-transparent to-secondary-container/10 mix-blend-screen"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="font-headline-xl text-headline-xl mb-6 font-bold">Ready to Reclaim Your Space?</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">Join thousands of homeowners and businesses who trust efumes! for clinical-grade pest eradication.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/book" className="bg-primary-container text-white px-10 py-5 rounded-2xl font-bold shadow-[0_10px_30px_rgba(243,141,44,0.4)] hover:shadow-[0_15px_40px_rgba(243,141,44,0.6)] hover:-translate-y-1 active:scale-95 transition-all duration-300 inline-block text-lg border border-primary-container/50 backdrop-blur-md">
              Schedule Online
            </Link>
            <Link href="tel:0333133637" className="bg-white/5 border border-white/10 backdrop-blur-xl px-10 py-5 rounded-2xl font-bold hover:bg-white hover:text-slate-900 hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:-translate-y-1 active:scale-95 transition-all duration-300 inline-block text-lg">
              Call Us: 0333-133637
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
