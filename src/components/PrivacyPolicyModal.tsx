import React from 'react';
import { X } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900">Privacy Policy</h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 sm:p-8 overflow-y-auto">
          <div className="prose prose-slate max-w-none">
            <p className="font-medium"><strong>Privacy Policy for Dietz Bookkeeping</strong></p>
            <p className="text-sm text-slate-500">Effective Date: 01/01/2024</p>

            <p>
              Dietz Bookkeeping (“Dietz Bookkeeping,” “we,” “us,” or “our”) respects your privacy and is committed to protecting the personal information you share with us through our website, forms, chatbot, scheduling tools, and other communications.
            </p>

            <p>
              This Privacy Policy explains what information we collect, how we use it, when we may share it, and the choices available to you.
            </p>

            <h3>1. Information We Collect</h3>
            <p>We may collect the following types of information:</p>

            <h4>Information you provide directly</h4>
            <p>When you contact us, fill out a form, schedule a consultation, use our chatbot, or otherwise communicate with us, we may collect information such as:</p>
            <ul>
              <li>your name</li>
              <li>phone number</li>
              <li>email address</li>
              <li>business name</li>
              <li>information about your bookkeeping needs</li>
              <li>records or details you choose to provide regarding your business finances</li>
            </ul>

            <h4>Information collected automatically</h4>
            <p>When you visit our website, we may automatically collect certain technical information, including:</p>
            <ul>
              <li>IP address</li>
              <li>browser type</li>
              <li>device type</li>
              <li>pages viewed</li>
              <li>referring website</li>
              <li>date and time of visits</li>
              <li>general usage information through cookies, analytics tools, or similar technologies</li>
            </ul>

            <h4>Information from third-party tools</h4>
            <p>
              We may receive information through third-party services we use to operate our business, such as website hosting, scheduling tools, chatbot providers, payment processors, email platforms, form builders, analytics providers, and related software.
            </p>

            <h3>2. How We Use Information</h3>
            <p>We may use your information to:</p>
            <ul>
              <li>respond to inquiries and provide customer support</li>
              <li>schedule consultations and communicate with you</li>
              <li>evaluate your bookkeeping needs</li>
              <li>provide bookkeeping and related support services</li>
              <li>send service-related messages and follow-ups</li>
              <li>improve our website, chatbot, services, and marketing</li>
              <li>maintain records and protect against fraud, misuse, or security issues</li>
              <li>comply with legal, regulatory, tax, and contractual obligations</li>
            </ul>

            <h3>3. How We Share Information</h3>
            <p><strong>We do not sell your personal information.</strong></p>
            <p>We may share information in the following circumstances:</p>
            <ul>
              <li>with service providers that help us operate our business, such as hosting, scheduling, forms, email, analytics, chatbot, and software vendors</li>
              <li>with professional advisors such as attorneys, accountants, or insurers when reasonably necessary</li>
              <li>if required by law, subpoena, court order, or legal process</li>
              <li>to protect our rights, property, security, clients, or others</li>
              <li>in connection with a business transfer, sale, merger, or restructuring</li>
            </ul>

            <h3>4. Cookies and Analytics</h3>
            <p>
              Our website may use cookies, analytics tools, and similar technologies to understand site traffic, improve user experience, and support website functionality.
            </p>
            <p>
              You can usually adjust your browser settings to refuse cookies or alert you when cookies are being used. Some site features may not function properly if cookies are disabled.
            </p>

            <h3>5. Marketing Communications</h3>
            <p>
              If you provide your contact information, we may contact you regarding your inquiry, services, scheduling, reminders, and related business communications.
            </p>
            <p>
              If we send marketing emails, you may opt out using the unsubscribe link in the email. The FTC’s CAN-SPAM rules require businesses to provide recipients a way to stop receiving marketing emails.
            </p>

            <h3>6. Data Security</h3>
            <p>
              We take reasonable administrative, technical, and physical measures to protect personal information from unauthorized access, use, disclosure, or loss. Florida law requires covered entities to take reasonable measures to protect personal information in electronic form.
            </p>
            <p>
              However, no method of internet transmission or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>

            <h3>7. Data Retention</h3>
            <p>We retain information for as long as reasonably necessary to:</p>
            <ul>
              <li>provide services</li>
              <li>respond to inquiries</li>
              <li>maintain business records</li>
              <li>comply with legal, tax, accounting, and regulatory obligations</li>
              <li>resolve disputes and enforce agreements</li>
            </ul>

            <h3>8. Third-Party Links and Services</h3>
            <p>
              Our website may contain links to third-party websites or integrate third-party services such as scheduling tools, chat tools, embedded forms, or video platforms. We are not responsible for the privacy practices of third parties. We encourage you to review their privacy policies.
            </p>

            <h3>9. Children’s Privacy</h3>
            <p>
              Our website and services are intended for adults and business use. We do not knowingly collect personal information from children under 13.
            </p>

            <h3>10. Your Choices</h3>
            <p>You may contact us to:</p>
            <ul>
              <li>request access to information you provided to us</li>
              <li>ask us to update or correct your information</li>
              <li>request deletion of information, subject to legal or business recordkeeping needs</li>
              <li>opt out of marketing communications</li>
            </ul>
            <p>To make a request, contact us at:</p>
            <address className="not-italic">
              <strong>Dietz Bookkeeping</strong><br />
              7506 Bolanos ct, Tampa, FL 33615<br />
              bryand@dietzbookkeeping.com<br />
              813-419-3475<br />
              www.dietzbookkeeping.com
            </address>

            <h3>11. Changes to This Privacy Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of our website or services after changes are posted means you accept the updated policy.
            </p>

            <h3>12. Contact Us</h3>
            <p>If you have questions about this Privacy Policy, contact us at:</p>
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

export default PrivacyPolicyModal;
