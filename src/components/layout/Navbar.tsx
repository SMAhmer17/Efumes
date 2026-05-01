"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname !== "/") return false;
    return pathname?.startsWith(path);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Safety", href: "/safety" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/60 backdrop-blur-2xl border-b border-white/40 shadow-lg font-['Public_Sans'] antialiased transition-all duration-300">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link href="/">
            <img 
              alt="Efumes Pest Control logo" 
              className="h-10 w-auto object-contain hover:scale-105 transition-transform duration-300" 
              src="/logo.png"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`font-medium transition-all duration-300 ${
                  active 
                    ? "text-primary-container font-bold border-b-2 border-primary-container pb-1" 
                    : "text-slate-600 hover:text-primary-container"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/book" className="hidden sm:inline-block bg-primary-container text-white px-6 py-2.5 rounded-xl font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300 border border-primary-container/50 text-sm">
            Book Now
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 animate-slide-down">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl font-medium transition-all ${
                    active 
                      ? "bg-primary-container/10 text-primary-container font-bold" 
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link 
              href="/book" 
              onClick={() => setIsOpen(false)}
              className="sm:hidden w-full bg-primary-container text-white px-6 py-4 rounded-xl font-bold text-center shadow-lg active:scale-95 transition-all"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
