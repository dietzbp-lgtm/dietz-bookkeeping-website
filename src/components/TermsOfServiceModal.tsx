import React from 'react';
import { X } from 'lucide-react';

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfServiceModal: React.FC<TermsOfServiceModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900">Terms of Service</h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 sm:p-8 overflow-y-auto">
          <div className="prose prose-slate max-w-none">
            <p className="font-medium"><strong>Terms of Service for Dietz Bookkeeping</strong></p>
            <p className="text-sm text-slate-500">Effective Date: 01/01/2024</p>

            <p>
              These Terms of Service (“Terms”) govern your use of the Dietz Bookkeeping website, forms, chatbot, scheduling tools, and related services. By using our website or contacting us through it, you agree to these Terms.
            </p>

            <h3>1. About Us</h3>
            <p>
              Dietz Bookkeeping is a bookkeeping business based in Tampa, Florida. References to “Dietz Bookkeeping,” “we,” “us,” or “our” mean Dietz Bookkeeping.
            </p>

            <h3>2. Website Use</h3>
            <p>You may use our website only for lawful purposes. You agree not to:</p>
            <ul>
              <li>use the website in any way that violates applicable law</li>
              <li>interfere with the website’s operation or security</li>
              <li>attempt to gain unauthorized access to systems or data</li>
              <li>submit false, misleading, or fraudulent information</li>
              <li>use the website to spam, harass, or abuse others</li>
            </ul>
            <p>We may suspend or restrict access if we believe a user has violated these Terms.</p>

            <h3>3. Informational Purpose Only</h3>
            <p>
              The content on this website is provided for general informational and marketing purposes only. It is not legal advice, tax advice, investment advice, or financial planning advice.
            </p>
            <p>
              Any decision you make based on website content or communications with us is your responsibility.
            </p>

            <h3>4. Scope of Services</h3>
            <p>
              Dietz Bookkeeping provides bookkeeping-related support and administrative financial record services. Unless expressly agreed in writing, our services do not include legal advice, tax preparation, tax planning, investment advice, audit services, or CPA attestation services.
            </p>
            <p>
              Any actual services will be governed by a separate engagement agreement, proposal, service agreement, or written scope of work.
            </p>

            <h3>5. No Client Relationship by Website Use Alone</h3>
            <p>
              Using this website, chatbot, forms, or scheduling tool does not by itself create a client relationship. A client relationship begins only after both parties agree to a service arrangement.
            </p>
            <p>
              We reserve the right to decline service inquiries at our discretion.
            </p>

            <h3>6. User Submissions</h3>
            <p>If you submit information through our website, forms, chatbot, or scheduling tools, you represent that:</p>
            <ul>
              <li>the information is accurate to the best of your knowledge</li>
              <li>you have the right to share it</li>
              <li>it does not violate any law or third-party rights</li>
            </ul>
            <p>
              You should avoid sending highly sensitive financial documents unless and until we instruct you to do so through an approved process.
            </p>

            <h3>7. Scheduling and Communications</h3>
            <p>
              If you use our consultation request form, chatbot, or scheduling tools, you agree that we may contact you by phone, email, or text message regarding your inquiry, scheduling, or services, subject to applicable law and your communication preferences.
            </p>

            <h3>8. Third-Party Tools</h3>
            <p>
              Our website may use or link to third-party tools and services, including scheduling software, embedded chat, forms, payment tools, analytics, and other business software. We are not responsible for the performance, availability, or policies of third-party services.
            </p>

            <h3>9. Intellectual Property</h3>
            <p>
              All website content, including text, branding, logos, graphics, page design, and original materials, is owned by or licensed to Dietz Bookkeeping and may not be copied, reproduced, distributed, or used without permission, except for normal personal, non-commercial website use.
            </p>

            <h3>10. Reviews and Feedback</h3>
            <p>
              If you submit feedback or reviews, you agree that we may use them for business purposes, subject to applicable law. Nothing in these Terms is intended to prohibit honest consumer reviews; the FTC notes that businesses may not use standard contract terms to penalize honest customer reviews.
            </p>

            <h3>11. Disclaimer of Warranties</h3>
            <p>
              This website and its content are provided on an “as is” and “as available” basis. To the fullest extent permitted by law, we disclaim warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
            <p>
              We do not guarantee that the website will always be available, error-free, secure, or free of harmful components.
            </p>

            <h3>12. Limitation of Liability</h3>
            <p>
              To the fullest extent permitted by law, Dietz Bookkeeping shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the website or reliance on its content.
            </p>
            <p>
              Our total liability for any claim related to website use shall not exceed the amount, if any, you paid directly to us for the specific website-related interaction giving rise to the claim.
            </p>

            <h3>13. Indemnification</h3>
            <p>
              You agree to defend, indemnify, and hold harmless Dietz Bookkeeping from claims, liabilities, damages, losses, and expenses arising from your misuse of the website, your violation of these Terms, or your violation of any law or rights of a third party.
            </p>

            <h3>14. Governing Law</h3>
            <p>
              These Terms are governed by the laws of the State of Florida, without regard to conflict of law principles.
            </p>

            <h3>15. Disputes</h3>
            <p>
              Any dispute arising from these Terms or your use of the website shall be brought in the appropriate state or federal courts located in Florida, unless otherwise required by law.
            </p>

            <h3>16. Changes to These Terms</h3>
            <p>
              We may update these Terms from time to time. Updated Terms will be posted on this page with a revised effective date. Continued use of the website after changes are posted means you accept the revised Terms.
            </p>

            <h3>17. Contact Us</h3>
            <p>If you have questions about these Terms, contact:</p>
            <address className="not-italic">
              <strong>Dietz Bookkeeping</strong><br />
              7506 Bolanos ct, Tampa, FL 33615<br />
              bryand@dietzbookkeeping.com<br />
              813-419-3475<br />
              www.dietzbookkeeping.com
            </address>
          </div>
        </div>
        
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServiceModal;
