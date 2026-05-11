/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Wallet, Users, TrendingUp, Search, Coins, LineChart, PieChart, ArrowRight,
  Building2, Mountain, Hammer, Building, HardHat, ShieldCheck, Gavel, Landmark,
  BadgeCheck, ArrowLeft, Zap, MapPin, DraftingCompass, Hash, Mail, ChevronRight,
  Share2, Globe, Podcast, Menu, X
} from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden min-h-screen flex flex-col">
      {/* TopNavBar */}
      <nav className="bg-primary text-primary-fixed docked full-width top-0 sticky bg-primary/95 backdrop-blur-md shadow-sm z-50">
        <div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-20">
          {/* Brand */}
          <div className="flex items-center">
            <span className="text-headline-md font-headline-md font-bold text-secondary-fixed">Propwhale</span>
          </div>
          {/* Navigation Links (Web) */}
          <div className="hidden md:flex space-x-8">
            <a className="text-secondary-fixed font-bold border-b-2 border-secondary-fixed pb-1 hover:opacity-80 transition-opacity active:scale-95 duration-150 font-label-bold text-label-bold" href="#">How it Works</a>
            <a className="text-primary-fixed-dim font-medium hover:text-secondary-fixed hover:opacity-80 transition-opacity font-label-bold text-label-bold" href="#">Projects</a>
          </div>
          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a className="text-primary-fixed-dim font-medium hover:text-secondary-fixed hover:opacity-80 transition-opacity font-label-bold text-label-bold" href="#">Login</a>
            <button className="bg-secondary-fixed text-on-secondary-fixed px-6 py-2 rounded-full font-label-bold text-label-bold hover:opacity-80 transition-opacity active:scale-95 duration-150 shadow-sm">
              Invest Now
            </button>
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
            <a className="block text-secondary-fixed font-bold font-label-bold text-label-bold" href="#">How it Works</a>
            <a className="block text-primary-fixed-dim font-medium font-label-bold text-label-bold" href="#">Projects</a>
            <hr className="border-white/10" />
            <a className="block text-primary-fixed-dim font-medium font-label-bold text-label-bold" href="#">Login</a>
            <button className="w-full mt-2 bg-secondary-fixed text-on-secondary-fixed px-6 py-3 rounded-md font-label-bold text-label-bold hover:opacity-80 transition-opacity shadow-sm">
              Invest Now
            </button>
          </div>
        )}
      </nav>

      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-[600px] lg:min-h-[819px] flex items-center bg-sunset-gradient overflow-hidden px-margin-desktop py-20 lg:py-section-gap">
          <div className="absolute inset-0 bg-black/10 z-0"></div>
          <div className="max-w-container-max mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div className="space-y-6 lg:space-y-8 glass-panel p-6 lg:p-10 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
              <h1 className="font-display-lg text-display-lg text-primary drop-shadow-md">
                Building the Future.<br />Inclusive Growth.
              </h1>
              <p className="font-body-lg text-body-lg text-primary-container max-w-md font-medium">
                Invest in sun-drenched, sustainable architecture. Propwhale democratizes access to visionary real estate through fractional ownership. Join the solar-tech optimist movement.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-bold text-label-bold hover:opacity-90 transition-opacity shadow-md">
                  Explore Projects
                </button>
                <button className="bg-transparent border-2 border-primary text-primary px-8 py-3 rounded-full font-label-bold text-label-bold hover:bg-primary/10 transition-colors">
                  Learn the Framework
                </button>
              </div>
            </div>
            <div className="hidden lg:block relative h-[600px] w-full rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <img alt="Modern sustainable architecture" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPzLTYMF4kFHsXEiIYKggowQ2gwAG-4tnkJFVpEzNpRAEZWD2aQHBDDPcN_xiF7VX-VnMKJM3Jq8j_uLSFCjyzsa6wHTN7nQu9P_kA7DNpG-QGgW3luRWP2ok61scNwJkGRHsTKzy4fz8CxXXrkwdMk5KLRKy0Qdj9WfevLiULfUu5CuUbmlQpu74YN3pjyh_s4xzGU_WFb9vcuAB1sWGNCRnk_4QMNVCzKC-VEzziySrW_lk8GbfBZJ-cuPvFiqGo64XMFs7qMSP6" />
            </div>
          </div>
        </section>

        {/* Key Performance Metrics Section */}
        <section className="py-12 bg-surface -mt-20 relative z-20">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-sunset mb-2 flex justify-center"><Wallet size={40} /></div>
                <h3 className="font-display-lg text-display-md text-primary mb-1">₹500Cr+</h3>
                <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Total AUM</p>
              </div>
              <div className="glass-card p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-sunset mb-2 flex justify-center"><Users size={40} /></div>
                <h3 className="font-display-lg text-display-md text-primary mb-1">10,000+</h3>
                <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Happy Investors</p>
              </div>
              <div className="glass-card p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-sunset mb-2 flex justify-center"><TrendingUp size={40} /></div>
                <h3 className="font-display-lg text-display-md text-primary mb-1">14.5%</h3>
                <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Avg. Target IRR</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-section-gap bg-surface">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">How Fractional Ownership Works</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">A transparent, seamless path to investing in high-yield, sustainable real estate.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-1 bg-surface-variant -translate-y-1/2 z-0"></div>
              <div className="hidden md:block absolute top-12 left-1/6 h-1 bg-sunset-gradient -translate-y-1/2 z-0 w-1/3"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-surface-container-lowest shadow-lg border-4 border-surface-variant flex items-center justify-center mb-6 overflow-hidden">
                  <div className="w-full h-full bg-primary flex items-center justify-center">
                    <Search size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">1. Discover</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Browse our curated portfolio of pre-vetted, sustainable commercial and residential properties.</p>
              </div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-surface-container-lowest shadow-lg border-4 border-secondary-fixed flex items-center justify-center mb-6 overflow-hidden">
                  <div className="w-full h-full bg-sunset-gradient flex items-center justify-center">
                    <Coins size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">2. Invest</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Purchase fractional shares securely through our SEBI-compliant Special Purpose Vehicles (SPVs).</p>
              </div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-surface-container-lowest shadow-lg border-4 border-surface-variant flex items-center justify-center mb-6 overflow-hidden">
                  <div className="w-full h-full bg-surface-container flex items-center justify-center">
                    <LineChart size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">3. Earn</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Receive regular rental yields and benefit from long-term capital appreciation on your investment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Pathways Section */}
        <section className="py-section-gap bg-surface relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-sunset-gradient opacity-[0.07] blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 -right-20 w-[400px] h-[400px] bg-primary opacity-[0.05] blur-[80px] rounded-full"></div>
          <div className="max-w-container-max mx-auto px-margin-desktop relative z-10">
            <div className="max-w-3xl mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Investment Pathways</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Choose the investment strategy that aligns with your financial goals, from fractional entry to full asset control.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Pathway 1: Fractional Equity Share */}
              <div className="glass-card p-6 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/40 w-full h-full relative z-20 hover:-translate-y-2 transition-transform duration-500 group">
                <div className="flex flex-col xl:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-sunset-gradient flex items-center justify-center text-white shadow-lg shadow-sunset-gradient/20">
                      <PieChart size={32} />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="font-headline-md text-headline-md text-primary">Fractional Equity Share</h3>
                      <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[12px] font-label-bold uppercase tracking-widest shadow-sm">Popular Choice</span>
                    </div>
                    <div className="mb-6">
                      <p className="text-on-surface-variant font-label-bold text-label-bold uppercase text-[12px] mb-1">Starting From</p>
                      <p className="text-primary font-display-lg text-headline-lg">₹10 Lakhs <span className="text-body-md font-normal text-on-surface-variant">Entry</span></p>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                      Access premium real estate with lower capital requirements. Purchase an equity share in high-yield, sustainable projects and earn proportional rental income and capital appreciation.
                    </p>
                    <button className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-3 rounded-full font-label-bold text-label-bold hover:bg-primary/90 transition-all group-hover:pr-10 mt-auto">
                      Explore Fractional
                      <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Pathway 2: Outright Property Purchase */}
              <div className="glass-card p-6 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/40 w-full h-full relative z-10 hover:-translate-y-2 transition-transform duration-500 group overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full -mr-10 -mt-10"></div>
                <div className="flex flex-col xl:flex-row gap-8 h-full">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-on-primary shadow-lg">
                      <Building size={32} />
                    </div>
                  </div>
                  <div className="flex-grow flex flex-col">
                    <h3 className="font-headline-md text-headline-md text-primary mb-4">Outright Property Purchase</h3>
                    <div className="mb-6">
                      <span className="inline-block border border-outline px-3 py-1 rounded-full text-[12px] font-label-bold text-primary mb-2">FULL ASSET CONTROL</span>
                      <p className="text-primary font-display-lg text-headline-lg">Portfolio Grade</p>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                      For institutional and HNI investors seeking dedicated assets. Acquire entire sustainable properties outright for maximum diversification.
                    </p>
                    <button className="inline-flex items-center gap-2 text-primary border border-primary px-8 py-3 rounded-full font-label-bold text-label-bold hover:bg-primary hover:text-on-primary transition-all mt-auto w-fit">
                      View Properties
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Deal Types Section */}
        <section className="py-section-gap bg-surface-container-lowest border-t border-surface-variant">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Investment Deal Types</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Diverse asset structures curated to balance risk and reward effectively.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Deal Type 1 */}
              <div className="p-8 rounded-2xl bg-surface transition-shadow hover:shadow-md border border-transparent hover:border-surface-variant">
                <div className="w-12 h-12 bg-primary-fixed/30 rounded-xl flex items-center justify-center mb-6">
                  <Mountain size={24} className="text-primary" />
                </div>
                <h3 className="font-headline-md text-[20px] text-primary mb-3">Land-Only Opportunities</h3>
                <p className="font-body-md text-[14px] text-on-surface-variant">
                  Invest in strategic, high-growth land parcels. Focus on long-term capital appreciation driven by infrastructural development and zoning updates.
                </p>
              </div>

              {/* Deal Type 2 */}
              <div className="p-8 rounded-2xl bg-surface transition-shadow hover:shadow-md border border-transparent hover:border-surface-variant">
                <div className="w-12 h-12 bg-secondary-fixed/30 rounded-xl flex items-center justify-center mb-6">
                  <Hammer size={24} className="text-secondary" />
                </div>
                <h3 className="font-headline-md text-[20px] text-primary mb-3">Land + Development & Sale</h3>
                <p className="font-body-md text-[14px] text-on-surface-variant">
                  Participate in the full development lifecycle. Invest in land acquisition, fund sustainable construction, and capture significant margins upon project sale.
                </p>
              </div>

              {/* Deal Type 3 */}
              <div className="p-8 rounded-2xl bg-surface transition-shadow hover:shadow-md border border-transparent hover:border-surface-variant relative overflow-hidden">
                <div className="absolute right-0 bottom-0 w-24 h-24 bg-sunset-gradient opacity-10 rounded-tl-full blur-xl"></div>
                <div className="w-12 h-12 bg-sunset-gradient rounded-xl flex items-center justify-center mb-6 text-white shadow-sm">
                  <Building2 size={24} />
                </div>
                <h3 className="font-headline-md text-[20px] text-primary mb-3">Grade-A Developer Assets</h3>
                <p className="font-body-md text-[14px] text-on-surface-variant mb-4">
                  Secure yields through completed, pre-leased properties built by India's top-tier developers.
                </p>
                <div className="pt-4 border-t border-outline-variant/30">
                  <p className="font-label-bold text-[12px] text-on-surface-variant mb-2">PARTNER DEVELOPERS</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-surface-container-high px-2 py-1 rounded text-[12px] font-medium text-primary">Prestige</span>
                    <span className="bg-surface-container-high px-2 py-1 rounded text-[12px] font-medium text-primary">Brigade</span>
                    <span className="bg-surface-container-high px-2 py-1 rounded text-[12px] font-medium text-primary">Puravankara</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Foundation of Trust Section */}
        <section className="py-section-gap bg-surface relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary-fixed/5 via-transparent to-primary/5 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display-lg font-bold text-primary/[0.02] uppercase tracking-[0.2em] select-none pointer-events-none whitespace-nowrap">Propwhale</div>
          <div className="max-w-container-max mx-auto px-margin-desktop relative z-10">
            <div className="text-center mb-20">
              <h2 className="font-headline-lg text-display-lg text-primary mb-4">The Foundation of Trust</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto italic">Built on decades of expertise, rigorous compliance, and a commitment to ethical growth.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8 items-start">
              {/* Card 1: Expertise */}
              <div className="md:col-span-3 lg:col-span-4 glass-card p-6 lg:p-10 rounded-3xl shadow-xl border border-white/40 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-sunset-gradient opacity-10 blur-3xl"></div>
                <div className="text-sunset font-display-lg text-display-lg mb-4">30+</div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Years of Real Estate Expertise</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">Decades of navigating the Indian property market with precision and foresight.</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-sunset-gradient flex items-center justify-center text-white">
                    <Building size={24} />
                  </div>
                </div>
              </div>

              {/* Card 2: Construction */}
              <div className="md:col-span-3 lg:col-span-4 glass-card p-6 lg:p-10 rounded-3xl shadow-xl border border-white/40 hover:-translate-y-2 transition-all duration-500 group overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 text-primary">
                  <HardHat size={32} />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">In-House Construction Mastery</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">A dedicated team of civil engineers, mechanical engineers, and architects ensuring structural integrity.</p>
              </div>

              {/* Card 3: Track Record */}
              <div className="md:col-span-3 lg:col-span-4 glass-card p-6 lg:p-10 rounded-3xl shadow-xl border border-white/40 hover:-translate-y-2 transition-all duration-500 group overflow-hidden">
                <div className="text-sunset font-display-lg text-display-lg mb-4">50+</div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Proven Track Record</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">Projects successfully delivered to date, building a lasting legacy of reliability and performance.</p>
                <div className="mt-8 flex items-center">
                  <ShieldCheck size={40} className="text-sunset opacity-30" />
                </div>
              </div>

              {/* Card 4: Legal */}
              <div className="md:col-span-3 lg:col-span-4 glass-card p-6 lg:p-10 rounded-3xl shadow-xl border border-white/40 hover:-translate-y-2 transition-all duration-500 group overflow-hidden">
                <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center mb-6 shadow-lg">
                  <Gavel size={32} />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Specialized Legal & Tax Teams</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">Expert oversight for seamless compliance, auditing, and comprehensive asset protection.</p>
              </div>

              {/* Card 5: Fund Management */}
              <div className="md:col-span-3 lg:col-span-4 glass-card p-6 lg:p-10 rounded-3xl shadow-2xl border-2 border-secondary-fixed hover:-translate-y-2 transition-all duration-500 group bg-surface-container-lowest/90">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-secondary-fixed/30 flex items-center justify-center text-secondary">
                    <Landmark size={32} />
                  </div>
                  <span className="text-[10px] font-label-bold bg-secondary-fixed px-3 py-1 rounded-full uppercase tracking-widest text-on-secondary-fixed">Institutional Grade</span>
                </div>
                <div className="text-primary font-display-lg text-display-md mb-2 font-bold">₹300Cr+</div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Institutional Fund Management</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">Experts with a 12-year history of securely managing community funds with absolute transparency.</p>
              </div>

              {/* Card 6: Shariah */}
              <div className="md:col-span-3 lg:col-span-4 glass-card p-6 lg:p-10 rounded-3xl shadow-2xl border-2 border-secondary-fixed hover:-translate-y-2 transition-all duration-500 group bg-surface-container-lowest/90 relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-secondary-fixed/10 rounded-full blur-2xl"></div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-sunset-gradient flex items-center justify-center text-white shadow-lg">
                    <BadgeCheck size={32} />
                  </div>
                  <div className="text-primary font-display-lg text-headline-lg font-bold">100%</div>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Shariah Compliant</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">Ensuring highly ethical, transparent, and inclusive investment structures for all global investors.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Visionary Projects Section */}
        <section className="py-section-gap bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Visionary Projects</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Sustainable assets primed for fractional investment.</p>
              </div>
              <div className="hidden md:flex gap-2">
                <button aria-label="Previous" className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors">
                  <ArrowLeft size={24} />
                </button>
                <button aria-label="Next" className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:opacity-90 transition-opacity">
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
              {/* Project Card 1 */}
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,15,34,0.04)] border border-surface-variant group cursor-pointer hover:-translate-y-1 transition-transform duration-300 flex flex-col">
              <div className="h-48 relative overflow-hidden">
                <img alt="Solar integrated villa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiB7ch7wfEHTZ-hRq2tOWRXSiUHox9PA4bGc7NiOaI7KPC8BwQI_BOn-zEkBjc1nYwkPrfrXNY1w4sDMH8Hw8HonfCmngTGWufsrPCpWZzR-VDuW3OQMHZEqrRMpHUopyfEvR4oNDyT_NYB16LJHtEAiXFTJRWe86yRtWBlg5n1bKnpXydJCZYCsGBvAn7r4HMZvMgMgm4IepXwScBnCU_6FR2KPLFEznPh3znLvKxvXprdCDz2WH6-u2rttPOGzf1tlRuuBKgrNLF" />
                <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full font-label-bold text-label-bold text-[12px] flex items-center gap-1">
                  <Zap size={14} />
                  Net Zero
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-primary text-[20px] mb-1">Helios Heights</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant text-[14px] flex items-center gap-1">
                      <MapPin size={16} />
                      Indiranagar, Bangalore
                    </p>
                  </div>
                  <div className="bg-surface-container text-primary font-data-tabular text-data-tabular px-2 py-1 rounded">
                    12% IRR
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="font-label-bold text-label-bold text-on-surface-variant text-[12px] mb-1">Min. Investment</p>
                    <p className="font-data-tabular text-data-tabular text-primary font-semibold">₹5,00,000</p>
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-surface-variant text-[12px] mb-1">Funded</p>
                    <p className="font-data-tabular text-data-tabular text-secondary-fixed-dim font-semibold">68%</p>
                  </div>
                </div>
                <div className="w-full bg-surface-container-highest h-2 rounded-full mb-6 overflow-hidden">
                  <div className="bg-sunset-gradient h-full w-[68%]"></div>
                </div>
                <button className="mt-auto w-full bg-primary text-on-primary py-3 rounded-lg font-label-bold text-label-bold hover:bg-primary/90 transition-colors">
                  Invest Now
                </button>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,15,34,0.04)] border border-surface-variant group cursor-pointer hover:-translate-y-1 transition-transform duration-300 flex flex-col">
              <div className="h-48 relative overflow-hidden">
                <img alt="Commercial tech park" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEsPt3ffUBa1RUCIqEWQyTsi_uEWIAn4ih_OM7R6Z5-_kSvBjCTBtgnsyzRVKi9HRySp4iu_UKqDjFdQEJ3gHHW5uirERunQ-5Tc_eXSXMfuPhf6zgXXq86iIl9mvdNIP4Sr9Hq27rE-3AWVVYKfGUdHiw-1vPlPPEkzpf02ns9fLe3KOdvqrnvUO2YtnS8yYlvhs16jgezH6JXyv_YWYK5JEj3AH5h1xjEE08w6_a9ID2g3cij7oG01fSUyB_1twfPMXp5vnRW7C0" />
                <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full font-label-bold text-label-bold text-[12px] flex items-center gap-1">
                  <Building2 size={14} />
                  Commercial
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-primary text-[20px] mb-1">Aura Tech Park</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant text-[14px] flex items-center gap-1">
                      <MapPin size={16} />
                      Whitefield, Bangalore
                    </p>
                  </div>
                  <div className="bg-surface-container text-primary font-data-tabular text-data-tabular px-2 py-1 rounded">
                    14.5% IRR
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="font-label-bold text-label-bold text-on-surface-variant text-[12px] mb-1">Min. Investment</p>
                    <p className="font-data-tabular text-data-tabular text-primary font-semibold">₹10,00,000</p>
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-surface-variant text-[12px] mb-1">Funded</p>
                    <p className="font-data-tabular text-data-tabular text-secondary-fixed-dim font-semibold">85%</p>
                  </div>
                </div>
                <div className="w-full bg-surface-container-highest h-2 rounded-full mb-6 overflow-hidden">
                  <div className="bg-sunset-gradient h-full w-[85%]"></div>
                </div>
                <button className="mt-auto w-full bg-primary text-on-primary py-3 rounded-lg font-label-bold text-label-bold hover:bg-primary/90 transition-colors">
                  Invest Now
                </button>
              </div>
            </div>

            {/* Project Card 3 */}
            <Link to="/project/purva-whitehall" className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,15,34,0.04)] border border-surface-variant group cursor-pointer hover:-translate-y-1 transition-transform duration-300 flex flex-col">
              <div className="h-48 relative overflow-hidden">
                <img alt="Purva Whitehall Property Exterior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuNI3iDobDbgMWtDpEGE56blD-wCHpcFOB4vD-419xWlmtvzzz9P1mMaEItWpXn6gS5Ztshsa6egl1Ad4sgj9ynK6pS5gkbmpVV3ZEJdI20EFmHxiYAg2rTyHhoAw0myqnkxDgP_UPM0PkML-WPPoO1I9aS_pvVbcJyR-vvkZ0hp1SDYp0MkWagBL_tT8hx1pvg2JDa6q5dn2TYA5C89HKayU1qlKChE6uoK51Q-UZyESW6kSmnCwqumntfRUe3lJF63e4l-a688zg" />
                <div className="absolute top-4 left-4 bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full font-label-bold text-label-bold text-[12px] flex items-center gap-1">
                  <Building size={14} />
                  Under Construction
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-primary text-[20px] mb-1">Purva Whitehall</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant text-[14px] flex items-center gap-1">
                      <MapPin size={16} />
                      Sarjapur Road, Bangalore
                    </p>
                  </div>
                  <div className="bg-surface-container text-primary font-data-tabular text-data-tabular px-2 py-1 rounded">
                    18.5% IRR
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="font-label-bold text-label-bold text-on-surface-variant text-[12px] mb-1">Min. Investment</p>
                    <p className="font-data-tabular text-data-tabular text-primary font-semibold">₹10,00,000</p>
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-surface-variant text-[12px] mb-1">Funded</p>
                    <p className="font-data-tabular text-data-tabular text-secondary-fixed-dim font-semibold">72%</p>
                  </div>
                </div>
                <div className="w-full bg-surface-container-highest h-2 rounded-full mb-6 overflow-hidden">
                  <div className="bg-secondary-fixed h-full w-[72%]"></div>
                </div>
                <button className="mt-auto w-full bg-primary text-on-primary py-3 rounded-lg font-label-bold text-label-bold hover:bg-primary/90 transition-colors">
                  Invest Now
                </button>
              </div>
            </Link>
            </div>
          </div>
        </section>

        {/* Leadership/Expertise Section */}
        <section className="py-section-gap bg-surface">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Guided by Expertise</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Our leadership team brings decades of experience in real estate, finance, and sustainable technology.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Profile 1 */}
              <div className="text-center group">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 border-4 border-surface-variant group-hover:border-primary-fixed-dim transition-colors duration-300">
                  <img alt="Rahul Sharma" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSxMltq0mtTKo9O8rIM3q_6_7MMivOHoqd_Ud16dmX-0J8Y1uU--SrE4Tn83qL0VwINFdJ0t4bn83V_SDaYnnwZNlcvulr0QKxEgTCqIgx-iFEprphqnv9pNsuSP4R_5yVzxKnwN0SIv9RYWUe4m_mew87i1824q49SXuSF2WDbPTi8OQhsrR7bYLTYreKqzOpxmMSjmh9Cu2sqdoQB-tWIc1LLdT99nnqzgYVujYSwWECdXqDbbTrJufALmdcXz-Qe9RbRRVjXDuG" />
                </div>
                <h4 className="font-headline-md text-[20px] text-primary mb-1">Rahul Sharma</h4>
                <p className="font-label-bold text-label-bold text-sunset mb-2">Founder & CEO</p>
                <p className="font-body-md text-[14px] text-on-surface-variant">15+ years in institutional real estate investment.</p>
              </div>
              {/* Profile 2 */}
              <div className="text-center group">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 border-4 border-surface-variant group-hover:border-primary-fixed-dim transition-colors duration-300">
                  <img alt="Priya Desai" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqU9cN3JklboGxkJDG1RTU2_CHPOR7W5Y77Mo5FbqTFYUgF5cU9Y2iUJ3bbObuav3Xzxz422Ok5H1mJSU-vVAsAifYPt9Ie_WZauDxLBUFXhaaVie8LQQcgT34Wja476LmP4dx8PoqzfcX12tWrnfjRtuwqfyDBS9avnMo90CWBPniuoX7E6MmoMTOnpDC6ZqtW__zsDrSYp21hlsvr4Z2Ictxy-kcn27sRNnBwZzIvdYPRM9u3SowzVgsAbT8k7gwVc00XDRzZncz" />
                </div>
                <h4 className="font-headline-md text-[20px] text-primary mb-1">Priya Desai</h4>
                <p className="font-label-bold text-label-bold text-sunset mb-2">Chief Investment Officer</p>
                <p className="font-body-md text-[14px] text-on-surface-variant">Former MD at leading global private equity firm.</p>
              </div>
              {/* Profile 3 */}
              <div className="text-center group">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 border-4 border-surface-variant group-hover:border-primary-fixed-dim transition-colors duration-300">
                  <img alt="Vikram Singh" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK--dDAMB5eO1QuUhCIewmM9kXGuiPwFkE9n7wgIF88VeZ7q9oHr9VcwhQOdwV25B8C-jj7PxyMtOFg27COZoJswpcCYZ9hWuG_ygGxt5ucZmWEftGESQ2zI0Yt_uJ7hVAqdwiCdihUOCjquWZtxxbbQsnxvmIshyt4vpbD-MHRrCoHbOsgbZXSogwIJen5rSGoJNJXjq9DEzVrvjVCujyCEOM52quHYaLKkAJnUxvxi9YEllZOcISWaax22sfajAsPOzMtbpmGrg5" />
                </div>
                <h4 className="font-headline-md text-[20px] text-primary mb-1">Vikram Singh</h4>
                <p className="font-label-bold text-label-bold text-sunset mb-2">Head of Sustainability</p>
                <p className="font-body-md text-[14px] text-on-surface-variant">Pioneer in green building certifications in India.</p>
              </div>
              {/* Profile 4 */}
              <div className="text-center group">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 border-4 border-surface-variant group-hover:border-primary-fixed-dim transition-colors duration-300">
                  <img alt="Ananya Rao" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3R12GpbAVLDHjzeCn_HwTWVGeeU-H9ME2ZSMM-84Wmev0HHwp_B_IWO3HkapSyfO2bp9ECM-qhu5eHWhicCzAo_ZGIz_hE2h3EgzKoB_8mK4Hjwoj1t_SBLD4wVuMcJzgTxW4u83XsF66qcgjszO1JYcGLNNspyXMFtNs853GjtUhH9lqbd7VziY8Uxs_4HdjQ1SG1KVE2EujWu32Gz1WSHuSHxOymAoRcFYS0HQGnIpA6i0vJEfY9ppI73Wrpl7Y9ZzwHPJ2tXgp" />
                </div>
                <h4 className="font-headline-md text-[20px] text-primary mb-1">Ananya Rao</h4>
                <p className="font-label-bold text-label-bold text-sunset mb-2">Chief Technology Officer</p>
                <p className="font-body-md text-[14px] text-on-surface-variant">Expert in prop-tech and secure transaction ledgers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Insights & Market Analysis Section */}
        <section className="py-section-gap bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Market Insights</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">The latest on fractional ownership and sustainable real estate.</p>
              </div>
              <a className="hidden md:inline-flex items-center text-primary font-label-bold hover:underline" href="#">
                View All Articles <ArrowRight size={18} className="ml-1" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Article 1 */}
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-surface-variant group cursor-pointer hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img alt="Solar panels on commercial building" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRLBoDq3wRY5Erc_nmmGwbG5tJW1ldBy037qq_4KvYk7PlnuY0Z6CeKDPit68eUEr3gXmhWMVIlvNnDy3KI256cjN5lYna1OfG9UDjUHvMsqsokyJaLGaN-JZpczwzQ9B7I8apMeRGsWdljj-iJP2ZNvsw0oGpfrEE4f1iEkJAmjWDtg83YJyskxPimVekt1f-7N2R1gHGVmeXd1T8PHkj6yr7UjjRqPIdavCzi40bkxSay6jiNomsFedm01fDLxPvga_c91VJtNE9" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary-fixed text-on-primary-fixed px-2 py-1 rounded text-[12px] font-label-bold">Sustainability</span>
                    <span className="text-on-surface-variant text-[12px]">Oct 12, 2023</span>
                  </div>
                  <h3 className="font-headline-md text-[20px] text-primary mb-3 group-hover:text-surface-tint transition-colors">The Rise of Net-Zero Commercial Spaces in Tier 1 Cities</h3>
                  <p className="font-body-md text-[14px] text-on-surface-variant mb-4 line-clamp-2">How new regulations and corporate ESG mandates are driving premium valuations for green buildings.</p>
                  <span className="text-primary font-label-bold text-[14px] flex items-center group-hover:underline">Read Article <ChevronRight size={16} className="ml-1" /></span>
                </div>
              </div>

              {/* Article 2 */}
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-surface-variant group cursor-pointer hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img alt="Business graph" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_667oMVYDTKC1a1AZHMvEtjonknVv1o2XXs50MDrahWMjNq3VDkD5HrrqFq81s4avq5Ie7-dNN-wm3_KQ9lmygaoWj9LlIBs2ud4mSouqVq_jjPPvCgmGyawdqcltwxxndwjd2VgaA8elI2p9L2G-vl-3w3RRE_ZsKtQLLjrmmT-EdEQDy06xLrq_9EFjqW3vRaFF03a-YVHr1ztGasufK9kPU3x3i8Knbb4z9t11QfvSLVLuSb_zqOqgaI7CxMOhaBmK_HWMn19i" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded text-[12px] font-label-bold">Investing</span>
                    <span className="text-on-surface-variant text-[12px]">Oct 05, 2023</span>
                  </div>
                  <h3 className="font-headline-md text-[20px] text-primary mb-3 group-hover:text-surface-tint transition-colors">Understanding Yield Compression in Premium Real Estate</h3>
                  <p className="font-body-md text-[14px] text-on-surface-variant mb-4 line-clamp-2">A deep dive into why institutional investors are accepting lower cap rates for Grade-A sustainable assets.</p>
                  <span className="text-primary font-label-bold text-[14px] flex items-center group-hover:underline">Read Article <ChevronRight size={16} className="ml-1" /></span>
                </div>
              </div>

              {/* Article 3 */}
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-surface-variant group cursor-pointer hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden bg-surface-container-highest flex items-center justify-center">
                  <Building2 size={64} className="text-outline-variant" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-surface-container-high text-primary px-2 py-1 rounded text-[12px] font-label-bold">Market Trends</span>
                    <span className="text-on-surface-variant text-[12px]">Sep 28, 2023</span>
                  </div>
                  <h3 className="font-headline-md text-[20px] text-primary mb-3 group-hover:text-surface-tint transition-colors">Fractional Ownership: The New Asset Class for HNIs</h3>
                  <p className="font-body-md text-[14px] text-on-surface-variant mb-4 line-clamp-2">Why high-net-worth individuals are diversifying their portfolios with fractional shares of commercial real estate.</p>
                  <span className="text-primary font-label-bold text-[14px] flex items-center group-hover:underline">Read Article <ChevronRight size={16} className="ml-1" /></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low border-t border-surface-variant pt-16 pb-8">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Brand */}
            <div>
              <h3 className="font-headline-md text-headline-md font-bold text-primary mb-6">Propwhale</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Democratizing access to high-yield, sustainable real estate through solar-tech optimized fractional ownership.
              </p>
              <div className="flex gap-4">
                <a aria-label="Share" className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface hover:bg-outline-variant transition-colors" href="#">
                  <Share2 size={20} />
                </a>
                <a aria-label="Globe" className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface hover:bg-outline-variant transition-colors" href="#">
                  <Globe size={20} />
                </a>
                <a aria-label="Podcast" className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface hover:bg-outline-variant transition-colors" href="#">
                  <Podcast size={20} />
                </a>
              </div>
            </div>
            
            {/* Column 2: Platform */}
            <div>
              <h4 className="font-headline-md text-[18px] font-bold text-primary mb-6">Platform</h4>
              <ul className="space-y-4 font-body-md text-on-surface-variant">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Properties</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Learn & Insights</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Support</a></li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
              <h4 className="font-headline-md text-[18px] font-bold text-primary mb-6">Legal</h4>
              <ul className="space-y-4 font-body-md text-on-surface-variant">
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Risk Disclosure</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Investor Charter</a></li>
              </ul>
            </div>

            {/* Column 4: Stay Updated */}
            <div>
              <h4 className="font-headline-md text-[18px] font-bold text-primary mb-6">Stay Updated</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                Join our community of solar-tech optimists for exclusive insights.
              </p>
              <form className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-md focus:outline-none focus:border-primary text-on-surface"
                  required
                />
                <button type="submit" className="w-full bg-primary text-on-primary py-3 rounded-md font-label-bold hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          {/* Bottom text */}
          <div className="pt-8 flex flex-col gap-4">
            <p className="font-body-md text-[12px] text-on-surface-variant">
              SEBI Compliant: All SPVs are managed under strict regulatory frameworks for MSMEs.
            </p>
            <p className="font-body-md text-[12px] text-on-surface-variant">
              Disclaimer: Fractional real estate investment is subject to market risks. Past performance does not guarantee future results. Please read the offer documents carefully before investing. Asset values and rental yields may fluctuate based on market conditions.
            </p>
            
            <div className="flex flex-col md:flex-row justify-between items-center mt-4 pt-8 border-t border-outline-variant/30 text-[12px] text-on-surface-variant">
              <p>© 2024 Propwhale Technologies Pvt Ltd. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
                <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

