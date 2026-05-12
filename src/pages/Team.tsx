import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Briefcase, BarChart2, Gavel as GavelIcon, Code, Verified, Landmark, Users } from 'lucide-react';

export default function Team() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md text-body-md antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* TopNavBar */}
      <Header />

      {/* Main Content Canvas */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-b border-surface-container-highest">
          <div className="max-w-3xl">
            <h1 className="font-display-lg text-[40px] md:text-display-lg text-primary mb-6">The Architects of Modern Real Estate.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">We are a collective of seasoned institutional investors, real estate visionaries, and technologists. Our mission is to democratize access to premium commercial assets with institutional-grade rigor and transparency.</p>
          </div>
        </section>

        {/* Executive Leadership */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-12 flex items-center space-x-3">
            <Landmark className="text-secondary" size={32} />
            <h2 className="font-headline-lg text-[24px] md:text-headline-lg text-primary">Executive Leadership</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {/* Exec 1 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden group shadow-[0_4px_20px_rgba(10,37,64,0.04)] hover:shadow-[0_8px_30px_rgba(10,37,64,0.08)] transition-all duration-300 border border-surface-variant">
              <div className="h-80 w-full relative overflow-hidden bg-surface-container">
                <img alt="Aiden Thorne" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBm6m3X4b62eyaflDl9B7zdC9QiW896Mh98Fo1PMe_y1-lkFoNi7yzhtbTmhBjg6WcdgAWi0e8aEaeO9T5x_oQiVlE0x5UsTVL7p6rbyaUmzxyt3zj6LuzGz56HB5WBuz0hoOcAuCiAR-KtiQxjnU_QpLTG5QWVSb5ZaWLizPTFlliqJJbIBczGqoyMqVdnK6Mm8xD7HY1ARzAe27libAH4Ap7IsEIcidO4zx1q9CpdbGmemwMfZJWWzU_hCMFcr2BySA1al84Uh7l" />
              </div>
              <div className="p-6 border-t border-surface-variant">
                <h3 className="font-headline-md text-headline-md text-primary mb-1">Aiden Thorne</h3>
                <p className="font-label-bold text-label-bold text-on-surface-variant mb-4 uppercase tracking-wider text-[11px] sm:text-xs">Chief Executive Officer</p>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">Former Managing Director at a Tier-1 global investment bank with over two decades of experience structuring multi-billion dollar commercial real estate portfolios across North America and Europe.</p>
                <div className="mt-4 pt-4 border-t border-surface-variant flex items-center space-x-3">
                  <Briefcase size={20} className="text-outline" />
                  <span className="font-data-tabular text-data-tabular text-on-surface-variant">22 Years Experience</span>
                </div>
              </div>
            </div>

            {/* Exec 2 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden group shadow-[0_4px_20px_rgba(10,37,64,0.04)] hover:shadow-[0_8px_30px_rgba(10,37,64,0.08)] transition-all duration-300 border border-surface-variant">
              <div className="h-80 w-full relative overflow-hidden bg-surface-container">
                <img alt="Elena Rostova" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDirTsb6FZhPaR4F18TJj-lmGrtDPQB1qFWYCoyAF3r7uRnel47ieQZkoR6r4UMXMXMlyUl6o6Fe14l_HioxfCg2VlCCziR10RPDRD9l8ZXjqcE889QeqrFepmtWwKxR0b8Kai0S8wV_QY7gvTcf4DNYJTyXMdLVJ9Rr1i9ToQolgwMEzAfu6g0RzCnQ44zbZHeQjbhmPY2W5s_2m-IJR79zO0MTzmsQoXZDmxY56w0voNQWj3hFGnUaxvELMt-wKQNUBMTzOvh76Qu" />
              </div>
              <div className="p-6 border-t border-surface-variant">
                <h3 className="font-headline-md text-headline-md text-primary mb-1">Elena Rostova</h3>
                <p className="font-label-bold text-label-bold text-on-surface-variant mb-4 uppercase tracking-wider text-[11px] sm:text-xs">Chief Investment Officer</p>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">Pioneered algorithmic asset valuation models at a leading hedge fund. Elena oversees all asset acquisition strategies and rigorous underwriting processes to ensure yield optimization.</p>
                <div className="mt-4 pt-4 border-t border-surface-variant flex items-center space-x-3">
                  <BarChart2 size={20} className="text-outline" />
                  <span className="font-data-tabular text-data-tabular text-on-surface-variant">18 Years Experience</span>
                </div>
              </div>
            </div>

            {/* Exec 3 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden group shadow-[0_4px_20px_rgba(10,37,64,0.04)] hover:shadow-[0_8px_30px_rgba(10,37,64,0.08)] transition-all duration-300 border border-surface-variant">
              <div className="h-80 w-full relative overflow-hidden bg-surface-container">
                <img alt="Marcus Vance" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCfzn6T7QnaKLzRGV1FWK8G10QVsVqv_CDklNSB9rO7aLI0FM14LAkgPv5QJyWQi7nrNYxLZUPYjKyv_edzzG0oW6CJFUIyjE955gNfQgGzz1vL7356DtbeqiDaWL69u5pjDUf_Pw0lYj9inreIQRYAajBASz7qXlt9A6rQZi8S4pscmq-eDS_oMrCJViy-J5LwQnb0POtC7kVzKdpFqDt_MMC8E-U3s1PRlDfpejCvRowRkfhKQvrUtNpeB3NJPLIGKFBXDG7g9fP" />
              </div>
              <div className="p-6 border-t border-surface-variant">
                <h3 className="font-headline-md text-headline-md text-primary mb-1">Marcus Vance</h3>
                <p className="font-label-bold text-label-bold text-on-surface-variant mb-4 uppercase tracking-wider text-[11px] sm:text-xs">Head of Legal &amp; Compliance</p>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">A distinguished corporate attorney specializing in complex REIT structures and SPV governance. Marcus ensures that all Propwhale offerings exceed regulatory frameworks for investor safety.</p>
                <div className="mt-4 pt-4 border-t border-surface-variant flex items-center space-x-3">
                  <GavelIcon size={20} className="text-outline" />
                  <span className="font-data-tabular text-data-tabular text-on-surface-variant">15 Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Department Heads - Bento Layout */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-surface">
          <div className="mb-12 flex items-center space-x-3">
            <Users className="text-secondary" size={32} />
            <h2 className="font-headline-lg text-[24px] md:text-headline-lg text-primary">Domain Experts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter lg:auto-rows-[250px]">
            {/* Real Estate Bio (Wide Card) */}
            <div className="md:col-span-2 md:row-span-1 bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(10,37,64,0.04)] p-6 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 border border-surface-variant">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-surface-container border-2 border-surface-variant">
                <img alt="Sarah Jenkins" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYx2BWaMk8Ah_csDgikoI64_eeuxZoOEu0T3aHX6ydr8EOXbR9t3ZaGT1NnPftnx3JvU6--FdpFMm7mAFb6WaZTKwO8rO1eKUfOlKpBFoTqu4N8aOIeI7TTgDhpTM_9aE_bE4CbY4DbThNuILgR3thRRZzKrAGNHVPgFGwc7smfsquA5WQIWKcb1h1kZWD5qlzPYrp7sPA55J_ka4mDRu4JsqvLg0qdfXH_mKblmygeryw8YiCdH3gINXdFCJR2NIhJ-GXp_6u5Ukb" />
              </div>
              <div className="flex-grow text-center sm:text-left">
                <h4 className="font-headline-md text-headline-md text-primary mb-1 text-lg">Sarah Jenkins</h4>
                <p className="font-label-bold text-label-bold text-secondary-fixed mb-3 text-xs uppercase tracking-wider">VP, Real Estate Acquisitions</p>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Specializing in prime commercial office spaces and high-street retail, Sarah leads the ground-level due diligence teams, vetting hundreds of properties to select only top-tier assets.</p>
              </div>
            </div>

            {/* Finance Bio (Standard Card) */}
            <div className="md:col-span-1 md:row-span-1 bg-primary text-on-primary rounded-xl shadow-lg p-6 relative overflow-hidden group border border-primary/50">
              {/* Decorative subtle accent */}
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary-fixed/20 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <h4 className="font-headline-md text-headline-md text-on-primary mb-1 text-lg relative z-10">David Chen</h4>
              <p className="font-label-bold text-label-bold text-secondary-fixed mb-4 text-xs uppercase tracking-wider relative z-10">Director of Finance</p>
              <p className="font-body-md text-body-md text-on-primary/90 text-sm relative z-10">Architects the financial modeling and yield projection systems that back every Propwhale asset offering.</p>
            </div>

            {/* Tech Bio (Standard Card) */}
            <div className="md:col-span-1 md:row-span-1 bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(10,37,64,0.04)] p-6 border border-surface-variant flex flex-col justify-between group hover:shadow-[0_8px_30px_rgba(10,37,64,0.08)] transition-all duration-300">
              <div>
                <h4 className="font-headline-md text-headline-md text-primary mb-1 text-lg">Maya Patel</h4>
                <p className="font-label-bold text-label-bold text-on-surface-variant mb-4 text-xs uppercase tracking-wider">Head of Product</p>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Bridging the gap between complex financial instruments and seamless digital user experiences.</p>
              </div>
              <Code size={24} className="text-secondary opacity-50 self-end mt-4 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Legal Bio (Wide Card) */}
            <div className="md:col-span-2 md:row-span-1 bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(10,37,64,0.04)] p-6 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 border border-surface-variant">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-surface-container border-2 border-surface-variant">
                <img alt="James O'Connor" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBMMwGLsSzvjwESkyRtvC5avySIHqK0Zu5smm0Xx5W4DAiln05L3LwcKaImYG9DYVsdMKa9oTkhgApNhRUGcMwp7LkE2LcY58vvH9uXy2wEwL9zgNSWiQRpfpZvE56ayCBxIz3Y7lruROQOabww-qwDMKYWgrmaSKh4RL2tRxb1XpvFDlZYsJ_iJhTGkOwk9KyYvmZaklzoT3iBlyxxwuG8lHXzRDk9g6eRcp4oen4YuV47ixlYK4SK4DCBhYrsbWrf1lhsfwCQtki" />
              </div>
              <div className="flex-grow text-center sm:text-left">
                <h4 className="font-headline-md text-headline-md text-primary mb-1 text-lg">James O'Connor</h4>
                <p className="font-label-bold text-label-bold text-secondary-fixed mb-3 text-xs uppercase tracking-wider">Senior Regulatory Counsel</p>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Ensuring strict adherence to SEBI compliance and international fractional ownership regulations. James drafts the meticulous SPV frameworks that protect investor capital.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Advisory Board */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-surface-variant">
          <div className="mb-12 flex flex-col items-center text-center max-w-2xl mx-auto">
            <Verified size={40} className="text-secondary mb-4" />
            <h2 className="font-headline-lg text-[24px] md:text-headline-lg text-primary mb-4">Board of Advisors</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Guiding our strategic vision with decades of cross-industry expertise.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-8">
            {/* Advisor 1 */}
            <div className="text-center group">
              <div className="w-32 h-32 mx-auto rounded-full bg-surface-container mb-4 overflow-hidden border-2 border-transparent group-hover:border-secondary-fixed transition-colors shadow-sm">
                <img alt="Dr. Evelyn Reed" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg3Pub_QcXB9y_OJx7FQ5yUl48ZX3X7LWDQwy30T74SxsKWgthx7bP2v2RB6UXgW7ILJR21PN2kgyH5_gteBYwWUZMEgPA4sdp7pn59sgagCqaudCMBY8lr2q-aqihk__2mctfis99fFhAhdTcS7bsAjhye7Og_5x5IjRaX7yNn9baakPEpkXaFwrjrwBFJwa5bN_PQVdAi7gOIDbLG4JM90vSQp6RqsCHeXXkgDP_Aw3CglU2vwuawSTrMh-Bqv_S3FxHq7wwg4ab" />
              </div>
              <h5 className="font-headline-md text-headline-md text-primary text-base mb-1">Dr. Evelyn Reed</h5>
              <p className="font-label-bold text-label-bold text-on-surface-variant text-xs uppercase">Economics Professor, LSE</p>
            </div>
            
            {/* Advisor 2 */}
            <div className="text-center group">
              <div className="w-32 h-32 mx-auto rounded-full bg-surface-container mb-4 overflow-hidden border-2 border-transparent group-hover:border-secondary-fixed transition-colors shadow-sm">
                <img alt="Robert Lin" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFuXxa59NyZdrr-ONZXDGqN7ZI4QMBqZG6yu2EiziK2yiypRsS_3qXG5YJNtTmgL3Sb3DZrv4olF8RGMgpG8Jql-P_cN0d46vsXPB5rS_qjRQFYzueNxkNf0REs4VhRyP8FauLGLr-LgHagvGh0aIaQVXWf3Z_SoJU75pyZBx2aFoINSJqid7AbMZGFEh6aais-Z6B9wWq7SJC28aCnQWNtYiMQttRtAru6JXx_zPkL1ePKGB1O6IQn5Nt39D2AMfvUSp5Oimv0kp6" />
              </div>
              <h5 className="font-headline-md text-headline-md text-primary text-base mb-1">Robert Lin</h5>
              <p className="font-label-bold text-label-bold text-on-surface-variant text-xs uppercase">Former Chief Risk Officer</p>
            </div>
            
            {/* Advisor 3 */}
            <div className="text-center group">
              <div className="w-32 h-32 mx-auto rounded-full bg-surface-container mb-4 overflow-hidden border-2 border-transparent group-hover:border-secondary-fixed transition-colors shadow-sm">
                <img alt="Chloe Davies" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU_A4uvCPTuEVmu7e3kSq0nQs4kss3Nqr8yEubcRJwT-eFBLo4inV6BjUjSehO07rR7g0BdoQgXg49n5Mz7-Yw9Z4VTbJPEVZRWglVK-hf1Z1D9MDhuGCRS20JKjL-wIK3t6tbSZ_KO9jE4-0KIx6-M9KaHYILGP90Hye7Gv9CHm7_Wmlp37_nIelQ_NTdmC0jydFtCkrEdG1LkN1-qm7m3EEkalb8W_3znbgWv9oZsEWOOH2iF003fuDpdqNKCQ7zs16-U4q5XTem" />
              </div>
              <h5 className="font-headline-md text-headline-md text-primary text-base mb-1">Chloe Davies</h5>
              <p className="font-label-bold text-label-bold text-on-surface-variant text-xs uppercase">PropTech Innovator</p>
            </div>
            
            {/* Advisor 4 */}
            <div className="text-center group">
              <div className="w-32 h-32 mx-auto rounded-full bg-surface-container mb-4 overflow-hidden border-2 border-transparent group-hover:border-secondary-fixed transition-colors shadow-sm">
                <img alt="Thomas Wright" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUqHPhsVthfkV8LosZYci7adhZtCw_FWYKw1Pr42RvisZnJOsKnODh1gSpoxKVVLJaC79fe9J9-rjsgeTPOoXnQr_FrI2zgelct1yGmuqOGX2p4OUei0LB8NkVrA84h_1lrTn51qOh27-GwPVh6xzkfqf7FTn9v4R6bCW6aw7cZ7z0cb1LRx9XJlBpGjk_n0ipX51eW_Va-T-WAlc4feU78LvlVNxsn7YLCQQJpQPtALYlBJWR3ZPL38T1DDuca5Wh_QyYTREMMphI" />
              </div>
              <h5 className="font-headline-md text-headline-md text-primary text-base mb-1">Thomas Wright</h5>
              <p className="font-label-bold text-label-bold text-on-surface-variant text-xs uppercase">Master Developer</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
