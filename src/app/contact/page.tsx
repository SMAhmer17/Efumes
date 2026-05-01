"use client";

import { useState } from "react";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      query: formData.get("query"),
      createdAt: serverTimestamp(),
    };

    try {
      if (!db) {
        throw new Error("Firebase not configured");
      }
      await addDoc(collection(db, "inquiries"), data);
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
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-primary-container/20 blur-[150px] rounded-full mix-blend-multiply opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary-container/20 blur-[150px] rounded-full mix-blend-multiply opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 space-y-10 sticky top-32">
            <header className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-container/10 text-primary-container border border-primary-container/20 backdrop-blur-md rounded-full text-xs font-bold shadow-sm">
                <span className="material-symbols-outlined text-[18px]">support_agent</span>
                <span className="uppercase tracking-widest">Get In Touch</span>
              </div>
              <h1 className="font-headline-xl text-5xl font-black text-slate-900 leading-[1.1]">
                We are here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-primary">Help!</span>
              </h1>
              <p className="font-body-lg text-lg text-slate-600 leading-relaxed font-light">
                Have a question about our services? Need an emergency intervention? Drop us a line and our clinical team will get back to you immediately.
              </p>
              <div className="space-y-4 pt-6">
                <a href="tel:0333133637" className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-md rounded-2xl border border-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary-container/10 text-primary-container rounded-xl flex items-center justify-center group-hover:bg-primary-container group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Call Us</p>
                    <p className="font-bold text-slate-900">0333133637</p>
                  </div>
                </a>
                <a href="mailto:info@efumes.com" className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-md rounded-2xl border border-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary-container/10 text-primary-container rounded-xl flex items-center justify-center group-hover:bg-primary-container group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Us</p>
                    <p className="font-bold text-slate-900">info@efumes.com</p>
                  </div>
                </a>
              </div>
            </header>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl shadow-slate-200/50 border border-white overflow-hidden relative">
              
              {isSubmitted ? (
                <div className="p-8 md:p-16 text-center space-y-6 flex flex-col items-center justify-center min-h-[500px] animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 shadow-inner">
                    <span className="material-symbols-outlined text-5xl">check_circle</span>
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900">Message Sent!</h2>
                  <p className="text-lg text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your response has been saved successfully. Our team will contact you shortly to address your query.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="p-8 md:p-12 space-y-10">
                  <div className="border-b border-slate-200/50 pb-6">
                    <h2 className="text-2xl font-bold text-slate-900">Send a Message</h2>
                    <p className="text-slate-500 text-sm mt-2">Fill out the form below and we will get back to you.</p>
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
                    </div>

                    <div className="space-y-2.5 pt-4">
                      <label className="text-xs text-slate-500 block uppercase tracking-widest font-bold">Your Query</label>
                      <textarea 
                        required
                        name="query"
                        className="w-full rounded-xl border-white/40 focus:ring-primary-container focus:border-primary-container transition-all bg-white/50 backdrop-blur-sm py-4 px-5 shadow-inner min-h-[160px] resize-none" 
                        placeholder="How can we help you today?" 
                      />
                    </div>
                    
                    <div className="pt-8 flex justify-end">
                      <button 
                        type="submit" 
                        disabled={isLoading}
                        className="px-10 py-5 bg-primary-container text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(243,141,44,0.3)] hover:shadow-[0_15px_30px_rgba(243,141,44,0.5)] hover:-translate-y-1 active:translate-y-0 transition-all flex items-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? "Sending..." : "Send Message"}
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
