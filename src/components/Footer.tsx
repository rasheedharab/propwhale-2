import { Share2, Globe, Podcast } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-surface-variant pt-16 pb-8 mt-auto">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
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
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/team" className="hover:text-primary transition-colors">Team</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary transition-colors">How it Works</Link></li>
              <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
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
  );
}
