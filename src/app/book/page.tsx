"use client";

import { useState } from "react";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function BookPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      serviceType: formData.get("service"),
      query: formData.get("query"),
      createdAt: serverTimestamp(),
    };

    try {
      if (!db) {
        throw new Error("Firebase not configured");
      }
      await addDoc(collection(db, "bookings"), data);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Something went wrong. Please check if the form is correctly configured.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen py-16">
      {/* Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-primary-container/20 blur-[150px] rounded-full mix-blend-multiply opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary-container/20 blur-[150px] rounded-full mix-blend-multiply opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Branding & Trust */}
          <div className="lg:col-span-5 space-y-10 sticky top-32">
            <header className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-container/10 text-primary-container border border-primary-container/20 backdrop-blur-md rounded-full text-xs font-bold shadow-sm">
                <span className="material-symbols-outlined text-[18px]">support_agent</span>
                <span className="uppercase tracking-widest">Contact Support</span>
              </div>
              <h1 className="font-headline-xl text-5xl font-black text-slate-900 leading-[1.1]">
                Ready for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-primary">Protection?</span>
              </h1>
              <p className="font-body-lg text-lg text-slate-600 leading-relaxed font-light">
                Secure your property with our eco-friendly, professional fumigation services. Fill out the form to get a clinical inspection or instant estimate.
              </p>
            </header>
            
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border-4 border-white/80 group">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt="A clinical and sterile environment being professionally treated by a technician in a white protective suit." 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0ggopG9uLbAXZeWuZJcv9hUEEa7e62TB3UNWYSh1XSA0zNm0NDkBk6W7dpJJc6_g6c6SUaI_CF4JZZHcIRyOSR_RV7_SHGjUt51v5AunX12VEvfz1DyCB0ciNJ3snTkhmFfgzVBe5BVKxT4fcky_EBcdyTNp2ppwDaM3rM2ch0paFK_5Ae2ILJqlzRecyaF2MTxWJwrnUZc004Be0H1EMO80034DVuck_kdNogcZGCuUmAkY_JukzTCqYERseA0Tg7PbvSGo5f64J"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex items-end p-8">
                <div className="text-white transform group-hover:-translate-y-2 transition-transform duration-500">
                  <p className="font-label-md text-xs uppercase tracking-[0.2em] text-secondary-container mb-2 font-bold">Certified Eco-Safe</p>
                  <p className="font-headline-md text-2xl font-bold">Advanced Protection</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl shadow-slate-200/50 border border-white overflow-hidden relative">
              
              {isSubmitted ? (
                // Success Dialog
                <div className="p-8 md:p-16 text-center space-y-6 flex flex-col items-center justify-center min-h-[500px] animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 shadow-inner">
                    <span className="material-symbols-outlined text-5xl">check_circle</span>
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900">Request Received!</h2>
                  <p className="text-lg text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your response has been saved successfully. Our clinical precision team will contact you shortly to finalize the details.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                // Booking Form
                <div className="p-8 md:p-12 space-y-10">
                  <div className="border-b border-slate-200/50 pb-6">
                    <h2 className="text-2xl font-bold text-slate-900">Contact Details</h2>
                    <p className="text-slate-500 text-sm mt-2">Please provide your information so our specialists can reach you.</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2.5">
                        <label className="text-xs text-slate-500 block uppercase tracking-widest font-bold">Full Name</label>
                        <input 
                          required
                          name="name"
                          className="w-full rounded-xl border-white/40 focus:ring-primary-container focus:border-primary-container transition-all bg-white/50 backdrop-blur-sm py-4 px-5 shadow-inner" 
                          placeholder="John Doe" 
                          type="text"
                        />
                      </div>
                      <div className="space-y-2.5">
                        <label className="text-xs text-slate-500 block uppercase tracking-widest font-bold">Email Address</label>
                        <input 
                          required
                          name="email"
                          className="w-full rounded-xl border-white/40 focus:ring-primary-container focus:border-primary-container transition-all bg-white/50 backdrop-blur-sm py-4 px-5 shadow-inner" 
                          placeholder="john@example.com" 
                          type="email"
                        />
                      </div>
                      <div className="space-y-2.5">
                        <label className="text-xs text-slate-500 block uppercase tracking-widest font-bold">Phone Number</label>
                        <input 
                          required
                          name="phone"
                          className="w-full rounded-xl border-white/40 focus:ring-primary-container focus:border-primary-container transition-all bg-white/50 backdrop-blur-sm py-4 px-5 shadow-inner" 
                          placeholder="+1 (555) 000-0000" 
                          type="tel"
                        />
                      </div>
                      <div className="space-y-2.5">
                        <label className="text-xs text-slate-500 block uppercase tracking-widest font-bold">Service Address</label>
                        <input 
                          required
                          name="address"
                          className="w-full rounded-xl border-white/40 focus:ring-primary-container focus:border-primary-container transition-all bg-white/50 backdrop-blur-sm py-4 px-5 shadow-inner" 
                          placeholder="123 Hygiene St, Clean City" 
                          type="text"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-4 pt-4 border-t border-slate-200/50">
                      <label className="text-xs text-slate-500 block uppercase tracking-widest font-bold mb-4">Service Type</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label className="cursor-pointer relative">
                          <input type="radio" name="service" value="residential" className="peer sr-only" defaultChecked />
                          <div className="flex items-center gap-4 p-5 bg-white/40 border-2 border-transparent peer-checked:border-primary-container peer-checked:bg-primary-container/5 rounded-2xl transition-all shadow-sm">
                            <div className="bg-primary-container text-white p-3 rounded-xl shadow-md">
                              <span className="material-symbols-outlined text-2xl">home</span>
                            </div>
                            <div>
                              <p className="font-bold text-lg text-slate-900">Residential</p>
                              <p className="text-xs text-slate-500">Homes & apartments</p>
                            </div>
                          </div>
                        </label>
                        
                        <label className="cursor-pointer relative">
                          <input type="radio" name="service" value="commercial" className="peer sr-only" />
                          <div className="flex items-center gap-4 p-5 bg-white/40 border-2 border-transparent peer-checked:border-primary-container peer-checked:bg-primary-container/5 rounded-2xl transition-all shadow-sm">
                            <div className="bg-slate-200 text-slate-600 p-3 rounded-xl peer-checked:bg-primary-container peer-checked:text-white transition-colors">
                              <span className="material-symbols-outlined text-2xl">business</span>
                            </div>
                            <div>
                              <p className="font-bold text-lg text-slate-900">Commercial</p>
                              <p className="text-xs text-slate-500">Offices & warehouses</p>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div className="space-y-2.5 pt-4">
                      <label className="text-xs text-slate-500 block uppercase tracking-widest font-bold">Additional Query (Optional)</label>
                      <textarea 
                        name="query"
                        className="w-full rounded-xl border-white/40 focus:ring-primary-container focus:border-primary-container transition-all bg-white/50 backdrop-blur-sm py-4 px-5 shadow-inner min-h-[120px] resize-none" 
                        placeholder="Tell us more about your pest issues..." 
                      />
                    </div>
                    
                    <div className="pt-8 flex justify-end">
                      <button 
                        type="submit" 
                        disabled={isLoading}
                        className="px-10 py-5 bg-primary-container text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(243,141,44,0.3)] hover:shadow-[0_15px_30px_rgba(243,141,44,0.5)] hover:-translate-y-1 active:translate-y-0 transition-all flex items-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? "Submitting..." : "Submit Request"}
                        {!isLoading && <span className="material-symbols-outlined">send</span>}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
