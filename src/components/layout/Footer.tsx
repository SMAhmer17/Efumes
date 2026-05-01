import Link from "next/link";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 font-['Public_Sans'] mt-auto border-t border-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-50%] left-[-10%] w-[60%] h-[100%] bg-primary-container/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-50%] right-[-10%] w-[60%] h-[100%] bg-secondary-container/20 blur-[120px] rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <Link href="/">
              <img 
                alt="Efumes logo" 
                className="h-12 w-auto object-contain mb-8 filter invert brightness-0 hover:scale-105 transition-transform duration-300" 
                src="/logo.png"
              />
            </Link>
            <p className="text-slate-400 text-body-md mb-8 max-w-sm leading-relaxed">
              Setting the global standard for professional-grade pest management. Clinical precision, household safety, and 100% eradication.
            </p>
            <NewsletterForm />
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Services</h4>
              <ul className="space-y-4">
                <li><Link className="text-slate-400 hover:text-primary-container hover:translate-x-1 transition-all duration-300 block" href="/services/general-fumigation">Residential</Link></li>
                <li><Link className="text-slate-400 hover:text-primary-container hover:translate-x-1 transition-all duration-300 block" href="/services/disinfection">Commercial</Link></li>
                <li><Link className="text-slate-400 hover:text-primary-container hover:translate-x-1 transition-all duration-300 block" href="/services">Eco-Friendly</Link></li>
                <li><Link className="text-slate-400 hover:text-primary-container hover:translate-x-1 transition-all duration-300 block" href="/services/bed-bug">Thermal Treatment</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Company</h4>
              <ul className="space-y-4">
                <li><Link className="text-slate-400 hover:text-primary-container hover:translate-x-1 transition-all duration-300 block" href="/about">Our Story</Link></li>
                <li><Link className="text-slate-400 hover:text-primary-container hover:translate-x-1 transition-all duration-300 block" href="/safety">Safety Protocols</Link></li>
                <li><Link className="text-slate-400 hover:text-primary-container hover:translate-x-1 transition-all duration-300 block" href="/about">Certifications</Link></li>
                <li><Link className="text-slate-400 hover:text-primary-container hover:translate-x-1 transition-all duration-300 block" href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Connect</h4>
              <div className="flex flex-wrap gap-4">
                <Link className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary-container hover:text-white hover:border-primary-container hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(243,141,44,0.3)] transition-all duration-300 backdrop-blur-md" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z"></path></svg>
                </Link>
                <Link className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary-container hover:text-white hover:border-primary-container hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(243,141,44,0.3)] transition-all duration-300 backdrop-blur-md" href="https://www.instagram.com/efumes.pk?igsh=MXU3ajd6bW00OGJkcA==" target="_blank" rel="noopener noreferrer" title="Instagram">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
                </Link>
                <Link className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary-container hover:text-white hover:border-primary-container hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(243,141,44,0.3)] transition-all duration-300 backdrop-blur-md" href="#" title="LinkedIn">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                </Link>
                <Link className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary-container hover:text-white hover:border-primary-container hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(243,141,44,0.3)] transition-all duration-300 backdrop-blur-md" href="mailto:info@efumes.com" title="Email: info@efumes.com">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </Link>
                <Link className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary-container hover:text-white hover:border-primary-container hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(243,141,44,0.3)] transition-all duration-300 backdrop-blur-md" href="tel:0333133637" title="Call: 0333133637">
                  <span className="material-symbols-outlined text-xl">call</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Efumes. All rights reserved.</p>
          <div className="flex gap-8 text-sm">
            <Link className="text-slate-500 hover:text-white transition-colors" href="/privacy">Privacy Policy</Link>
            <Link className="text-slate-500 hover:text-white transition-colors" href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
