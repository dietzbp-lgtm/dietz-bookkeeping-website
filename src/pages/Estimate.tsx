import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import InquiryForm from '../components/InquiryForm';

export default function Estimate() {
  return <Layout>
    <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
        <p className="text-sm font-bold text-blue-700 tracking-wide mb-3">PERSONALIZED BOOKKEEPING ESTIMATE</p>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-5">Request a bookkeeping estimate</h1>
        <p className="text-lg text-slate-600">Tell us about your business and the support you need. We'll review your scope before providing pricing.</p>
      </div>
    </section>
    <section className="bg-white pb-16 sm:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <InquiryForm kind="estimate" />
        <p className="text-center text-sm text-slate-600 mt-6">Prefer to talk first? <Link to="/schedule" className="text-blue-700 underline font-semibold">Schedule a free consultation</Link>.</p>
      </div>
    </section>
  </Layout>;
}
