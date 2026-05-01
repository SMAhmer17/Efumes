import Link from "next/link";

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect information that you provide directly to us, such as when you fill out a form, request a quote, or communicate with us. The types of personal information we may collect include your name, email address, postal address, phone number, and any other information you choose to provide."
    },
    {
      title: "2. How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, to process transactions, and to send you related information including confirmations and invoices. This data allows us to tailor our clinical pest control strategies specifically to your environment."
    },
    {
      title: "3. Information Sharing",
      content: "We do not share your personal information with third parties except as described in this privacy policy or as required by law. We may share data with trusted service providers who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential."
    },
    {
      title: "4. Data Security",
      content: "We implement a variety of security measures to maintain the safety of your personal information. We use state-of-the-art encryption to protect sensitive information transmitted online, and we also protect your information offline."
    },
    {
      title: "5. Contact Us",
      content: "If you have any questions about this Privacy Policy, please contact us at info@efumes.com or call us at 0333133637. Our support team is available 24/7 for any privacy-related inquiries."
    }
  ];

  return (
    <main className="relative min-h-screen py-24">
      {/* Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-primary-container/20 blur-[150px] rounded-full mix-blend-multiply opacity-60"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-secondary-container/20 blur-[150px] rounded-full mix-blend-multiply opacity-60"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="bg-white/70 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-white relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <span className="material-symbols-outlined text-9xl">gavel</span>
          </div>
          
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
              Legal Document
            </div>
            <h1 className="font-headline-xl text-5xl font-black text-slate-900 leading-tight">Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-primary">Policy</span></h1>
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
                <h3 className="text-xl font-bold mb-2">Need clarification?</h3>
                <p className="text-slate-400 text-sm">Our legal team is happy to answer any questions.</p>
              </div>
              <Link href="/contact" className="bg-primary-container text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all text-center whitespace-nowrap">
                Contact Legal Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
