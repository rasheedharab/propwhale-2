import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Calendar, Clock, Link as LinkIcon, Mail, Bookmark, ArrowRight, MapPin } from 'lucide-react';

export default function BlogDetail() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-surface text-on-surface antialiased font-body-md min-h-screen flex flex-col selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* TopNavBar */}
      <Header />

      {/* Main Content Canvas */}
      <main className="w-full flex-grow">
        {/* Header Section */}
        <header className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-8">
          <div className="mb-6 flex items-center gap-2 text-on-surface-variant font-label-bold text-label-bold text-sm">
            <Link className="hover:text-primary transition-colors" to="/blog">Insights</Link>
            <ChevronRight size={16} />
            <span className="text-primary font-medium">Market Analysis</span>
          </div>
          <h1 className="font-display-lg text-[40px] md:text-display-lg text-primary mb-6 max-w-4xl">
            Why Bangalore remains the Tech-Hub Capital for Real Estate ROI
          </h1>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-on-surface-variant font-data-tabular text-data-tabular text-sm">
            <div className="flex items-center gap-2">
              <img alt="Arjun Menon" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAknhi_BAvVRdtSRYAEZ3UZIdKCztCNYygQSJhjx7CGst98F1wvaecmAEvgThOJABPMehVmD9FSIbgWJU7RJx1QEMTBsQRu_ei7teufZOx4M1Y55ybPk0l5iiW8mSz3Cr6mK8JOSEJKSnU0ZaDT3-uuwCZ440_TErfkrvJwpExaC1SvJTHH2ufSFu6eSIAvbISLA_iMrM6ljiA8b-5WmpGH5tTcc9DMo_d4MGgz63_jJulWR9L82tHC5iwGApqZPs8z0xUHLvIXobC8" />
              <span className="font-medium text-on-surface">Arjun Menon</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={18} />
              <span>October 24, 2024</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={18} />
              <span>6 min read</span>
            </div>
          </div>
        </header>

        {/* Hero Image Full Bleed (within container) */}
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
          <div className="w-full h-[400px] md:h-[614px] min-h-[400px] rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,15,34,0.04)]">
            <img alt="Bangalore tech park" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYmsrb7iV7m3dhr3Ko5UWFgKTGAZ7IeWyz2rrulWW4-1yEqvc_iS-qqC5Wg2aQ4z-Qz2ihtl7kwQOnBMsBZpdNx0y0Bo9mF2GKGLiYpSLmhAwgQ_QZffW6_7WrAyWczZ2Ehf5HHjjjcwT7HT5lQUisyJ1lHhHsXtpB9J-hkLykI9PGikE1n4_te8dSGxlMD0ZYoJgzOIF2ypRSzqTMfj-k0Dj3N0BwjVned1sAbCft2Oeu7s8IG05IyMg4r8RsNlXzFiE-RHJrwLPL" />
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap">
          {/* Article Body */}
          <article className="lg:col-span-8 pr-0 lg:pr-8">
            <div className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              <p className="mb-6">
                For institutional investors and retail participants exploring fractional ownership, the fundamental question often returns to geography. While emerging micro-markets present speculative opportunities, established tech hubs consistently deliver stabilized yields and capital appreciation. In this matrix, Bangalore remains anomalous in its resilience.
              </p>
              <p className="mb-6">
                The narrative of Bangalore's real estate market is intrinsically linked to its enterprise ecosystem. Unlike cyclical markets dependent on manufacturing or single-industry commodities, the city's commercial real estate is buoyed by a diversified portfolio of IT, biotech, aerospace, and increasingly, deep-tech startups. This diversification creates a formidable buffer against sector-specific downturns.
              </p>

              <h2 className="font-headline-md text-headline-md text-primary mt-12 mb-6">
                The "Whitefield-Outer Ring Road" Corridor
              </h2>
              <p className="mb-6">
                Analyzing Grade-A commercial asset performance reveals that the ORR (Outer Ring Road) and Whitefield corridors continue to command premium rentals. Supply constraints for contiguous large-format office spaces, coupled with sustained demand from Global Capability Centers (GCCs), have engineered a landlord-favorable environment.
              </p>

              {/* Bento Quote Block */}
              <div className="my-10 p-8 bg-surface-container-lowest rounded-xl border-l-4 border-secondary shadow-[0_4px_20px_rgba(0,15,34,0.04)]">
                <span className="text-secondary opacity-50 font-serif text-[60px] leading-[0.5] block mb-2">"</span>
                <p className="font-headline-md text-headline-md text-primary mb-6">
                  The predictability of rental escalations in Bangalore's prime commercial corridors provides the exact structural stability required for high-performing fractional SPVs.
                </p>
                <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider text-xs">
                  — Propwhale Investment Advisory Board
                </p>
              </div>

              <p className="mb-6">
                Furthermore, the infrastructural interventions—specifically the expansion of the Namma Metro network connecting major tech parks—are compressing commute times, thereby increasing the intrinsic value of proximate commercial and residential assets. Properties located within a 1km radius of upcoming metro stations are projected to see a 12-15% premium in valuation over the next 36 months.
              </p>

              {/* In-article Image */}
              <div className="my-10 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,15,34,0.04)] bg-surface-container-lowest p-2 border border-surface-variant">
                <img alt="Modern office interior" className="w-full h-auto rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWPijF2PTCiSv36H3K5d_E7Mfx4l6igPVVwI-z0MF6n9zADqGLXtIirhQ_z1nsXmZtJioaPeVgka-KpjRUC7A6Vjg7-1XaP7ndhhZI9nmKq6Ye-lOgnXjp_-bJsFL_n7SbMvM-0EhE485z3U5tukW8bUEpn_yGDf9QH0bVueRsrHwhaG5ASy6CeJWz7Kgezcn3Z2wiTpPJ3oV3kPXN8jXu4bTJmu5zCgx7T7KcClFKkfBd-PRO7IXhbGWywg03vdj9HP6a_KNkdx3P" />
                <p className="text-center font-data-tabular text-data-tabular text-on-surface-variant mt-3 mb-1 text-sm">
                  Grade-A office interiors in the ORR corridor command premium fractional yields.
                </p>
              </div>

              <h2 className="font-headline-md text-headline-md text-primary mt-12 mb-6">
                Structuring Your Position
              </h2>
              <p className="mb-6">
                For users utilizing the Propwhale platform, assessing assets in these regions requires a focus on tenant covenant strength. Look for SPVs holding assets leased to Fortune 500 companies with lock-in periods exceeding 5 years. This mitigates vacancy risk and ensures a steady distribution schedule.
              </p>
              <p className="mb-6">
                The math is clear: Bangalore is not just a growth story; it is an institutional preservation of wealth structured through technological dominance.
              </p>
            </div>

            {/* Tags / Trust Badges */}
            <div className="mt-10 pt-8 border-t border-surface-variant flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary-fixed text-primary font-label-bold text-label-bold bg-surface-container-lowest shadow-sm text-sm">
                <MapPin size={16} className="text-secondary" />
                Bangalore
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-surface-variant text-on-surface-variant font-label-bold text-label-bold bg-surface-container-lowest shadow-sm text-sm">
                Commercial Real Estate
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-surface-variant text-on-surface-variant font-label-bold text-label-bold bg-surface-container-lowest shadow-sm text-sm">
                Yield Analysis
              </span>
            </div>

            {/* Author Bio Box */}
            <div className="mt-12 bg-surface-container-lowest rounded-xl p-8 shadow-[0_4px_20px_rgba(0,15,34,0.04)] border border-surface-variant flex flex-col sm:flex-row gap-6 items-start">
              <img alt="Arjun Menon Profile" className="w-20 h-20 rounded-full object-cover border-2 border-surface-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBncCr7uumiaoArFoslNaUrP96zoX6dzfP5yK4L2EBjbSg2naOm1DaGfglF8jWwCCZlTZuioxZWH4XKBsDr-7IiEYDSSJTeHBljtSlDAEBLk-9O7U00PWJzJuabsaYSxhJJgsFLUswGU3hrq63MkTsna_rQAmAedhIdDWpumW6MnQC95EgHE1cC-f__4eeFwbJjIO5gUGgy0NFuRWbPMp5Ism4PunJudAIc71wa7cj79d3JEYFQDliqFtl-sXTAYCtZMc2129fP9Luo" />
              <div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2 text-xl">Arjun Menon</h3>
                <p className="font-label-bold text-label-bold text-secondary mb-3 uppercase tracking-wider text-xs">Head of Research, Propwhale</p>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                  Arjun brings over a decade of institutional real estate advisory experience, previously managing a $500M portfolio for a tier-1 private equity firm. He specializes in commercial asset valuation and micro-market trend analysis.
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 mt-12 lg:mt-0">
            <div className="sticky top-28">
              {/* Share Widget */}
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_4px_20px_rgba(0,15,34,0.04)] border border-surface-variant mb-8 flex flex-col gap-4">
                <span className="font-label-bold text-label-bold text-primary">Share this analysis</span>
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full border border-surface-variant hover:border-primary hover:bg-primary hover:text-on-primary flex items-center justify-center transition-colors text-primary bg-surface group">
                    <LinkIcon size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full border border-surface-variant hover:border-primary hover:bg-primary hover:text-on-primary flex items-center justify-center transition-colors text-primary bg-surface group">
                    <Mail size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full border border-surface-variant hover:border-primary hover:bg-primary hover:text-on-primary flex items-center justify-center transition-colors text-primary bg-surface group">
                    <Bookmark size={18} />
                  </button>
                </div>
              </div>

              {/* Related Articles (Bento Style) */}
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_4px_20px_rgba(0,15,34,0.04)] border border-surface-variant mb-8">
                <h3 className="font-headline-md text-headline-md text-primary mb-6 border-b border-surface-variant pb-4 text-xl">
                  Related Intelligence
                </h3>
                <div className="flex flex-col gap-6">
                  {/* Article Card 1 */}
                  <Link to="/blog/detail" className="group block">
                    <div className="rounded-lg overflow-hidden mb-3 h-32 w-full relative">
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                      <img alt="Commercial building" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6Lh9Q3d0TtEhzDQ3oxzXjlYUrWreG9v7EB62qq_oTsp1XHTd-4_dHxmMHTwdhWJe0pWWAsi1nfldSoDt7s8_J1kdcCDBKNkryoil5DPZPOm2kbE6MDbCcKsLwvAoOYcKujhmNXyZxf0q3GBQi6yTH-D4kxAIqAnwf9jeFLGymxZLTgWr0mSYD0dq43GcIGDIphqJRrL2o4xnWUqbF7loJdiiMMT5FHfrLR-DxLq_DslhyNpom17n0hrfmhte3KRdHEFVmVlxQqoWE" />
                    </div>
                    <h4 className="font-data-tabular text-data-tabular text-primary group-hover:text-secondary-fixed-dim transition-colors leading-snug">
                      Decoding Lease Structures in Grade-A Assets
                    </h4>
                    <span className="text-[11px] font-label-bold text-outline uppercase tracking-wider mt-2 block">4 min read</span>
                  </Link>
                  <div className="h-px bg-surface-variant w-full"></div>
                  {/* Article Card 2 */}
                  <Link to="/blog/detail" className="group block">
                    <div className="rounded-lg overflow-hidden mb-3 h-32 w-full relative">
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                      <img alt="Financial charts" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_pF4ttPy62Vz92WCNoORaBqnrJfNRIpH2okYMfxoRHiobEO8z6EFNLzc4ZKz0AYu9rRotKEF1wk6aIAQnZEYzt06UjPevb-pjUmPPNm_rElRfVPwV-mj_0R9TmaDb03xyHFmXYq1s-Fhz6ZwLZz2DZujizD2XHi6ReLuKds7A-abRPGXhLViLooHYagSTKjGTF8HSistu_rbeh_GY8iTCEbfXZOV2ZPTdLMWImiyVYGJ5EmM_wbNEuswcnamgdk750oVe1kwT3blO" />
                    </div>
                    <h4 className="font-data-tabular text-data-tabular text-primary group-hover:text-secondary-fixed-dim transition-colors leading-snug">
                      The Impact of SEBI's Fractional Framework on Liquidity
                    </h4>
                    <span className="text-[11px] font-label-bold text-outline uppercase tracking-wider mt-2 block">8 min read</span>
                  </Link>
                </div>
              </div>

              {/* Call to Action Bento Box */}
              <div className="bg-primary rounded-xl p-8 text-on-primary shadow-[0_4px_20px_rgba(0,15,34,0.04)] relative overflow-hidden group">
                {/* Abstract minimal shape */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary-fixed/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <h3 className="font-headline-md text-headline-md text-on-primary mb-3 relative z-10 text-xl">
                  Ready to access institutional yields?
                </h3>
                <p className="font-body-md text-body-md text-primary-fixed-dim mb-6 relative z-10 text-sm">
                  Explore our latest fractional SPVs in Bangalore's top-tier commercial corridors.
                </p>
                <button className="inline-flex items-center justify-center gap-2 bg-secondary-fixed text-primary font-label-bold text-label-bold px-6 py-3 rounded hover:opacity-90 transition-opacity w-full relative z-10 shadow-sm active:scale-95 duration-150 group/btn">
                  View Opportunities
                  <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
