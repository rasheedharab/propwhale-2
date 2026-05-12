import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MapPin, Building, LayoutGrid, Leaf, Sparkles, SlidersHorizontal, ChevronDown } from 'lucide-react';

export default function Projects() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: "The Horizon Tech Park",
      location: "Bangalore, India",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEsPt3ffUBa1RUCIqEWQyTsi_uEWIAn4ih_OM7R6Z5-_kSvBjCTBtgnsyzRVKi9HRySp4iu_UKqDjFdQEJ3gHHW5uirERunQ-5Tc_eXSXMfuPhf6zgXXq86iIl9mvdNIP4Sr9Hq27rE-3AWVVYKfGUdHiw-1vPlPPEkzpf02ns9fLe3KOdvqrnvUO2YtnS8yYlvhs16jgezH6JXyv_YWYK5JEj3AH5h1xjEE08w6_a9ID2g3cij7oG01fSUyB_1twfPMXp5vnRW7C0",
      irr: "14.2%",
      yield: "8.5%",
      type: "Commercial",
      status: "Funding",
      progress: 65,
      highlights: ["LEED Gold Certified", "90% Pre-leased"],
      isFeatured: true
    },
    {
      id: 2,
      title: "Purva Whitehall Estates",
      location: "Mumbai, India",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuNI3iDobDbgMWtDpEGE56blD-wCHpcFOB4vD-419xWlmtvzzz9P1mMaEItWpXn6gS5Ztshsa6egl1Ad4sgj9ynK6pS5gkbmpVV3ZEJdI20EFmHxiYAg2rTyHhoAw0myqnkxDgP_UPM0PkML-WPPoO1I9aS_pvVbcJyR-vvkZ0hp1SDYp0MkWagBL_tT8hx1pvg2JDa6q5dn2TYA5C89HKayU1qlKChE6uoK51Q-UZyESW6kSmnCwqumntfRUe3lJF63e4l-a688zg",
      irr: "12.8%",
      yield: "7.2%",
      type: "Residential",
      status: "Fully Funded",
      progress: 100,
      highlights: ["Premium Location", "High Capital Appreciation"],
      isFeatured: false
    },
    {
      id: 3,
      title: "Solar Integrated Villa Project",
      location: "Pune, India",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiB7ch7wfEHTZ-hRq2tOWRXSiUHox9PA4bGc7NiOaI7KPC8BwQI_BOn-zEkBjc1nYwkPrfrXNY1w4sDMH8Hw8HonfCmngTGWufsrPCpWZzR-VDuW3OQMHZEqrRMpHUopyfEvR4oNDyT_NYB16LJHtEAiXFTJRWe86yRtWBlg5n1bKnpXydJCZYCsGBvAn7r4HMZvMgMgm4IepXwScBnCU_6FR2KPLFEznPh3znLvKxvXprdCDz2WH6-u2rttPOGzf1tlRuuBKgrNLF",
      irr: "15.0%",
      yield: "6.8%",
      type: "Eco-living",
      status: "Funding",
      progress: 30,
      highlights: ["Net-zero energy", "Smart integrated community"],
      isFeatured: false
    },
    {
      id: 4,
      title: "Nexus Logistics Hub",
      location: "Chennai, India",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPzLTYMF4kFHsXEiIYKggowQ2gwAG-4tnkJFVpEzNpRAEZWD2aQHBDDPcN_xiF7VX-VnMKJM3Jq8j_uLSFCjyzsa6wHTN7nQu9P_kA7DNpG-QGgW3luRWP2ok61scNwJkGRHsTKzy4fz8CxXXrkwdMk5KLRKy0Qdj9WfevLiULfUu5CuUbmlQpu74YN3pjyh_s4xzGU_WFb9vcuAB1sWGNCRnk_4QMNVCzKC-VEzziySrW_lk8GbfBZJ-cuPvFiqGo64XMFs7qMSP6",
      irr: "16.1%",
      yield: "9.2%",
      type: "Industrial",
      status: "Funding",
      progress: 85,
      highlights: ["Strategic Port Connectivity", "Long-term AAA Tenant"],
      isFeatured: true
    },
    {
      id: 5,
      title: "Ascend Business Towers",
      location: "Hyderabad, India",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRLBoDq3wRY5Erc_nmmGwbG5tJW1ldBy037qq_4KvYk7PlnuY0Z6CeKDPit68eUEr3gXmhWMVIlvNnDy3KI256cjN5lYna1OfG9UDjUHvMsqsokyJaLGaN-JZpczwzQ9B7I8apMeRGsWdljj-iJP2ZNvsw0oGpfrEE4f1iEkJAmjWDtg83YJyskxPimVekt1f-7N2R1gHGVmeXd1T8PHkj6yr7UjjRqPIdavCzi40bkxSay6jiNomsFedm01fDLxPvga_c91VJtNE9",
      irr: "13.5%",
      yield: "8.1%",
      type: "Commercial",
      status: "Upcoming",
      progress: 0,
      highlights: ["Grade A Infrastructure", "Multi-tenant Corporate"],
      isFeatured: false
    }
  ];

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md text-body-md antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* TopNavBar */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow bg-surface">
        
        {/* Header Content */}
        <section className="bg-surface-container-low pt-12 pb-20 px-margin-mobile md:px-margin-desktop border-b border-surface-variant">
          <div className="max-w-container-max mx-auto">
            <h1 className="font-display-lg text-[40px] md:text-[56px] text-primary tracking-tight mb-4">Investment Opportunities</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
              Curated, institutional-grade commercial and residential assets. Access top-tier yielding real estate opportunities structured for optimal long-term growth and stable dividend generation.
            </p>
          </div>
        </section>

        {/* Filters and Search Bar */}
        <section className="bg-surface-container-lowest sticky top-20 z-40 border-b border-surface-variant shadow-[0_4px_20px_rgba(0,15,34,0.02)] hidden md:block">
           <div className="max-w-container-max mx-auto px-margin-desktop py-4 flex items-center justify-between">
              <div className="flex gap-4">
                  <button className="font-label-bold text-label-bold px-4 py-2 bg-primary text-on-primary rounded-md flex items-center gap-2">
                      All Projects
                  </button>
                  <button className="font-label-bold text-label-bold px-4 py-2 bg-surface hover:bg-surface-container-high transition-colors text-on-surface border border-surface-variant rounded-md flex items-center gap-2">
                      Commercial <ChevronDown size={14} />
                  </button>
                  <button className="font-label-bold text-label-bold px-4 py-2 bg-surface hover:bg-surface-container-high transition-colors text-on-surface border border-surface-variant rounded-md flex items-center gap-2">
                      Location <ChevronDown size={14} />
                  </button>
                  <button className="font-label-bold text-label-bold px-4 py-2 bg-surface hover:bg-surface-container-high transition-colors text-on-surface border border-surface-variant rounded-md flex items-center gap-2">
                      Status <ChevronDown size={14} />
                  </button>
              </div>
              <div className="flex items-center gap-3">
                  <span className="font-data-tabular text-sm text-on-surface-variant">Sort by:</span>
                  <button className="font-label-bold text-label-bold px-4 py-2 bg-transparent text-primary flex items-center gap-2 hover:bg-surface-container transition-colors rounded">
                      Target IRR <ChevronDown size={14} />
                  </button>
                  <div className="h-6 w-px bg-outline-variant mx-2"></div>
                  <button className="p-2 text-primary bg-primary-fixed/30 rounded hover:bg-primary-fixed transition-colors">
                      <LayoutGrid size={18} />
                  </button>
                  <button className="p-2 text-on-surface-variant hover:bg-surface-container transition-colors rounded">
                      <SlidersHorizontal size={18} />
                  </button>
              </div>
           </div>
        </section>

        {/* Project Grid */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            
            {projects.map((project) => (
                <Link key={project.id} to={`/project/${project.id}`} className="group block bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,15,34,0.04)] hover:shadow-[0_8px_30px_rgba(0,15,34,0.08)] transition-all duration-300 border border-surface-variant hover:-translate-y-1 relative">
                  
                  {project.isFeatured && (
                      <div className="absolute top-4 left-4 z-20 bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full text-xs font-label-bold flex items-center gap-1 shadow-sm">
                          <Sparkles size={12} /> Featured
                      </div>
                  )}

                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                       <div>
                           <div className="flex items-center gap-1 text-primary-fixed-dim text-sm font-data-tabular mb-1">
                               <MapPin size={14} /> {project.location}
                           </div>
                           <h3 className="font-headline-md text-xl text-white font-bold leading-tight">{project.title}</h3>
                       </div>
                       <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded text-white text-xs font-label-bold border border-white/30">
                           {project.type}
                       </div>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-surface-container px-4 py-3 rounded-lg border border-surface-variant">
                            <span className="block text-xs font-label-bold text-on-surface-variant mb-1 uppercase tracking-wider">Target IRR</span>
                            <span className="block text-xl font-headline-md text-primary">{project.irr}</span>
                        </div>
                        <div className="bg-surface-container px-4 py-3 rounded-lg border border-surface-variant">
                            <span className="block text-xs font-label-bold text-on-surface-variant mb-1 uppercase tracking-wider">Gross Yield</span>
                            <span className="block text-xl font-headline-md text-primary">{project.yield}</span>
                        </div>
                    </div>

                    {/* Progress Bar for Funding status */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-2 font-data-tabular">
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded ${project.status === 'Fully Funded' ? 'bg-[#e6f4ea] text-[#137333]' : project.status === 'Upcoming' ? 'bg-surface-container-high text-on-surface-variant' : 'bg-primary-fixed text-primary'}`}>{project.status}</span>
                            <span className="text-sm font-bold text-primary">{project.progress}% Funded</span>
                        </div>
                        <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
                            <div className="h-full bg-secondary-fixed transition-all duration-1000 ease-out" style={{ width: `${project.progress}%` }}></div>
                        </div>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-surface-variant/60">
                        {project.highlights.map((highlight, idx) => (
                             <span key={idx} className="flex items-center gap-1.5 text-[13px] text-on-surface-variant bg-surface px-2.5 py-1 rounded border border-surface-variant/50">
                                 {project.type === 'Eco-living' && idx === 0 ? <Leaf size={12} className="text-green-600" /> : <Building size={12} className="text-primary-container" />}
                                 {highlight}
                             </span>
                        ))}
                    </div>
                  </div>
                </Link>
            ))}
            
            {/* CTA Card for diversifying */}
            <div className="group bg-primary text-on-primary rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,15,34,0.04)] flex flex-col justify-center items-center text-center p-8 relative min-h-[450px]">
               <div className="absolute inset-0 bg-gradient-to-br from-primary-container/30 to-transparent pointer-events-none"></div>
               <div className="absolute w-[200%] aspect-square bg-secondary-fixed/5 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
               <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur border border-white/20 rounded-full flex items-center justify-center mb-6">
                        <LayoutGrid className="text-secondary-fixed" size={32} />
                    </div>
                    <h3 className="font-headline-md text-2xl mb-4">Want bespoke portfolio advice?</h3>
                    <p className="font-body-md text-primary-fixed-dim mb-8">Speak with our investment directors to build a robust, customized fractional real estate portfolio based on your unique goals.</p>
                    <Link to="/contact" className="inline-flex items-center justify-center bg-secondary-fixed text-primary px-6 py-3 rounded font-label-bold hover:opacity-90 transition-opacity w-full group-hover:scale-[1.02] duration-300">
                        Schedule a Call <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
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
