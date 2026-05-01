import Link from "next/link";

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using the efumes! website and our professional pest control services, you accept and agree to be bound by the terms and provisions of this agreement. Our services are subject to these terms, which may be updated by us from time to time without notice."
    },
    {
      title: "2. Service Description",
      content: "efumes! provides professional, clinical-grade pest management and fumigation services. While we guarantee our workmanship and aim for 100% eradication, the long-term effectiveness of treatments depends heavily on post-treatment sanitation, waste management, and structural maintenance performed by the property owner."
    },
    {
      title: "3. User Responsibilities",
      content: "Users agree to provide accurate information when requesting quotes or booking services. It is the responsibility of the client to ensure the premises are prepared according to our clinical guidelines prior to a treatment session to ensure safety and maximum effectiveness."
    },
    {
      title: "4. Liability Limitation",
      content: "efumes! shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or the inability to use our services. We are not responsible for pre-existing structural damage caused by pests prior to our intervention."
    },
    {
      title: "5. Modifications to Service",
      content: "We reserve the right at any time to modify or discontinue, temporarily or permanently, any service (or any part thereof) with or without notice. We shall not be liable to you or to any third party for any modification, price change, or suspension of the service."
    },
    {
      title: "6. Governing Law",
      content: "These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which efumes! operates, without regard to its conflict of law provisions."
    }
  ];

  return (
    <main className="relative min-h-screen py-24">
      {/* Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
        <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] bg-secondary-container/20 blur-[150px] rounded-full mix-blend-multiply opacity-60"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-primary-container/20 blur-[150px] rounded-full mix-blend-multiply opacity-60"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="bg-white/70 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-white relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <span className="material-symbols-outlined text-9xl">description</span>
          </div>
          
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
              Terms & Conditions
            </div>
            <h1 className="font-headline-xl text-5xl font-black text-slate-900 leading-tight">Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-primary">Service</span></h1>
            <p className="text-slate-500 mt-4 font-medium italic">Last updated: May 01, 2026</p>
          </div>
          
          <div className="space-y-12">
            {sections.map((section, index) => (
              <section key={index} className="relative pl-8 border-l-2 border-slate-100 hover:border-primary-container transition-colors duration-500 group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-slate-200 rounded-full group-hover:border-primary-container group-hover:bg-primary-container transition-all duration-500"></div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
                <p className="text-slate-600 leading-relaxed text-lg font-light">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-20 p-8 bg-slate-900 rounded-3xl text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Have questions?</h3>
                <p className="text-slate-400 text-sm">We're here to help you understand our terms.</p>
              </div>
              <Link href="/contact" className="bg-primary-container text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all text-center whitespace-nowrap">
                Contact Specialist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
