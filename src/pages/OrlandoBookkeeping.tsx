import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, ClipboardCheck, Files, MonitorCheck, ReceiptText, CalendarDays, Building2 } from 'lucide-react';
import Layout from '../components/Layout';

const focusAreas = [
  {
    heading: 'Cleaning teams and property turnover',
    text: 'A cleaning company serving homes, vacation properties or commercial sites may receive deposits from several sources. A useful bookkeeping routine separates customer invoices, platform or processor fees, supplies and crew-related expenses so they can be reviewed.',
    href: '/bookkeeping-for-cleaning-businesses',
    label: 'Bookkeeping for cleaning companies'
  },
  {
    heading: 'Contractors and home-service businesses',
    text: 'For a handyman, repair or contracting company, job deposits can arrive well before materials are purchased or final invoices are paid. Organizing vendor purchases, customer payments and outstanding invoices helps the owner investigate what each job cost.',
    href: '/bookkeeping-for-contractors',
    label: 'Bookkeeping for contractors'
  },
  {
    heading: 'Real estate professionals',
    text: 'An agent or independent real estate professional may see uneven commission deposits throughout the year. Consistent bookkeeping can make it easier to review business advertising, brokerage statements and recurring operating expenses between closings.',
    href: '/bookkeeping-for-real-estate-agents',
    label: 'Bookkeeping for real estate agents'
  }
];

const situations = [
  {
    heading: 'A busy month with several payment channels',
    text: 'A service company takes card deposits, ACH payments and occasional checks. We can discuss how to match bank activity to recorded sales and account for documented processing fees so income is not accidentally counted twice.'
  },
  {
    heading: 'A seasonal slowdown after a busy stretch',
    text: 'For businesses affected by visitor demand or shifting work schedules, comparing monthly income and expenses can help identify recurring costs and open invoices before decisions are made about the next season.'
  },
  {
    heading: 'A prior-year backlog before meeting a tax preparer',
    text: 'An owner finds several months of uncategorized activity. We start by reviewing the missing periods, statements and software file, then discuss a scoped cleanup project before any ongoing monthly service.'
  }
];

const process = [
  { heading: 'Talk through your Orlando business', text: 'Share what your business does, the software you use, your approximate transaction volume, number of accounts and whether any periods are behind. We discuss what is practical within a proposed scope.' },
  { heading: 'Arrange appropriate remote access', text: 'Where supported, use accountant or invited-user access instead of sharing banking or software passwords. We agree on secure document handling and the information needed from you.' },
  { heading: 'Review the work and open questions', text: 'The agreed services may include transaction organization, reconciliations, reports or historical cleanup. We identify missing records and discuss questions without promising a fixed result before inspecting the books.' }
];

const checklist = [
  'Which accounting software you use, if any, and the last month fully reconciled',
  'An estimate of monthly business transactions and the number of bank or card accounts',
  'Whether you invoice customers, receive processor deposits or work through platforms',
  'Any known bookkeeping backlog, payroll-provider reports or unusual account balances'
];

const faqs = [
  {
    question: 'Does Dietz Bookkeeping have an Orlando office?',
    answer: 'No. Dietz Bookkeeping is based in Tampa, Florida. We support small businesses in Orlando and across the United States remotely. In-person meetings, when available, are arranged at the Tampa location by appointment.'
  },
  {
    question: 'How can you help an Orlando cleaning or vacation-property service?',
    answer: 'We can discuss how your existing system records recurring cleaning visits, turnover jobs, deposits, supplies and related expenses. The specific reports or invoicing work included depend on your records, software and agreed scope.'
  },
  {
    question: 'Do I have to switch to QuickBooks?',
    answer: 'Not necessarily. Tell us which software you use. We will discuss whether we can work within your existing setup and whether an access change or migration needs to be quoted separately.'
  },
  {
    question: 'What if my bookkeeping is several months behind?',
    answer: 'We first assess the backlog, source statements and affected accounts. Historical cleanup is scoped separately from ongoing monthly bookkeeping, and timelines depend on the information available.'
  },
  {
    question: 'Can you prepare taxes or guarantee a certain business result?',
    answer: 'We provide bookkeeping support according to the agreed scope. Tax-return filing, tax advice and deduction decisions belong with a qualified tax professional; bookkeeping and financial projections do not guarantee tax, profit or cash-flow outcomes.'
  }
];

export default function OrlandoBookkeeping() {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-slate-600">
              <li><Link to="/" className="hover:text-blue-700 underline-offset-4 hover:underline">Home</Link></li>
              <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-slate-400" aria-hidden="true" /><Link to="/service-areas" className="hover:text-blue-700 underline-offset-4 hover:underline">Service Areas</Link></li>
              <li className="flex items-center gap-2 text-slate-900 font-semibold" aria-current="page"><ChevronRight className="w-4 h-4 text-slate-400" aria-hidden="true" />Orlando, Florida</li>
            </ol>
          </nav>
          <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,.9fr)] gap-10 lg:gap-14 items-center">
            <div>
              <p className="font-bold text-sm tracking-widest text-blue-700 mb-5">ORLANDO BUSINESS OWNERS · REMOTE BOOKKEEPING</p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.3rem] leading-[1.1] font-bold tracking-tight text-slate-900 mb-6">Online Bookkeeping for <span className="text-blue-700">Orlando Small Businesses</span></h1>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">Need a clearer view of invoices, business expenses and bank balances without traveling to a bookkeeper? Dietz Bookkeeping works with Orlando-area small businesses remotely from Tampa, with monthly bookkeeping, account reconciliation and historical cleanup available according to your needs.</p>
              <p className="text-slate-600 leading-relaxed mb-7">Work directly with Bryan Dietz, a bookkeeper with firsthand experience running cleaning and handyman businesses. We start with your real records and discuss what help makes sense before proposing a scope.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/schedule" className="inline-flex justify-center items-center gap-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3.5">Schedule a Free Consultation <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
                <Link to="/estimate" className="inline-flex justify-center items-center rounded-xl border border-slate-300 bg-white hover:border-blue-600 font-semibold text-slate-800 px-6 py-3.5">Request a Bookkeeping Estimate</Link>
              </div>
              <p className="text-sm text-slate-600 mt-5"><strong>Location clarity:</strong> Tampa-based business · Orlando clients served remotely · No Orlando office</p>
            </div>
            <div className="grid sm:grid-cols-[1.12fr_.88fr] lg:grid-cols-1 gap-4 items-stretch">
              <div className="relative overflow-hidden rounded-3xl bg-slate-100 shadow-xl shadow-slate-200/70 border border-slate-200">
                <img src="/images/industry-cleaning-photo.webp" alt="Professional cleaner at work in a kitchen" width={960} height={1200} fetchPriority="high" loading="eager" decoding="async" className="w-full h-[310px] sm:h-[420px] lg:h-[390px] object-cover" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent p-6 pt-24 text-white">
                  <p className="text-sm font-semibold tracking-wide">BUSINESS BOOKKEEPING</p>
                  <p className="text-2xl font-bold mt-1">Designed around your actual records</p>
                </div>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-sm">
                <p className="font-semibold text-slate-900 mb-2">No trip to Tampa required</p>
                <p className="text-sm text-slate-600 leading-relaxed">Consultations, file access and routine follow-up can be handled remotely, with clear responsibilities for sharing documents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-7 grid sm:grid-cols-3 gap-6">
          {[
            'Owner-operated service businesses',
            'Monthly records and catch-up work',
            'Remote support from Tampa'
          ].map(label => <div key={label} className="flex items-center gap-3 font-semibold text-slate-800"><CheckCircle2 className="h-5 w-5 text-blue-700 shrink-0" aria-hidden="true" />{label}</div>)}
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white" aria-labelledby="orlando-context">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-[minmax(0,1.25fr)_minmax(250px,.75fr)] gap-8 lg:gap-14 items-center">
            <div>
              <p className="text-sm font-bold tracking-wider text-blue-700 mb-3">WHY THESE WORKFLOWS MATTER IN CENTRAL FLORIDA</p>
              <h2 id="orlando-context" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">Orlando's visitor economy creates different bookkeeping questions</h2>
              <p className="text-lg leading-relaxed text-slate-700 mb-5">Orlando is known for visitor activity, but that activity also supports independent cleaning teams, property-service providers, repair companies and real estate professionals. Some businesses have repeating customers; others have busy seasons, project deposits or irregular payment cycles. Their bookkeeping should reflect the transactions they actually handle—not assumptions about how a typical Orlando company operates.</p>
              <p className="text-slate-700 leading-relaxed mb-4">For context, <a className="font-semibold text-blue-700 underline underline-offset-4" href="https://www.visitorlando.org/media/press-releases/post/orlando-welcomed-record-767-million-visitors-in-2025-remaining-most-visited-destination-in-the-us/" target="_blank" rel="noopener noreferrer">Visit Orlando reported 76.7 million visitors in 2025</a>. That regional activity is one reason we discuss invoice timing, processor fees, seasonal expenses and outstanding balances with service-business owners—not a claim that we work with any particular attraction, hotel or local customer.</p>
            </div>
            <aside className="rounded-3xl bg-blue-50 border border-blue-100 p-8">
              <Building2 className="w-9 h-9 text-blue-700 mb-5" aria-hidden="true" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">A local-market focus, not a local office</h3>
              <p className="text-slate-700 leading-relaxed">Whether you're in Orlando, Winter Park, Lake Nona or another Central Florida community, the service is remote. Bryan works from Tampa. We do not claim an Orlando storefront, local staff or onsite visits.</p>
              <Link to="/service-areas" className="inline-flex mt-5 font-semibold text-blue-700 underline underline-offset-4">How nationwide service works <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" /></Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50" aria-labelledby="orlando-industries">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-9">
            <p className="text-sm font-bold tracking-wider text-blue-700 mb-3">BOOKKEEPING QUESTIONS BY BUSINESS MODEL</p>
            <h2 id="orlando-industries" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">Common situations for Orlando-area service owners</h2>
            <p className="text-lg text-slate-700">These are examples of record-keeping needs, not stories about our clients. Each business's software, financial accounts and service agreement determine the actual work.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => {
              const Icon = [ReceiptText, ClipboardCheck, Building2][index];
              return <article key={area.heading} className="rounded-3xl bg-white border border-slate-200 p-7 shadow-sm flex flex-col">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-100 mb-5"><Icon className="w-6 h-6 text-blue-700" aria-hidden="true" /></span>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{area.heading}</h3>
                <p className="text-slate-700 leading-relaxed mb-6 flex-1">{area.text}</p>
                <Link to={area.href} className="font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-900">{area.label} <ArrowRight className="w-4 h-4 inline" aria-hidden="true" /></Link>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white" aria-labelledby="orlando-scenarios">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 id="orlando-scenarios" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">When a small-business owner might need help</h2>
          <p className="text-lg text-slate-700 max-w-3xl mb-10">You do not need to know exactly which bookkeeping service you need before your first conversation. Here are three issues to discuss.</p>
          <div className="grid lg:grid-cols-3 gap-6">
            {situations.map((s, index) => (
              <article className="border border-slate-200 rounded-2xl p-6" key={s.heading}>
                <span className="text-sm font-bold text-blue-700">SITUATION {index + 1}</span>
                <h3 className="text-xl font-bold text-slate-900 my-3">{s.heading}</h3>
                <p className="text-slate-700 leading-relaxed">{s.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-slate-700">Explore <Link to="/monthly-bookkeeping" className="font-semibold text-blue-700 underline underline-offset-4">monthly bookkeeping</Link>, <Link to="/tampa-bank-reconciliation" className="font-semibold text-blue-700 underline underline-offset-4">account reconciliation</Link>, or <Link to="/tampa-cleanup-bookkeeping" className="font-semibold text-blue-700 underline underline-offset-4">catch-up bookkeeping</Link>. Those services are offered remotely to Orlando businesses even when a service URL references our Tampa home base.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-blue-50" aria-labelledby="orlando-workflow">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-[.92fr_1.08fr] gap-10 items-center">
            <div>
              <p className="text-sm font-bold tracking-wider text-blue-700 mb-3">GETTING STARTED</p>
              <h2 id="orlando-workflow" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">How remote bookkeeping works from Orlando</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">The process begins with a conversation about your bookkeeping file, not an automated one-size-fits-all quote. We confirm the requested services, access method and records before work starts.</p>
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-blue-100">
                <MonitorCheck className="w-9 h-9 text-blue-700 mb-3" aria-hidden="true" />
                <p className="font-semibold text-slate-900 mb-2">Secure access matters</p>
                <p className="text-sm text-slate-700 leading-relaxed">Please do not put bank logins, accounting passwords, Social Security numbers or employee records in an estimate form. We arrange suitable document sharing during onboarding.</p>
              </div>
            </div>
            <ol className="space-y-5">
              {process.map((step, index) => (
                <li key={step.heading} className="bg-white rounded-2xl border border-blue-100 p-6 flex gap-5">
                  <span className="w-10 h-10 rounded-full bg-blue-700 text-white shrink-0 flex items-center justify-center font-bold">{index + 1}</span>
                  <div><h3 className="text-xl font-bold text-slate-900 mb-2">{step.heading}</h3><p className="text-slate-700 leading-relaxed">{step.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white" aria-labelledby="orlando-checklist">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <Files className="w-10 h-10 text-blue-700 mb-5" aria-hidden="true" />
            <h2 id="orlando-checklist" className="text-3xl font-bold text-slate-900 mb-5">What to bring to a first bookkeeping conversation</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">You can describe these details without uploading statements or sensitive records. They're enough to help us understand the size and condition of the work before putting together a proposal.</p>
            <Link to="/estimate" className="inline-flex gap-2 items-center font-semibold text-blue-700 underline underline-offset-4">Request a personalized estimate <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
          </div>
          <ul className="space-y-4">
            {checklist.map((item) => <li key={item} className="rounded-2xl bg-slate-50 border border-slate-200 p-5 flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-1" aria-hidden="true" /><span className="text-slate-800">{item}</span></li>)}
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50" aria-labelledby="orlando-faq">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 id="orlando-faq" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Orlando bookkeeping: common questions</h2>
          <p className="text-slate-700 leading-relaxed mb-8">The answers below explain how we work with Orlando-area businesses and clarify responsibilities before an engagement begins.</p>
          <div className="border-y border-slate-200 divide-y divide-slate-200">
            {faqs.map(faq => <details key={faq.question} className="py-5"><summary className="cursor-pointer font-semibold text-slate-900">{faq.question}</summary><p className="mt-3 text-slate-700 leading-relaxed">{faq.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="text-sm font-bold tracking-wider text-sky-300 mb-3">READY TO DISCUSS YOUR BOOKS?</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Orlando business, Tampa-based bookkeeper.</h2>
            <p className="text-slate-300 text-lg leading-relaxed">Talk directly with Bryan about your current records and the bookkeeping support you need. No claim of an Orlando office, and no obligation to choose a service before you speak with us.</p>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/schedule" className="bg-white text-slate-900 hover:bg-blue-50 px-6 py-3.5 rounded-xl font-bold text-center inline-flex justify-center items-center gap-2"><CalendarDays className="w-5 h-5" aria-hidden="true" /> Book Your Consultation</Link>
            <Link to="/contact" className="px-6 py-3.5 border border-slate-600 hover:border-white rounded-xl text-center font-semibold">Contact Dietz Bookkeeping</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
