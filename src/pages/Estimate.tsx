import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import InquiryForm from '../components/InquiryForm';

export default function Estimate() {
  return <Layout>
    <section className="bg-gradient-to-b from-slate-50 via-blue-50/40 to-white pt-12 pb-10 sm:pt-16 sm:pb-12">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-blue-700 mb-4">Get a personalized estimate</p>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-5">Bookkeeping support built around your business.</h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">Tell us what you need, from monthly bookkeeping to catching up on past records. We'll review your information and follow up with the next steps.</p>
      </div>
    </section>
    <section className="bg-white pb-16 sm:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <InquiryForm kind="estimate" />
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600">Would you rather speak with us first? <Link to="/schedule" className="text-blue-700 font-semibold underline underline-offset-4">Schedule a free consultation</Link>.</p>
        </div>
      </div>
    </section>
  </Layout>;
}
