import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const formUrl = 'https://form.jotform.com/260844540670053';

export default function Estimate() {
  return <Layout>
    <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
        <p className="text-sm font-bold tracking-wide text-blue-700 mb-3">PERSONALIZED BOOKKEEPING ESTIMATE</p>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-5">Request a bookkeeping estimate</h1>
        <p className="text-lg text-slate-600">Tell us a little about your business and what bookkeeping help you need. We review your scope before providing pricing.</p>
      </div>
    </section>
    <section className="bg-white pb-16 sm:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <p className="text-sm text-slate-600 text-center mb-5">For your security, do not include passwords, Social Security numbers, bank account details or financial documents in this inquiry.</p>
        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
          <iframe src={formUrl} title="Dietz Bookkeeping estimate request form" loading="lazy" className="w-full h-[1100px] sm:h-[1150px] border-0" />
        </div>
        <p className="text-center text-sm text-slate-600 mt-6">Form not loading? <a href={formUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">Open the questionnaire in a new tab</a>.</p>
        <p className="text-center text-sm text-slate-600 mt-4">Would you rather talk first? <Link to="/schedule" className="text-blue-700 underline font-semibold">Schedule a free consultation</Link>.</p>
      </div>
    </section>
  </Layout>;
}
