import React, { lazy, Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
// Defer legal-modal JavaScript until a visitor chooses to open one.
// The closed modals produce no markup during prerendering or hydration.
const PrivacyPolicyModal = lazy(() => import('./PrivacyPolicyModal'));
const TermsOfServiceModal = lazy(() => import('./TermsOfServiceModal'));

const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/images/dietzbookkeepinglogotampafl.webp"
                alt="Dietz Bookkeeping"
                width={1000}
                height={389}
                className="w-[270px] h-auto rounded-lg"
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Professional, accurate, and reliable bookkeeping services for small businesses nationwide. Based in Tampa, Florida. We handle the numbers so you can focus on growth.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link to="/tampa-bank-reconciliation" className="hover:text-blue-600 transition-colors">Bank Reconciliation</Link></li>
              <li><Link to="/tampa-cleanup-bookkeeping" className="hover:text-blue-600 transition-colors">Cleanup Bookkeeping</Link></li>
              <li><Link to="/tampa-payroll-support" className="hover:text-blue-600 transition-colors">Payroll Support</Link></li>
              <li><Link to="/tampa-tax-preparation-support" className="hover:text-blue-600 transition-colors">Tax Prep Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/service-areas" className="hover:text-blue-600">Service Areas</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
              <li><Link to="/schedule" className="hover:text-blue-600 transition-colors">Free Consultation</Link></li>
              <li><Link to="/estimate" className="hover:text-blue-600 transition-colors">Request Estimate</Link></li>
              <li><Link to="/resources" className="hover:text-blue-600 transition-colors">Resources</Link></li>
              <li>
                <button
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className="hover:text-blue-600 transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsTermsModalOpen(true)}
                  className="hover:text-blue-600 transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                <span>7506 Bolanos ct, Tampa, FL 33615</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <a href="tel:+18134193475" className="hover:text-blue-600">813-419-3475</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <a href="mailto:bryand@dietzbookkeeping.com" className="hover:text-blue-600">bryand@dietzbookkeeping.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600">
            © 2024–{new Date().getFullYear()} Dietz Bookkeeping Services. All rights reserved. | Website by <a href="https://createflowmedia.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">Create Flow Media</a>
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61573021914343" aria-label="Dietz Bookkeeping on Facebook (opens in a new tab)" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-700 transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="https://www.instagram.com/dietzbookkeeping/" aria-label="Dietz Bookkeeping on Instagram (opens in a new tab)" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-700 transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="https://www.linkedin.com/in/bryan-dietz-734575350/" aria-label="Dietz Bookkeeping on LinkedIn (opens in a new tab)" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-700 transition-colors"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>

      {isPrivacyModalOpen && (
        <Suspense fallback={<p role="status" className="text-sm text-slate-500">Loading Privacy Policy…</p>}>
          <PrivacyPolicyModal
            isOpen={isPrivacyModalOpen}
            onClose={() => setIsPrivacyModalOpen(false)}
          />
        </Suspense>
      )}

      {isTermsModalOpen && (
        <Suspense fallback={<p role="status" className="text-sm text-slate-500">Loading Terms of Service…</p>}>
          <TermsOfServiceModal
            isOpen={isTermsModalOpen}
            onClose={() => setIsTermsModalOpen(false)}
          />
        </Suspense>
      )}
    </footer>
  );
};

export default Footer;
