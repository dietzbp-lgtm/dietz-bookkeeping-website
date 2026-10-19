import Layout from '../components/Layout';
import { InlineWidget } from 'react-calendly';
import { Link } from 'react-router-dom';

const calendarUrl = 'https://calendly.com/dietzbookkeeping/30min';

export default function Schedule() {
  return <Layout>
    <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
        <p className="text-sm font-bold tracking-wide text-blue-700 mb-3">FREE INTRODUCTORY CALL</p>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-5">Schedule a free bookkeeping consultation</h1>
        <p className="text-lg text-slate-600">Choose a time for a 30-minute conversation about your bookkeeping needs. Meet remotely from anywhere in the United States.</p>
      </div>
    </section>
    <section className="bg-white pb-16 sm:pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-sm">
          <InlineWidget url={calendarUrl} styles={{ height: '780px', width: '100%', minWidth: '0' }} />
        </div>
        <p className="text-center text-sm text-slate-600 mt-6">
          Having trouble with the calendar? <a href={calendarUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold underline">Open Calendly in a new tab</a>.
        </p>
        <p className="text-center text-sm text-slate-600 mt-4">Prefer to describe your project first? <Link to="/estimate" className="text-blue-700 underline font-semibold">Request an estimate</Link>.</p>
      </div>
    </section>
  </Layout>;
}
