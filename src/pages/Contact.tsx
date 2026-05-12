import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  Menu, X, Mail, ShieldCheck, ArrowRight, LineChart, 
  Gavel, Handshake, MapPin, ExternalLink, ChevronDown 
} from 'lucide-react';

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* TopNavBar */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow relative overflow-hidden">
        {/* Ambient Sunset Gradient Background */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/10 via-secondary-fixed-dim/5 to-transparent pointer-events-none -z-10"></div>
        
        {/* Hero Header */}
        <header className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-12 md:pt-section-gap pb-12 md:pb-gutter text-center relative z-10">
          <h1 className="font-display-lg text-[40px] md:text-display-lg text-primary mb-4">Connect with Propwhale</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Institutional-grade real estate requires institutional-grade support. Reach out to our specialized teams to discuss fractional investments, legal frameworks, or partnerships.
          </p>
        </header>

        {/* Bento Box Layout Area */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap grid grid-cols-1 lg:grid-cols-12 gap-gutter relative z-10">
          
          {/* Left Column: High-Intent Inquiry Form (Span 7) */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,15,34,0.04)] border border-surface-variant flex-grow flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,15,34,0.08)] transition-shadow duration-300">
              <div>
                <h2 className="font-headline-md text-[20px] md:text-headline-md text-primary mb-8 flex items-center gap-2">
                  <Mail className="text-secondary" size={24} />
                  Secure Inquiry
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input className="w-full bg-transparent border-0 border-b border-outline-variant hover:border-primary/50 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-on-surface peer placeholder-transparent transition-colors" id="firstName" placeholder="First Name" type="text" />
                      <label className="absolute left-0 -top-3.5 font-label-bold text-label-bold text-on-surface-variant text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs" htmlFor="firstName">First Name</label>
                    </div>
                    <div className="relative">
                      <input className="w-full bg-transparent border-0 border-b border-outline-variant hover:border-primary/50 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-on-surface peer placeholder-transparent transition-colors" id="lastName" placeholder="Last Name" type="text" />
                      <label className="absolute left-0 -top-3.5 font-label-bold text-label-bold text-on-surface-variant text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs" htmlFor="lastName">Last Name</label>
                    </div>
                  </div>
                  <div className="relative mt-6">
                    <input className="w-full bg-transparent border-0 border-b border-outline-variant hover:border-primary/50 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-on-surface peer placeholder-transparent transition-colors" id="email" placeholder="Corporate Email" type="email" />
                    <label className="absolute left-0 -top-3.5 font-label-bold text-label-bold text-on-surface-variant text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs" htmlFor="email">Corporate Email</label>
                  </div>
                  <div className="relative mt-6">
                    <select defaultValue="" className="w-full bg-transparent border-0 border-b border-outline-variant hover:border-primary/50 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-on-surface appearance-none focus:outline-none cursor-pointer transition-colors" id="inquiryType">
                      <option className="text-on-surface-variant" disabled value="">Select Area of Interest</option>
                      <option value="investment">Fractional Investment</option>
                      <option value="legal">SPV / Legal Framework</option>
                      <option value="partnership">Developer Partnership</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-3 text-on-surface-variant pointer-events-none" size={20} />
                  </div>
                  <div className="relative pt-2 mt-6">
                    <textarea className="w-full bg-transparent border-0 border-b border-outline-variant hover:border-primary/50 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-on-surface peer placeholder-transparent resize-none transition-colors" id="message" placeholder="Message Details" rows={4}></textarea>
                    <label className="absolute left-0 -top-1.5 font-label-bold text-label-bold text-on-surface-variant text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-1.5 peer-focus:text-primary peer-focus:text-xs" htmlFor="message">Message Details</label>
                  </div>
                </form>
              </div>
              
              <div className="mt-8 pt-6 border-t border-surface-variant flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1.5 border border-primary-fixed-dim rounded-full bg-primary-fixed/10">
                  <ShieldCheck className="text-primary" size={16} />
                  <span className="font-label-bold text-label-bold text-primary text-xs">End-to-End Encrypted</span>
                </div>
                <button className="w-full sm:w-auto bg-primary text-on-primary font-label-bold text-label-bold px-8 py-3 rounded shadow-sm hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                  Submit Inquiry
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Info & Location (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-gutter mt-8 lg:mt-0">
            
            {/* Direct Contacts Bento Module */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_4px_20px_rgba(0,15,34,0.04)] border border-surface-variant flex-grow hover:shadow-[0_8px_30px_rgba(0,15,34,0.08)] transition-shadow duration-300">
              <h3 className="font-label-bold text-label-bold text-on-surface-variant mb-4 uppercase tracking-wider">Direct Access</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 p-4 rounded-lg hover:bg-surface transition-colors cursor-pointer group border border-transparent hover:border-outline-variant/30">
                  <div className="bg-primary-fixed text-primary p-2 rounded shrink-0 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <LineChart size={24} />
                  </div>
                  <div>
                    <h4 className="font-label-bold text-label-bold text-primary">Investment Desk</h4>
                    <p className="font-data-tabular text-data-tabular text-on-surface-variant mt-1 text-sm sm:text-[14px]">invest@propwhale.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-lg hover:bg-surface transition-colors cursor-pointer group border border-transparent hover:border-outline-variant/30">
                  <div className="bg-surface-container text-on-surface p-2 rounded shrink-0 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <Gavel size={24} />
                  </div>
                  <div>
                    <h4 className="font-label-bold text-label-bold text-primary">Legal &amp; SPV Operations</h4>
                    <p className="font-data-tabular text-data-tabular text-on-surface-variant mt-1 text-sm sm:text-[14px]">legal@propwhale.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-lg hover:bg-surface transition-colors cursor-pointer group border border-transparent hover:border-outline-variant/30">
                  <div className="bg-tertiary-fixed text-tertiary p-2 rounded shrink-0 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <Handshake size={24} />
                  </div>
                  <div>
                    <h4 className="font-label-bold text-label-bold text-primary">Developer Partnerships</h4>
                    <p className="font-data-tabular text-data-tabular text-on-surface-variant mt-1 text-sm sm:text-[14px]">partners@propwhale.com</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Office Location Bento Module */}
            <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,15,34,0.04)] border border-surface-variant overflow-hidden flex flex-col hover:shadow-[0_8px_30px_rgba(0,15,34,0.08)] transition-shadow duration-300">
              <div className="h-48 w-full relative bg-surface-container-high group overflow-hidden">
                <img 
                  alt="Map view of Bangalore" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3-MHqWmeFAxaaPvki80OAb4In6bn0ttioirW4OTHZQIbFdJapsg9b_M05TzBuSpB5C9509_kCJRM6bYoOTyseb-a78TbjnSp1STJyyIL3uJKT1B60Jm7VR3eE-koq13VlYrNKPMFxpG3LmvFRCBfTR0uCfLnQoE6O_q-Z43cqafDwZL_4SiBvrks3irYsc4QfA3j5W4o4_mWa9T8tkwmAkxQ_eR_2FcjOUvVJRRYjxESB2lUvS_uZMeZd8h6WHBcOHofv3U-oca4K"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-on-primary">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-secondary-fixed" size={20} />
                    <span className="font-label-bold text-label-bold">Headquarters</span>
                  </div>
                  <span className="font-data-tabular text-data-tabular text-primary-fixed-dim border border-primary-fixed-dim/30 px-2 py-0.5 rounded text-xs bg-primary/50 backdrop-blur-sm">Bengaluru, IN</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-headline-md text-headline-md text-primary mb-2">Propwhale India</h4>
                <p className="font-body-md text-body-md text-on-surface-variant text-[15px]">
                  Level 8, The Executive Centre<br/>
                  UB City, Vittal Mallya Road<br/>
                  Bangalore, Karnataka 560001
                </p>
                <div className="mt-4 pt-4 border-t border-surface-variant flex items-center justify-between">
                  <span className="font-data-tabular text-data-tabular text-on-surface">+91 (080) 4567 8900</span>
                  <a className="font-label-bold text-label-bold text-secondary hover:underline flex items-center gap-1 transition-colors" href="#">
                    Get Directions <ExternalLink size={16} />
                  </a>
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
