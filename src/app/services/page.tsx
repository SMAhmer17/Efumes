import Link from "next/link"

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 relative">
      {/* Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-container/20 blur-[150px] rounded-full mix-blend-multiply opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary-container/20 blur-[150px] rounded-full mix-blend-multiply opacity-60"></div>
      </div>

      {/* Hero Section */}
      <section className="py-24 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 bg-secondary-container/20 text-secondary border border-secondary-container/50 backdrop-blur-md px-4 py-2 rounded-full mb-8 shadow-sm">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              <span className="font-bold text-xs uppercase tracking-widest">Certified Pest Experts</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-slate-900 mb-6 font-bold leading-tight">
              Our Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-primary">Services</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-xl mb-12 leading-relaxed font-light">
              Clinical precision for every pest challenge. We offer a comprehensive suite of targeted treatments designed to protect your health, your home, and your business.
            </p>
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              <Link href="/book" className="bg-primary-container text-white font-bold px-12 py-5 rounded-xl shadow-[0_10px_25px_rgba(243,141,44,0.3)] hover:shadow-[0_15px_35px_rgba(243,141,44,0.4)] hover:-translate-y-1 active:scale-95 transition-all duration-300">
                Book Inspection
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative bg-slate-200 group border border-white/50">
            <div className="absolute inset-0 bg-primary-container/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
            <img 
              alt="Modern professional pest control specialist" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNX_dzm4E2xkKSaNg-8wudvrUnHY1Md-4gGwO16qK5Qy03gNRVEoK_5QG5ur-SGPKz_7eC1pHsQLT5cT-3pgU2rY0d9XHEXZz0cwwgiuszmhk4wURmGZvlEAu5V00zswU8ICuy1bF5SThPuHiJOhWwUmi9zfJXE7NwUiiDwG3PWs0ltr-kKuPcXAcDoOV7hK7yDRiO1QaWtXfvvl7ALwUgxhvFtq_5W8cbqjEh47O5KaNfQK9fNh3tpcS853YiGLNzk1XTgi4bSChA"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="text-center mb-20">
          <h2 className="font-headline-lg text-headline-lg mb-4 font-bold text-slate-900">Comprehensive Solutions</h2>
          <p className="text-slate-600 text-lg">Tailored strategies for every environment and infestation level.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* General Fumigation */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl shadow-slate-200/50 border border-white overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-primary-container/20 hover:-translate-y-2 transition-all duration-500">
            <div className="h-56 overflow-hidden bg-slate-200 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10"></div>
              <img 
                alt="General Fumigation" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0IbK_RdaspRSc1IFNQMer_wtMFS1Ogi-dTB1ZMmBZ9bvabt3c3ClIxGpVGtXHmndKiH3MYQwzauiJC5ZsgNcmjvKpetIrqL32n_VXHHjGblaAv58VI2ww57Vacp_sCxV1A0NQdh7m-Q7prtaiQjgzTP_hgOxF8t04AUPWO4dI1guMp7GS7kLfl1Lq6qF-oFAru5w1u6YSicxnyyFBHAVu9j4EAbbryjp50Y6utGi3lJA_hz8H7glahQ_ZOyyErhxsCA-2AFIoog"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow relative">
              <div className="absolute -top-12 right-8 w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500 z-20 text-primary-container">
                <span className="material-symbols-outlined text-3xl">pest_control</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-2">General Fumigation</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Includes mosquitoes, flies, cockroaches, and all crawling insects to keep your environment hygienic and safe.</p>
              <div className="mt-auto">
                <Link href="/services/general-fumigation" className="text-primary-container font-bold flex items-center gap-2 group-hover:gap-4 transition-all hover:text-primary">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bed Bug Treatment */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl shadow-slate-200/50 border border-white overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-secondary-container/20 hover:-translate-y-2 transition-all duration-500">
            <div className="h-56 overflow-hidden bg-slate-200 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10"></div>
              <img 
                alt="Bed Bug Treatment" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmG_wYXSeeItKUA9BU3uOjCA95Ck-qIB6MrdMcpOWF78PLWQbES7amf3WxaZ5sKYUJyo-YBqv1NssJjYsITFtvCPB4D1e2N0gQA88wMIzUIDWSmwr-RVgzczA9yp1xcWN6OztiAEEvqoV87PE0ry33IQbWY1YASfRT7Mlzn4RTRU9mK6ji6ql3LK_fjLwx2rPoSryoe_5g6E2DAeSQaMNqiTrZqyo8S_GKk9-seV7y7aa6iZWIlBctGMTF7MQ1fNJmRlmGOe7qTA"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow relative">
              <div className="absolute -top-12 right-8 w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500 z-20 text-secondary">
                <span className="material-symbols-outlined text-3xl">hotel</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-2">Bed Bug Treatment</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Comprehensive heat and chemical treatments to eradicate bed bug infestations completely from residential and commercial spaces.</p>
              <div className="mt-auto">
                <Link href="/services/bed-bug" className="text-secondary font-bold flex items-center gap-2 group-hover:gap-4 transition-all hover:brightness-75">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Rodent Treatment */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl shadow-slate-200/50 border border-white overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-primary-container/20 hover:-translate-y-2 transition-all duration-500">
            <div className="h-56 overflow-hidden bg-slate-200 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10"></div>
              <img 
                alt="Rodent Treatment" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLAtYm3YltFKNRsIdpeB06dJd_Lf7SpRnpUHss2WU_5F4zSBJfA6CC1bVHyQIod2eWbMHIZJUT2-U5pI8VErJFJ2Ohf0d7Pn6tP4etYpuBvSuEM8nvvMa9JRwBW1FI5x6HRW0ZCaXUitFY6LzSNK7fjvkX3fgShDhZ32WKa_p-BGyKqTzG4q9byGcj4cHQmlJhlcsNjTfMiMKlJAdKLWv_mPT4ayWonRdSs0vju7tcUhqRxsFym-BiJwN-rW02LXva3yEUx78nLA"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow relative">
              <div className="absolute -top-12 right-8 w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500 z-20 text-primary-container">
                <span className="material-symbols-outlined text-3xl">mouse</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-2">Rodent Treatment</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Advanced trapping and exclusion techniques to secure your property from rats and mice, preventing damage and disease.</p>
              <div className="mt-auto">
                <Link href="/services/rodent" className="text-primary-container font-bold flex items-center gap-2 group-hover:gap-4 transition-all hover:text-primary">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Termite Treatment */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl shadow-slate-200/50 border border-white overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-primary-container/20 hover:-translate-y-2 transition-all duration-500">
            <div className="h-56 overflow-hidden bg-slate-200 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10"></div>
              <img 
                alt="Termite Treatment" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoK_LNxv5JyXRuV1J4FaJaqJAn8_ajaFbS-v--Tk4W3LYkFbWJusHsRd5lq0XzmMzyaBmS-9_PnmxZfMqpccCkvgK6iElarYS_VT5J2eDSe-hag29YKrgC1g5nkKj1F-faXc-GZwOsL7kdOAhAxC3tZsdf-pG2PLBvrPlkxViLrDQVsRIq5UAfqDaPVi7US13HRr3DrqVTC4T89Cree_XtPepTYMqUDtGR0ocKoqmwzXRasiwuRm2XYw6v4OvL69njZRLuZ-KI5g"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow relative">
              <div className="absolute -top-12 right-8 w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500 z-20 text-primary-container">
                <span className="material-symbols-outlined text-3xl">foundation</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-2">Termite Treatment</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Eliminate termites from vicinity using liquid soil barriers for long-term eradication and structural protection.</p>
              <div className="mt-auto">
                <Link href="/services/termite" className="text-primary-container font-bold flex items-center gap-2 group-hover:gap-4 transition-all hover:text-primary">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Termite Spray */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl shadow-slate-200/50 border border-white overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-primary-container/20 hover:-translate-y-2 transition-all duration-500">
            <div className="h-56 overflow-hidden bg-slate-200 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10"></div>
              <img 
                alt="Termite Spray" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUEBAsd7em7c60G-DMgdX0Jemb2BWl3ZoJeUQJ_lsmLyKrTUQaqz4Nsg0ip3WE8Gx90HKwnrU30WonDKLO4rpoiPPYu2xdcz3jQdAq2RhCmeYo2bbXaIfGkO5RcFo7_w5F_4mxwQl1YnTqNWW9_e6jjpkxJQdqEB0kCEc2fuFx84ayu8dFrcs7eEUG_FHii1rI1ppsa-1zw6P7sKnsSicSWKgCMNfmbnIAz-VotY_7wKrFthL25ti1eP_AZmgBTulBgB3A8R7TJA"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow relative">
              <div className="absolute -top-12 right-8 w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500 z-20 text-primary-container">
                <span className="material-symbols-outlined text-3xl">spray</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-2">Termite Spray</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Preventative surface sprays for wooden structures and high-risk exterior areas to stop infestations before they start.</p>
              <div className="mt-auto">
                <Link href="/services/termite-spray" className="text-primary-container font-bold flex items-center gap-2 group-hover:gap-4 transition-all hover:text-primary">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Disinfection Spray */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl shadow-slate-200/50 border border-white overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-secondary-container/20 hover:-translate-y-2 transition-all duration-500">
            <div className="h-56 overflow-hidden bg-slate-200 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10"></div>
              <img 
                alt="Disinfection Spray" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMPl9dOm7MJCdjUJI_4x29Y4sf88QO5Hv4jBBr5f81VcTIvf7oixVjM3KZGJgwqXzbdilgbAcDZxyskpgMSuoxRorWjVkGXxmbMZ6HBeQDFYORdI6xFyoB6TgnlO03g5hQ6uacE3O9gsPWuTPr8Sm3BRORyzczwMo69oJ1M8PGr4XTbbjivG83uLo5Xx1QnkgXzNHsIZ39yu5O_CG_KQ9M1QCum_WDF49tXBpl0CmNzr8Zndi1U1-CFyE4lxY-5Q1iy-uoMbtPCA"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow relative">
              <div className="absolute -top-12 right-8 w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500 z-20 text-secondary">
                <span className="material-symbols-outlined text-3xl">sanitizer</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-2">Disinfection Spray</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Hospital-grade disinfection services for homes and offices to eliminate 99.9% of bacteria and viruses.</p>
              <div className="mt-auto">
                <Link href="/services/disinfection" className="text-secondary font-bold flex items-center gap-2 group-hover:gap-4 transition-all hover:brightness-75">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white/40 backdrop-blur-md rounded-[3rem] mb-24 px-8 border border-white shadow-xl shadow-slate-200/30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-6 text-primary-container transform hover:scale-110 transition-all duration-300">
              <span className="material-symbols-outlined text-4xl">eco</span>
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-3">Eco-Friendly</h4>
            <p className="text-slate-600 leading-relaxed">Safe for families and pets while being tough on pests.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-6 text-primary-container transform hover:scale-110 transition-all duration-300">
              <span className="material-symbols-outlined text-4xl">timer</span>
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-3">Fast Response</h4>
            <p className="text-slate-600 leading-relaxed">Professional service dispatched within 24 hours.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-6 text-primary-container transform hover:scale-110 transition-all duration-300">
              <span className="material-symbols-outlined text-4xl">workspace_premium</span>
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-3">Guaranteed Results</h4>
            <p className="text-slate-600 leading-relaxed">We don't stop until your pest problem is solved.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
