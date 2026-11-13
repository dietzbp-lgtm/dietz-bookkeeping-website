import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileText, Monitor, MessageCircle, RefreshCw, BarChart3, Star, Quote } from 'lucide-react';
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const primaryServices = [
  { title: 'Monthly bookkeeping', text: 'Keep transactions organized, accounts reconciled, and financial reports ready for your next decision.', link: '/monthly-bookkeeping/', label: 'Explore monthly bookkeeping', icon: BarChart3, Star, Quote },
  { title: 'Cleanup & catch-up', text: 'Behind on your books? Start with a review of your records and a practical plan to bring them up to date.', link: '/tampa-cleanup-bookkeeping/', label: 'Explore cleanup services', icon: RefreshCw },
];

const googleQuickBooksReviews = [
  {
    name: 'Poliane Navarro',
    date: 'March 6, 2025',
    focus: 'QuickBooks setup & reporting',
    summary: 'Described personalized QuickBooks setup, clear explanations of each step, and guidance for understanding business reports.'
  },
  {
    name: 'Idany Ruiz',
    date: 'March 5, 2025',
    focus: 'QuickBooks consulting',
    summary: 'Highlighted chart-of-accounts improvements, a more organized invoicing process, corrected errors, and clearer financial reporting.'
  },
  {
    name: 'Joice Kelly',
    date: 'March 4, 2025',
    focus: 'QuickBooks training',
    summary: 'Praised patient, step-by-step QuickBooks instruction covering reports, expenses, and reconciliation with a focus on building confidence.'
  }
];

const googleMapsReviewsUrl = 'https://www.google.com/maps/search/?api=1&query=Dietz+Bookkeeping&query_place_id=ChIJqw1AUmrrwogRvadgtkjixu0';

export default function Home() {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold tracking-wide text-blue-700 mb-5">BASED IN TAMPA · SERVING BUSINESSES NATIONWIDE</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.35rem] font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">Monthly bookkeeping for <span className="text-blue-600">growing service businesses.</span></h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-8">Keep accounts reconciled, expenses organized, and financial reports ready for decisions. Work directly with Bryan Dietz for monthly bookkeeping or catch-up support for your cleaning, contracting, or other small business.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/schedule/" className="bg-blue-600 text-white px-6 py-3.5 rounded-xl font-semibold text-center hover:bg-blue-700 transition-colors">Book a Free Consultation</Link>
              <Link to="/estimate/" className="bg-white text-slate-800 border border-slate-300 px-6 py-3.5 rounded-xl font-semibold text-center hover:bg-slate-50 transition-colors">Request an Estimate</Link>
            </div>
            <p className="text-sm text-slate-500 mt-5">Remote service across the U.S. · Local Tampa meetings by appointment</p>
          </div>
          <div className="max-w-md w-full mx-auto lg:ml-auto">
            <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl shadow-slate-200/60">
              <img src="/images/dietzbookeepingabout.webp" alt="Bryan Dietz, founder of Dietz Bookkeeping" width="800" height="800" decoding="async" className="w-full aspect-square object-cover" />
              <div className="p-5 sm:p-6"><p className="font-bold text-xl text-slate-900">Your business. Your bookkeeper.</p><p className="text-slate-600 mt-2">Meet Bryan Dietz — a fellow business owner with firsthand experience managing cleaning and handyman operations.</p><Link to="/about/" className="inline-flex items-center gap-2 text-blue-700 font-semibold mt-4">Get to know Bryan <ArrowRight className="w-4 h-4" /></Link></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 grid sm:grid-cols-3 gap-4">
          {['Real cleaning & handyman business experience', 'Work directly with Bryan', 'Tampa-based · Nationwide remote service'].map(text => <div key={text} className="flex gap-3 items-center text-slate-700 font-medium"><CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />{text}</div>)}
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mb-9"><p className="text-blue-700 font-semibold text-sm mb-3">START WHERE YOU ARE</p><h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Ongoing support or a fresh start.</h2><p className="text-lg text-slate-600">Whether your books need regular attention or some catching up, we’ll discuss your needs and define a clear scope.</p></div>
          <div className="grid md:grid-cols-2 gap-6">{primaryServices.map(item => <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-9"><item.icon className="w-8 h-8 text-blue-600 mb-5" /><h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3><p className="text-slate-600 leading-relaxed mb-6">{item.text}</p><Link to={item.link} className="inline-flex items-center gap-2 text-blue-700 font-semibold">{item.label}<ArrowRight className="w-4 h-4" /></Link></div>)}</div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div><h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">Bookkeeping grounded in real service-business experience.</h2><p className="text-lg text-slate-600 leading-relaxed mb-5">Bryan has managed cleaning and handyman businesses, so he understands the day-to-day work behind customer invoices, materials, operating expenses, and cash flow questions.</p><p className="text-slate-600 leading-relaxed">We support established owner-operated teams, independent professionals, and other small businesses throughout the United States.</p></div>
          <div className="grid sm:grid-cols-2 gap-4">{[
            { label: 'Cleaning businesses', url: '/bookkeeping-for-cleaning-businesses/' },
            { label: 'Handymen & contractors', url: '/bookkeeping-for-contractors/' },
            { label: 'Real estate agents', url: '/bookkeeping-for-real-estate-agents/' },
            { label: 'Independent professionals', url: '/monthly-bookkeeping/', action: 'Explore monthly bookkeeping' },
            { label: 'Other small businesses', url: '/services/', action: 'Browse bookkeeping services' }
          ].map(item => (
            <div key={item.label} className="p-6 rounded-2xl bg-white border border-slate-200">
              <CheckCircle2 className="h-5 w-5 text-blue-600 mb-3" />
              <h3 className="font-semibold text-slate-900">{item.label}</h3>
              {item.url && <Link to={item.url} className="inline-flex items-center gap-1 mt-3 text-sm text-blue-700 underline underline-offset-4 font-semibold">{item.action || 'Explore bookkeeping support'} <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link>}
            </div>
          ))}</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 sm:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Client Feedback & Reviews</h2>
            <p className="text-xl text-slate-600">
              What business owners say about working with Dietz Bookkeeping
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                name: 'Lissandra P.', 
                role: 'Dazzle by Lis (Cleaning Service)', 
                image: '/images/lissandra-p.webp',
                text: "Working with Dietz Bookkeeping has been an absolute game-changer for my cleaning service, Dazzle by Lis! As a small business owner, managing my books was always a challenge, but thanks to their personalized QuickBooks training, I now feel confident and empowered to handle my finances. The team took the time to explain everything in detail, walking me through the system step-by-step. I can now efficiently track expenses, invoicing, and payments, which has freed up more time to focus on growing my business. I can't recommend their services enough – they truly care about your success!" 
              },
              { 
                name: 'Nelson Silva', 
                role: 'Nsilva Construction Inc. (Construction Company)', 
                image: '/images/nelson-silva.webp',
                text: "We hired Dietz Bookkeeping for a much-needed cleanup of our company's financial records, and I am beyond impressed with the results. As a construction business, we deal with numerous invoices, contractors, and projects, so our books were a bit of a mess. The team at Dietz Bookkeeping took the time to carefully go through everything, correct discrepancies, and organize our financials in a way that makes sense. Their attention to detail was incredible, and I now feel much more confident about the state of our finances. Highly recommend their services for any business in need of bookkeeping help!" 
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl relative flex flex-col shadow-sm border border-slate-200">
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="text-slate-600 mb-8 text-sm leading-relaxed flex-grow">{testimonial.text}</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    loading="lazy"
                    width="48" height="48"
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-slate-100"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 text-blue-100">
                  <Quote className="h-10 w-10 fill-current" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8"><div className="max-w-2xl mb-10"><h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">A straightforward way to work together.</h2><p className="text-lg text-slate-600">You don’t have to be in Tampa to get personal support.</p></div><div className="grid md:grid-cols-3 gap-8">{[
          { icon: MessageCircle, title: '1. Tell us about your business', text: 'Start with a free consultation. We’ll discuss your accounts, current records, and the help you’re looking for.' },
          { icon: FileText, title: '2. Agree on the scope', text: 'We’ll review your needs and outline the work and pricing before you decide to move forward.' },
          { icon: Monitor, title: '3. Work together remotely', text: 'Coordinate access to your accounting software, share the records needed, and stay in touch as work progresses.' },
        ].map(item => <div key={item.title}><item.icon className="w-8 h-8 text-blue-600 mb-5" /><h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3><p className="text-slate-600 leading-relaxed">{item.text}</p></div>)}</div></div>
      </section>

      <section className="py-14 sm:py-20 bg-slate-50"><div className="max-w-7xl mx-auto px-5 sm:px-8"><h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Support for the details, too.</h2><p className="text-lg text-slate-600 max-w-2xl mb-9">Explore the services that can form part of your bookkeeping plan.</p><div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">{services.map(service => <ServiceCard key={service.id} title={service.title} description={service.description} icon={<service.icon className="h-6 w-6" />} link={service.slug} color="bg-blue-600" />)}</div></div></section>

      <section className="bg-white py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="rounded-2xl bg-blue-50 border border-blue-100 p-7 sm:p-9 flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Using QuickBooks Online for your business?</h2>
              <p className="text-slate-700">Explore personal support for QuickBooks Online transaction reviews, reconciliations, monthly reporting and catch-up bookkeeping.</p>
            </div>
            <Link to="/quickbooks-online-bookkeeping/" className="shrink-0 inline-flex justify-center items-center gap-2 rounded-xl bg-blue-600 text-white px-6 py-3.5 font-semibold hover:bg-blue-700">Explore QuickBooks bookkeeping <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>


      {/* Summaries of verified Google review screenshots; deliberately not verbatim quotes.
          The link opens the business's Google Maps listing, not a specific review.
          Individual "Share review" URLs can be added after owner provides them. */}
      <section className="bg-slate-50 py-14 sm:py-20" aria-labelledby="quickbooks-google-reviews-title">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-9">
            <p className="text-sm font-semibold tracking-wide text-blue-700 mb-3">QUICKBOOKS CLIENT FEEDBACK</p>
            <h2 id="quickbooks-google-reviews-title" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">What clients say about QuickBooks support</h2>
            <p className="text-lg text-slate-600 leading-relaxed">Three business owners shared their experiences with QuickBooks guidance and training on Google.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {googleQuickBooksReviews.map(review => (
              <article key={review.name} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <div className="flex gap-1 text-yellow-500 mb-5" aria-label="Rated 5 out of 5 stars on Google">
                  {[...Array(5)].map((_, i) => <Star key={i} aria-hidden="true" className="w-5 h-5 fill-current" />)}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{review.focus}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-3 flex-grow">{review.summary}</p>
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <p className="font-semibold text-slate-900">{review.name}</p>
                  <p className="text-sm text-slate-500">Google review · {review.date}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-7">
            <p className="text-sm text-slate-500 max-w-2xl">These are summaries of the reviewers' experiences, not direct quotations. Ratings and dates reflect the reviews shown on Google.</p>
            <a href={googleMapsReviewsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 font-semibold text-blue-700 hover:text-blue-800 underline underline-offset-4">
              See reviews on Google Maps <ArrowRight aria-hidden="true" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white"><div className="max-w-3xl mx-auto px-5 sm:px-8"><h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">A few questions before we talk.</h2><div className="divide-y divide-slate-200">{[
        ['Do I need to be in Florida?', 'No. Dietz Bookkeeping is based in Tampa and works remotely with small businesses across the United States. Local meetings are available by appointment.'],
        ['Can you help if my books are behind?', 'Yes. We can discuss cleanup and catch-up support. The scope depends on how much history needs attention and the condition of your records.'],
        ['How much does bookkeeping cost?', 'Pricing depends on your transaction volume, accounts, record condition, and services. Request an estimate so we can discuss the right scope for your business.'],
        ['Do you prepare my tax return?', 'Our tax preparation support focuses on organizing bookkeeping records for your tax professional. Tax return preparation is not included in that bookkeeping service.'],
      ].map(([question,answer]) => <details key={question} className="py-5"><summary className="cursor-pointer font-semibold text-lg text-slate-900 pr-5">{question}</summary><p className="mt-3 text-slate-600 leading-relaxed">{answer}</p></details>)}</div></div></section>

      <section className="py-14 sm:py-20 bg-slate-900 text-white"><div className="max-w-3xl mx-auto px-5 text-center"><h2 className="text-3xl sm:text-4xl font-bold mb-5">Let’s get your books working for you.</h2><p className="text-lg text-slate-300 mb-8">Tell us what you need help with. We’ll talk through a practical next step.</p><div className="flex flex-col sm:flex-row gap-3 justify-center"><Link to="/schedule/" className="rounded-xl bg-blue-600 px-6 py-3.5 font-semibold hover:bg-blue-500">Book a Free Consultation</Link><Link to="/estimate/" className="rounded-xl border border-slate-500 px-6 py-3.5 font-semibold hover:bg-slate-800">Request an Estimate</Link></div></div></section>
    </Layout>
  );
}
