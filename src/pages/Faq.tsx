import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  Menu, X, Search, ChevronRight, Plus, Minus, ShieldCheck
} from 'lucide-react';

export default function Faq() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>('q-gen-1');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen flex flex-col">
      {/* TopNavBar */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto text-center flex flex-col items-center">
            <h1 className="font-display-lg text-[40px] md:text-display-lg text-primary mb-6">How can we help?</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl">
                Browse our frequently asked questions to learn more about fractional real estate investing, legal frameworks, and managing your portfolio with Propwhale.
            </p>
            {/* Search Bar */}
            <div className="relative w-full max-w-xl group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" size={20} />
                <input className="w-full bg-surface-container-lowest border-b-2 border-outline-variant focus:border-primary text-on-surface font-body-lg text-body-lg py-4 pl-12 pr-4 outline-none transition-colors shadow-sm rounded-t-lg" placeholder="Search for answers..." type="text"/>
            </div>
        </section>

        {/* FAQ Layout: Grid with Sidebar */}
        <section className="w-full px-margin-mobile md:px-margin-desktop pb-section-gap max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12">
            
            {/* Sidebar Navigation */}
            <aside className="hidden md:block">
                <div className="sticky top-32 flex flex-col gap-2">
                    <h2 className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider mb-4 px-4">Categories</h2>
                    <a className="px-4 py-3 rounded-lg bg-surface-container-high text-primary font-body-md text-body-md font-medium flex items-center justify-between group" href="#general">
                        General
                        <ChevronRight className="text-sm opacity-50 group-hover:opacity-100 transition-opacity" size={16} />
                    </a>
                    <a className="px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors font-body-md text-body-md flex items-center justify-between group" href="#investment">
                        Investment
                        <ChevronRight className="text-sm opacity-0 group-hover:opacity-50 transition-opacity" size={16} />
                    </a>
                    <a className="px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors font-body-md text-body-md flex items-center justify-between group" href="#legal-spv">
                        Legal &amp; SPV
                        <ChevronRight className="text-sm opacity-0 group-hover:opacity-50 transition-opacity" size={16} />
                    </a>
                    <a className="px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors font-body-md text-body-md flex items-center justify-between group" href="#tax-returns">
                        Tax &amp; Returns
                        <ChevronRight className="text-sm opacity-0 group-hover:opacity-50 transition-opacity" size={16} />
                    </a>
                </div>
            </aside>

            {/* Content Area */}
            <div className="flex flex-col gap-12">
                
                {/* Category: General */}
                <div className="scroll-mt-32" id="general">
                    <h2 className="font-headline-lg text-headline-lg text-primary mb-6">General</h2>
                    <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,15,34,0.04)] border border-surface-variant flex flex-col divide-y divide-surface-variant">
                        {/* Accordion Item 1 */}
                        <div className="relative group">
                            <button 
                                onClick={() => toggleAccordion('q-gen-1')}
                                className={`w-full flex justify-between items-center p-6 md:p-8 cursor-pointer bg-surface-container-lowest hover:bg-surface transition-colors rounded-t-xl ${openAccordion === 'q-gen-1' ? 'rounded-b-none' : 'rounded-b-none'}`}
                            >
                                <span className="font-headline-md text-[18px] md:text-headline-md text-primary text-left pr-4">What is Propwhale?</span>
                                {openAccordion === 'q-gen-1' ? <Minus className="text-primary shrink-0" /> : <Plus className="text-on-surface-variant shrink-0" />}
                            </button>
                            {openAccordion === 'q-gen-1' && (
                                <div className="px-6 md:px-8 pb-8 pt-2">
                                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                        Propwhale is a platform that allows individuals to invest in high-yield, institutional-grade commercial and premium residential real estate through fractional ownership. By leveraging technology and rigorous legal frameworks, we lower the barrier to entry, enabling you to build a diversified real estate portfolio.
                                    </p>
                                </div>
                            )}
                        </div>
                        {/* Accordion Item 2 */}
                        <div className="relative group">
                            <button 
                                onClick={() => toggleAccordion('q-gen-2')}
                                className={`w-full flex justify-between items-center p-6 md:p-8 cursor-pointer bg-surface-container-lowest hover:bg-surface transition-colors rounded-b-xl ${openAccordion === 'q-gen-2' ? 'rounded-b-none' : ''}`}
                            >
                                <span className="font-headline-md text-[18px] md:text-headline-md text-primary text-left pr-4">Who can invest on the platform?</span>
                                {openAccordion === 'q-gen-2' ? <Minus className="text-primary shrink-0" /> : <Plus className="text-on-surface-variant shrink-0" />}
                            </button>
                            {openAccordion === 'q-gen-2' && (
                                <div className="px-6 md:px-8 pb-8 pt-2">
                                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                        Currently, investments are open to all Indian residents, Non-Resident Indians (NRIs), and eligible foreign nationals subject to KYC and AML compliance as per local regulations. Minimum investment thresholds apply and vary by specific property offering.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Category: Investment */}
                <div className="scroll-mt-32" id="investment">
                    <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Investment</h2>
                    <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,15,34,0.04)] border border-surface-variant flex flex-col divide-y divide-surface-variant">
                        {/* Accordion Item 1 */}
                        <div className="relative group">
                            <button 
                                onClick={() => toggleAccordion('q-inv-1')}
                                className={`w-full flex justify-between items-center p-6 md:p-8 cursor-pointer bg-surface-container-lowest hover:bg-surface transition-colors rounded-t-xl ${openAccordion === 'q-inv-1' ? 'rounded-b-none' : ''}`}
                            >
                                <span className="font-headline-md text-[18px] md:text-headline-md text-primary text-left pr-4">What is the minimum investment amount?</span>
                                {openAccordion === 'q-inv-1' ? <Minus className="text-primary shrink-0" /> : <Plus className="text-on-surface-variant shrink-0" />}
                            </button>
                            {openAccordion === 'q-inv-1' && (
                                <div className="px-6 md:px-8 pb-8 pt-2">
                                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                        The minimum investment varies depending on the specific asset. Typically, opportunities start at ₹25,00,000 for commercial assets. We aim to structure deals that balance accessibility with the scale required for institutional-grade acquisitions.
                                    </p>
                                </div>
                            )}
                        </div>
                        {/* Accordion Item 2 */}
                        <div className="relative group">
                            <button 
                                onClick={() => toggleAccordion('q-inv-2')}
                                className={`w-full flex justify-between items-center p-6 md:p-8 cursor-pointer bg-surface-container-lowest hover:bg-surface transition-colors rounded-b-xl ${openAccordion === 'q-inv-2' ? 'rounded-b-none' : ''}`}
                            >
                                <span className="font-headline-md text-[18px] md:text-headline-md text-primary text-left pr-4">How do I track my investment performance?</span>
                                {openAccordion === 'q-inv-2' ? <Minus className="text-primary shrink-0" /> : <Plus className="text-on-surface-variant shrink-0" />}
                            </button>
                            {openAccordion === 'q-inv-2' && (
                                <div className="px-6 md:px-8 pb-8 pt-2">
                                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                        Once invested, you gain access to a dedicated investor dashboard. This portal provides real-time updates on asset performance, yield distributions, valuation reports, and comprehensive document management for total transparency.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Category: Legal & SPV */}
                <div className="scroll-mt-32" id="legal-spv">
                    <div className="flex items-center gap-3 mb-6">
                        <h2 className="font-headline-lg text-headline-lg text-primary">Legal &amp; SPV</h2>
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-surface-container-high border border-outline-variant rounded-full text-on-surface-variant font-label-bold text-label-bold text-[10px]">
                            <ShieldCheck size={14} className="text-on-surface-variant" />
                            COMPLIANT
                        </span>
                    </div>
                    <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,15,34,0.04)] border border-surface-variant flex flex-col divide-y divide-surface-variant">
                        {/* Accordion Item 1 */}
                        <div className="relative group">
                            <button 
                                onClick={() => toggleAccordion('q-leg-1')}
                                className={`w-full flex justify-between items-center p-6 md:p-8 cursor-pointer bg-surface-container-lowest hover:bg-surface transition-colors rounded-xl ${openAccordion === 'q-leg-1' ? 'rounded-b-none' : ''}`}
                            >
                                <span className="font-headline-md text-[18px] md:text-headline-md text-primary text-left pr-4">How is the property legally owned?</span>
                                {openAccordion === 'q-leg-1' ? <Minus className="text-primary shrink-0" /> : <Plus className="text-on-surface-variant shrink-0" />}
                            </button>
                            {openAccordion === 'q-leg-1' && (
                                <div className="px-6 md:px-8 pb-8 pt-2">
                                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                        Each property is acquired through a dedicated Special Purpose Vehicle (SPV), typically structured as a Private Limited Company or LLP. Investors receive shares or partner capital directly proportional to their investment amount, ensuring clear, legally binding ownership of the underlying asset.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
