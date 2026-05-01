import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-primary-container/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-secondary-container/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="text-center relative z-10 max-w-2xl mx-auto">
        <div className="mb-8 relative inline-block">
          <span className="text-[12rem] font-black text-slate-100 leading-none select-none">404</span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-8xl text-primary-container animate-bounce">pest_control</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Page Not Found</h1>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
          It looks like this area is pest-free! The page you're looking for doesn't exist or has been moved to a safer location.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="bg-primary-container text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-300">
            Back to Safety
          </Link>
          <Link href="/contact" className="bg-white border border-slate-200 text-slate-700 px-10 py-4 rounded-xl font-bold hover:bg-slate-50 hover:-translate-y-1 active:scale-95 transition-all duration-300">
            Report an Issue
          </Link>
        </div>
      </div>
    </main>
  )
}
