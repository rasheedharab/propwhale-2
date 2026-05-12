import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Star, MapPin } from 'lucide-react';

export default function Blog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md text-body-md antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* TopNavBar */}
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-section-gap pb-12">
          <h1 className="font-display-lg text-[40px] md:text-display-lg text-primary">The Real Estate Ledger</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-2xl">Insights, analysis, and market trends for the modern fractional investor. Navigate the complexities of premium real estate with calculated confidence.</p>
        </section>

        {/* Featured Article (Bento Style) */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
          <article className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,15,34,0.04)] hover:shadow-[0_8px_30px_rgba(0,15,34,0.08)] transition-shadow duration-300 overflow-hidden group border border-surface-variant">
            <Link to="/blog/detail" className="grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="aspect-video md:aspect-auto overflow-hidden relative min-h-[300px]">
                <img alt="Featured Article" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFEAF9hVxT__gHK4qA-RNoz9zQzRjGQC6ko89FlB-mcKnhFQxdQhaEpGcD9Txj2rn6D_Rdln8x_Hvcwj88OwIzZvpAovliupNxfrXWuNHL2Q8usLUrvesU4DOmDRiriU2Ws5zbWKACYVyrlCt-gtXNCpJEEmMUd6LfLAzWatJimslZq8cGIeUXZlqyXJUFkPpSTFASCzgXtj0EtwbZSTBcPRm38n4Twre7ahCVvP-BxQbkxA-zJ2czm0FNaiUfXjIEq626D_dVp1Dw" />
                <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded border border-outline-variant flex items-center gap-2 shadow-sm">
                  <Star className="text-secondary" size={16} />
                  <span className="font-label-bold text-[12px] sm:text-label-bold text-on-surface uppercase">Featured Report</span>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4 text-on-surface-variant font-data-tabular text-data-tabular text-sm">
                  <span>Market Analysis</span>
                  <span>•</span>
                  <span>8 min read</span>
                </div>
                <h2 className="font-headline-lg text-[24px] lg:text-[32px] text-primary mb-4 group-hover:text-secondary transition-colors">The Q3 Bangalore Commercial Yield Report: Navigating Grade-A Assets</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 line-clamp-3">An in-depth analysis of tightening cap rates in Whitefield and Outer Ring Road. Discover why institutional capital is doubling down on sustainable tech parks and what it means for fractional yields.</p>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 font-label-bold text-label-bold text-primary group-hover:text-secondary-fixed-dim transition-colors">
                    Read Full Analysis
                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </article>
        </section>

        {/* Latest Articles Grid (Bento Style) */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
          <h3 className="font-headline-lg text-[24px] md:text-headline-lg text-primary mb-gutter">Latest Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Article 1 */}
            <article className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,15,34,0.04)] hover:shadow-[0_8px_30px_rgba(0,15,34,0.08)] transition-shadow duration-300 overflow-hidden group border border-surface-variant flex flex-col">
              <Link to="/blog/detail" className="flex flex-col flex-grow">
                <div className="aspect-video overflow-hidden">
                  <img alt="Fractional Ownership" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBynjhnzncfHeRsIrm8ZCylBdhLR5SLVZRbIIFWemDkbiI2LZ-1RvtmyUHPsJ_wrHjYPykmbgVdNIDLJZswswZYiOuMTQTFFppbu7Wua3gcpd9EqlQmSj3WK2HPSA3qnfToZhbrw6yv-gtFTDXAm_C3RgVPyg2lzdZo-CKkMCKtttMls6lME6yZDstPhW5LCXB9ZM1fRYnKsZCA96TAAr5mjVooeIecNq_c0erUlLoXk2_2Xok7O_reN93LmmNdSSJIdmAiPmjL_2pX" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3 text-on-surface-variant font-data-tabular text-data-tabular">
                    <span className="bg-surface-container-high px-2 py-1 rounded text-xs uppercase tracking-wider text-on-surface">Education</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-primary mb-3 group-hover:text-secondary transition-colors">Demystifying the SPV Structure in Fractional Real Estate</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">Understanding the legal frameworks that protect your capital. A breakdown of Special Purpose Vehicles for retail investors.</p>
                  <div className="mt-auto pt-4 border-t border-surface-variant flex justify-between items-center">
                    <span className="font-data-tabular text-data-tabular text-on-surface-variant">Oct 12, 2023</span>
                    <ArrowRight size={20} className="text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </article>

            {/* Article 2 */}
            <article className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,15,34,0.04)] hover:shadow-[0_8px_30px_rgba(0,15,34,0.08)] transition-shadow duration-300 overflow-hidden group border border-surface-variant flex flex-col">
               <Link to="/blog/detail" className="flex flex-col flex-grow">
                <div className="aspect-video overflow-hidden relative">
                  <img alt="Bangalore Market" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpyGi07EjB31C1p5NxGPguj88Bs1Q7ZYusiQtqfRz2f8Rk1yQhgrIKEkAfJwwxwnv9Lo76Ha4rl2vt4nUcN8kM8rvry4bbFPr1s6WHb4SyTiCFD3k0ITHoyP5NCD2VKnpDJyimGr7IVVvzTHFbwtwAxOAmUY-D76lP7eHidBEKcCIk7KrHc0Tkl1thoLtXliTR1SIBTH6Ssp8e5w059L10roooSttOE9jwB2FILE6V2noHyVfABtW7G2m1FN2G_Ou9614JC2bb5tUq" />
                  <div className="absolute bottom-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1 border border-outline-variant shadow-sm text-primary">
                    <MapPin size={14} />
                    <span className="font-data-tabular text-[12px] text-on-surface font-semibold">Indiranagar</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3 text-on-surface-variant font-data-tabular text-data-tabular">
                    <span className="bg-surface-container-high px-2 py-1 rounded text-xs uppercase tracking-wider text-on-surface">Location Spotlight</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-primary mb-3 group-hover:text-secondary transition-colors">Micro-Market Watch: The Rise of Boutique Retail in Indiranagar</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">Why high-street retail assets in prime Bangalore neighborhoods are generating unprecedented tenant demand and premium rents.</p>
                  <div className="mt-auto pt-4 border-t border-surface-variant flex justify-between items-center">
                    <span className="font-data-tabular text-data-tabular text-on-surface-variant">Oct 08, 2023</span>
                    <ArrowRight size={20} className="text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </article>

            {/* Article 3 */}
            <article className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,15,34,0.04)] hover:shadow-[0_8px_30px_rgba(0,15,34,0.08)] transition-shadow duration-300 overflow-hidden group border border-surface-variant flex flex-col">
              <Link to="/blog/detail" className="flex flex-col flex-grow">
                <div className="aspect-video overflow-hidden">
                  <img alt="Investment Strategies" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy153rlVuRykTqBO3ZFznrlXo0UlS_lLuVzPJcD0AfnoAEnGI5G6L64TCicpktO1CHLVYVmzqWp8Pm50rXNK4lehDveM2ENjxLABGPpc1Y8qDTs8SFu3tgPXMbI67Cq9z_bdeQwtGp0OaP_E0hh5gJOh4QuN22t7pOS6mhMhGRi04hJuaIuVhhXQNEYPTgvEr0RDV1TxkW-sU_9HGsDg9VESrydLdTtgiEhi0Jpk-C2GPuWBODqdhOmM02x-X7G34ohnGJkSBkK46K" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3 text-on-surface-variant font-data-tabular text-data-tabular">
                    <span className="bg-surface-container-high px-2 py-1 rounded text-xs uppercase tracking-wider text-on-surface">Strategy</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-primary mb-3 group-hover:text-secondary transition-colors">Diversification Metrics: Balancing Yield vs. Capital Appreciation</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">A quantitative approach to structuring your fractional portfolio. How to balance high-yield logistics hubs with stable office assets.</p>
                  <div className="mt-auto pt-4 border-t border-surface-variant flex justify-between items-center">
                    <span className="font-data-tabular text-data-tabular text-on-surface-variant">Oct 01, 2023</span>
                    <ArrowRight size={20} className="text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </article>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
          <div className="bg-surface-container-low rounded-xl p-8 md:p-12 border border-outline-variant shadow-[0_4px_20px_rgba(0,15,34,0.04)] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="font-headline-lg text-[24px] md:text-headline-lg text-primary mb-2">Institutional Insights, Delivered.</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Join 10,000+ investors receiving our exclusive market reports, cap rate analysis, and early access to prime fractional opportunities.</p>
            </div>
            <div className="w-full md:w-auto flex-grow max-w-md">
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input className="w-full bg-transparent border-0 border-b border-outline-variant text-on-surface font-body-md focus:ring-0 focus:border-primary focus:border-b-2 px-0 py-2 placeholder:text-on-surface-variant/60 transition-all rounded-none outline-none" placeholder="Your executive email address" type="email" />
                <button className="whitespace-nowrap bg-primary text-on-primary hover:opacity-80 transition-opacity px-6 py-2 rounded font-label-bold text-label-bold shadow-sm" type="button">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
