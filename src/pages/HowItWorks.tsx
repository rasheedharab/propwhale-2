import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Search, Landmark, ShieldCheck, TrendingUp, Droplets, Shield, PieChart } from 'lucide-react';

export default function HowItWorks() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md text-body-md antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* TopNavBar */}
      <Header />

      {/* Main Content Canvas */}
      <main className="flex-grow flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col items-center text-center">
          <h1 className="font-display-lg text-[40px] md:text-display-lg text-primary mb-6 max-w-3xl">Institutional Real Estate, Simplified.</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">We transform high-barrier, Grade A property investments into accessible, fractional ownership opportunities through secure Special Purpose Vehicles (SPVs).</p>
        </section>

        {/* Stepper Section (The Journey) */}
        <section className="w-full bg-surface-container-low py-section-gap border-y border-surface-variant">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <h2 className="font-headline-lg text-[32px] md:text-headline-lg text-primary mb-16 text-center">The Investment Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter relative">
              {/* Desktop Connecting Line */}
              <div className="hidden md:block absolute top-[40px] left-[12.5%] right-[12.5%] h-0.5 bg-outline-variant z-0"></div>

              {/* Step 1 */}
              <div className="flex flex-col items-center text-center relative z-10 group">
                <div className="w-20 h-20 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center mb-6 border-2 border-primary group-hover:bg-primary transition-colors duration-300">
                  <Search className="text-primary group-hover:text-surface-container-lowest transition-colors duration-300" size={32} />
                </div>
                <h3 className="font-headline-md text-xl text-primary mb-2">Browse Grade A Properties</h3>
                <p className="font-body-md text-sm text-on-surface-variant max-w-xs">Explore curated, pre-vetted institutional-grade assets typically reserved for private equity.</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center relative z-10 group mt-12 md:mt-0">
                <div className="w-20 h-20 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center mb-6 border-2 border-outline-variant group-hover:border-primary transition-colors duration-300">
                  <Landmark className="text-outline-variant group-hover:text-primary transition-colors duration-300" size={32} />
                </div>
                <h3 className="font-headline-md text-xl text-primary mb-2">Invest in an SPV</h3>
                <p className="font-body-md text-sm text-on-surface-variant max-w-xs">Capital is pooled into a secure, SEBI-compliant Special Purpose Vehicle dedicated to a single asset.</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center relative z-10 group mt-12 md:mt-0">
                <div className="w-20 h-20 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center mb-6 border-2 border-outline-variant group-hover:border-primary transition-colors duration-300">
                  <ShieldCheck className="text-outline-variant group-hover:text-primary transition-colors duration-300" size={32} />
                </div>
                <h3 className="font-headline-md text-xl text-primary mb-2">Become a Shareholder</h3>
                <p className="font-body-md text-sm text-on-surface-variant max-w-xs">Receive equity shares in the SPV proportionate to your investment, granting you legal ownership rights.</p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center relative z-10 group mt-12 md:mt-0">
                <div className="w-20 h-20 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center mb-6 border-2 border-outline-variant group-hover:border-primary transition-colors duration-300">
                  <TrendingUp className="text-outline-variant group-hover:text-primary transition-colors duration-300" size={32} />
                </div>
                <h3 className="font-headline-md text-xl text-primary mb-2">Earn Returns</h3>
                <p className="font-body-md text-sm text-on-surface-variant max-w-xs">Benefit from potential rental yields and capital appreciation upon property development and sale.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SPV Explanation Section */}
        <section className="w-full bg-primary text-on-primary py-section-gap relative overflow-hidden">
          {/* Abstract background elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-fixed/10 to-transparent pointer-events-none"></div>
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-headline-lg text-[32px] md:text-headline-lg mb-6 tracking-tight">Understanding the SPV Structure</h2>
                <p className="font-body-lg text-body-lg text-primary-fixed-dim mb-8">
                  A Special Purpose Vehicle (SPV) is a distinct legal entity (typically a private limited company or LLP) created solely to hold and manage a specific real estate asset. It is the cornerstone of secure fractional ownership.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-secondary-fixed/20 flex items-center justify-center text-secondary-fixed mt-1">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h4 className="font-headline-md text-xl font-bold text-on-primary mb-2">Legal Ring-Fencing</h4>
                      <p className="font-body-md text-primary-fixed-dim leading-relaxed">The underlying property and its associated funds are entirely segregated from the platform's (Propwhale's) corporate balance sheet. If the platform faces distress, your asset remains protected in the SPV.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-secondary-fixed/20 flex items-center justify-center text-secondary-fixed mt-1">
                      <Landmark size={24} />
                    </div>
                    <div>
                      <h4 className="font-headline-md text-xl font-bold text-on-primary mb-2">Direct Equity Ownership</h4>
                      <p className="font-body-md text-primary-fixed-dim leading-relaxed">You don't just own a "fraction" conceptually; you hold actual shares or debentures in the SPV that owns the property, granting you legal rights and a claim to generated income.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-secondary-fixed/20 flex items-center justify-center text-secondary-fixed mt-1">
                      <Search size={24} />
                    </div>
                    <div>
                      <h4 className="font-headline-md text-xl font-bold text-on-primary mb-2">Regulatory Compliance</h4>
                      <p className="font-body-md text-primary-fixed-dim leading-relaxed">SPVs are structured according to strict regulatory frameworks, ensuring standardized financial reporting, independent audits, and highly transparent corporate governance.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                {/* Visual Representation of SPV */}
                <div className="bg-surface-container-lowest/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl relative">
                  <div className="absolute -inset-4 bg-secondary-fixed/10 blur-3xl -z-10 rounded-full"></div>
                  
                  <div className="text-center mb-8">
                    <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-label-bold mb-4 border border-white/20 text-on-primary">The Secure Architecture</div>
                  </div>

                  <div className="flex flex-col items-center space-y-6">
                    {/* Top Level: Investors */}
                    <div className="flex justify-center gap-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="flex flex-col items-center">
                          <div className="w-10 h-10 bg-secondary-fixed rounded-full flex items-center justify-center text-primary mb-2 shadow-sm">
                            <span className="font-body-md text-[20px]">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            </span>
                          </div>
                          <span className="text-xs text-primary-fixed-dim">Investor</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Arrows Down */}
                    <div className="flex gap-8 text-secondary-fixed">
                      <ArrowRight size={20} className="rotate-90 opacity-50" />
                      <ArrowRight size={20} className="rotate-90 opacity-80" />
                      <ArrowRight size={20} className="rotate-90 opacity-50" />
                    </div>

                    {/* Middle Level: SPV */}
                    <div className="w-full bg-white/5 border border-secondary-fixed/50 rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
                      <div className="flex justify-center mb-3 text-secondary-fixed">
                        <Landmark size={32} />
                      </div>
                      <h4 className="font-headline-md text-lg font-bold text-on-primary">Special Purpose Vehicle</h4>
                      <p className="text-xs text-primary-fixed-dim mt-1">Holds Funds & Asset Title</p>
                      <div className="mt-4 px-3 py-1 bg-white/10 rounded text-[10px] uppercase tracking-wider inline-block text-on-primary">
                        Independent Legal Entity
                      </div>
                    </div>

                    {/* Arrow Down */}
                    <div className="text-white/50">
                      <ArrowRight size={24} className="rotate-90" />
                    </div>

                    {/* Bottom Level: Asset */}
                    <div className="w-full h-32 rounded-xl overflow-hidden relative border border-white/20">
                      <div className="absolute inset-0 bg-primary/40 flex flex-col items-center justify-center z-10 backdrop-blur-[2px]">
                         <span className="font-headline-md font-bold text-lg text-on-primary">Grade A Property</span>
                         <span className="text-xs mt-1 text-primary-fixed-dim">100% Owned by SPV</span>
                      </div>
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRLBoDq3wRY5Erc_nmmGwbG5tJW1ldBy037qq_4KvYk7PlnuY0Z6CeKDPit68eUEr3gXmhWMVIlvNnDy3KI256cjN5lYna1OfG9UDjUHvMsqsokyJaLGaN-JZpczwzQ9B7I8apMeRGsWdljj-iJP2ZNvsw0oGpfrEE4f1iEkJAmjWDtg83YJyskxPimVekt1f-7N2R1gHGVmeXd1T8PHkj6yr7UjjRqPIdavCzi40bkxSay6jiNomsFedm01fDLxPvga_c91VJtNE9" alt="Property" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantage Section (Bento Grid) */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
          <h2 className="font-headline-lg text-[32px] md:text-headline-lg text-primary mb-12 text-center md:text-left">The Fractional Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Bento Item 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_20px_rgba(0,15,34,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,15,34,0.08)] transition-all md:col-span-2 flex flex-col justify-between min-h-[300px] border border-surface-variant">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed rounded-full text-on-primary-fixed font-label-bold text-[12px] mb-6">
                  <Droplets size={16} />
                  Enhanced Liquidity
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Exit with Ease</h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">Unlike traditional real estate, fractional ownership via SPV shares offers secondary market potential, providing smoother exit strategies and greater capital flexibility.</p>
              </div>
              <div className="mt-8 flex gap-4 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                {/* Placeholder for developer/partner logos */}
                <div className="h-8 w-24 bg-surface-variant rounded"></div>
                <div className="h-8 w-24 bg-surface-variant rounded"></div>
              </div>
            </div>

            {/* Bento Item 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_20px_rgba(0,15,34,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,15,34,0.08)] transition-all flex flex-col min-h-[300px] border border-surface-variant">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full text-on-surface font-label-bold text-[12px] mb-6 w-fit">
                <Shield size={16} />
                Professional Management
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Zero Hassle</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Asset management, tenant relations, and maintenance are handled by top-tier institutional partners.</p>
            </div>

            {/* Bento Item 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_20px_rgba(0,15,34,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,15,34,0.08)] transition-all flex flex-col min-h-[300px] border border-surface-variant">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-fixed rounded-full text-on-tertiary-fixed font-label-bold text-[12px] mb-6 w-fit">
                <PieChart size={16} />
                Diversification
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Build a Portfolio</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Spread your risk by investing smaller amounts across multiple high-yield properties.</p>
            </div>

            {/* Bento Item 4 */}
            <div className="bg-primary p-8 rounded-xl shadow-[0_4px_20px_rgba(0,15,34,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,15,34,0.08)] transition-all md:col-span-2 flex flex-col justify-center items-start min-h-[300px] relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-fixed/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="font-headline-lg text-[32px] md:text-headline-lg text-on-primary mb-4">Ready to build wealth?</h3>
                <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-lg mb-8">Join the platform redefining real estate investment for the modern portfolio.</p>
                <Link className="inline-flex items-center justify-center bg-secondary-fixed text-primary px-8 py-3 rounded font-label-bold text-label-bold hover:opacity-90 transition-opacity active:scale-95 duration-150" to="/">
                  Invest Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      {/* Footer */}
      <Footer />
    </div>
  );
}
