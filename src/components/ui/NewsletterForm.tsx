"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      if (!db) {
        throw new Error("Firebase not configured");
      }
      await addDoc(collection(db, "subscribers"), {
        email: email,
        subscribedAt: serverTimestamp(),
      });
      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Error subscribing: ", error);
      setStatus("error");
    }
  };

  return (
    <div className="space-y-4">
      <p className="font-bold text-white tracking-wide uppercase text-sm">Stay protected</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md group">
        <input 
          required
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading" || status === "success"}
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-container/50 focus:border-primary-container/50 transition-all duration-300 backdrop-blur-md disabled:opacity-50" 
          placeholder={status === "success" ? "Subscribed!" : "Enter your email address"} 
        />
        <button 
          disabled={status === "loading" || status === "success"}
          className="bg-primary-container text-white px-8 py-3 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(243,141,44,0.4)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === "loading" ? "Joining..." : status === "success" ? "Joined" : "Join"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}
