import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [investModalOpen, setInvestModalOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'How it Works', path: '/how-it-works' },
    { name: 'Projects', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className="bg-primary text-primary-fixed docked full-width top-0 sticky bg-primary/95 backdrop-blur-md shadow-sm z-50">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-[80px]">
          {/* Brand */}
          <div className="flex items-center">
            <Link to="/" className="text-headline-md font-headline-md font-bold text-secondary-fixed hover:opacity-80 transition-opacity">Propwhale</Link>
          </div>
          
          {/* Navigation Links (Web) */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-label-bold text-label-bold transition-opacity hover:opacity-80 active:scale-95 duration-150 ${
                    isActive
                      ? 'text-secondary-fixed font-bold border-b-2 border-secondary-fixed pb-1'
                      : 'text-primary-fixed-dim font-medium hover:text-secondary-fixed'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          
          {/* Actions (Web) */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setInvestModalOpen(true)}
              className="bg-secondary-fixed text-on-secondary-fixed px-6 py-2 rounded-full font-label-bold text-label-bold hover:opacity-80 transition-opacity active:scale-95 duration-150 shadow-sm"
            >
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
            {navLinks.map((link) => {
               const isActive = location.pathname === link.path;
               return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block font-label-bold text-label-bold ${
                    isActive
                      ? 'text-secondary-fixed font-bold'
                      : 'text-primary-fixed-dim font-medium'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
               )
            })}
            <hr className="border-white/10" />
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                setInvestModalOpen(true);
              }}
              className="w-full mt-2 bg-secondary-fixed text-on-secondary-fixed px-6 py-3 rounded-md font-label-bold text-label-bold hover:opacity-80 transition-opacity shadow-sm"
            >
              Invest Now
            </button>
          </div>
        )}
      </nav>

      {/* Invest Now Modal */}
      {investModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-surface text-on-surface w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative">
            <div className="p-6">
              <button 
                onClick={() => setInvestModalOpen(false)}
                className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-headline-md font-bold text-primary mb-2">Interested in Investing?</h2>
              <p className="font-body-md text-on-surface-variant mb-6">Leave your details below and our investment directors will get in touch with you shortly.</p>
              
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setInvestModalOpen(false); alert("Form submitted successfully!"); }}>
                <div>
                  <label className="block text-sm font-label-bold text-on-surface-variant mb-1">Full Name</label>
                  <input type="text" required className="w-full px-4 py-2 bg-surface-container border border-outline rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-on-surface" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-label-bold text-on-surface-variant mb-1">Email Address</label>
                  <input type="email" required className="w-full px-4 py-2 bg-surface-container border border-outline rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-on-surface" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-label-bold text-on-surface-variant mb-1">Phone Number</label>
                  <input type="tel" required className="w-full px-4 py-2 bg-surface-container border border-outline rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-on-surface" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-sm font-label-bold text-on-surface-variant mb-1">Estimated Investment Amount</label>
                  <select className="w-full px-4 py-2 bg-surface-container border border-outline rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-on-surface">
                    <option>Less than ₹10 Lakhs</option>
                    <option>₹10 Lakhs - ₹25 Lakhs</option>
                    <option>₹25 Lakhs - ₹1 Crore</option>
                    <option>More than ₹1 Crore</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-label-bold text-on-surface-variant mb-1">Client Classification</label>
                  <select className="w-full px-4 py-2 bg-surface-container border border-outline rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-on-surface">
                    <option>Fractional Investor (Yield & Capital Appreciation)</option>
                    <option>High Net-Worth Individual (HNI) / Family Office</option>
                    <option>Strategic Acquirer (Full Property Purchase)</option>
                    <option>End-User Occupier (Property Buyer)</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-primary text-on-primary py-3 rounded-md font-label-bold mt-4 hover:bg-primary/90 transition-colors shadow-sm active:scale-[0.98] duration-150">
                  Submit Details
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
