import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, TrendingUp, Building2, Globe } from 'lucide-react';

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md text-body-md antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* TopNavBar */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Header Content */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-display-lg text-[40px] md:text-display-lg text-primary tracking-tight">
              Redefining Ownership.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              We operate at the intersection of institutional real estate and sovereign technology. Propwhale provides a decentralized framework engineered for securing prime commercial real estate fractions with unmatched compliance and transparency.
            </p>
          </div>
        </section>

        {/* Hero image showcase */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
          <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,15,34,0.04)]">
            <img 
              alt="Corporate institutional buildings" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRLBoDq3wRY5Erc_nmmGwbG5tJW1ldBy037qq_4KvYk7PlnuY0Z6CeKDPit68eUEr3gXmhWMVIlvNnDy3KI256cjN5lYna1OfG9UDjUHvMsqsokyJaLGaN-JZpczwzQ9B7I8apMeRGsWdljj-iJP2ZNvsw0oGpfrEE4f1iEkJAmjWDtg83YJyskxPimVekt1f-7N2R1gHGVmeXd1T8PHkj6yr7UjjRqPIdavCzi40bkxSay6jiNomsFedm01fDLxPvga_c91VJtNE9" 
            />
          </div>
        </section>

        {/* Vision & Mission (Bento Grid) */}
        <section className="bg-surface-container-low border-y border-surface-variant py-section-gap">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Mission Card */}
              <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_4px_20px_rgba(0,15,34,0.04)] border border-surface-variant">
                <ShieldCheck size={32} className="text-secondary mb-6" />
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Our Mission</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  To democratize access to core commercial real estate markets by breaking down high-barrier investments into manageable, high-yield fractions. We strive to provide transparent, regular income streams and long-term capital appreciation for a new generation of smart investors.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_4px_20px_rgba(0,15,34,0.04)] border border-surface-variant">
                <Globe size={32} className="text-secondary mb-6" />
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Our Vision</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We envision a financial future where premium real estate is untethered from archaic barriers. A global ecosystem where institutional-grade assets are seamlessly traded and managed with technological superiority, delivering a gold standard of liquidity and trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-[32px] md:text-headline-lg text-primary">Core Principles</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-4 mx-auto max-w-lg">
              The foundational pillars structuring our operational framework and guiding asset acquisition workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="flex flex-col items-start p-6">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container mb-4">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-headline-md text-xl text-primary mb-2">Absolute Transparency</h4>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                We believe in total operational clarity. From rigorous diligence reports to continuous financial performance metrics, you have complete visibility over your fractional holdings.
              </p>
            </div>

            <div className="flex flex-col items-start p-6">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container mb-4">
                <TrendingUp size={24} />
              </div>
              <h4 className="font-headline-md text-xl text-primary mb-2">Calculated Confidence</h4>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                Powered by proprietary analytics and seasoned expertise, our asset evaluation methodologies eliminate guesswork, focusing entirely on sustainable yields and structural appreciation.
              </p>
            </div>

            <div className="flex flex-col items-start p-6">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container mb-4">
                <Building2 size={24} />
              </div>
              <h4 className="font-headline-md text-xl text-primary mb-2">Institutional Quality</h4>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                We bridge the gap by curating portfolios typically reserved for Tier-1 wealth funds, utilizing SEBI-compliant structures and ensuring enterprise-grade management protocols.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-on-primary py-section-gap">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
            <h2 className="font-headline-lg text-[32px] md:text-headline-lg mb-4">Build Your Legacy.</h2>
            <p className="font-body-md text-body-md text-primary-fixed-dim max-w-xl mx-auto mb-8">
              Join thousands of pragmatic investors actively scaling their wealth with institutional precision through Propwhale.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/" className="inline-flex items-center justify-center bg-secondary-fixed text-primary px-8 py-3 rounded font-label-bold text-label-bold hover:opacity-90 transition-opacity w-full sm:w-auto shadow-sm active:scale-95 duration-150">
                Explore Investments <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/team" className="inline-flex items-center justify-center bg-transparent border border-outline-variant text-on-primary px-8 py-3 rounded font-label-bold text-label-bold hover:bg-white/5 transition-colors w-full sm:w-auto">
                Meet the Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
