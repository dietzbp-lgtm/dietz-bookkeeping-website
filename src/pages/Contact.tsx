import React from 'react';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin } from 'lucide-react';
import { InlineWidget } from 'react-calendly';

const Contact = () => {
  return (
    <Layout>
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-600">
              Ready to streamline your finances? Schedule a free consultation below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm text-blue-600">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Phone</p>
                      <a href="tel:+18134193475" className="text-slate-600 hover:text-blue-600 transition-colors">813-419-3475</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm text-blue-600">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Email</p>
                      <a href="mailto:bryand@dietzbookkeeping.com" className="text-slate-600 hover:text-blue-600 transition-colors">bryand@dietzbookkeeping.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm text-blue-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Office</p>
                      <p className="text-slate-600">7506 Bolanos ct<br />Tampa, FL 33615</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-900 text-white p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex justify-between"><span>Monday - Friday</span> <span>9:00 AM - 5:00 PM</span></li>
                  <li className="flex justify-between"><span>Saturday</span> <span>By Appointment</span></li>
                  <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
                </ul>
              </div>
            </div>

            {/* Forms Section */}
            <div className="space-y-12">
              {/* Primary: Jotform */}
              <div id="estimate" className="scroll-mt-24 bg-white rounded-3xl shadow-xl border border-slate-100 p-4 sm:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
                  Get Your Books Cleaned Up & Back on Track
                </h2>
                <div className="w-full h-[800px] rounded-xl overflow-hidden">
                  <iframe
                    src="https://form.jotform.com/260844540670053"
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    title="Contact Form"
                    scrolling="yes"
                  />
                </div>
              </div>

              {/* Secondary: Calendly */}
              <div id="schedule" className="scroll-mt-24 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                <div className="p-8 pb-0 text-center">
                  <h3 className="text-2xl font-bold text-slate-900">Prefer to schedule a call?</h3>
                </div>
                <div className="h-[700px]">
                  <InlineWidget 
                    url="https://calendly.com/dietzbookkeeping/30min" 
                    styles={{ height: '100%', width: '100%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
