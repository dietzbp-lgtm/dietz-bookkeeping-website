import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import InquiryForm from '../components/InquiryForm';

export default function Contact() {
  const { hash } = useLocation();
  const navigate = useNavigate();

  // Preserve old /contact#schedule and /contact#estimate links from search and bookmarks.
  useEffect(() => {
    if (hash === '#schedule') navigate('/schedule', { replace: true });
    if (hash === '#estimate') navigate('/estimate', { replace: true });
  }, [hash, navigate]);

  return <Layout>
    <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
        <p className="font-bold text-sm text-blue-700 tracking-wide mb-4">GET IN TOUCH</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-5">Let's talk about your books.</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Get practical bookkeeping support from Tampa, Florida, serving small businesses nationwide. Choose the next step that works for you.</p>
      </div>
    </section>
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-9 flex flex-col">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Book a free consultation</h2>
          <p className="text-slate-600 leading-relaxed mb-7 flex-1">Choose a convenient time for a 30-minute conversation about your bookkeeping goals and how we can help.</p>
          <Link to="/schedule" className="inline-block rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3.5 font-semibold">Schedule a call</Link>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-9 flex flex-col">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Request an estimate</h2>
          <p className="text-slate-600 leading-relaxed mb-7 flex-1">Share a few details about your business, accounts, and the type of support you need to get a personalized quote.</p>
          <Link to="/estimate" className="inline-block rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-900 text-center px-6 py-3.5 font-semibold">Start estimate request</Link>
        </div>
      </div>
    </section>
    <section className="bg-white py-12 sm:py-16"><div className="max-w-4xl mx-auto px-5 sm:px-6"><h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Send us a message</h2><p className="text-slate-600 mb-7">For general questions, use this short form. For a customized bookkeeping quote, please use the estimate page.</p><InquiryForm kind="contact" /></div></section>
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 grid sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200"><h2 className="font-bold text-lg mb-3">Call Bryan</h2><a href="tel:+18134193475" className="text-blue-700 hover:underline">813-419-3475</a></div>
        <div className="bg-white rounded-xl p-6 border border-slate-200 min-w-0"><h2 className="font-bold text-lg mb-3">Email</h2><a href="mailto:bryand@dietzbookkeeping.com" className="text-blue-700 hover:underline break-words">bryand@dietzbookkeeping.com</a></div>
        <div className="bg-white rounded-xl p-6 border border-slate-200"><h2 className="font-bold text-lg mb-3">Tampa appointments</h2><p className="text-slate-600">Home office visits are by appointment only. Please contact us before visiting.</p></div>
      </div>
    </section>
  </Layout>;
}
