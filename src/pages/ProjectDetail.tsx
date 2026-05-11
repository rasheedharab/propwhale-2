import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function ProjectDetail() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* TopNavBar */}
      <nav className="bg-primary text-primary-fixed-dim docked full-width top-0 sticky shadow-sm z-50">
        <div className="bg-primary/95 backdrop-blur-md">
          <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-20">
            {/* Brand Logo */}
            <Link className="text-headline-md font-headline-md font-bold text-secondary-fixed hover:opacity-80 transition-opacity" to="/">Propwhale</Link>
            
            {/* Navigation Links (Desktop) */}
            <div className="hidden md:flex items-center space-x-8">
              <a className="text-primary-fixed-dim font-medium hover:text-secondary-fixed font-label-bold text-label-bold hover:opacity-80 transition-opacity" href="#">How it Works</a>
              <Link className="text-secondary-fixed font-bold border-b-2 border-secondary-fixed pb-1 font-label-bold text-label-bold hover:opacity-80 transition-opacity" to="/">Projects</Link>
            </div>
            
            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-primary-fixed-dim font-medium hover:text-secondary-fixed font-label-bold text-label-bold hover:opacity-80 transition-opacity">Login</button>
              <button className="bg-secondary-fixed text-primary px-6 py-3 rounded hover:opacity-80 transition-opacity font-label-bold text-label-bold active:scale-95 duration-150">Invest Now</button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-primary-fixed-dim hover:text-secondary-fixed transition-colors">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-primary w-full border-t border-white/10 px-margin-mobile py-4 space-y-4">
              <a className="block text-primary-fixed-dim hover:text-secondary-fixed font-bold font-label-bold text-label-bold" href="#">How it Works</a>
              <Link className="block text-secondary-fixed font-bold font-label-bold text-label-bold" to="/">Projects</Link>
              <hr className="border-white/10" />
              <a className="block text-primary-fixed-dim font-medium font-label-bold text-label-bold" href="#">Login</a>
              <button className="w-full mt-2 bg-secondary-fixed text-primary px-6 py-3 rounded-md font-label-bold text-label-bold hover:opacity-80 transition-opacity shadow-sm">
                Invest Now
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Main Canvas */}
      <main className="w-full pb-section-gap relative flex-grow">
        {/* Hero Section */}
        <section className="w-full relative h-[614px] min-h-[500px] flex items-end pb-8">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden bg-primary">
            <img 
              alt="Purva Whitehall Property Exterior" 
              className="w-full h-full object-cover opacity-70" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuNI3iDobDbgMWtDpEGE56blD-wCHpcFOB4vD-419xWlmtvzzz9P1mMaEItWpXn6gS5Ztshsa6egl1Ad4sgj9ynK6pS5gkbmpVV3ZEJdI20EFmHxiYAg2rTyHhoAw0myqnkxDgP_UPM0PkML-WPPoO1I9aS_pvVbcJyR-vvkZ0hp1SDYp0MkWagBL_tT8hx1pvg2JDa6q5dn2TYA5C89HKayU1qlKChE6uoK51Q-UZyESW6kSmnCwqumntfRUe3lJF63e4l-a688zg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="text-on-primary">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-sm font-label-bold text-label-bold uppercase tracking-wider text-xs sm:text-sm">Under Construction</span>
                <span className="bg-surface/20 backdrop-blur-sm text-on-primary border border-on-primary/30 px-3 py-1 rounded-sm font-label-bold text-label-bold uppercase tracking-wider flex items-center gap-1 text-xs sm:text-sm">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  Sarjapur Road, Bangalore
                </span>
              </div>
              <h1 className="font-display-lg text-[40px] md:text-[64px] mb-2 leading-tight drop-shadow-md">Purva Whitehall</h1>
              <p className="font-body-lg text-body-lg text-primary-fixed max-w-2xl">
                A premium residential enclave offering strategic early-stage entry into Bangalore's fastest-growing tech corridor. Managed via a regulated SEBI-compliant SPV framework.
              </p>
            </div>
            
            {/* Hero KPI Bento */}
            <div className="glass-panel p-6 rounded-lg flex gap-8 shrink-0">
              <div>
                <p className="font-label-bold text-label-bold text-primary-container/70 mb-1 uppercase tracking-wider text-xs sm:text-sm">Target IRR</p>
                <p className="font-headline-lg text-[28px] md:text-headline-lg text-primary">18.5%</p>
              </div>
              <div className="w-px bg-primary/10"></div>
              <div>
                <p className="font-label-bold text-label-bold text-primary-container/70 mb-1 uppercase tracking-wider text-xs sm:text-sm">Holding Period</p>
                <p className="font-headline-lg text-[28px] md:text-headline-lg text-primary">36 Months</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Grid Layout */}
        <div className="w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-gutter grid grid-cols-1 lg:grid-cols-12 gap-gutter relative">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 flex flex-col gap-gutter">
            
            {/* Investment Math Bento Section */}
            <section className="bg-surface-container-lowest rounded-xl p-6 sm:p-8 bento-card shadow-[0_4px_20px_rgba(0,15,34,0.04)] hover:shadow-[0_8px_30px_rgba(0,15,34,0.08)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-6 sm:mb-8 border-b border-outline-variant/30 pb-4">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">monitoring</span>
                </div>
                <h2 className="font-headline-md text-[20px] sm:text-headline-md text-primary">Investment Math</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Capital Stack */}
                <div className="space-y-6">
                  <h3 className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider mb-4">Capital Stack Breakdown</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-end border-b border-outline-variant/20 pb-2">
                      <span className="font-body-md text-body-md text-on-surface-variant">SPV Valuation (Entry)</span>
                      <span className="font-data-tabular text-data-tabular text-primary text-lg">₹45.00 Cr</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-outline-variant/20 pb-2">
                      <span className="font-body-md text-body-md text-on-surface-variant">Total Shares Issued</span>
                      <span className="font-data-tabular text-data-tabular text-primary text-lg">4,50,000</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-outline-variant/20 pb-2 bg-surface-container/30 p-2 rounded">
                      <span className="font-label-bold text-label-bold text-primary">Current Share Price</span>
                      <span className="font-data-tabular text-data-tabular text-primary font-bold text-xl">₹1,000.00</span>
                    </div>
                  </div>
                </div>
                
                {/* Projections */}
                <div className="bg-surface p-6 rounded-lg border border-outline-variant/30">
                  <h3 className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider mb-4">Projected Returns</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-green-700">trending_up</span>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="font-body-md text-body-md text-on-surface-variant">Estimated Exit Valuation</span>
                          <span className="font-data-tabular text-data-tabular text-primary font-medium">₹74.85 Cr</span>
                        </div>
                        <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                          <div className="bg-primary h-full w-[65%] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-outline-variant/20">
                      <span className="material-symbols-outlined text-primary">diamond</span>
                      <div className="flex-1 flex justify-between items-center">
                        <span className="font-body-md text-body-md text-primary font-medium">Projected Exit Premium</span>
                        <span className="font-headline-md text-headline-md text-green-700">66.3%</span>
                      </div>
                    </div>
                    <p className="text-xs text-on-surface-variant font-data-tabular text-data-tabular mt-2 opacity-70">
                      *Projections are estimates and subject to market risks. See legal documents for detailed methodology.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Developer Profile Bento Section */}
            <section className="bg-surface-container-lowest rounded-xl p-6 sm:p-8 bento-card shadow-[0_4px_20px_rgba(0,15,34,0.04)] hover:shadow-[0_8px_30px_rgba(0,15,34,0.08)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-6 sm:mb-8 border-b border-outline-variant/30 pb-4">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">domain</span>
                </div>
                <h2 className="font-headline-md text-[20px] sm:text-headline-md text-primary">Developer Track Record</h2>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Developer Logo/Identity */}
                <div className="w-full md:w-1/3 flex flex-col items-center p-6 bg-surface border border-outline-variant/30 rounded-lg">
                  <div className="w-24 h-24 bg-surface-container-highest rounded-full flex items-center justify-center mb-4 grayscale hover:grayscale-0 transition-all duration-300">
                    <span className="font-headline-lg text-[32px] text-on-surface-variant">P</span>
                  </div>
                  <h3 className="font-headline-md text-[20px] sm:text-headline-md text-primary text-center mb-1">Puravankara</h3>
                  <p className="font-label-bold text-label-bold text-on-surface-variant text-center uppercase tracking-wider mb-4">Grade A Developer</p>
                  <span className="bg-primary/5 text-primary px-3 py-1 rounded-sm font-label-bold text-label-bold text-xs flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">verified</span> CRISIL DA2+ Rated
                  </span>
                </div>
                
                {/* Track Record Data */}
                <div className="w-full md:w-2/3 grid grid-cols-2 gap-4">
                  <div className="p-4 border border-outline-variant/20 rounded">
                    <p className="font-data-tabular text-data-tabular text-on-surface-variant text-xs sm:text-sm mb-1">Years Active</p>
                    <p className="font-headline-md text-[24px] sm:text-headline-md text-primary">48+</p>
                  </div>
                  <div className="p-4 border border-outline-variant/20 rounded">
                    <p className="font-data-tabular text-data-tabular text-on-surface-variant text-xs sm:text-sm mb-1">Delivered Projects</p>
                    <p className="font-headline-md text-[24px] sm:text-headline-md text-primary">80+</p>
                  </div>
                  <div className="p-4 border border-outline-variant/20 rounded">
                    <p className="font-data-tabular text-data-tabular text-on-surface-variant text-xs sm:text-sm mb-1">Area Delivered</p>
                    <p className="font-headline-md text-[24px] sm:text-headline-md text-primary">45M sq.ft</p>
                  </div>
                  <div className="p-4 border border-outline-variant/20 rounded bg-surface/50">
                    <p className="font-data-tabular text-data-tabular text-on-surface-variant text-xs sm:text-sm mb-1">Historical Delay Rate</p>
                    <p className="font-headline-md text-[24px] sm:text-headline-md text-green-700">&lt; 5%</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Documents & Compliance Bento Section */}
            <section className="bg-surface-container-lowest rounded-xl p-6 sm:p-8 bento-card shadow-[0_4px_20px_rgba(0,15,34,0.04)] hover:shadow-[0_8px_30px_rgba(0,15,34,0.08)] transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8 border-b border-outline-variant/30 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">gavel</span>
                  </div>
                  <h2 className="font-headline-md text-[20px] sm:text-headline-md text-primary">Legal &amp; SPV Documents</h2>
                </div>
                <span className="bg-blue-50 border border-blue-200 text-blue-800 px-3 py-1 rounded-sm font-label-bold text-label-bold flex items-center gap-1 text-xs">
                  <span className="material-symbols-outlined text-[14px]">shield</span> SEBI Compliant Structure
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a className="flex items-center p-4 border border-outline-variant/30 rounded-lg hover:bg-surface hover:border-primary/30 transition-colors group" href="#">
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary mr-4 text-[28px]">description</span>
                  <div className="flex-1">
                    <p className="font-body-md text-body-md text-primary font-medium">Information Memorandum</p>
                    <p className="font-data-tabular text-data-tabular text-on-surface-variant text-sm">PDF • 4.2 MB</p>
                  </div>
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-primary">download</span>
                </a>
                <a className="flex items-center p-4 border border-outline-variant/30 rounded-lg hover:bg-surface hover:border-primary/30 transition-colors group" href="#">
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary mr-4 text-[28px]">description</span>
                  <div className="flex-1">
                    <p className="font-body-md text-body-md text-primary font-medium">Title Search Report</p>
                    <p className="font-data-tabular text-data-tabular text-on-surface-variant text-sm">PDF • 1.8 MB</p>
                  </div>
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-primary">download</span>
                </a>
                <a className="flex items-center p-4 border border-outline-variant/30 rounded-lg hover:bg-surface hover:border-primary/30 transition-colors group" href="#">
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary mr-4 text-[28px]">account_balance</span>
                  <div className="flex-1">
                    <p className="font-body-md text-body-md text-primary font-medium">SPV Incorporation Cert.</p>
                    <p className="font-data-tabular text-data-tabular text-on-surface-variant text-sm">PDF • 850 KB</p>
                  </div>
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-primary">download</span>
                </a>
                <a className="flex items-center p-4 border border-outline-variant/30 rounded-lg hover:bg-surface hover:border-primary/30 transition-colors group" href="#">
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary mr-4 text-[28px]">policy</span>
                  <div className="flex-1">
                    <p className="font-body-md text-body-md text-primary font-medium">Term Sheet</p>
                    <p className="font-data-tabular text-data-tabular text-on-surface-variant text-sm">PDF • 1.1 MB</p>
                  </div>
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-primary">download</span>
                </a>
              </div>
            </section>
          </div>
          
          {/* Sticky Invest Now Sidebar */}
          <div className="lg:col-span-4 relative mt-8 lg:mt-0">
            <div className="lg:sticky lg:top-[104px] bg-surface-container-lowest rounded-xl p-6 bento-card shadow-[0_4px_20px_rgba(0,15,34,0.04)] border border-outline-variant/20 flex flex-col gap-6">
              <div className="text-center pb-6 border-b border-outline-variant/30">
                <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider mb-2 text-xs sm:text-sm">Minimum Investment</p>
                <p className="font-display-lg text-[32px] sm:text-[40px] text-primary leading-none">₹10 Lakhs</p>
                <p className="font-data-tabular text-data-tabular text-on-surface-variant mt-2 text-sm">1,000 Shares @ ₹1,000/share</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-body-md text-body-md text-on-surface-variant">Funding Progress</span>
                  <span className="font-label-bold text-label-bold text-primary">72% Funded</span>
                </div>
                <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full w-[72%] rounded-full"></div>
                </div>
                <p className="font-data-tabular text-data-tabular text-on-surface-variant text-right text-xs">₹32.4 Cr raised of ₹45.0 Cr</p>
              </div>
              
              <div className="bg-surface p-4 rounded-lg border border-outline-variant/30 mt-2">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary-fixed-dim mt-0.5">timer</span>
                  <div>
                    <p className="font-label-bold text-label-bold text-primary mb-1">Closing Soon</p>
                    <p className="font-data-tabular text-data-tabular text-on-surface-variant text-sm">Allocation closes in 14 days or when fully subscribed.</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-secondary-fixed text-primary py-4 rounded font-label-bold text-label-bold uppercase tracking-wider hover:opacity-90 transition-opacity active:scale-[0.98] mt-4 shadow-sm flex items-center justify-center gap-2">
                <span>Invest Now</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
              
              <div className="text-center">
                <a className="font-label-bold text-label-bold text-primary-container/70 hover:text-primary transition-colors underline decoration-1 underline-offset-4" href="#">Speak to an Advisor</a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-highest dark:bg-inverse-surface text-on-surface dark:text-inverse-on-surface mt-auto border-t border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-12 lg:py-section-gap max-w-container-max mx-auto">
          <div className="md:col-span-1 flex flex-col gap-4">
            <span className="text-headline-md font-headline-md font-bold text-primary">Propwhale</span>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-2 max-w-[250px]">
              Institutional-grade fractional real estate investments curated for visionary investors.
            </p>
          </div>
          <div className="md:col-span-3 flex flex-wrap gap-x-12 gap-y-6 md:justify-end mt-8 md:mt-0">
            <a className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">About</a>
            <a className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Team</a>
            <a className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Blog</a>
            <a className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Legal</a>
            <a className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Privacy Policy</a>
          </div>
          <div className="col-span-1 md:col-span-4 mt-8 pt-8 border-t border-outline-variant/30">
            <p className="font-body-md text-body-md text-on-surface-variant text-xs text-center md:text-left">
              © 2024 Propwhale. Fractional real estate investments are subject to market risks. All SPVs are managed under SEBI-compliant frameworks.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
